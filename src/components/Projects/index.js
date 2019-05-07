import React, { Component } from 'react';
import {ProjectsWrapper} from './ProjectsWrapper'
import './projects.css';

class MyProjects extends Component {
  render() {
    return (
      <div className='projects-container'>
        <h1> This is My projects wrapper </h1>
        <ProjectsWrapper name='project one' />
        <ProjectsWrapper name='project two' />
        <ProjectsWrapper name='project three' />
        <ProjectsWrapper name='project four' />
      </div>
    );
  }
}
export default MyProjects
