import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
          case null:
            return;
          case false:
            return ( 
            <ul className='navbar-nav ml-auto'>
              <li>
                <a href='/auth/google' className='btn btn-secondary nav-link'>Login with Google</a>
              </li>
            </ul>
          );
          default:
            return (
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a href={`/profile/${this.props.auth.googleId}`} className='nav-link'>Hi {this.props.auth.first}</a>
              </li>
              <li className='nav-item'>
                <a href='/api/logout' className='btn btn-secondary nav-link'>Log Out</a>
              </li>
            </ul>  
            );
        }
      }
    render() {
        return (
            <div className="bs-component">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className={"nav-item " + ((this.props.location.pathname === '/') ? 'active' : '' )}>
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className={"nav-item " + ((this.props.location.pathname === '/newsletter') ? 'active' : '' )}>
                                <Link className="nav-link" to="/newsletter">Newsletter</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                        </ul>
                            {this.renderContent()}
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps)(Header);