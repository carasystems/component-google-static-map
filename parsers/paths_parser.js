'use strict';

const encodePolyLines = require('../utils/encode_polylines.js');

const pathProps = ['color', 'weight', 'fillcolor', 'geodisc'];

function pathsParser(paths, encode) {
  return paths.map((path) => {
    const p = [];
    pathProps.forEach((prop) => {
      if (path[prop]) {
        p.push(`${prop}:${path[prop]}`);
      }
    });
    if (!Array.isArray(path.points)) {
      throw new Error('Each path must have an array of points');
    }
    if (encode) {
      p.push(`enc:${encodePolyLines(path.points)}`);
    } else {
      path.points.forEach((point) => {
        p.push(point);
      });
    }
    return p.join('|');
  });
}

module.exports = {
  validate: (paths) => {
    if (!Array.isArray(paths)) {
      return {
        result: false,
        msg: 'Paths must be an array',
      };
    }
    if (paths.filter((path) => !Array.isArray(path.points)).length > 0) {
      return {
        result: false,
        msg: 'Each path must have an array of points',
      };
    }
    return {
      result: true,
    };
  },
  parse: pathsParser,
};
