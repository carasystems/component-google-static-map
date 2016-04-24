'use strict';

const chai = require('chai');

const VeriflyGoogleMap = require('../index.js');
chai.should();

describe('intergration tests', () => {
  it('circle area shoudl be work', () => {
    const config = {};
    config.encodePolyLines = true;
    let googleMap = new VeriflyGoogleMap(config);
    let mapReq = googleMap.newStaticMapRequest();
    const url = mapReq.size('512x512')
      .circle({
        center: '-42.88188,147.32427',
        weight: '1',
        fillcolor: '0xFFFF0033',
        details: 90
      })
      .markers([{
        size:'tiny',
        color: 'green',
        location: '-42.88188,147.32427',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe%7C996600',
      }])
      .toQueryString();
    url.should.equal('https://maps.googleapis.com/maps/api/staticmap?size=512x512&center=-42.88188%2C147.32427&path=weight%3A1%7Cfillcolor%3A0xFFFF0033%7Cenc%3AprtdGugeb%5Bdw%40ukAdw%40tkAew%40tkAew%40ukA&markers=size%3Atiny%7Ccolor%3Agreen%7Cicon%3Ahttp%3A%2F%2Fchart.apis.google.com%2Fchart%3Fchst%3Dd_map_pin_icon%26chld%3Dcafe%257C996600%7C-42.88188%2C147.32427');
  });
});