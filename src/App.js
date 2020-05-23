import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import Nav from './components/nav.component'
import Footer from './components/footer.component'
import About from './components/about.component'

import Content from './components/content.component'
import Projects from './components/projects.component'

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/" exact component={Content} />
        <Footer />
      </Router >
    );
  }
}

export default App