import React, { Component } from 'react';
import axios from 'axios'
require('dotenv').config();

//import data from '../assets/data.json'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
        this.projFunction = this.projFunction.bind(this)
    }

    componentDidMount() {
        const URL = 'https://gist.githubusercontent.com/iamnelsonmartins/e0be90d392913703df48d16dbfd25eef/raw/ece8e3b7916895c4313582f3ad21eb31179f7d72/data.json'

        axios.get(URL)
            .then(res => {
                this.setState({
                    projects: res.data.projects
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    projFunction = () => {
        const projects = this.state.projects
        const projectsColumn = document.querySelector("#projects")

        for (let i = 0; i < projects.length; i++) {
            projectsColumn.insertAdjacentHTML("beforeend",
                `<div class="column is-4">
                    <div class='column-data has-text-centered'>
                        <p class='column-data-title'>${projects[i].name}</p>
                        <p class='column-data-subtitle'>${projects[i].desc}</p>
                        <p class='column-data-desc'>
                            <a href="${projects[i].url}" target='_blank'>code</a> | 
                            <a href="${projects[i].demo}" target='_blank'>demo</a>
                        </p>
                    </div>
                </div>`
            );
        }
    }

    render() {
        return (
            <section className='section' id='content'>
                <div className='container'>
                    <h1 className='title is-3 intro'>Projects</h1>
                    <div className="columns is-multiline" id='projects'>
                        {this.projFunction()}
                    </div>
                </div>
            </section>
        );
    }
}