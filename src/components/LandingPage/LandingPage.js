import React, { Component } from 'react';
import './LandingPage.css';
import Nav from '../Nav/Nav'
import config from '../../config'


class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      loading: false, 
    }
  }
  
  handleLogin = (e) => {
    this.props.history.push('/login-page');
  }

  handleInput = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  } 

  handleSubmit = (e) => {
    // grab the value of the username 
    // grab the value of the password
    e.preventDefault();
    this.setState({
      loading: true
    })
    let signupPostURL = `${config.API_ENDPOINT}api/signup`
    fetch(signupPostURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: this.state.username, password: this.state.password }),
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
      let token = `${responseJson[0].username}:${responseJson[0].password}`
      window.localStorage.setItem('AllTheDocs-key', token)
      return this.props.history.push('/main-page')
    })
    .catch(error => {alert(error.error)})
  }

  render () {
    return (
    <div className="landing-page">
          <Nav handleLogin={this.handleLogin} />
          <main>
          <section className="description">
            <p>
              A common issue new developers run into is having to search multiple sources for how to use methods and functions. AllTheDocs wants to reduce research time by aggregating information from several sources including Stack Overflow, Youtube, and our Database of Docs.
              <br/>
              <br/>
              To test it out, login using (Username: Demo / Password: Demo). Submit a search for a common Javascript coding term (e.g. fetch(), .concat, String). You will see questions from StackOverflow, Documentation from MDN and React, and videos from Youtube.
            </p>
          </section>

          <section className="signup">
              <form action="" onSubmit={this.handleSubmit}>
                  <legend>Sign Up</legend>
                  <label htmlFor="username">Username:</label>
                  <input name="username" required type="text"  placeholder="Enter username" onChange={this.handleInput} value={this.state.username}/>
                  <label htmlFor="password">Password:</label>
                  <input name="password" required type="password"  placeholder="Enter password" onChange={this.handleInput} value={this.state.password}/>
                  {this.state.loading ? <p className="signup-submit button">Signing you up!</p> : <button type="submit" className="signup-submit button">Submit</button>}
              </form>
          </section>
          </main>
        </div>
    )
  }
}

export default LandingPage;