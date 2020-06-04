import React, { Component } from 'react';
import ProjectList from './projects.list.component'
import axios from 'axios'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      loading: true
    }
  }

  componentDidMount() {
    const URL = 'https://wizard-unicorn.glitch.me/projects'
    axios.get(URL)
      .then(res => {
        this.setState({
          loading: false,
          projects: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { loading, projects } = this.state
    return (
      <section className='section' id='content'>
        <div className='container'>
          <h1 className='title is-3 intro'>Projects</h1>
          <div className="columns is-multiline" id='projects'>
            {loading ? <progress className='progress' max='100'>Loading</progress> :
              <ProjectList data={projects} />}
          </div>
        </div>
      </section>
    );
  }
}