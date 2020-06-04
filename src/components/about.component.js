import React, { Component } from 'react';
import { EduList, ExpList } from './about.list.component'
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
                : <EduList data={education} />
            }
          </div>
          <h1 className='title is-3 intro'>Work Experience</h1>
          <div className="columns is-multiline">
            {
              loading ?
                <progress className='progress' max='100'>Loading</progress>
                : <ExpList data={experience} />
            }
          </div>
        </div>
      </section >
    );
  }
}