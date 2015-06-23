var merc = require('mercator-projection');

module.exports = function llToPoint(location) {
  var point = merc.fromLatLngToPoint({lat: location[ 0 ], lng: location[ 1 ]});

  return [
    point.x,
    point.y
  ];
};