import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header/Header'
import Splash from './Splash/Splash'
import Newsletter from './Newsletters/Newsletter'
import ContactWrapper from './ContactForm/ContactWrapper';

class App extends Component {
    render() {
        return (
            <BrowserRouter >
                <div>
                    <Route path='/' component={Header} />
                    <Route exact path='/' component={Splash} />
                    <Route path='/newsletter' component={Newsletter} />
                    <Route path='/emaillist' component={ContactWrapper} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App