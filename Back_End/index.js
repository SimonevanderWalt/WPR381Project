let express = require('express');
let app = express();

let port = 3000;

app.use('/GetWeather',require('./Routes'));

//app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, (err)=>{
    if (err) {
        console.log(`Failed To start API Server`);
    }
    else{
        console.log(`Server Running on port:${port}`);
    }
})