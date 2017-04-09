/**
 * Calculates the NowCast AQI from the given concentration array
 * @param  {Array} arr        The array of concentrations
 * @param  {String} pollutant Type of pollutant, could be: o3_8h, o3_1h,
 * pm10_24h, pm25_24h, co_8h, so2_24 and no2_1h
 * @param  {Region} region    Optional, Diferent regions apply diferent ranges.
 * could be USA or CHINA.
 * @return {Number}           the NowCast AQI calculated
 */
module.exports = (arr, pollutant, region) => {
  return region
}
