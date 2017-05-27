import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home.js';
import Item from './Item.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

          <Link to="/">Home</Link> |&nbsp;
          <Link to="/item/10">Item 10</Link>

          <Route exact path="/" component={Home} />
          <Route path="/item/:itemId" component={Item} />

        </div>
      </Router>
    );
  }
}

export default App;
