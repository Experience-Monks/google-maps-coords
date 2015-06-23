var llToPoint = require('./llToPoint');

module.exports = function llToPX(location, zoom) {

  var scale = Math.pow(2, zoom);
  var point = llToPoint(location);

  return point.map( function(value) {
    return value * scale;
  });
};