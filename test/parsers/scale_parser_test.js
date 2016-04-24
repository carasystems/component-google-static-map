'use strict';

const chai = require('chai');

const parser = require('../../parsers/scale_parser.js');

chai.should();

describe('scale parser tests', () => {
  describe('validate', () => {
    it('validate with correct scale value', () => {
      const scale = 1;
      const validateResult = parser.validate(scale);
      validateResult.should.have.property('result');
      validateResult.result.should.equal(true);
    });

    it('validate with incorrect scale value', () => {
      const scale = 3;
      const validateResult = parser.validate(scale);
      validateResult.should.have.property('result');
      validateResult.result.should.equal(false);
      validateResult.should.have.property('msg');
    });

  });

  describe('parse', () => {
    it('parse with correct scale value', () => {
      const scale = 1;
      parser.parse(scale).should.equal(1);
    });
  });

});