'use strict';

const supportTypes = ['roadmap', 'satellite', 'terrain', 'hybrid'];

function parseFn(maptype) {
  return maptype;
}

module.exports = {
  validate: (maptype) => {
    const _tp = maptype.toLowerCase();
    if (supportTypes.indexOf(_tp) < 0) {
      return {
        result: false,
        msg: `Invalid maptype: ${maptype}, valid maptypes: [roadmap|satellite|terrain|hybrid]`,
      };
    }
    return {
      result: true,
    };
  },
  parse: parseFn,
};

