import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center bg-light w-50 h-50 flex-column ml-auto mr-auto mt-5 mb-3 p-3">
                <h1>About this app</h1>
                <p>Info about the app</p>
                <p>More info</p>
                <p>More More info</p>
                
                <h1>Contact:</h1>
                <p>email: asd@gmail.con</p>
                <p>phone: 0728 123 123</p>
                
                <div className="border p-3 rounded">
                    <h3>Submit a bug</h3>

                    <form className="mb-3 mt-3">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Title..."/>
                        </div>
                        <div className="form-group">
                            <textarea class="form-control" row="3" placeholder="Details..."></textarea>
                        </div>
                        <button type="submit" className="btn dark-blue-color text-light ml-auto mr-auto">Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}
