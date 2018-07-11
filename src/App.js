import React, { Component } from 'react';
import { Button } from 'antd';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Ant-design</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br />
          <Button type="primary">Click Me!</Button>
        </p>
      </div>
    );
  }
}

export default App;
