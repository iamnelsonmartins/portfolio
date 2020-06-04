import React, { Component } from 'react';
import { Link } from "react-router-dom";
import pdf from '../assets/curriculum.pdf'
import axios from 'axios'

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      education: [],
      experience: [],
      loading: true
    }
    this.expFunction = this.expFunction.bind(this)
  }

  componentDidMount() {
    const education = 'https://wizard-unicorn.glitch.me/education'
    const experience = 'https://wizard-unicorn.glitch.me/experience'

    const requestEducation = axios.get(education);
    const requestExperience = axios.get(experience);

    axios.all([requestEducation, requestExperience])
      .then(axios.spread((...responses) => {
        this.setState({
          education: responses[0].data,
          experience: responses[1].data,
          loading: false
        });
      }))
      .catch((error) => {
        console.log(error);
      })
  }

  expFunction = () => {
    const { experience } = this.state
    const experienceColumns = document.querySelector("#aboutMeWork")

    for (let i = 0; i < experience.length; i++) {
      experienceColumns.insertAdjacentHTML("beforeend",
        `<div class="column is-3">
                    <div class='column-data has-text-centered'>
                        <p class='column-data-title'>${experience[i].role}</p>
                        <p class='column-data-subtitle'>${experience[i].company}</p>
                        <p class='column-data-desc'>${experience[i].term}</p>
                    </div>
                </div>`
      );
    }
  }

  // eduFunction = () => {
  //   const { education } = this.state
  //   const educationColumns = document.querySelector("#aboutMeLearn")

  //   for (let i = 0; i < education.length; i++) {
  //     educationColumns.insertAdjacentHTML("beforeend",
  //       `<div class="column is-3">
  //                   <div class='column-data has-text-centered'>
  //                       <p class='column-data-title'>${education[i].subject}</p>
  //                       <p class='column-data-subtitle'>${education[i].local}</p>
  //                       <p class='column-data-desc'>${education[i].term}</p>
  //                   </div>
  //               </div>`
  //     );
  //   }
  // }

  render() {
    const { loading, experience, education } = this.state
    return (
      <section className='section' id='content'>
        <div className='container'>
          <span className='introduction'>
            Hi my name is Nelson and I am a frontend developer. Since a young age <br />
                    I wanted to know how to make things work. Now I know. < br />
                    From HTML and CSS to Javascript. Building webpages or developing apps.< br />
                    Get in touch with me on <a href='https://www.linkedin.com/in/nelson-martins-9924aa5b' target='_blank' rel='noopener noreferrer'>linkendin</a> or see my<Link to='/projects'> projects</Link>
            < br />< br />
            <a className='downloadBtn' href={pdf} target="_blank" rel='noopener noreferrer'>download cv</a>
          </span>
          <h1 className='title is-3 intro'>Learning</h1>
          <div className="columns is-multiline">
            {
              loading ?
                <progress className='progress' max='100'>Loading</progress>
                :
                education.map((edu, index) =>
                  <div class="column is-3" key={index}>
                    <div class='column-data has-text-centered'>
                      <p class='column-data-title'>{edu.subject}</p>
                      <p class='column-data-subtitle'>{edu.local}</p>
                      <p class='column-data-desc'>{edu.term}</p>
                    </div>
                  </div>
                )}
          </div>
          <h1 className='title is-3 intro'>Work Experience</h1>
          <div className="columns is-multiline">
            {
              loading ?
                <progress className='progress' max='100'>Loading</progress>
                :
                experience.map((exp, index) =>
                  <div class="column is-3" key={index}>
                    <div class='column-data has-text-centered'>
                      <p class='column-data-title'>{exp.role}</p>
                      <p class='column-data-subtitle'>{exp.company}</p>
                      <p class='column-data-desc'>{exp.term}</p>
                    </div>
                  </div>
                )}
          </div>
        </div>
      </section >
    );
  }
}