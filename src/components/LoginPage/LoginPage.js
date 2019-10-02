import React from 'react';
import './LoginPage.css'

const testUser = [
    {
        username: 'Audrey',
        password: 'Audrey'
    }
]

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
        let users = testUser
        let usernameFound = users.find(entry => entry.username === username)
        if (!(!!usernameFound)) {
            return alert(`Username ${username} not found`)
        }
        let passwordsMatch = usernameFound.password.toLowerCase() === password.toLowerCase()
        console.log(passwordsMatch);
        this.props.history.push('/main-page');
        
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <div className="login-page">
                <nav>Nav</nav>
                <main>
                    <section className="login-container border">
                        <form onSubmit={this.handleFormSubmit} >
                            <label>UserName:</label>
                            <input type="text" onChange={this.handleInputChange} value={this.state.username} name="username" />
                            <label>Password:</label>
                            <input type="password" onChange={this.handleInputChange} value={this.state.password} name = "password" />
                            <button className="btnLogin" type="submit" onClick={this.handleClick}>Login</button>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}
export default LoginComponent;