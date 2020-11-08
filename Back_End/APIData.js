console.log("API Starting");
const fetch = require("node-fetch")

let baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
let appId = "88885f5108274b5c72dadcd53f9dafd4";

function getCall(zip){

    let url = `${baseUrl}appid=${appId}&zip=${zip},ZA&units=metric`;
    fetch(url)
    .then( response => response.json())
    .then( (data) => {
        let res = {
        temp:data['main']['temp'],
        feel:data['main']['feels_like'],
        tempMin:data['main']['temp_min'],
        tempMax:data['main']['temp_max'],
        cityName: data['name'], 
        country: data['sys']['country'],
        description: data['weather'][0]['description'],
        icon:data['weather'][0]['icon']}
        return res
    })
    .catch((err) => {
        if (err) {
            return 'incorrect zipcod value'
        }
    });
}

module.exports = {
    getCall
}

