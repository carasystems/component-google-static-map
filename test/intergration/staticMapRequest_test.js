'use strict';

const chai = require('chai');

const VeriflyGoogleMap = require('../../index.js');
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

  it('mixin circle and path should be work', () => {
    const config = {};
    config.encodePolyLines = true;
    let googleMap = new VeriflyGoogleMap(config);
    let mapReq = googleMap.newStaticMapRequest();
    const path = {
      color: '0x0000ff',
      weight: 5,
      points: ['40.737102,-73.990318', '40.749825,-73.987963', '40.752946,-73.987384', '40.755823,-73.986397']
    };
    const url = mapReq.size('512x512')
      .circle({
        center: '40.737102,-73.990318',
        weight: '1',
        fillcolor: '0xFFFF0033',
        details: 90
      })
      .path([path])
      .markers([{
        size:'tiny',
        color: 'green',
        location: '40.737102,-73.990318',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe%7C996600',
      }])
      .toQueryString();
    url.should.be.equal('https://maps.googleapis.com/maps/api/staticmap?size=512x512&center=40.737102%2C-73.990318&path=weight%3A1%7Cfillcolor%3A0xFFFF0033%7Cenc%3AcfuwFnfrbMfw%40eiAdw%40diAew%40diAgw%40eiA&path=color%3A0x0000ff%7Cweight%3A5%7Cenc%3A%7BmswFnfrbMqnAwMoRsB%7DPcE&markers=size%3Atiny%7Ccolor%3Agreen%7Cicon%3Ahttp%3A%2F%2Fchart.apis.google.com%2Fchart%3Fchst%3Dd_map_pin_icon%26chld%3Dcafe%257C996600%7C40.737102%2C-73.990318');
  });

  it('mixin circle and paths should be work', () => {
    const config = {};
    config.encodePolyLines = true;
    let googleMap = new VeriflyGoogleMap(config);
    let mapReq = googleMap.newStaticMapRequest();
    const path = {
      color: '0x0000ff',
      weight: 5,
      points: ['40.737102,-73.990318', '40.749825,-73.987963', '40.752946,-73.987384', '40.755823,-73.986397']
    };
    const path2 = {
      color: '0x0000ff',
      weight: 5,
      points: ['40.737102,-73.990318', '40.779825,-73.987963', '40.782946,-73.987384', '40.785823,-73.986397']
    };
    const url = mapReq.size('512x512')
      .circle({
        center: '40.737102,-73.990318',
        weight: '1',
        fillcolor: '0xFFFF0033',
        details: 90
      })
      .path([path, path2])
      .markers([{
        size:'tiny',
        color: 'green',
        location: '40.737102,-73.990318',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe%7C996600',
      }])
      .toQueryString();
    url.should.be.equal('https://maps.googleapis.com/maps/api/staticmap?size=512x512&center=40.737102%2C-73.990318&path=weight%3A1%7Cfillcolor%3A0xFFFF0033%7Cenc%3AcfuwFnfrbMfw%40eiAdw%40diAew%40diAgw%40eiA&path=color%3A0x0000ff%7Cweight%3A5%7Cenc%3A%7BmswFnfrbMqnAwMoRsB%7DPcE&path=color%3A0x0000ff%7Cweight%3A5%7Cenc%3A%7BmswFnfrbMajGwMoRsB%7DPcE&markers=size%3Atiny%7Ccolor%3Agreen%7Cicon%3Ahttp%3A%2F%2Fchart.apis.google.com%2Fchart%3Fchst%3Dd_map_pin_icon%26chld%3Dcafe%257C996600%7C40.737102%2C-73.990318');
  });

  it('multiple calls should be work', () => {
    const config = {};
    config.encodePolyLines = true;
    let googleMap = new VeriflyGoogleMap(config);
    let mapReq = googleMap.newStaticMapRequest();
    mapReq.size('512x512')
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
