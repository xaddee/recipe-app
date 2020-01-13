import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center p-3" style={divStyle}>
                    <form className="border pt-5 pb-3 pl-5 pr-5 bg-light rounded">
                        <div className="pb-4">
                            <h2 style={hStyle}>Login</h2>
                            <p>Not an user? Register <Link to="/Register">here</Link> for free</p>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Username..." className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password..." className="form-control"/>
                        </div>
                        <div className="form-group text-center pt-3">
                        <button type="submit" className="btn btn-primary">Sign In!</button>
                        </div>
                    </form>
                </div>
        )
    }
}

const divStyle = {
    height: '90%',
    marginTop: "10%"
}

const hStyle = {
    textAlign: 'center',

}
