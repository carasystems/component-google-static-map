'use strict';

const check = require('check-types');
const math = require('mathjs');

const pathParser = require('./paths_parser.js');
const r = 6371;
const pi = Math.PI;

function circleParser(options) {
  const centerTuple = options.center.split(',');
  const centerLat = centerTuple[0].trim();
  const centerLng = centerTuple[1].trim();
  const _lat = (centerLat * pi) / 180;
  const _lng = (centerLng * pi) / 180;
  const radius = options.radius || 1;
  const unit = options.unit || 'km';
  const details = options.details || 8;
  const radiusInUnit = math.unit(radius, unit);
  const radiusByKiloMeter = radiusInUnit.toNumber('km');
  const d = (radiusByKiloMeter) / r;
  const _options = Object.assign({}, options);
  _options.points = [];
  for (let i = 0; i <= 360; i += details) {
    const brng = i * pi / 180;
/* eslint-disable max-len */
    let pLat = Math.asin(Math.sin(_lat) * Math.cos(d) + Math.cos(_lat) * Math.sin(d) * Math.cos(brng));
    const pLng = ((_lng + Math.atan2(Math.sin(brng) * Math.sin(d) * Math.cos(_lat), Math.cos(d) - Math.sin(_lat) * Math.sin(pLat))) * 180) / pi;
/* eslint-enable max-len */
    pLat = (pLat * 180) / pi;
    _options.points.push(`${pLat},${pLng}`);
  }
  return pathParser.parse([_options], true);
}

module.exports = {
  validate: (options) => {
    if (!options || !options.center || !check.string(options.center)) {
      return {
        result: false,
        msg: 'circle center is required',
      };
    }
    return {
      result: true,
    };
  },
  parse: circleParser,
};
