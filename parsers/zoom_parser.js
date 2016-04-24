'use strict';

const check = require('check-types');

function parseFn(zoomLevel) {
  return zoomLevel;
}

module.exports = {
  validate: (zoomLevel) => {
    if (!zoomLevel) {
      return {
        result: false,
        msg: 'Parameter zoom is required',
      };
    } else if (!check.integer(zoomLevel)) {
      return {
        result: false,
        msg: 'Parameter zoom should be an integer',
      };
    } else if (zoomLevel < 0 || zoomLevel > 21) {
      return {
        result: false,
        msg: 'Parameter zoom should be between 0 and 21',
      };
    }
    return {
      result: true,
    };
  },
  parse: parseFn,
};

