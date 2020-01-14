import React, { Component, useState } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            url: 'https://github.com/LiviuNicu/angular-fmi-lab/user/register'
        };
    }
    updateEmail = e => {
        this.setState({
            email: e.target.value
        });
    }

    updateUsername = e => {
        this.setState({
            username: e.target.value
        });
    }

    updatePassword = e => {
        this.setState({
            password: e.target.value
        });
    }

    updateConfirmPassword = e => {
        this.setState({
            confirmPassword: e.target.value
        });
    }

    submitData = async e => {
        e.preventDefault();

        const {url, email, username, password, confirmPassword} = this.state;

        const data ={
            name: username,
            email: email,
            passwords: {
                password: password,
                confirm_password: confirmPassword
            }
        };

        console.log(data);
        /*const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
            
        });

        console.log(response);*/

        this.setState({
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        });

        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center p-3" style={divStyle}>
            <form onSubmit={this.submitData} className="border pt-5 pb-3 pl-5 pr-5 bg-light rounded">
                <div className="pb-4">
                    <h2 style={hStyle}>Register</h2>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Username..." className="form-control" onChange={this.updateUsername}/>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email..." className="form-control" onChange={this.updateEmail}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password..." className="form-control" onChange={this.updatePassword}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Confirm password..." className="form-control" onChange={this.updateConfirmPassword}/>
                </div>
                <div className="form-group text-center pt-3">
                <button type="submit" className="btn btn-primary">Create account!</button>
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