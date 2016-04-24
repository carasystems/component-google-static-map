'use strict';

const qs = require('qs');
const crypto = require('crypto');

const qsConf = {
  indices: false,
  arrayFomat: 'repeat',
};

function makeRequest(config, args, host, endpoint) {
  const queryArgs = Object.assign({}, args);
  if (config.key) {
    queryArgs.key = config.key;
  }
  let query = '';
  if (config && config.pk && config.clientID) {
    // generate signature
    queryArgs.client = config.clientID;
    const queryArr = qs.stringify(queryArgs, qsConf).split('');
    for (let i = 0; i < queryArr.length; ++i) {
      if (queryArr[i] === "'") {
        queryArr[i] = escape(queryArr[i]);
      }
    }
    query = queryArr.join('');
    const signer = crypto.createHmac('sha1', config.pk);
    let signature = signer.update(`${endpoint}?${query}`).digest('base64');
    signature = signature.replace(/\+/g, '-').replace(/\//g, '_');
    query = `${query}&signature=${signature}`;
  } else {
    query = qs.stringify(queryArgs, qsConf);
  }
  return `${host}${endpoint}?${query}`;
}

module.exports = makeRequest;
