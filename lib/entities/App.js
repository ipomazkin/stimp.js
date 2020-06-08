/**
 * @module lib/entities/App.js
 */

import toposort from 'toposort';

import { ENTITY_TYPE_APP } from "../config";
import Entity from './Entity';
import Module from './Module';

import createStore from '../store';

/**
 * App base class
 */
export default class App extends Entity {
  /**
   * @param {string} name
   * @param {Object.<string, *>} options
   */
  constructor(name = '', options = {}) {
    super();

    /**
     * @type {{isDebug: boolean}}
     */
    this.options = {
      ...this.getDefaultOptions(),
      ...options,
    };

    /**
     * @type {{isDebug: boolean}}
     */
    this.meta = this.getMetaFromOptions();

    /**
     * @type {string}
     */
    this.name = name;

    /**
     * Modules
     * @type {Object.<string, Module>}
     */
    this.modules = {};

    /**
     * @type {?Store}
     */
    this.store = null;
  }

  /**
   * @return {EntityType}
   */
  getEntityType() {
    return ENTITY_TYPE_APP;
  }

  /**
   * Get app default options
   * @return {{isDebug: boolean, domSelectorModule: string, domSelectorChild: string, domSelectorChildWithId: string}}
   */
  getDefaultOptions() {
    return {
      isDebug: false,
      domSelectorModule: '-m',
      domSelectorChild: '-ch',
      domSelectorChildWithId: '-i',
    };
  }

  /**
   * Get meta fields from options
   * @return {{isDebug: boolean}}
   */
  getMetaFromOptions() {
    let { isDebug } = this.options;
    return {
      isDebug,
    }
  }

  /**
   * Sort modules by their dependents order
   * @param {Object.<string, Module>} modules
   * @returns {Module[]}
   * @private
   */
  static _sortModulesByDepends(modules = {}) {
    let out = [],
        graph = [],
        sortedNames;

    Object.keys(modules).forEach((key) => {
      let moduleEdges = modules[key]._getSortEdges();
      if (moduleEdges.length > 0) {
        graph = graph.concat(modules[key]._getSortEdges());
      } else {
        out.push(modules[key]);
      }
    });

    sortedNames = toposort(graph).reverse();
    sortedNames.forEach(key => out.push(modules[key]));

    return out.filter((value, index, self) => self.indexOf(value) === index);
  }

  /**
   * Add module to the app
   * @param {Function} constructorClass
   * @param {string} name - module name
   * @param {Object} initState
   * @param {string[]} depends
   * @returns {Module}
   */
  addModule(constructorClass, name, initState = {}, depends = []) {
    let module = new constructorClass(this, name, initState, depends);
    this.modules[name] = module;
    if (this.store === null) {
      this.store = createStore({
        [name]: module.reducer
      });
    } else {
      this.store.injectReducer(name, module.reducer);
    }
    return module;
  }

  /**
   * Init app
   */
  init() {
    let self = this;
    let modules = App._sortModulesByDepends(this.modules)
      .filter(m => m !== undefined)
      .filter(m => {
        let out = true;
        for (let i = 0; i < m.depends.length; i++) {
          if (self.modules[m.depends[i]] === undefined) {
            out = false;
            break;
          }
        }
        return out;
      });

    this.debug('Init modules.', modules);

    modules.forEach(m => {
      m.init();
    });
  }
}
