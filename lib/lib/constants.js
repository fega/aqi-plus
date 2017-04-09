/**
 * EPA AQI constants
 * O3: https://www.epa.gov/sites/production/files/2015-10/documents/20151001_air_quality_index_updates.pdf
 * @type {Object}
 */
const constants = {
  units: {
    pst: 'mg/m3',
    pm10: 'mg/m3',
    pm25: 'mg/m3',
    so2: 'ug/m3',
    no2: 'ug/m3',
    o3: 'ug/m3',
    co: 'ug/m3',
    ch4: 'ug/m3',
    nh3: 'ug/m3'
  },
  aqi_colors: [
    {
      value: [0, 50],
      color: '00c853' // green
    }, {
      value: [51, 100],
      color: '00c853' // yellow
    }, {
      value: [101, 150],
      color: 'ff9100' // orange
    }, {
      value: [151, 200],
      color: 'd50000' // red
    }, {
      value: [201, 300],
      color: 'd50000' // purple
    }, {
      value: [301, 301],
      color: '4e342e' // maroon
    }, {
      value: [401, 500],
      color: '4e342e' // maroon
    }],
  aqi_ranges: {
    o3_8h: [
      {
        value: [0, 50],
        range: [0, 54]
      }, {
        value: [51, 100],
        range: [55, 70]
      }, {
        value: [101, 150],
        range: [71, 85]
      }, {
        value: [151, 200],
        range: [86, 105]
      }, {
        value: [201, 300],
        range: [106, 200]
      }, {
        value: [301, 501],
        range: [375, 600]
      }], // ppm,
    o3_1h: [
      {
        value: [101, 150],
        range: [125, 164]
      }, {
        value: [151, 200],
        range: [165, 204]
      }, {
        value: [201, 300],
        range: [205, 404]
      }, {
        value: [301, 400],
        range: [405, 504]
      }, {
        value: [401, 500],
        range: [505, 604]
      }], // ppm
    pm10_24h: [
      {
        value: [0, 50],
        range: [0, 54]
      }, {
        value: [51, 100],
        range: [55, 154]
      }, {
        value: [101, 150],
        range: [155, 254]
      }, {
        value: [151, 200],
        range: [255, 354]
      }, {
        value: [201, 300],
        range: [355, 424]
      }, {
        value: [301, 400],
        range: [425, 505]
      }, {
        value: [401, 500],
        range: [505, 604]
      }], // ug/m3
    pm25_24h: [
      {
        value: [0, 50],
        range: [0, 12]
      }, {
        value: [51, 100],
        range: [12.1, 35.4]
      }, {
        value: [101, 150],
        range: [35.5, 55.4]
      }, {
        value: [151, 200],
        range: [55.5, 150.4]
      }, {
        value: [201, 300],
        range: [150.5, 250.4]
      }, {
        value: [301, 400],
        range: [250.5, 350.4]
      }, {
        value: [401, 500],
        range: [350.5, 500.4]
      }], // ug/m3
    co_8h: [
      {
        value: [0, 50],
        range: [0, 4.4]
      }, {
        value: [51, 100],
        range: [4.5, 9.4]
      }, {
        value: [101, 150],
        range: [9.5, 12.4]
      }, {
        value: [151, 200],
        range: [12.5, 15.4]
      }, {
        value: [201, 300],
        range: [15.5, 30.4]
      }, {
        value: [301, 301],
        range: [30.5, 40.4]
      }, {
        value: [401, 500],
        range: [40.5, 50.4]
      }],
    so2_24h: [
      {
        value: [0, 50],
        range: [0, 0]
      }, {
        value: [51, 100],
        range: [0, 0]
      }, {
        value: [101, 150],
        range: [0, 0]
      }, {
        value: [151, 200],
        range: [201, 304]
      }, {
        value: [201, 300],
        range: [305, 604]
      }, {
        value: [301, 400],
        range: [605, 804]
      }, {
        value: [401, 500],
        range: [805, 1004]
      }],
    so2_1h: [
      {
        value: [0, 50],
        range: [0, 35]
      }, {
        value: [51, 100],
        range: [36, 75]
      }, {
        value: [101, 150],
        range: [76, 185]
      }, {
        value: [151, 200],
        range: [186, 304]
      }, {
        value: [201, 300],
        range: [201, 304]
      }, {
        value: [301, 400],
        range: [0, 0]
      }, {
        value: [401, 500],
        range: [0, 0]
      }],
    no2_1h: [
      {
        value: [0, 50],
        range: [0, 53]
      }, {
        value: [51, 100],
        range: [54, 100]
      }, {
        value: [101, 150],
        range: [101, 360]
      }, {
        value: [151, 200],
        range: [361, 649]
      }, {
        value: [201, 300],
        range: [650, 1249]
      }, {
        value: [301, 400],
        range: [1249, 1649]
      }, {
        value: [401, 500],
        range: [1650, 2049]
      }
    ]
  }
}
module.exports = constants
