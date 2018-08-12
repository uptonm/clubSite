import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return 
            case false:
                console.log(this.props.auth)
                return <h1 className='text-center'>You must be logged in...</h1>
            default:
                return <h1 className='text-center'>Hi <span className='text-success'>{this.props.auth.first}</span>, this section of the site is under construction. Please pardon the appearance.</h1>
        }
    }
    render() {
        return (
            <div className='container'>
                {this.renderContent()}
            </div>
        )
    }
}


function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps)(Profile);