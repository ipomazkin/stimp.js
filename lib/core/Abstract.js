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
    if (process.env.NODE_ENV !== 'production') {
      this.log(...args);
    }
  }
}
