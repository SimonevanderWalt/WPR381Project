/*This file will be used to serve the website directly. There should be an express server that listens on a port for requests and serves
the build optimized react app*/

/*This File represents the webserver that will serve our webapp*/

let express = require('express');

let path = require('path');
let app = express();

console.log("Web Server Starting")

let port = process.env.PORT || 42069 //EYYYY LMAO
let buildPath = path.join(__dirname,'../Front_End/weather-app/build');


app.use(express.static(buildPath));


app.get('/',(req, res)=>{
    res.sendFile(path.resolve(buildPath+"/index.html"))
});
app.get('*',(req, res)=>{
    res.sendFile(path.resolve(buildPath+"/index.html"))
});


app.listen(port, (err)=>{
    if (err) {
        console.log("An Error occured starting the server");
    }
    else{
        console.log(`Web Server Server running on http://localhost:${port}`);
    }
})