const express = require("express");
const app = express();
const connectDB = require("./DBconnection/connection");

//middleware to connect files from public folder
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//import route
const weather = require('./routes/weather');
const port = process.env.PORT || 3000;

//use view engine
app.set('view engine', 'ejs');

//middleware route
app.use('/' ,weather);

//connected to the database
connectDB();

app.listen(port, () => {
    console.log(`The server is running at port ${port}`);
})