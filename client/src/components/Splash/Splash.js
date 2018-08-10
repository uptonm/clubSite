import React, { Component } from 'react'
import fetchHeader from './actions/action'

class Splash extends Component {
    state = {
        header: '',
        subheader: '',
        message: ''
    }

    componentDidMount = async () => {
        const response = await fetchHeader()
        this.setState({
            header: response.header,
            subheader: response.subheader,
            message: response.message
        })
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">{this.state.header && this.state.header}</h1>
                <p className="lead">{this.state.subheader && this.state.subheader}</p>
                <hr className="my-4" />
                <p>{this.state.message && this.state.message}</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
                </p>
            </div>
        )
    }
}

export default Splash