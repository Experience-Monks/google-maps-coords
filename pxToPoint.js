module.exports = function pxToPoint(location, zoom) {
  var scale = Math.pow(2, zoom);

  location = location.map( function(value) {
    return value / scale;
  });

  return location;
};