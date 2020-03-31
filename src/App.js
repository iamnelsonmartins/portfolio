import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'
import Projects from './components/Projects/Projects'
import About from './components/About/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>

    );
  }
}

export default App