let express = require("express");
let router = express.Router();
let apiData = require('../APIData');

router.post('/',(req,res)=>{
    let zip = req.header('postalCode');
    apiData.GetApiZip(zip).then((response)=>{
        res.send(JSON.stringify(response));
    })
    
});

module.exports = router;