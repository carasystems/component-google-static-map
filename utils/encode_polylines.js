'use strict';

// copy from https://github.com/moshen/node-googlemaps/blob/master/lib%2Futils%2FencodePolylines.js

const encodeNum = require('./encode_number.js');

function _encodeSignedNumber(num) {
  let sgnNum = num << 1;
  if (num < 0) {
    sgnNum = ~(sgnNum);
  }
  return encodeNum(sgnNum);
}

module.exports = function encodePolyLines(points) {
  let plat = 0;
  let plng = 0;
  let _points = points;
  const encodedPoints = [];
  if (typeof points === 'string') {
    _points = points.split('|');
  }

  _points.forEach((point) => {
    const pointTuple = point.split(',');
    const lat = pointTuple[0].trim();
    const lng = pointTuple[1].trim();
    const late5 = Math.round(lat * 1e5);
    const lnge5 = Math.round(lng * 1e5);
    const dlat = late5 - plat;
    const dlng = lnge5 - plng;
    plat = late5;
    plng = lnge5;
    encodedPoints.push(_encodeSignedNumber(dlat) + _encodeSignedNumber(dlng));
  });

  return encodedPoints.join('');
};
