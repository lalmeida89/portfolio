import React, { Component } from 'react';
import ProjectVideo from './ProjectVideo';
import './projectVideo.css'

export class ProjectsWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      showVideo: false
    }
  }
  renderTechIcons = arr => {
    return arr.map((el, i) => (
      <i key={i} className={el}></i>
    ))
  }
  toggleState = () => {
    this.setState(prevState => ({
      showVideo: !prevState.showVideo
    }));
  }
  render() {
    const {showVideo} = this.state
    return (
      <div className='project-wrapper' id={showVideo ? 'long-wrapper' : 'short-wrapper'}>
        <img src={this.props.imgSrc} alt={this.props.altSrc} />
        <div className='project-description'>
          <span className='project-title'> {this.props.name} </span>
          {this.renderTechIcons(this.props.techStack)}
          <p> {this.props.desc} </p>
          <div className='project-links'>
            <a href={this.props.codeLink} target='_blank' rel="noopener noreferrer">
              <button className='linkToCode-btn link-btn'>VIEW CODE</button>
            </a>
            <a href={this.props.projectLink} target='_blank' rel="noopener noreferrer">
              <button className='linkToSite-btn link-btn'>VIEW PROJECT</button>
            </a>
            {/* demos are on hold the NFL API is back online after the draft
              <button className='demo-btn' onClick={()=>this.toggleState()}> WATCH DEMO </button>
            */}
          </div>
          <ProjectVideo show={showVideo ? 'show' : 'hide'} videoSource={this.props.vidSrc} />
        </div>
      </div>
    )
  }
}
