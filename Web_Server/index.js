/*This file will be used to serve the website directly. There should be an express server that listens on a port for requests and serves
the build optimized react app*/

/*This File represents the webserver that will serve our webapp*/

let express = require('express');
const logger = require('morgan');
let path = require('path');
let app = express();
let backend = require("../Back_end/index.js");
let bodyParser = require("body-parser");

let homeRoute = require(".routes/home.js");
let currRoute = require(".routes/currentWeather.js")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());

console.log("Web Server Starting")

let port = process.env.PORT || 42069 //EYYYY LMAO
let buildPath = path.join(__dirname,'../Front_End/weather-app/build');


app.use(express.static(buildPath));

app.use("/home", homeRoute.router);
currRoute.zipGet(homeRoute.zip(), backend.getCall())

app.use("/currentWeather", currRoute.router);

app.get((req, res)=>{
    res.sendFile(path.resolve(buildPath+"/index.html"))
});


app.listen(port, (err)=>{
    if (err) {
        console.log("An Error occured starting the server");
    }
    else{
        console.log(`Server running on http://localhost:${port}`);
    }
})