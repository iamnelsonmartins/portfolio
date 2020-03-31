import React, { Component } from 'react';
import data from '../../assets/data.json'

class Projects extends Component {
    componentDidMount() {
        const projectTotal = (data.github)
        const selectColumns = document.querySelector("#projects")

        for (let i = 0; i < projectTotal.length; i++) {
            selectColumns.insertAdjacentHTML("beforeend",
                `<div class="column is-4">
                    <div class='column-data has-text-centered'>
                        <p class='column-data-title'>${projectTotal[i].name}</p>
                        <p class='column-data-subtitle'>${projectTotal[i].desc}</p>
                        <p class='column-data-desc'>
                            <a href="${projectTotal[i].url}" target='_blank'>code</a> | 
                            <a href="${projectTotal[i].demo}" target='_blank'>demo</a>
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

        );
    }
}

export default Projects