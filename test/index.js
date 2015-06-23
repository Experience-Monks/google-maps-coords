var googleMapsImageCoords = require('./..');
var tape = require('tape');

tape('test conversions', function(t) {

  var zoom = 12;
  var LL = [43.669662, -79.282848];
  var PX = [293359.96770986664, 382616.79057958454];
  var POINT = [71.62108586666666, 93.41230238759388];

  t.deepEqual(round(googleMapsImageCoords.llToPX(LL, zoom)), round(PX), 'll to px');
  t.deepEqual(round(googleMapsImageCoords.llToPoint(LL)), round(POINT), 'll to point');
  t.deepEqual(round(googleMapsImageCoords.pxToLL(PX, zoom)), round(LL), 'px to ll');
  t.deepEqual(round(googleMapsImageCoords.pxToPoint(PX, zoom)), round(POINT), 'point to ll');
  t.deepEqual(round(googleMapsImageCoords.pointToPX(POINT, zoom)), round(PX), 'point to px');
  t.deepEqual(round(googleMapsImageCoords.pointToLL(POINT)), round(LL), 'point to ll');
  t.end();
});

function round(array) {
  return array.map(function(value) {
    return ~~(value * 1000) / 1000;
  });
}