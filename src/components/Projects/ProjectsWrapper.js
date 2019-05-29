import React from 'react'

export const ProjectsWrapper = props => {
  return (
    <div className='project-wrapper'>
      <h1> {props.name} </h1>
      <img src={props.imgSrc} alt={props.altSrc} />
      <p> {props.desc} </p>
    </div>
  )
}
