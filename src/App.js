import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage'
import { withRouter, Route } from 'react-router-dom';

import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery : null,
    }
  }
  
  render () {
    return (
      <div className="App">
        <Route 
          path="/"
          render={({history}) => <LandingPage history={history}/> }/>;
      </div>
    );
  }
}

export default withRouter(App);
