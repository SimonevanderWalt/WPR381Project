import React from 'react'

import { Redirect } from 'react-router-dom';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            postalCode: ""
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
                pathname: '/current-weather',
                state: { postalCode: this.state.postalCode }
            }} />
        }
        else {
            return (
                <div className="zipDiv">
                    <h1 className="heading">Get Weather Forecast</h1>
                    <p>Enter a valid South African Postal Address</p>
                    <div>
                        <br/>
                        <input type="text" placeholder="EnterPostalCode" autoFocus onChange={this.changePostal} />
                        <br/>
                        <button type="button" formAction='Weather' onClick={this.buttonClick}>Get Weather Forecast</button>
                        <span className="msg"></span>
                    </div>
                </div>
            )
        }
    }
}

export default Main