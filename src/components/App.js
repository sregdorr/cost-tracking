import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import logo from '../logo.svg';
import './App.css';
import TestPage from "./TestPage";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">My name is Russ</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/test'>Test Route</Link>
        <Route path={'/test'} component={TestPage} />
      </div>
    );
  }
}

export default App;
