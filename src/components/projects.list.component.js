import React from 'react'

const ProjectList = ({ data }) => (
  data.map((project, index) =>
    <div className="column is-4" key={index}>
      <div className='column-data has-text-centered'>
        <p className='column-data-title'>{project.name}</p>
        <p className='column-data-subtitle'>{project.description}</p>
        <p className='column-data-desc'>
          <a href={project.url} target='_blank' rel="noopener noreferrer">code</a> | <a href={project.demo} target='_blank' rel="noopener noreferrer">demo</a>
        </p>
      </div>
    </div>
  )
)

export default ProjectList