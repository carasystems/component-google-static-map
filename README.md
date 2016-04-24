## Verifly goole-maps module

## Configration
``` javascript
{
  encodePolyLines: true|false, // encode polylines using https://developers.google.com/maps/documentation/utilities/polylinealgorithm
  clientID: 'XXXXX', // the client id for Google Maps APIs Premium Plan
  pk: 'XXXX', // the private key for Premium Plan to generate signature
  key: 'xxxx' // api key
}
```

## Example
``` javascript
const config = require('./config');
config.encodePolyLines = true;
const VeriflyGoogleMap = require('verifly-google-static-map');
// new googleMap instance
let googleMap = new VeriflyGoogleMap(config);
// create a staticMapRequest
let mapReq = googleMap.newStaticMapRequest();

// using path
const url = mapReq.size('512x512')
   .path([{
   color: '0x00000000',
   weight: '5',
   fillcolor: '0xFFFF0033',
   points: ["8th Avenue & 34th St,New York,NY", '8th Avenue & 42nd St,New York,NY', 'Park Ave & 42nd St,New York,NY,NY', 'Park Ave & 34th St,New York,NY,NY'],
 }]).toQueryString();

// using circle with markers
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
// using path
const url = mapReq.size('512x512')
           .path([{
             color: '0x0000ff',
             weight: 5,
             points: ['40.737102,-73.990318', '40.749825,-73.987963', '40.752946,-73.987384','40.755823,-73.986397'],
           }])
           .toQueryString();
if(!url) {
  console.log(mapReq.errorList);
}
console.log(url);
```