import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './App.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="Three dots logo" />
        <Header />
      </div>
    );
  }
}

export default App;
