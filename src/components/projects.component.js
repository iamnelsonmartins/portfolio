import React, { Component } from 'react';
import ProjectList from './projects.list.component'
import data from '../assets/data.json'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: data.github,
    }
  }

  render() {
    const { projects } = this.state
    return (
      <section className='section' id='content'>
        <div className='container'>
          <h1 className='title is-3 intro'>Projects</h1>
          <div className="columns is-multiline" id='projects'>
            <ProjectList data={projects} />
          </div>
        </div>
      </section>
    );
  }
}