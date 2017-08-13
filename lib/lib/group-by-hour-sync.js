
var _ = require('lodash')
var groupBy = _.groupBy
var remove = _.remove
var compact = _.compact
var mapValues = _.mapValues
var reduce = _.reduce

var moment = require('moment')
var util = require('util')

var isUndefined = util.isUndefined
var isArray = util.isArray
var isObject = util.isObject
/**
 * Group  an array (or a object with arrays) based on an array of dates by the
 * parameter given "hour", "minute", "day" etc
 * @param  {Array|undefined} dates An array of dates
 * @param  {Array|Object}    arrs  An array of dates
 * @param  {String}          dateKey An array of dates
 * @return {Object}          An array of dates Grouped by values
 */
module.exports = (dates, arrs, dateKey = 'dates', by = 'hour') => {
  // check edge cases
  // * if dates and arrs are undefined
  if (isUndefined(dates) && isUndefined(arrs)) {
    throw new Error('date and arrs parameters shouldn\'t be undefined')
  }
  // * if dates is not an array
  if (!isArray(dates) && !isUndefined(dates)) {
    throw new Error('dates should be an Array or undefined')
  }
  // * if arrs is not an array
  if (!isArray(arrs) && !isUndefined(arrs) && !isObject(arrs)) {
    throw new Error('arrs should be an Array or undefined')
  }
  // * if arrs is undefined
  if (isArray(dates) && isUndefined(arrs)) {
    return segmentDatesBy(dates, by)
  }
  // * if the dates is undefined, but arrs is provided
  if (isUndefined(dates) && isObject(arrs)) {
    if (arrs.hasOwnProperty(dateKey)) {
      groupObjectByDate(arrs, dateKey, by)
    } else {
      return arrs
    }
  } else {
    arrs['___dates'] = dates
    return groupObjectByDate(arrs, '___dates', by)
  }
}
function segmentDatesBy (dates, by = 'hour') {
  var result = groupBy(dates, date => moment(date).startOf(by).format())
  console.log(result)
  return result
}
function groupObjectByDate (obj, dateKey, by) {
  remove(obj, item => isArray(item))// Remove not sorteable items
  dates = obj[dateKey].map(date => moment(date).startOf(by).format())
  delete obj[dateKey]

  var groupByDate = (obj, date, dateKey) => _.reduce(obj[dateKey], (result, item, index) => {
    var ref = obj[dateKey][index]
    result.hasOwnProperty(ref) ? result[ref].push(item) : result[ref] = [item]
    return result
  }, {})

  map(obj)

  mapValues(obj, obj => groupBy(obj[dateKey], date => moment(date).startOf(by).format()))
}
