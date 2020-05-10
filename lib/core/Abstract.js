/**
 * Base class
 */
export default class Abstract {
  constructor() {
    /**
     * Entity name
     * @type {string}
     */
    this.name = '';
  }

  /**
   * Console log
   * @param args
   */
  log(...args) {
    console.log(`${this.name}:`, ...args);
  }

  /**
   * Log just for dev mode
   * @param args
   */
  debug(...args) {
    if ((this.options && this.options.isDebug) || (this.app && this.app.options && this.app.options.isDebug)) {
      this.log(...args);
    }
  }
}
