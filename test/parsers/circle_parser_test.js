'use strict';

const chai = require('chai');

const parser = require('../../parsers/circle_parser.js');

chai.should();

describe('circle parser tests', () => {
  describe('validate', () => {
    it('validate with correct value', () => {
      const circleConf = {
        center: '-42.88188,147.32427',
        weight: '1',
        fillcolor: '0xFFFF0033',
        details: 3
      };
      const validateResult = parser.validate(circleConf);
      validateResult.should.have.property('result');
      validateResult.result.should.equal(true);
    });

    it('validate with incorrect value', () => {
      const circleConf = {
        weight: '1',
        fillcolor: '0xFFFF0033',
        details: 3
      };
      const validateResult = parser.validate(circleConf);
      validateResult.should.have.property('result');
      validateResult.result.should.equal(false);
    });

  });

  describe('parse', () => {
    it('parse with correct value', () => {
      const circleConf = {
        center: '-42.88188,147.32427',
        weight: '1',
        fillcolor: '0xFFFF0033',
        details: 90
      };
      const parseResult = parser.parse(circleConf);
      const encodeUrl = 'weight:1|fillcolor:0xFFFF0033|enc:prtdGugeb[dw@ukAdw@tkAew@tkAew@ukA'
      parseResult.should.equal(encodeUrl)
    });
  });

});
