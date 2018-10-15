import React from 'react'

const Footer = () => {
    return (
        <footer className="footer bg-primary">
            <div className="container text-center align-middle" style={{display:'grid', gridTemplateColumns:'auto 40px 40px 40px 40px auto'}}>
                <span></span>
                <a href=""><i className="fab fa-github footer-icon"></i></a>
                <a href=""><i className="fab fa-youtube footer-icon"></i></a>
                <a href=""><i className="fab fa-twitch footer-icon"></i></a>
                <a href=""><i className="far fa-calendar-alt footer-icon"></i></a>
                <span></span>
            </div>
        </footer>

    )
}

export default Footer