import Abstract from './Abstract';
import Module from './Module';
import toposort from 'toposort';

import createStore from '../store';

/**
 * App base class
 */
export default class App extends Abstract {
  constructor(name, options) {
    super();
    this.options = {
      isDebug: false,
      ...options,
    };
    this.name = name;
    this.modules = {};
    this.store = null;
  }

  /**
   * Sort modules by depends order
   * @param {Module} modules
   * @returns {Module[]}
   * @private
   */
  static _sortModulesByDepends(modules = {}) {
    let out = [],
        graph = [],
        sortedNames;

    for (let key in modules) {
      let moduleEdges = modules[key]._getSortEdges();

      if (moduleEdges.length > 0) {
        graph = graph.concat(modules[key]._getSortEdges());
      } else {
        out.push(modules[key]);
      }
    }

    sortedNames = toposort(graph).reverse().filter((value, index, self) => self.indexOf(value) === index);
    sortedNames.forEach(key => out.push(modules[key]));

    return out;
  }

  /**
   * Add module to the app
   * @param {Function} constructorClass
   * @param {string} name
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

    this.debug('init - modules', modules);

    modules.forEach(m => {
      self.debug('init - modules - module', m);
      m.init();
    });
  }
}
