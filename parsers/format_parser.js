'use strict';

const supportFormats = ['png8', 'png', 'png32', 'gif', 'jpg', 'jpg-baseline'];

function parseFn(format) {
  return format;
}

module.exports = {
  validate: (format) => {
    const _f = format.toLowerCase();
    if (supportFormats.indexOf(_f) < 0) {
      /* eslint-disable max-len */
      return {
        result: false,
        msg: `Invalid params.format:${format}, valid formats: [png8|png|png32|gif|jpg|jpg-baseline]`,
      };
      /* eslint-enable max-len */
    }
    return {
      result: true,
    };
  },
  parse: parseFn,
};

