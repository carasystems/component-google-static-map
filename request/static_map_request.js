'use strict';

const centerParser = require('../parsers/center_parser.js');
const zoomParser = require('../parsers/zoom_parser.js');
const scaleParser = require('../parsers/scale_parser.js');
const formatParser = require('../parsers/format_parser.js');
const maptypeParser = require('../parsers/maptype_parser.js');
const visibleParser = require('../parsers/visible_parser.js');
const styleParser = require('../parsers/style_parser.js');
const markersParser = require('../parsers/markers_parser.js');
const sizeParser = require('../parsers/size_parser.js');
const pathsParser = require('../parsers/paths_parser.js');
const makeRequest = require('../utils/make_request.js');
const circleParser = require('../parsers/circle_parser.js');
const defaultConfig = require('../config');

class StaticMapRequest {
  constructor(config) {
    if (config) {
      this.config = Object.assign({}, defaultConfig, config);
    } else {
      this.config = Object.assign({}, defaultConfig);
    }
    this.config.mainHost = `${this.config.scheme}:${this.config.host}`;
    this.args = {};
    this.errorList = [];
  }

  center(center) {
    const validateResult = centerParser.validate(center);
    if (validateResult.result) {
      this.args.center = centerParser.parse(center);
    } else {
      this.errorList.push({
        field: 'center',
        message: validateResult.msg,
      });
    }
    return this;
  }

  zoom(zoom) {
    const validateResult = zoomParser.validate(zoom);
    if (validateResult.result) {
      this.args.zoom = zoomParser.parse(zoom);
    } else {
      this.errorList.push({
        field: 'zoom',
        message: validateResult.msg,
      });
    }
    return this;
  }

  size(size) {
    const validateResult = sizeParser.validate(size);
    if (validateResult.result) {
      this.args.size = sizeParser.parse(size);
    } else {
      this.errorList.push({
        field: 'size',
        message: validateResult.size,
      });
    }
    return this;
  }

  scale(scale) {
    const validateResult = scaleParser.validate(scale);
    if (validateResult.result) {
      this.args.scale = scaleParser.parse(scale);
    } else {
      this.errorList.push({
        field: 'scale',
        message: validateResult.msg,
      });
    }
    return this;
  }

  format(format) {
    const validateResult = formatParser.validate(format);
    if (validateResult.result) {
      this.args.format = formatParser.parse(format);
    } else {
      this.errorList.push({
        field: 'format',
        message: validateResult.msg,
      });
    }
    return this;
  }

  maptype(maptype) {
    const validateResult = maptypeParser.validate(maptype);
    if (validateResult.result) {
      this.args.maptype = maptypeParser.parse(maptype);
    } else {
      this.errorList.push({
        field: 'maptype',
        message: validateResult.msg,
      });
    }
    return this;
  }

  visible(visible) {
    const validateResult = visibleParser.validate(visible);
    if (validateResult.result) {
      this.args.visible = visibleParser.parse(visible);
    } else {
      this.errorList.push({
        field: 'visible',
        message: validateResult.msg,
      });
    }
    return this;
  }

  markers(markers) {
    const validateResult = markersParser.validate(markers);
    if (validateResult.result) {
      this.args.markers = this.args.markers || [];
      this.args.markers = this.args.markers.concat(markersParser.parse(markers));
    } else {
      this.errorList.push({
        field: 'makrers',
        message: validateResult.msg,
      });
    }
    return this;
  }

  styles(styles) {
    const validateResult = styleParser.validate(styles);
    if (validateResult.result) {
      this.args.style = styleParser.parse(styles);
    } else {
      this.errorList.push({
        field: 'style',
        message: validateResult.msg,
      });
    }
  }

  path(paths) {
    const validateResult = pathsParser.validate(paths);
    if (validateResult.result) {
      this.args.path = pathsParser.parse(paths, this.config.encodePolyLines);
    } else {
      this.errorList.push({
        field: 'path',
        message: validateResult.msg,
      });
    }
    return this;
  }

  circle(options) {
    const validateResult = circleParser.validate(options);
    if (validateResult.result) {
      this.args.center = centerParser.parse(options.center);
      this.args.path = circleParser.parse(options);
    } else {
      this.errorList.push({
        field: 'circle',
        message: validateResult.msg,
      });
    }
    return this;
  }

  validate() {
    const args = this.args || {};
    if (!args.markers && !args.path) {
      if (!args.center) {
        this.errorList.splice(0, this.errorList.length);
        this.errorList.push({
          field: 'center',
          message: 'center is required',
        });
      }
      if (!args.zoom) {
        this.errorList.splice(0, this.errorList.length);
        this.errorList.push({
          field: 'zoom',
          message: 'zoom is required',
        });
      }
    }
  }

  toQueryString() {
    this.validate();
    if (!this.errorList.length) {
      /* eslint-disable max-len */
      const url = makeRequest(this.config, this.args, this.config.mainHost, this.config.endpoints.staticmap);
      this.args = {};
      /* eslint-enable max-len */
      return url;
    }
    return null;
  }
}

module.exports = StaticMapRequest;
