'use strict';

const chai = require('chai');

const parser = require('../../parsers/markers_parser.js');

chai.should();

describe('markers parser tests', () => {
  describe('validate', () => {
    it('validate with correct value', () => {
      const markers = [{
        color: 'blue',
        label: 'C',
        location: '11211,11206'
      }];
      const validateResult = parser.validate(markers);
      validateResult.should.have.property('result');
      validateResult.result.should.equal(true);
    });

    it('validate with incorrect value', () => {
      const markers = {
        color: 'blue',
        label: 'C',
        location: '11211,11206'
      };
      const validateResult = parser.validate(markers);
      validateResult.should.have.property('result');
      validateResult.should.have.property('msg');
      validateResult.result.should.equal(false);
    });

  });

  describe('parse', () => {
    it('parse with correct value', () => {
      const markers = [{
        color: 'blue',
        label: 'C',
        location: '11211,11206'
      }];
      const parseResult = parser.parse(markers);
      parseResult.should.is.a('array');
      parseResult.length.should.equal(1);
      parseResult[0].should.equal('color:blue|label:C|11211,11206');
    });
  });

  describe('multiple location', () => {
    it('multiple location should support array', () => {
      const markers = [{
        color: 'blue',
        label: 'C',
        icon: 'http://icon.io/icon',
        location: ['11211,11206', '12345,67890', '24680,13579']
      }];
      const parseResult = parser.parse(markers);
      parseResult.should.is.a('array');
      parseResult.length.should.equal(1);
      parseResult[0].should.equal('color:blue|label:C|icon:http://icon.io/icon|11211,11206|12345,67890|24680,13579');      
    });
  });
});