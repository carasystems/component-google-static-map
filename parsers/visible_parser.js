'use strict';

const check = require('check-types');
function visibleParser(visible) {
  if (check.string(visible)) {
    throw new Error('The visible parameter should be a string');
  }
  return visible;
}

module.exports = {
  validate: (visible) => {
    if (check.string(visible)) {
      return {
        result: false,
        msg: 'Parameter visible should be a string',
      };
    }
    return {
      result: true,
    };
  },
  parse: visibleParser,
};

