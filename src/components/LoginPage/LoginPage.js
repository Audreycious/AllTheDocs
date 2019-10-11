import React from 'react';
import './LoginPage.css'
import Nav from "../Nav/Nav";
import config from '../../config'


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                username: '',
                password: ''
            }
    }

    handleFormSubmit = (event) => {
        //placeholder for sending api call to the server to validate the user
        event.preventDefault();
        let username = this.state.username
        let password = this.state.password
        let loginURL = `${config.API_ENDPOINT}api/login`
        fetch(loginURL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({username, password})
        })
        .then(response => {
            if (!response.ok) {
                alert(`Something is wrong`)
            }
            return response.json()
        })
        .then(responseJson => {
            console.log(responseJson)
            window.localStorage.setItem('AllTheDocs-username', responseJson.user.username)
            window.localStorage.setItem('AllTheDocs-password', responseJson.user.password)
            return this.props.history.push('/main-page')
        })
        // let users = testUser
        // let usernameFound = users.find(entry => entry.username === username)
        // if (!(!!usernameFound)) {
        //     return alert(`Username ${username} not found`)
        // }
        // let passwordsMatch = usernameFound.password.toLowerCase() === password.toLowerCase()
        // console.log(passwordsMatch);
        // if (!passwordsMatch) {
        //     return alert(`Incorrect password entered`)
        // }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <div className="login-page">
                <Nav/>
                <main>
                    <section className="login-container border">
                        <form onSubmit={this.handleFormSubmit} >
                            <legend>Login</legend>
                            <label>Username:</label>
                            <input type="text" onChange={this.handleInputChange} value={this.state.username} name="username" />
                            <label>Password:</label>
                            <input type="password" onChange={this.handleInputChange} value={this.state.password} name = "password" />
                            <button className="login-submit button" type="submit" onClick={this.handleClick}>Submit</button>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}
export default LoginComponent;