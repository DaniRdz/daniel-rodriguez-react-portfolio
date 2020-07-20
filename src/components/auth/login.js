import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        console.log('handleSumit', event);
        
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ACCES YOUR DASHBOARD</h1>

                <form onSubmit = {this.handleSubmit}>
                    <input 
                        type = 'email'
                        name = 'email'
                        placeholder = 'Your email'
                        value = {this.state.email}
                        onChange = {this.handleChange}
                    />

                    <input 
                        type = 'password'
                        name = 'password'
                        placeholder = 'Your Password'
                        value = {this.state.password}
                        onChange = {this.handleChange}
                    />

                    <div>
                        <button type = 'submit'>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}