console.log("API Starting");
let appId = "88885f5108274b5c72dadcd53f9dafd4";
let https = require('https');

module.exports.GetApiZip = function (zip) {
    return new Promise((resolve, reject) => {
        APIByZip(zip).then((data) => {
            if (data['cod'] === '400' && data['message'] == 'invalid zip code') {
                resolve(data);
            }
            else{
                let res = {
                    cod: 200,
                    temp: CalulateCelciusFromKelvin(data['main']['temp']),
                    feel: CalulateCelciusFromKelvin(data['main']['feels_like']),
                    tempMin: CalulateCelciusFromKelvin(data['main']['temp_min']),
                    tempMax: CalulateCelciusFromKelvin(data['main']['temp_max']),
                    cityName: data['name'],
                    country: data['sys']['country'],
                    description: data['weather'][0]['description'],
                    icon: data['weather'][0]['icon']
                }
                resolve(res);
            }
        }).catch((err) => {
            reject(err);
        })
    })
}

function CalulateCelciusFromKelvin(kelvinVal) {
    let celcius = kelvinVal - 273.15;
    let rounded = Math.round(celcius);
    return rounded;
}

function APIByZip(zip) {
    return new Promise((resolve, reject) => {
        let currentWeather = '';
        https.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},ZA&appid=${appId}`, (res, req) => {
            res.on('data', (chunk) => {

                currentWeather += chunk;
            })
            res.on('end', () => {
                let data = JSON.parse(currentWeather);
                resolve(data);
            })
        })
    })
}

