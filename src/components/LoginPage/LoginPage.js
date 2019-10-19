import React from 'react';
import './LoginPage.css'
import Nav from "../Nav/Nav";
import config from '../../config'


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        })
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
            let json = response.json()
            this.setState({
                loading: false
            })
            if (!response.ok) {
                return json.then(Promise.reject.bind(Promise))
            }
            return json
        })
        .then(responseJson => {
            let token = `${responseJson.username}:${responseJson.password}`
            window.localStorage.setItem('AllTheDocs-key', token)
            return this.props.history.push('/main-page')
        })
        .catch(error => {alert(error.error)})
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
                            {this.state.loading ? <p className="login-submit button">Logging you in!</p> : <button className="login-submit button" type="submit" onClick={this.handleClick}>Submit</button>}
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}
export default LoginComponent;