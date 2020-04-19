const mongoose = require('mongoose');

const city = new mongoose.Schema({
    city: {
        type:String
    },
    state: {
        type:String
    }
})

module.exports = city = mongoose.model('city', city);