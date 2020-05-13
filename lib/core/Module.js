import Abstract from './Abstract';

/**
 * Reducer action name
 * @type {string}
 */
const ACTION_TOGGLE_BULK = "ACTION_TOGGLE_BULK";

/**
 * Base module class
 */
export default class Module extends Abstract {
  constructor(app, name, initState, depends) {
    super();

    this.app = app;

    this.name = name;

    this.depends = depends;

    this.initState = initState;
    this.prevState = initState;

    this.utils = {};

    this.beforeUpdateHooks = {};
    this.afterUodateHooks = {};
    this.initHooks = [];

    this.reducer = (state = {...initState}, action) => {
      for (let key in initState) {
        if (action.type === `${app.name}/${name}/${key}`) {
          state[key] = action.value;
          return state;
        }
      }

      if (action.type === ACTION_TOGGLE_BULK && action.scope === `${this.app.name}/${this.name}`) {
        return  {
          ...state,
          ...action.nextState,
        };
      }

      return state;
    };

    for (let key in initState) {
      this[Module._getHandlerName(key, 'set')] = (value) => {
        this.app.store.dispatch({
          type: `${this.app.name}/${this.name}/${key}`,
          value
        });
      };

      this.beforeUpdateHooks[key] = [];
      this.afterUodateHooks[key] = [];
    }
  }

  static _getHandlerName(key, prefix = 'onSet') {
    key = key.charAt(0).toUpperCase() + key.slice(1);
    return `${prefix}${key}`;
  }

  _getSortEdges() {
    let out = [];

    if (this.depends.length > 0) {
      this.depends.forEach(d => out.push([this.name, d]));
    }

    return out;
  }

  _subscribeHandler() {
    let currentState = this.getState(),
        oldPrevState = {...this.prevState},
        newPrevState = {...currentState};

    for (let key in currentState) {
      if (currentState[key] !== oldPrevState[key]) {
        let handlerName = Module._getHandlerName(key, 'onUpdate');

        if (this.beforeUpdateHooks[key]) {
          this.beforeUpdateHooks[key].forEach(h => h(currentState[key], oldPrevState[key]));
        }

        if (this[handlerName] !== undefined) {
          this[handlerName].apply(this, [currentState[key], oldPrevState[key]]);
        }

        if (this.afterUodateHooks[key]) {
          this.afterUodateHooks[key].forEach(h => h(currentState[key], oldPrevState[key]));
        }
      }
    }

    this.prevState = newPrevState;
  }

  setState(nextState = {}) {
    this.app.store.dispatch({
      type: ACTION_TOGGLE_BULK,
      nextState,
      scope: `${this.app.name}/${this.name}`,
    });

    for (let key in nextState) {
      this.app.store.dispatch({
        type: `${this.app.name}/${this.name}/${key}`,
        value: nextState[key]
      });
    }
  }

  getState() {
    return this.app.store.getState()[this.name];
  }

  onBeforeUpdate(key, fn) {
    this.beforeUpdateHooks[key].push(fn.bind(this));
  }

  onAfterUpdate(key, fn) {
    this.afterUodateHooks[key].push(fn.bind(this));
  }

  onInit(fn) {
    this.initHooks.push(fn.bind(this));
  }

  init() {
    this.app.store.subscribe(() => {
      this._subscribeHandler();
    });

    this.initHooks.forEach(fn => {
      fn();
    });
  }
}
