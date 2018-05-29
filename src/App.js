import React, { Component } from 'react';
import './App.css';

import Logo from './components/Logo';
import Header from './components/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Header />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
