import React, { Component } from 'react'
import { fetchUserById } from './actions/fetchUser'
import ProfileCard from './ProfileCard'
import ContactWrapper from '../ContactForm/ContactWrapper'
import axios from 'axios'
// import pushEdits from './actions/pushEdits'



class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
        this.pushEdits = this.pushEdits.bind(this)
        this.getID = this.getID.bind(this)
    }

    getID = () => {
        const rootURL = '/profile/'
        const id = this.props.location.pathname.substring(rootURL.length)
        return id
    }

    componentDidMount = async () => {
        const id = this.getID()
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

    pushEdits = async(values) => {
        console.log(values);
        // Call put req with updated values as body
        const id = await this.getID()
        const body = await values
        axios.put(`/api/users/${id}`, {...body})
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
