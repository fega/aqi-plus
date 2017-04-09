module.exports = new Aqi()
var aqi = require('./lib/aqi')
/**
 * [Aqi description]
 * @param {Array} arr Array or number with pollutant concentration
 * @param {String} pollutant Type of pollutant, could be: o3_8h, o3_1h,
 * pm10_24h, pm25_24h, co_8h, so2_24 and no2_1h
 * could be USA or CHINA.
 */
function Aqi (arr, pol) {
}

Aqi.prototype.aqi = require('./lib/aqi')
Aqi.prototype.aqiArray = require('./lib/aqi-array')
// Aqi.reduce = require('./lib/reduce')
// Aqi.aircast = require('./lib/aircast')
// Aqi.nowcast = require('./lib/nowcast')
// Aqi.aircastSet = require('./lib/aircast-set')
// Aqi.nowcastSet = require('./lib/nowcast-set')
