'use strict';

const qs = require('qs');

const qsConf = {
  indices: false,
  arrayFomat: 'repeat',
};

function makeRequest(config, args, host) {
  if (config && config.pk && config.clientID) {
    return '';
  }
  return `${host}?${qs.stringify(args, qsConf)}`;
}

module.exports = makeRequest;
