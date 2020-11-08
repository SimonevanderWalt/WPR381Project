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
                loading: true
            }
        }

    }

    componentDidMount() {
        if (this.props.location.state !== undefined) {
            this.loadPage();
        }
    }

    loadPage = () => {
        fetch("localhost:3000/GetWeatherData",{
            method:'get',
            headers: new Headers({
                postalCode:this.state.postalCode
            })
        }).then((response)=>{
            let data = response.json();
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
                loading:false
            })
            
        })
    }



    render() {
        let location = `${this.state.city},${this.state.country}`
        let iconUrl = `https://openweathermap.org/img/wn/${this.state.icon}@2x.png`
        if (this.props.location.state !== undefined) {
            if (!this.state.loading) {
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
                    </div>
                );
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