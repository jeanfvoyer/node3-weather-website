const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6a58f344683bd1b5ccf65b411521f20e&query='+latitude+','+longitude

    request({url, json: true}, (error, { body }= {}) => {
    
        if (error) {
            callback('Unable to connect to weather')
        } else if (body.error){
            callback('Unable to find location')
        } else {
            callback(undefined, body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast