'use strict';

function parseFn(scale) {
  return scale;
}

module.exports = {
  validate: (scale) => {
    if (scale !== 1 && scale !== 2 && scale !== 4) {
      return {
        result: false,
        msg: 'scale must be 1,2,4',
      };
    }
    return {
      result: true,
    };
  },
  parse: parseFn,
};

