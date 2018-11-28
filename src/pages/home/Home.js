import React, { Component } from 'react';
import logo from './logo.svg';
import './home.css';

import Headers from '../../components/header/Header'
class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Headers/>
        </header>
      </div>
    );
  }
}

export default Home;
