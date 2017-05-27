import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {on: true};

    this.toggleOnOff = this.toggleOnOff.bind(this);
  }

  toggleOnOff() {
    this.setState(prevState => ({
      on: !prevState.on
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" onClick={this.toggleOnOff}>
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/>{this.state.on ? 'ON' : 'OFF'}
        </p>
      </div>
    );
  }
}

export default App;
