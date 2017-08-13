// /* eslint-env node, mocha */
// import groupByHour from '../lib/lib/group-by-hour-sync'
// const expect = require('chai').expect
// const util = require('util')
// const isDate = util.isDate
// var datesArr = [
//   {'$date': '2016-03-01T01:43:17.000Z'},
//   {'$date': '2016-03-01T01:51:33.000Z'},
//   {'$date': '2016-03-02T01:23:14.000Z'},
//   {'$date': '2016-03-01T05:42:37.000Z'},
//   {'$date': '2016-03-01T02:19:18.000Z'}]
// var arr1 = [1, 1, 1, 2, 2]
// var arr2 = [1, 2, 3, 4, 5]
// var anString = []
// var anObject = { datesArr, arr1, arr2, anString, anObject }
//
// describe('groupByHour Edge cases', function () {
//   describe('groupByHour(undefined, undefined)', function (done) {
//     it('Should throw an error', function (done) {
//       expect(groupByHour.bind(this)).to.throw(/date and arrs/)
//       done()
//     })
//   })
//   describe('groupByHour(NotArray, undefined)', function (done) {
//     it('Should throw an error', function (done) {
//       expect(groupByHour.bind(this, 'NotArray')).to.throw(/dates should be an Array or undefined/)
//       done()
//     })
//   })
//   describe('groupByHour(Array, undefined)', function (done) {
//     it('Should group the dates by hour', function (done) {
//       var result = groupByHour(datesArr)
//       expect(result).to.have.lengthOf(2)
//       // expect(result[0]).to.have.lengthOf(3)
//       // expect(result[1]).to.have.lengthOf(2)
//       expect(result[0]).to.have
//         .satisfy(arr => arr.every(item => isDate(item)))
//       expect(result[1]).to.have
//         .satisfy(arr => arr.every(item => isDate(item)))
//
//       done()
//     })
//   })
//   describe('groupByHour(Array, NotArray)', function (done) {
//     it('Should group throw an error', function (done) {
//       expect(groupByHour.bind(this)).to.throw()
//       done()
//     })
//   })
//   describe('groupByHour(undefined, Array)', function (done) {
//     it('Should group throw an error', function (done) {
//       expect(groupByHour.bind()).to.throw()
//       done()
//     })
//   })
// })
// //
// // describe('groupByHour(Array, Array)', function () {
// //   it('Should return an object', function (done) {
// //     done()
// //   })
// //   it('Should have an dates and arr parameters', function (done) {
// //     done()
// //   })
// //   it('Both dates and arr should be gruped hourly', function (done) {
// //     done()
// //   })
// // })
// //
// // describe('groupByHour(Array, Object)', function () {
// //   it('Should return an object', function (done) {
// //     done()
// //   })
// //   it('Should filter the non array members of the Object() ', function (done) {
// //     done()
// //   })
// //   it('Both dates and keys should be gruped hourly', function (done) {
// //     done()
// //   })
// // })
// //
// // describe('groupByHour(undefined, Object)', function () {
// //   it('Should return an object', function (done) {
// //     done()
// //   })
// //   it('Should filter the non array members of the Object() ', function (done) {
// //     done()
// //   })
// //   it('Should throw an error if dates key is not provided ', function (done) {
// //     done()
// //   })
// //   it('keys should be gruped hourly', function (done) {
// //     done()
// //   })
// // })
// //
// // describe('groupByHour(undefined, Object, anString)', function () {
// //   it('Should return an object', function (done) {
// //     done()
// //   })
// //   it('Should filter the non array members of the Object() ', function (done) {
// //     done()
// //   })
// //   it('Should throw an error if anString key is not provided ', function (done) {
// //     done()
// //   })
// //   it('keys should be gruped hourly', function (done) {
// //     done()
// //   })
// // })
