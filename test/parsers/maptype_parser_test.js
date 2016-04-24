'use strict';

const chai = require('chai');

const parser = require('../../parsers/maptype_parser.js');

chai.should();

describe('maptype parser tests', () => {
  it('should work with a correct value', () => {
    const validateResult = parser.validate('roadmap');
    validateResult.should.have.property('result');
    validateResult.result.should.equal(true);

    const parseResult = parser.parse('roadmap');
    parseResult.should.be.a('string');
    parseResult.should.equal('roadmap');

  });

  it('with incorrect value', () => {
    const validateResult = parser.validate('hybrid1');
    validateResult.should.have.property('result');
    validateResult.should.have.property('msg');
    validateResult.result.should.equal(false);
  });

});