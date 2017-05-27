import React, { Component } from 'react';

class Home extends Component {
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
      <div className="Home">
        <p className="App-intro" onClick={this.toggleOnOff}>
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/>{this.state.on ? 'ON' : 'OFF'}
        </p>
      </div>
    );
  }
}

export default Home;
