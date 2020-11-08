var express = require('express');
var router = express.Router();

let zip =''
let callback = function(){}

function zipGet(z,cb){
    zip = z
    callback = cb
};

router.get('/currentWeather', function(req, res, next){
    res.json(callback(zip))
})

module.exports ={
    zipGet: zipGet,
    router: router
}