import React, { Component } from 'react';
import './LandingPage.css';
import Nav from '../Nav/Nav'
import config from '../../config'

// const database = [{
//   username: 'blah',
//   password: 'foobar'
// }]

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "", 
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
    // update the values inside the state
    e.preventDefault();
    // if the username and password are entered 
    // push the values to the database
    
    // iterate throught the database 
    // if username exists return an error
    // const usernameFound = !!database.find(entry => entry.username === signinInfo.username);
    // if (usernameFound) {
    //   return alert('Username taken');
    // }

    // database.push(signinInfo);
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
      if (!response.ok) {
        return json.then(Promise.reject.bind(Promise))
      }
      return json
    })
    .then(responseJson => {
      window.localStorage.setItem('AllTheDocsToken', responseJson)
      return this.props.history.push('/login-page')
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
              A common issue developers and programmers in general run into is having to search multiple sources for answers to technical problems. Going through several sites to find one answer can be time consuming. AllTheDocs wants to reduce research time by aggregating information from several sources including Stack Overflow and Youtube.
            </p>
            <p>
              To use AllTheDocs, enter in a search for a common Javascript coding term (e.g. fetch(), .concat, String). You will see StackOverflow, then Documentation from MDN and React, and finally get videos from Youtube.
            </p>
          </section>

          <section className="signup">
              <form action="" onSubmit={this.handleSubmit}>
                  <legend>Sign Up</legend>
                  <label htmlFor="username">Username:</label>
                  <input name="username" required type="text"  placeholder="Enter username" onChange={this.handleInput} value={this.state.username}/>
                  <label htmlFor="password">Password:</label>
                  <input name="password" required type="password"  placeholder="Enter password" onChange={this.handleInput} value={this.state.password}/>
                  <button type="submit">Submit</button>
              </form>
          </section>
          </main>
        </div>
    )
  }
}

export default LandingPage;