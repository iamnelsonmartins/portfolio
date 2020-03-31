import React, { Component } from 'react';
import data from '../../assets/data.json'

class Projects extends Component {
    componentDidMount() {
        const projects = (data.github)
        const projectColumn = document.querySelector("#projects")

        for (let i = 0; i < projects.length; i++) {
            projectColumn.insertAdjacentHTML("beforeend",
                `<div class="column is-3">
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
            <div className='container'>
                <h1 className='title is-3 intro'>Projects</h1>
                <div className="columns is-multiline" id='projects'>
                </div>
            </div>
        )
    }
}

export default Projects;