let express = require("express");
let router = express.Router();
let apiData = require('../APIData');

router.get('/',(req,res)=>{
    let data = apiData.getCall();
    res.send(data);
   
});

module.exports = router;