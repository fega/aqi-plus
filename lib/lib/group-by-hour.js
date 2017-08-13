/**
 * Group  an array (or a object with arrays) based on an array of dates
 * @param  {Array} dates An array of dates
 * @param  {Array} arrs An array of dates
 * @return {Iteratee}       An array of dates Grouped by values
 */
var groupBy = require('lodash').groupBy
var moment = require('moment')
module.exports = (dates, arrs, dateKey = 'dates') => {
  // check edge cases
  // * if dates and arrs are undefined
  // * if dates is not an array
  // * if arrs is undefined
  // * if arrs is not an array
  // * if the dates is undefined, but arrs is provided

  // * filter the arrs parameter if it is an object (to delete the not array values)

  // * create an object
  var groups = groupBy(dates, date => moment(date).startOf('day').format())
  return groups
}
