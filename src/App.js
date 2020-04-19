import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.scss';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Error from './components/Error/Error'

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Content} exact />
          <Route component={Error} />
        </Switch>
        <Footer />
      </>

    );
  }
}

export default App