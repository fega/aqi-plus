/* eslint-env node, mocha */
import aqi from '../lib'
var aircast = aqi.aqi
const expect = require('chai').expect

describe('aircast(good, undefined)', function () {
  it('Shoud throw an error', function (done) {
    expect(aircast.bind(this, 1)).to.throw(/pollutant/)
    expect(aircast.bind(this, 1, 'pm1024h')).to.throw(/pollutant/)
    expect(aircast.bind(this, 1, 'PM25_24h')).to.throw(/pollutant/)
    expect(aircast.bind(this, 1, 'o3_8')).to.throw(/pollutant/)
    done()
  })
})

describe('aircast(good, good)', function () {
  it('Shoud calculate the USA AQI', function (done) {
    expect(aircast(150, 'o3_8h')).to.equal(247) // ok
    expect(aircast(150, 'o3_1h')).to.equal(132) // ok
    expect(aircast(150, 'pm10_24h')).to.equal(98)// ok
    expect(aircast(150, 'pm25_24h')).to.equal(199)// ok
    expect(aircast(15, 'co_8h')).to.equal(193) // ok
    expect(aircast(15, 'so2_24h')).to.equal(null) // ok
    expect(aircast(150, 'so2_24h')).to.equal(null) // ok
    expect(aircast(350, 'so2_24h')).to.equal(215) // ok
    expect(aircast(150, 'so2_1h')).to.equal(134) // ok
    expect(aircast(150, 'no2_1h')).to.equal(110) // ok

    expect(aircast(0, 'o3_1h')).to.equal(null)
    expect(aircast(-1, 'o3_8h')).to.equal(null)
    expect(aircast(null, 'o3_8h')).to.equal(null)
    expect(aircast(1000, 'o3_8h')).to.equal(null)
    done()
  })
})
describe('aircast(edge cases, good)', function () {
  it('Shoud evaluate edge cases', function (done) {
    expect(aircast(0, 'o3_8h')).to.equal(0)
    expect(aircast(-1, 'o3_8h')).to.equal(null)
    expect(aircast(null, 'o3_8h')).to.equal(null)
    expect(aircast(1000, 'o3_8h')).to.equal(null)
    expect(aircast(undefined, 'o3_8h')).to.equal(null)
    done()
  })
})
