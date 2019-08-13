import React, { Component } from 'react';
import ProjectVideo from './ProjectVideo';
import './projectVideo.css'

export class ProjectsWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: 'hide',
      showVideo: false
    }
  }

  renderTechIcons = arr => {
    return arr.map((el, i) => (
      <i key={i} className={el}></i>
    ))
  }

  toggleState = () => {
    console.log('video should show');
    this.setState(prevState => ({
      showVideo: !prevState.showVideo
    }));
  }

  render() {
    const {className, showVideo} = this.state
    return (
      <div className='project-wrapper'>
        <img src={this.props.imgSrc} alt={this.props.altSrc} />
        <div className='project-description'>
          <span className='project-title'> {this.props.name} </span>
          {this.renderTechIcons(this.props.techStack)}
          <p> {this.props.desc} </p>
          <a href={this.props.codeLink} target='_blank'>
            <button className='linkToCode-btn link-btn'>View Code</button>
          </a>
          <a href={this.props.projectLink} target='_blank'>
            <button className='linkToSite-btn link-btn'>View Project</button>
          </a>
          <button className='demo-btn' onClick={()=>this.toggleState()}> Watch demo </button>
          {showVideo ? <ProjectVideo show='show'/> : <ProjectVideo show='hide'/>}
        </div>
      </div>
    )
  }
}
