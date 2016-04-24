'use strict';

function parseFn(center) {
  return center;
}

module.exports = {
  validate: (center) => {
    if (!center) {
      return {
        result: false,
        msg: 'Parameter center is required',
      };
    }
    return {
      result: true,
    };
  },

  parse: parseFn,
};
