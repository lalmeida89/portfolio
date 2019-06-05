import React from 'react'

export const ProjectsWrapper = props => {
  console.log(props.techStack);
  let techIcons = props.techStack.map((el, i) => (
    <i key={i} className={el}></i>
  ))
  return (
    <div className='project-wrapper'>
      <img src={props.imgSrc} alt={props.altSrc} />
      <span className='project-title'> {props.name} </span>
      {techIcons}
      <p> {props.desc} </p>
    </div>
  )
}
