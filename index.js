'use strict';

const StaticMapRequest = require('./request/static_map_request.js');

class VeriflyGoogleMaps {
  constructor(config) {
    this.config = config;
  }

  newStaticMapRequest() {
    return new StaticMapRequest(this.config);
  }

}

module.exports = VeriflyGoogleMaps;
