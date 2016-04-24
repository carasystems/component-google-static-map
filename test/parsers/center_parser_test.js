'use strict';

const chai = require('chai');

const parser = require('../../parsers/center_parser.js');

chai.should();

describe('center parser tests', () => {
  describe('validate', () => {
    it('should be work with a correct value', () => {
      const correctValue = '-42.88188,147.32427';
      const validateResult = parser.validate(correctValue)
      validateResult.should.have.property('result');
      validateResult.result.should.equal(true);
      const parseResult = parser.parse(correctValue);
      parseResult.should.be.a('string');
      parseResult.should.equal(correctValue);
    });

    it('should result a failed result with a incorrect center value', () => {
      const validateResult = parser.validate(null);
      validateResult.should.have.property('result');
      validateResult.should.have.property('msg');
      validateResult.result.should.equal(false);
    });
  });

  describe('parse', () => {
    
  });

});
