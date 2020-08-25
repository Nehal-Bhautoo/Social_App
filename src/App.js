import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            React <code>App.js</code> - Nehal
          </p>
          <a
              className="App-link"
              href="https://github.com/Nehal-Bhautoo"
              target="_blank"
              rel="noopener noreferrer"
          >
            Git Repo
          </a>
        </header>
      </div>
    );
  }
}

export default App;
