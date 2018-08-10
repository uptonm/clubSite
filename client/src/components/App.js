import React, { Component } from 'react'
import Header from './Header/Header'
import Splash from './Splash/Splash'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Splash />
            </div>
        )
    }
}

export default App