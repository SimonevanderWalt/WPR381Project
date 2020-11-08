import React from 'react'

import { Redirect } from 'react-router-dom';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect:false,
            postalCode:""
        }
    }

    changePostal = (event) => {
        this.setState({
            postalCode: event.target.value
        })
    }

    buttonClick = () => {
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/Weather',
                state: { postalCode: this.state.postalCode }
            }} />
        }
        else {
            return (
                <section className="top-banner">
                    <div className="container">
                        <h1 className="heading">Weather App</h1>
                        <div>
                            <input type="text" placeholder="EnterPostalCode" autoFocus onChange={this.changePostal} />
                            <button type="button" formAction='Weather' onClick={this.buttonClick}>Get Weather Forecast</button>
                            <span className="msg"></span>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default Main