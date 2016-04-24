'use strict';

const styleProps = ['feature', 'element'];

function styleParser(styles) {
  return styles.map((style) => {
    const s = [];
    styleProps.forEach((i, prop) => {
      if (style[prop]) {
        s.push(`${prop}:${style[prop]}`);
      }
    });
    if (style.rules) {
      style.rules.forEach((k, v) => {
        s.push(`${k}:${v}`);
      });
    }
    return s.join('|');
  });
}

module.exports = {
  validate: (styles) => {
    if (!Array.isArray(styles)) {
      return {
        result: false,
        msg: 'Parameter styles should be an array',
      };
    }
    return {
      result: true,
    };
  },
  parse: styleParser,
};

