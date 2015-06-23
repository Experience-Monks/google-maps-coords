var pointToLL = require('./pointToLL');

module.exports = function pxToLL(location, zoom) {
  var scale = Math.pow(2, zoom);

  // convert the px to a point
  location = location.map( function(value) {
    return value / scale;
  });

  return pointToLL(location);
};