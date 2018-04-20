import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Home, WeAreHuman, WeWorkTogether, WeChange } from './pages';

import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <nav className="App-navigation">
            <ul>
              <li><Link to="/">Welcome</Link></li>
              <li><Link to="/we-are-human">We are human</Link></li>
              <li><Link to="/we-work-together">We work together</Link></li>
              <li><Link to="/we-change">We change</Link></li>
            </ul>
          </nav>

          <main className="App-content">
            <Route exact path="/" component={Home} />
            <Route path="/we-are-human" component={WeAreHuman} />
            <Route path="/we-work-together" component={WeWorkTogether} />
            <Route path="/we-change" component={WeChange} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
