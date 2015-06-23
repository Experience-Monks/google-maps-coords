module.exports = function pointToPX(location, zoom) {
  var scale = Math.pow(2, zoom);

  return location.map( function(value) {
    return value * scale;
  });
};