'use strict';

const chai = require('chai');

const encodePolyLines = require('../../utils/encode_polylines.js');

chai.should();

describe('encode polylines alg', () => {
  it('encode one point should be work', () => {
    const point = "38.5,-120.2";
    encodePolyLines(point).should.equal('_p~iF~ps|U');
  });

  it('encode a points array should be work', () => {
    const points= ['38.5,-120.2', '40.7,-120.95', '43.252,-126.453'];
    encodePolyLines(points).should.equal('_p~iF~ps|U_ulLnnqC_mqNvxq`@');
  });

  it('encode a points with some whitespaces should be work', () => {
    const point = [' 38.5 , -120.2'];
    encodePolyLines(point).should.equal('_p~iF~ps|U');
  });

  it('encode a points array with some whitespaces should be work', () => {
    const points= ['38.5, -120.2 ', ' 40.7,-120.95 ', '43.252,-126.453'];
    encodePolyLines(points).should.equal('_p~iF~ps|U_ulLnnqC_mqNvxq`@');
  });
});
