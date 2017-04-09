/**
 * Calculates the AQI from the given concentration
 * @param  {Array} conc       last 24h average
 * @param  {String} pollutant Type of pollutant, could be: o3_8h, o3_1h,
 * pm10_24h, pm25_24h, co_8h, so2_24 and no2_1h
 * could be USA or CHINA.
 * @return {Number}           the AQI calculated
 */

const util = require('util')
const inRange = require('lodash.inrange')
const constants = require('./constants')

module.exports = (conc, pollutant) => {
  // checks
  if (!util.isNumber(conc) && !util.isUndefined(conc) && !util.isNull(conc)) {
    throw new Error('Bad concentration argument')
  }
  if (!constants.aqi_ranges.hasOwnProperty(pollutant)) {
    throw new Error('Bad pollutant argument')
  }
  // edge cases
  if (conc < 0) {
    return null
  } else if (conc === null) {
    return null
  }

  var category = constants.aqi_ranges[pollutant]
    .find(v => inRange(conc, v.range[0], v.range[1])) // this return the category that I want.
  if (util.isUndefined(category)) {
    return null// TODO: it should return 0 or 500 in edge cases
  } else {
    var Ihi = category.value[1]
    var Ilo = category.value[0]
    var Bhi = category.range[1]
    var Blo = category.range[0]

    return Math.floor((Ihi - Ilo) / (Bhi - Blo) * (conc - Blo) + Ilo)
  }
}
