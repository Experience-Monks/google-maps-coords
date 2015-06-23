# google-maps-coords

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Convert Google Maps Coordinates without Google Maps. Handles conversions between lat long, point, and px.

```javascript
var coords = require('google-maps-coords');

var zoom = 12; // zoom level of Google Maps
var LL = [43.669662, -79.282848]; // Latitude and Longitude
var PX = [293359.96770986664, 382616.79057958454];
var POINT = [71.62108586666666, 93.41230238759388];

coords.llToPX(LL, zoom);
coords.llToPoint(LL);
coords.pxToLL(PX, zoom);
coords.pxToPoint(PX, zoom);
coords.pointToPX(POINT, zoom);
coords.pointToLL(POINT);
```

## Usage

[![NPM](https://nodei.co/npm/google-maps-coords.png)](https://www.npmjs.com/package/google-maps-coords)

#### `var coords = require('google-maps-coords');`

Will return an object with the conversion functions. The functions are:
- `llToPX(latLong, zoom)`
- `llToPoint(latLong)`
- `pxToLL(latLong, zoom)`
- `pxToPoint(pxCoord, zoom)`
- `pointToPX(point, zoom)`
- `pointToLL(point)`

These functions can individually be required:
`var llToPX = require('google-maps-coords/llToPX');`

#### `coords.llToPX(latLong, zoom)`

Converts latitude and longitude values to pixel values. `latLong` is an `Array` where the first index is latitude and second is longitude. `zoom` is the zoom level of the map for instance Google Maps zoom levels are between: 0-18.

The return value will be an array `[x, y]`.

#### `coords.llToPoint(latLong)`

Converts a latitude and longitude to a point. The format of latLong is described in the documentation for `coords.llToPX(latLong, zoom)`.

#### `coords.pxToLL(latLong, zoom)`

Converts a latitude and longitude to a pixel cordinate. The format of latLong and zoom are described in the documentation for `coords.llToPX(latLong, zoom)`.

#### `coords.pxToPoint(pxCoord, zoom)`

Converts pixel values to Point values. `pxCoord` will be an array `[x, y]`. `zoom` is described in the documentation for `coords.llToPX(latLong, zoom)`.


Converts a latitude a

#### `coords.pointToPX(point, zoom)`

Converts Point values to pixel values. `zoom` is described in the documentation for `coords.llToPX(latLong, zoom)`.

#### `coords.pointToLL(point)`

Converts a point to a latitude and longitude.




## License

MIT, see [LICENSE.md](http://github.com/Jam3/google-maps-coords/blob/master/LICENSE.md) for details.
