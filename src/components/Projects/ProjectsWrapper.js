import React, { Component } from 'react';
import ProjectVideo from './ProjectVideo';
import './projectVideo.css'

export class ProjectsWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false,
      className: 'hide',
      showVideo: false
    }
  }

  renderTechIcons = arr => {
    return arr.map((el, i) => (
      <i key={i} className={el}></i>
    ))
  }

  hoverOn = () => {
    this.setState({ hover: true, classname: 'show' });
    console.log('hovering', this);
  }

  hoverOff = () => {
    this.setState({ hover: false, classname: 'hide' });
    console.log('not hovering');
  }

  toggleState = () => {
    console.log('video should show');
    this.setState(prevState => ({
      showVideo: !prevState.showVideo
    }));
  }

  render() {
    const {hover, className, showVideo} = this.state
    return (
      <div className='project-wrapper'
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}>
        <img src={this.props.imgSrc} alt={this.props.altSrc} />
        <div className='project-description'>
          <span className='project-title'> {this.props.name} </span>
          {this.renderTechIcons(this.props.techStack)}
          <p> {this.props.desc} </p>
          <button onClick={()=>this.toggleState()}> Click for video </button>
          {showVideo ? <ProjectVideo id='show'/> : null}
        </div>
      </div>
    )
  }
}
