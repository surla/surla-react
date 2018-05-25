import React, { Component } from 'react';
import './App.css';

import Logo from './components/Logo'
import Header from './components/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Header />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
