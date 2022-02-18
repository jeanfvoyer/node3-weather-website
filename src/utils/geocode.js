const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiamZ2b3llciIsImEiOiJja3dpMDFmeGExM2k0Mm9xd3ltMHFhM3JrIn0.66hj4QTTMzAIGjX7xAIIpg&limit=1'

    request({url, json: true}, (error, { body }= {}) => {
    
        if (error) {
            callback('Unable to connect to geocode')
        } else if (body.features.length === 0) {
            callback('Unable to find a location')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode