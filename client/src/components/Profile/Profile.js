import React, { Component } from 'react'
import { fetchUserById } from './actions/fetchUser'

class Profile extends Component {
    state = {
        user: {}
    }
    componentDidMount = async () => {
        const rootURL = '/profile/'
        const id = this.props.location.pathname.substring(rootURL.length)
        //console.log(this.props)
        const res = await fetchUserById(id)
        this.setState({ user: res.data[0] })
        console.log(this.state)
    }

    renderContent() {
        switch(this.state.user) {
            case {}:
                return 
            default:
                return (
                     <div className="card bg-white col-4 float-pad">
                        <img className="rounded-circle mx-auto d-block img-fluid" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="John Doe" />
                        <div className='float-pad-top'>
                            <h3 className="text-center text-primary">{this.state.user.first} {this.state.user.last}</h3>
                            <h5 className='text-center text-secondary'>{this.state.user.email}</h5>
                        </div>
                        <div className="float-pad-top">
                            <a href={`mailto:${this.state.user.email}`} className="btn btn-primary btn-lg float-left"><i className="far fa-paper-plane soft-pad-right"></i> Send Email</a>
                            <a href='https://discord.gg/9jVfWkS' className="btn btn-secondary btn-lg float-right"><i className="fab fa-discord soft-pad-right"></i> Discord</a>
                        </div>
                    </div>
                )
        }
    }

  

    render() {
        return (
            <div className='container'>
                <div className="row float-pad">
                    {this.renderContent()}
                    <div className="col-8">
                        <div className="card">
                            hello
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
  
export default Profile;
