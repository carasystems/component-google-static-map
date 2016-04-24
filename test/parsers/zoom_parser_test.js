'use strict';

const chai = require('chai');

const parser = require('../../parsers/zoom_parser.js');

chai.should();

describe('zoom parser tests', () => {
  describe('validate', () => {
    it('validate with correct value', () => {
      const zoom = 1;
      const validateResult = parser.validate(zoom);
      validateResult.should.have.property('result');
      validateResult.result.should.equal(true);
    });

    it('validate with incorrect value', () => {
      let zoom = 0;
      const validateResult = parser.validate(zoom);
      validateResult.should.have.property('result');
      validateResult.should.have.property('msg');
      validateResult.result.should.equal(false);

      zoom = 22;
      validateResult.should.have.property('result');
      validateResult.should.have.property('msg');
      validateResult.result.should.equal(false);
    });

  });

  describe('parse', () => {
    it('parse with correct value', () => {
      const zoom = 2;
      const parseResult = parser.parse(zoom);
      parseResult.should.equal(2);
    });
  });

});