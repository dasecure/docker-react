import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Sinchew Alarm
          </p>
          <a
            className="App-link"
            href="http://www.sinchewalarm.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            CCTV and Alarm Panel
          </a>
        </header>
      </div>
    );
  }
}

export default App;
