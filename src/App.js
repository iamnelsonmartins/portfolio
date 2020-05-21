import React, { Component } from 'react';

import './App.scss';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Footer />
      </>
    );
  }
}

export default App