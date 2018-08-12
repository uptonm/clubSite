import React from 'react'

const ProfileCard = ({ user }) => {
    return (
        <div className="card bg-white col-4 float-pad">
            <img className="rounded-circle mx-auto d-block img-fluid" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="John Doe" />
            <div className='float-pad-top'>
                <h3 className="text-center text-primary">{user.first} {user.last}</h3>
                <h5 className='text-center text-secondary'>{user.email}</h5>
            </div>
            <div>
                <p className='text-secondary text-center float-pad-top float-pad-sides'>{user.bio}</p>
            </div>
            <div className="float-pad-top">
                <a href={`mailto:${user.email}`} className="btn btn-primary btn-lg float-left"><i className="far fa-paper-plane soft-pad-right"></i> Send Email</a>
                <a href='https://discord.gg/9jVfWkS' className="btn btn-secondary btn-lg float-right"><i className="fab fa-discord soft-pad-right"></i> Discord</a>
            </div>
        </div>
    )
}

export default ProfileCard