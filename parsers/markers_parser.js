'use strict';

function markersParser(markers) {
  const markerProps = [
    'size',
    'color',
    'label',
    'icon',
    'shadow',
  ];

  return markers.map((marker) => {
    const m = [];
    markerProps.forEach((prop) => {
      if (marker[prop]) {
        m.push(`${prop}:${marker[prop]}`);
      }
    });
    m.push(marker.location);
    return m.join('|');
  });
}


module.exports = {
  validate: (markers) => {
    if (!Array.isArray(markers)) {
      return {
        result: false,
        msg: 'Parameter markers should be an array',
      };
    }
    return {
      result: true,
    };
  },
  parse: markersParser,
};

