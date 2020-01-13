import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center p-3" style={divStyle}>
            <form className="border pt-5 pb-3 pl-5 pr-5 bg-light rounded">
                <div className="pb-4">
                    <h2 style={hStyle}>Register</h2>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Username..." className="form-control" />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email..." className="form-control" />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password..." className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Confirm password..." className="form-control"/>
                </div>
                <div className="form-group text-center pt-3">
                <button type="button" className="btn btn-primary">Create account!</button>
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