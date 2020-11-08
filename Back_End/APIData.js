console.log("API Starting");
const { response } = require("express");
const fetch = require("node-fetch")

let baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
let appId = "88885f5108274b5c72dadcd53f9dafd4";

function CallAPIZIP(zip) {
    APIByZip(zip).then((response) => {
        let data = response.json();
        let res = {
            temp: data['main']['temp'],
            feel: data['main']['feels_like'],
            tempMin: data['main']['temp_min'],
            tempMax: data['main']['temp_max'],
            cityName: data['name'],
            country: data['sys']['country'],
            description: data['weather'][0]['description'],
            icon: data['weather'][0]['icon']
        }
        return res
    }).catch((err) => {
        return err
    })
}

function APIByZip(zip) {
    return new Promise((resolve, reject) => {
        let currentWeather = '';
        https.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},ZA&appid=${appId}`, (res, req) => {
            res.on('data', (chunk) => {
                currentWeather += chunk;
            })
            res.on('end', () => {
                resolve(currentWeather);
            })
            res.on('error', () => {
                reject("Invalid Postal Code")
            })
        })
    })
}

module.exports = {
    getCall
}

