/**
 * @module lib/entities/Module
 */

import Entity from './Entity';
import { ENTITY_TYPE_MODULE } from "../config";

/**
 * @typedef {string} ModuleName
 * @typedef {Object.<string, *>} ModuleState
 * @typedef {string} ModuleStateKey
 * @typedef {*} ModuleStateValue
 */

/**
 * Reducer action name
 * @type {string}
 */
const ACTION_TOGGLE_BULK = "ACTION_TOGGLE_BULK";

/**
 * Base module class
 * @description Always stateful
 */
export default class Module extends Entity {
  /**
   * @param {App} app
   * @param {ModuleName} name
   * @param {ModuleState} initState
   * @param {ModuleName[]} depends
   */
  constructor(app, name, initState = {}, depends = []) {
    super();

    /**
     * @type {App}
     */
    this.app = app;

    /**
     * @type {Object}
     */
    this.meta = {
      ...app.meta,
    };

    /**
     * @type {ModuleName}
     */
    this.name = name;

    /**
     * @type {ModuleName[]}
     */
    this.depends = depends;

    /**
     * @type {ModuleState}
     */
    this.initState = initState;

    /**
     * @type {ModuleState}
     */
    this.state = initState;

    /**
     * @type {ModuleState}
     */
    this.prevState = initState;

    /**
     * Pass module utils functions here
     * @type {Object.<string, function>}
     */
    this.utils = {};

    /**
     * Before update hooks for each state key
     * @type {Object.<ModuleStateKey, function[]>}
     */
    this.beforeUpdateHooks = {};

    /**
     * After update hooks for each state key
     * @type {Object.<ModuleStateKey, function[]>}
     */
    this.afterUpdateHooks = {};

    /**
     * On module init hooks
     * @type {function[]}
     */
    this.initHooks = [];

    /**
     * Redux reducer function
     * @param {ModuleState} state
     * @param {Object} action - redux action
     * @return {ModuleState}
     */
    this.reducer = (state = {...initState}, action) => {
      if (action.type === ACTION_TOGGLE_BULK && action.scope === `${this.app.name}/${this.name}`) {
        return  {
          ...state,
          ...action.nextState,
        };
      }
      return state;
    };

    /**
     * Prepare hooks keys
     */
    Object.keys(initState).forEach(key => {
      this.beforeUpdateHooks[key] = [];
      this.afterUpdateHooks[key] = [];
    });
  }

  /**
   * @param {ModuleStateKey} key
   * @param {string} prefix - handler prefix
   * @return {string}
   * @private
   */
  static _getHandlerName(key = '', prefix = 'onSet') {
    key = key.charAt(0).toUpperCase() + key.slice(1);
    return `${prefix}${key}`;
  }

  /**
   * @return {ModuleName[]}
   * @private
   */
  _getSortEdges() {
    let out = [];
    if (this.depends.length > 0) {
      this.depends.forEach(d => out.push([this.name, d]));
    }
    return out;
  }

  /**
   * Compare two values
   * @param {*} current
   * @param {*} prev
   * @return {boolean}
   * @private
   */
  _wasValueChanged(current, prev) {
    return current !== prev; // todo add deep comparing
  }

  /**
   * On store update handler
   * @private
   */
  _subscribeHandler() {
    let currentState = this.state,
        oldPrevState = {...this.prevState},
        newPrevState = {...currentState};

    Object.keys(currentState).forEach(key => {
      let prev = oldPrevState[key],
        current = currentState[key];
      // Check was value of key changed
      if (this._wasValueChanged(current, prev)) {
        // Run all hooks
        let handlerName = Module._getHandlerName(key, 'onUpdate');
        this.beforeUpdateHooks[key] && this.beforeUpdateHooks[key].forEach(h => h(current, prev));
        this[handlerName] && this[handlerName].apply(this, [current, prev]);
        this.afterUpdateHooks[key] && this.afterUpdateHooks[key].forEach(h => h(current, prev));
      }
    });

    this.prevState = newPrevState; // Update prev state
  }

  /**
   * @return {EntityType}
   */
  getEntityType() {
    return ENTITY_TYPE_MODULE;
  }

  /**
   * Update state
   * @param {ModuleState} nextState
   */
  setState(nextState = {}) {
    this.app.store.dispatch({
      type: ACTION_TOGGLE_BULK,
      nextState,
      scope: `${this.app.name}/${this.name}`,
    });
  }

  /**
   * Get module state
   * @return {ModuleState}
   */
  getState() {
    return this.app.store.getState()[this.name];
  }

  /**
   * Add before update hook
   * @param {ModuleStateKey} key
   * @param {function} fn
   */
  onBeforeUpdate(key, fn) {
    this.beforeUpdateHooks[key].push(fn.bind(this));
  }

  /**
   * Add after update hook
   * @param {ModuleStateKey} key
   * @param {function} fn
   */
  onAfterUpdate(key, fn) {
    this.afterUpdateHooks[key].push(fn.bind(this));
  }

  /**
   * Add on init hook
   * @param {function} fn
   */
  onInit(fn) {
    this.initHooks.push(fn.bind(this));
  }

  /**
   * Init the module
   */
  init() {
    this.app.store.subscribe(() => {
      this.state = this.getState();
      this._subscribeHandler();
    });

    this.debug('Init begin.');
    this.initHooks.forEach(fn => {
      fn();
    });
    this.debug('Init end.');
  }
}
