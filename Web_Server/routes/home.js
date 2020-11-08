var express = require('express');
var router = express.Router();

let zipCode ='';

router.post('/home', function(req, res, next) {
    zip = req.body.zipCode;
   
  });

  function zip(){
    return zipCode
  }

  module.exports = {
      router: router,
      zip: zip
    };