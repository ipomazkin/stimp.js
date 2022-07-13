/**
 * @module lib/entities/DOMInteractModule
 */

import Module from "./Module";

/**
 * Stateful module with DOM auto selection
 */
export default class DOMInteractModule extends Module {
  constructor(...props) {
    super(...props);

    /** @type {string} */
    this.selectorModule = this.app.options.domSelectorModule;

    /** @type {string} */
    this.selectorPart = this.app.options.domSelectorChild;

    /** @type {string} */
    this.selectorIterable = this.app.options.domSelectorChildWithId;

    /**
     * @type {Object.<string, Element|Object<string, Element>>}
     */
    this.dom = {
      root: null,
    };

    /**
     * @type {boolean}
     */
    this.hasDOMBeenInited = false;

    /**
     * @type {function[]}
     */
    this.domHooksBeforeInit = [];

    /**
     * @type {function[]}
     */
    this.domHooksAfterInit = [];

    this.onInit(this.initDOM.bind(this)); // add init dom function to init hooks
  }

  /**
   * Init dom child
   * @param {Element} child
   * @private
   */
  _initDOMChild(child) {
    let name = child.getAttribute(this.selectorPart),
      i = child.getAttribute(this.selectorIterable);
    if ( i !== null ) {
      if ( this.dom[name] === undefined ) {
        this.dom[name] = {};
      }
      this.dom[name][i] = child;
    } else {
      this.dom[name] = child;
    }
  }

  /**
   * Make DOM selection
   */
  initDOM() {
    this.domHooksBeforeInit.forEach(hook => hook()); // run before hooks

    // select module root
    this.dom.root = document.querySelector(`[${this.selectorModule}=${this.name}]`);
    if (!this.dom.root) {
      this.hasDOMBeenInited = false;
      return;
    }

    let child = {},
      allChild = this.dom.root.querySelectorAll(`[${this.selectorPart}]`); // get all child

    // filter only child of this module
    for ( let i = 0, l = allChild.length; i < l; i++ ) {
      let current = allChild[i],
        filtered = false,
        isThisCp = false,
        startNode = current;

      while (!filtered) {
        let parentAttrValue = startNode.parentNode.getAttribute(this.selectorModule);
        if ( parentAttrValue !== null ) {
          filtered = true;
          isThisCp = parentAttrValue === this.name;
        } else {
          startNode = startNode.parentNode;
        }
      }

      if (isThisCp) {
        this._initDOMChild(current);
      }
    }

    this.hasDOMBeenInited = true;
    this.domHooksAfterInit.forEach(hook => hook()); // run after hooks
  }

  /**
   * Add before fom init function
   * @param {function} fn
   */
  onBeforeDomInit(fn) {
    this.domHooksBeforeInit.push(fn.bind(this));
  }

  /**
   * Add after fom init function
   * @param {function} fn
   */
  onAfterDomInit(fn) {
    this.domHooksAfterInit.push(fn.bind(this));
  }
}
