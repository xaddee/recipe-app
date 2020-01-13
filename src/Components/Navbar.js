import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    
    render() {
        const {isLoggedIn, userName} = this.props;

        if (isLoggedIn) {
            return (
                <nav className="navbar navbar-expand-md bg-light navbar-light sticky-top" style={navStyle}>
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">AppName</Link>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button> 

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <Link to="/" className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </Link>
                            <Link to="/About" className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </Link>
                            <Link to="/Logout" className="nav-item">
                                <a className="nav-link" href="#">Logout</a>
                            </Link>
                            <li className="nav-item active border-left"><span className="nav-link">Hello, {userName}</span></li>
                        </ul>
                    </div>
                    </div>
                </nav>
            )
        }
        
        return (
            <nav className="navbar navbar-expand-md bg-light navbar-light sticky-top" style={navStyle}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">AppName</Link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button> 

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <Link to="/" className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </Link>
                        <Link to="/About" className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </Link>
                        <Link to="/Login" className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </Link>
                        <Link to="/Register" className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </Link>
                    </ul>
                </div>
            </div>
            </nav>
        )
    }
}

const navStyle = {
    minHeight: '5%'
}