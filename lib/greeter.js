'use strict';

const util = require('util');

/**
 * The Greeter class is an example code fragment to demonstrate that
 * this package is targetting ES6.
 */
class Greeter {

  /**
   * Initialize a new Greeter
   * @param {string}    name      - Name of person to greet.
   */
  constructor(name) {
    this._name = name;
  }

  /**
   * Generate a greeting for the user
   * @returns {string}            - Greeting string to display
   */
  generateGreeting() {
    return util.format('Hello, %s', this._name);
  }
}

module.exports = Greeter;
