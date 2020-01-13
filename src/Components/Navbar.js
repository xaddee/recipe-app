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

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button> 

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Register" className="nav-link">Register</Link>
                        </li>
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