import React from 'react'

class WeatherData extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.location.state !== undefined) {
            this.state = {
                postalCode: this.props.location.state.postalCode,
                city: 'Loading...',
                currentTemp: 'Loading...',
                feelsTemp: 'Loading...',
                minTemp: 'Loading...',
                maxTemp: 'Loading...',
                country: 'Loading...',
                description: 'Loading...',
                icon: '02d',
                loading: true,
                invalidPostal: false,
                tempFormat: 'C',
                tempFormatText : 'Farenheight'
            }
        }
    }

    componentDidMount() {
        if (this.props.location.state !== undefined) {
            this.loadPage();
        }
    }

    loadPage = () => {
        fetch("http://localhost:3000/GetWeatherData", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                postalCode: this.state.postalCode
            },
        }).then((response) => {
            response.json().then((data) => {
                if (data['cod'] === '400') {
                    this.setState({
                        invalidPostal: true,
                        loading: false
                    })
                }
                else {
                    this.setState({
                        postalCode: this.props.location.state.postalCode,
                        city: data['cityName'],
                        currentTemp: data['temp'],
                        feelsTemp: data['feel'],
                        minTemp: data['tempMin'],
                        maxTemp: data['tempMax'],
                        country: data['country'],
                        description: data['descrition'],
                        icon: data['icon'],
                        loading: false
                    })
                }
            })
        })
    }

    convertToF = (temp) => {
        let far = (temp * 9 / 5) + 32;
        return far.toFixed(2);
    }

    convertToC = (temp) => {
        let cel = (temp - 32) * 5 / 9;
        return cel.toFixed(2);
    }

    tempConverter = () => {
        if (this.state.tempFormat === 'C') {
            this.setState({
                tempFormat: 'F',
                currentTemp: this.convertToF(this.state.currentTemp),
                feelsTemp: this.convertToF(this.state.feelsTemp),
                minTemp: this.convertToF(this.state.feelsTemp),
                maxTemp: this.convertToF(this.state.feelsTemp),
                tempFormatText: 'Celcius'
            })
        }
        else {
            this.setState({
                tempFormat: 'C',
                currentTemp: this.convertToC(this.state.currentTemp),
                feelsTemp: this.convertToC(this.state.feelsTemp),
                minTemp: this.convertToC(this.state.feelsTemp),
                maxTemp: this.convertToC(this.state.feelsTemp),
                tempFormatText: 'Farenheight'
            })
        }
    }

    render() {
        let location = `${this.state.city},${this.state.country}`
        let iconUrl = `https://openweathermap.org/img/wn/${this.state.icon}@2x.png`
        if (this.props.location.state !== undefined) {
            if (!this.state.loading) {
                if (!this.state.invalidPostal) {
                    return (
                        <div className='detailedDay'>
                            <h1>Weather Data for {location}</h1>
                            <div>
                                <div className="currentWeatherBlock">
                                    <img src={iconUrl} alt="currentWeatherIcon" />
                                    <p><strong>{this.state.currentTemp}°C</strong></p>
                                    <p><strong>{this.state.description}</strong></p>
                                </div>
                                <p><strong>Feels Like:</strong></p>
                                <p>{this.state.feelsTemp}°C</p>
                                <p><strong>Min Temperature:</strong></p>
                                <p>{this.state.minTemp}°C</p>
                                <p><strong>Max Temperature:</strong></p>
                                <p>{this.state.maxTemp}°C</p>
                            </div>
                            <button onClick={this.tempConverter}>Switch To {this.state.tempFormatText}</button>
                        </div>
                    );
                }
                else {
                    return (
                        <div className='detailedDay'>
                            <h1>Invalid Postal Code</h1>
                        </div>
                    )
                }
            }
            else {
                return (
                    <div className='detailedDay'>
                        <h1>Loading Data for postal code {this.state.postalCode}</h1>
                    </div>
                )
            }
        }
        else {
            return (
                <div>
                    <h1>No Postal Code Provided</h1>
                </div>
            );
        }
    }
}

export default WeatherData;