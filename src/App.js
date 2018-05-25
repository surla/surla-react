import React, { Component } from 'react';
import './App.css';

import Logo from './components/Logo'
import Header from './components/Header';
import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
