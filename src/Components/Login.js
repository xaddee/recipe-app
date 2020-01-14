import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            url: 'https://github.com/LiviuNicu/angular-fmi-lab/login'
        }
    }

    updateEmail = e => {
        this.setState({
            email: e.target.value
        });
    }

    updatePassword = e => {
        this.setState({
            password: e.target.value
        });
    }

    submitData = async e => {
        e.preventDefault();

        const {url, email, password} = this.state;

        const data = {
            email: email,
            password: password
        };
        console.log(data);

        /*const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });

        console.log(response);*/

        localStorage.setItem("email", email.toString());
        localStorage.setItem("loggedIn", "true");
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center p-3" style={divStyle}>
                    <form onSubmit={this.submitData} className="border pt-5 pb-3 pl-5 pr-5 bg-light rounded">
                        <div className="pb-4">
                            <h2 style={hStyle}>Login</h2>
                            <p>Not an user? Register <Link to="/Register">here</Link> for free</p>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email..." className="form-control" onChange={this.updateEmail}/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password..." className="form-control" onChange={this.updatePassword}/>
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
