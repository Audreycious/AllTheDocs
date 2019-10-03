import React, { Component } from 'react'
import './App.css'
import MainPage from './components/MainPage/MainPage'
import { withRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './components/LoginPage/LoginPage'
import LandingPage from "./components/LandingPage/LandingPage"



class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            exact path="/"
            component={LandingPage}
          />
          <Route 
            path="/main-page"
            render={({history}) => <MainPage history={history} /> }
          />
          <Route 
            path="/login-page" 
            render={({history}) => <LoginPage history={history}/> }
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
