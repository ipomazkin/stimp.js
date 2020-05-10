import Module from "./Module";

/**
 * Module with dom auto selection
 */
export default class DOMInteractModule extends Module {
  constructor(...props) {
    super(...props);

    this.selectorModule = '-m';
    this.selectorPart = '-ch';
    this.selectorIterable = '-i';

    this.dom = {
      root: null,
    };

    this.isDOMHasBeenInit = false;

    this.domHooksBeforeInit = [];
    this.domHooksAfterInit = [];

    this.onInit(this.initDOM.bind(this));
  }

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

  initDOM() {
    this.domHooksBeforeInit.forEach(hook => hook());

    this.dom.root = document.querySelector(`[${this.selectorModule}=${this.name}]`);
    if (!this.dom.root) {
      this.isDOMHasBeenInit = false;
      return;
    }

    let child = {};
    let allChild = this.dom.root.querySelectorAll(`[${this.selectorPart}]`);

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

    this.isDOMHasBeenInit = true;
    this.domHooksAfterInit.forEach(hook => hook());
  }

  onBeforeDomInit(fn) {
    this.domHooksBeforeInit.push(fn.bind(this));
  }

  onAfterDomInit(fn) {
    this.domHooksAfterInit.push(fn.bind(this));
  }
}
