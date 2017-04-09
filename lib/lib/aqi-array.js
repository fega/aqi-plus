var mean = require('lodash.mean')
var aqi = require('./aqi')
/**
 * Calculates the aqi for a hourly based array of concentration, if more than the expectes values are provided (1h,24h or 8h), the array will be sliced.
 * @param  {Array} arr        The array  of concentrations per hour
 * @param  {String} pollutant Type of pollutant, could be: o3_8h, o3_1h,
 * pm10_24h, pm25_24h, co_8h, so2_24 and no2_1h
 * @return {Array}           the AirCast AQI calculated
 */
module.exports = (arr, pollutant) => {
  var floatArr = new Float32Array(arr)
  var sliceNumber
  if (pollutant.includes('8h')) {
    sliceNumber = 8
  } else if (pollutant.includes('1h')) {
    sliceNumber = 1
  } else if (pollutant.includes('24h')) {
    sliceNumber = 24
  }

  var concentration = mean(floatArr.slice(0, sliceNumber))
  return aqi(concentration, pollutant)
}
