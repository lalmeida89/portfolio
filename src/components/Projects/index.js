import React, { Component } from 'react';
import {ProjectsWrapper} from './ProjectsWrapper'
import BandTogetherPSD from '../../images/bandTogetherImg.png';
import MockDraftPSD from '../../images/mockDraftImg.png';
import FantasyRankerPSD from '../../images/fantasyRankerImg.png';
import './projects.css';

class MyProjects extends Component {
  render() {
    return (
      <div className='projects-container'>
        <h1> This is My projects wrapper </h1>
        <ProjectsWrapper
          name='project one'
          imgSrc={BandTogetherPSD}
          altSrc='proj 1'
          desc='this is my first project bladi bladi blahhhhhh'/>
        <ProjectsWrapper
          name='project two'
          imgSrc={MockDraftPSD} />
        <ProjectsWrapper
          name='project three'
          imgSrc={FantasyRankerPSD}/>
        <ProjectsWrapper name='project four' />
      </div>
    );
  }
}
export default MyProjects
