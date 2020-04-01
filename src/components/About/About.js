import React, { Component } from 'react';
import data from '../../assets/data.json'
import pdf from '../../assets/curriculum.pdf'

class About extends Component {
    componentDidMount() {
        const learning = (data.education)
        const working = (data.working)
        const learningColumns = document.querySelector("#aboutMeLearn")
        const workingColumns = document.querySelector("#aboutMeWork")

        for (let i = 0; i < learning.length; i++) {
            learningColumns.insertAdjacentHTML("beforeend",
                `<div class="column is-3">
                    <div class='column-data has-text-centered'>
                        <p class='column-data-title'>${learning[i].subject}</p>
                        <p class='column-data-subtitle'>${learning[i].local}</p>
                        <p class='column-data-desc'>${learning[i].term}</p>
                    </div>
                </div>`
            );
        }

        for (let i = 0; i < working.length; i++) {
            workingColumns.insertAdjacentHTML("beforeend",
                `<div class="column is-3">
                    <div class='column-data has-text-centered'>
                        <p class='column-data-title'>${working[i].role}</p>
                        <p class='column-data-subtitle'>${working[i].company}</p>
                        <p class='column-data-desc'>${working[i].term}</p>
                    </div>
                </div>`
            );
        }
    }
    render() {
        return (
            <section className='section' id='content'>
                <div className='container'>
                    <span className='introduction'>
                        Hi my name is Nelson and I am a frontend developer. Since a young age <br />
                    I wanted to know how to make things work. Now I know. < br />
                    From HTML and CSS to Javascript. Building webpages or developing apps.< br />
                    Get in touch with me on <a href='https://www.linkedin.com/in/nelson-martins-9924aa5b' target='_blank' rel='noopener noreferrer'>linkendin</a> or see my <a href='/projects' rel='noopener noreferrer'>projects</a> < br />< br />
                        <a className='downloadBtn' href={pdf}>download cv</a>
                    </span>
                    <h1 className='title is-3 intro'>Learning</h1>
                    <div className="columns is-multiline" id='aboutMeLearn'>
                    </div>
                    <h1 className='title is-3 intro'>Work Experience</h1>
                    <div className="columns is-multiline" id='aboutMeWork'>
                    </div>
                </div>
            </section>
        );
    }
}

export default About