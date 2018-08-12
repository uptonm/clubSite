import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header/Header'
import Splash from './Splash/Splash'
import Newsletter from './Newsletters/Newsletter'
import ContactWrapper from './ContactForm/ContactWrapper';
import Profile from './Profile/Profile'

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        return (
            <BrowserRouter >
                <div>
                    <Route path='/' component={Header} />
                    <Route exact path='/' component={Splash} />
                    <Route path='/newsletter' component={Newsletter} />
                    <Route path='/emaillist' component={ContactWrapper} />
                    <Route path='/profile/:id' component={Profile} />
                </div>
            </BrowserRouter>
        )
    }
}

export default connect(null, actions)(App)