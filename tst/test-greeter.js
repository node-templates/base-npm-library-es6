'use strict';

/* global after, afterEach, before, beforeEach, describe, it */
const chai = require('chai');
const expect = chai.expect;
const lib = require('../');

describe('Greeter', () => {
  describe('Methods', () => {
    describe('generateGreeting', () => {
      it('Should return expected string', () => {
        expect(new lib.Greeter('John Smith')
          .generateGreeting())
          .to.eql('Hello, John Smith');
      });
    });
  });
});
