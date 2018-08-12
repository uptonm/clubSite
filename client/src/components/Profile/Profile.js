import React, { Component } from 'react'
import { fetchUserById } from './actions/fetchUser'
import ProfileCard from './ProfileCard'
import ContactWrapper from '../ContactForm/ContactWrapper'
import axios from 'axios'
// import pushEdits from './actions/pushEdits'



class Profile extends Component {
    state = {
        user: {}
    }
    componentDidMount = async () => {
        //console.log(this.props)
        const rootURL = '/profile/'
        const id = this.props.location.pathname.substring(rootURL.length)
        const res = await fetchUserById(id)
        this.setState({ user: res.data[0] })
    }

    renderContent() {
        switch (this.state.user.hasOwnProperty('first')) {
            case true:
                return (
                    <ProfileCard user={this.state.user} />
                )
            default:
                return
        }
    }

    pushEdits(values) {
        console.log(values);
        // Call put req with updated values as body
    }

    render() {
        return (
            <div className='container'>
                <div className="row float-pad">
                    {this.renderContent()}
                    <div className="col-8">
                        <div className="card" style={{height:'100%'}}>
                            <ContactWrapper showResults={this.pushEdits}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
