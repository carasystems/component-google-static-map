'use strict';

const chai = require('chai');

const parser = require('../../parsers/paths_parser.js');

chai.should();

describe('paths parser tests', () => {
  describe('validate', () => {
    it('validate with correct paths', () => {
      const path = {
        color: '0x0000ff',
        weight: 5,
        points: ['40.737102,-73.990318', '40.749825,-73.987963', '40.752946,-73.987384', '40.755823,-73.986397']
      };
      const validateResult = parser.validate([path]);
      validateResult.should.have.property('result');
      validateResult.result.should.equal(true);
    });

    it('should failed to validate with incorrect paths', () => {
      const path = {
        color: '0x0000ff',
        weight: 5,
        points: ['40.737102,-73.990318', '40.749825,-73.987963', '40.752946,-73.987384', '40.755823,-73.986397']
      };
      const validateResult = parser.validate(path);
      validateResult.should.have.property('result');
      validateResult.result.should.equal(false);
      validateResult.should.have.property('msg');
    });

    it('should failed to validate with no points in path', () => {
      const path = {
        color: '0x0000ff',
        weight: 5,
      };
      const validateResult = parser.validate([path]);
      validateResult.should.have.property('result');
      validateResult.result.should.equal(false);
      validateResult.should.have.property('msg');
    });

  });

  describe('parse', () => {

    it('encode withc with correct path', () => {
      const path = {
        color: '0x0000ff',
        weight: 5,
        points: ['40.737102,-73.990318', '40.749825,-73.987963', '40.752946,-73.987384', '40.755823,-73.986397']
      };

      const parseResult = parser.parse([path]);
      parseResult.should.be.a('string');
      parseResult.should.equal('color:0x0000ff|weight:5|40.737102,-73.990318|40.749825,-73.987963|40.752946,-73.987384|40.755823,-73.986397');
    });


  });

});
