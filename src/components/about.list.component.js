import React from 'react'

export const EduList = ({ data }) => (
  data.map((edu, index) =>
    <div class="column is-3" key={index}>
      <div class='column-data has-text-centered'>
        <p class='column-data-title'>{edu.subject}</p>
        <p class='column-data-subtitle'>{edu.local}</p>
        <p class='column-data-desc'>{edu.term}</p>
      </div>
    </div>
  )
)

export const ExpList = ({ data }) => (
  data.map((exp, index) =>
    <div class="column is-3" key={index}>
      <div class='column-data has-text-centered'>
        <p class='column-data-title'>{exp.role}</p>
        <p class='column-data-subtitle'>{exp.company}</p>
        <p class='column-data-desc'>{exp.term}</p>
      </div>
    </div>
  )
)

