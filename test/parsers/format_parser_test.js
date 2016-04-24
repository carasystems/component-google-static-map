'use strict';

const chai = require('chai');

const parser = require('../../parsers/format_parser.js');

chai.should();

describe('format parser tests', () => {
  it('should work with a correct value', () => {
    const validateResult = parser.validate('png');
    validateResult.should.have.property('result');
    validateResult.result.should.equal(true);

    const parseResult = parser.parse('png');
    parseResult.should.be.a('string');
    parseResult.should.equal('png');

  });

  it('with incorrect value', () => {
    const validateResult = parser.validate('png333');
    validateResult.should.have.property('result');
    validateResult.should.have.property('msg');
    validateResult.result.should.equal(false);
  });

});