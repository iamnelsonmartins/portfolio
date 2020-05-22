import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.scss';

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

import Content from './components/Content/Content'
import Projects from './components/Projects/Projects'

const history = createBrowserHistory()


class App extends Component {
  render() {
    return (
      <Router history={history}>
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