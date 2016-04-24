'use strict';

function parseFn(size) {
  return size;
}

module.exports = {
  validate: (size) => {
    if (!size || !/^\d+x\d+$/.test(size)) {
      return {
        result: false,
        msg: 'size must be specified in the form {horizontal_value}x{vertical_value}',
      };
    }
    return {
      result: true,
    };
  },
  parse: parseFn,
};
