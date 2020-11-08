import React from 'react'

class NotFound extends React.Component{

    render(){
        return(
            <div className='errorPage'>
                <h1>Error 404:Page Not Found</h1>
                <p>The page you requested does not exist. :(</p>
                <img src='sadCloud.png' alt='sadCloud'/>
            </div>
        )
    }
}

export default NotFound;