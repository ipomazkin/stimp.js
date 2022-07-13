/**
 * @module lib/entities/Entity
 */

import { ENTITY_TYPE_BASE } from "../config";

/**
 * Base entity class
 */
export default class Entity {
  constructor() {
    /**
     * Entity name
     * @type {string}
     */
    this.name = '';

    /**
     * @type {EntityType}
     */
    this.type = this.getEntityType();

    /**
     * Meta options for pass it everywhere
     * @type {{isDebug: boolean}}
     */
    this.meta = {
      /**
       * Is run debug code
       */
      isDebug: false,
    };
  }

  /**
   * @abstract
   * @return EntityType
   */
  getEntityType() {
    return ENTITY_TYPE_BASE;
  }

  /**
   * Console log with entity name
   * @param args
   */
  log(...args) {
    console.log(`[stimp:${this.type}] ${this.name}:`, ...args);
  }

  /**
   * Log just for dev mode
   * @param args
   */
  debug(...args) {
    if (this.meta.isDebug) {
      this.log(...args);
    }
  }
}
