import React, { Component } from 'react';
import axios from 'axios'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            loading: true
        }
        this.projFunction = this.projFunction.bind(this)
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

    projFunction = () => {
        const projects = this.state.projects
        const projectsColumn = document.querySelector("#projects")

        for (let i = 0; i < projects.length; i++) {
            projectsColumn.insertAdjacentHTML("beforeend",
                `<div class="column is-4">
                    <div class='column-data has-text-centered'>
                        <p class='column-data-title'>${projects[i].name}</p>
                        <p class='column-data-subtitle'>${projects[i].description}</p>
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
        const { loading } = this.state
        return (
            <section className='section' id='content'>
                <div className='container'>
                    <h1 className='title is-3 intro'>Projects</h1>
                    <div className="columns is-multiline" id='projects'>
                        {
                            loading ?
                                <progress className='progress' max='100'>Loading</progress>
                                :
                                this.projFunction()
                        }
                    </div>
                </div>
            </section>
        );
    }
}