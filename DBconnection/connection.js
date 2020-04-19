const mongoose = require('mongoose');

const url = "mongodb+srv://dbWeather:Weather123456@cluster0-8q3nj.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = () => {
        mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));
    
    
}

module.exports = connectDB;

