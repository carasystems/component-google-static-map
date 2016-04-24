'use strict';

module.exports = function encodeNumber(num) {
  let encodeString = '';
  let nextValue;
  let _n = num;
  while (_n >= 0x20) {
    nextValue = (0x20 | (_n & 0x1F)) + 63;
    encodeString += (String.fromCharCode(nextValue));
    _n >>= 5;
  }

  encodeString += (String.fromCharCode(_n + 63));

  return encodeString;
};
