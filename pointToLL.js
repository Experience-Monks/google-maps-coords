var merc = require('mercator-projection');

module.exports = function pointToLL(location) {
  var ll = merc.fromPointToLatLng({x: location[ 0 ], y: location[ 1 ]});

  return [
    ll.lat,
    ll.lng
  ];
};