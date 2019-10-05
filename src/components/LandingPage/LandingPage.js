import React, { Component } from 'react';
import './LandingPage.css';
import Nav from '../Nav/Nav'

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
    let signupPostURL = `http://localhost:8000/api/signup`
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
          <section className="description">Description</section>
          {/* <section className="search-bar">
             <button type="submit">Search Bar </button>
          <input type="text" onChange={this.handleInput} value={this.state.searchQuery}/>
          </section> */}
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