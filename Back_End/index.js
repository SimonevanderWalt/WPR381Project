let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let cors = require('cors');


let port = 3000;

app.use(cors({origin: '*'}));
app.use('/GetWeatherData',require('./Routes'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(port, (err)=>{
    if (err) {
        console.log(`Failed To start API Server`);
    }
    else{
        console.log(`Server Running on port:${port}`);
    }
})