import React, { Component } from 'react';
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
              projects.map((project, index) =>
                <div className="column is-4" key={index}>
                  <div className='column-data has-text-centered'>
                    <p className='column-data-title'>{project.name}</p>
                    <p className='column-data-subtitle'>{project.description}</p>
                    <p className='column-data-desc'>
                      <a href={project.url} target='_blank' rel="noopener noreferrer">code</a> | <a href={project.demo} target='_blank' rel="noopener noreferrer">demo</a>
                    </p>
                  </div>
                </div>
              )}
          </div>
        </div>
      </section>
    );
  }
}