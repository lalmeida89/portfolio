import React, { Component } from 'react';
import './projectVideo.css';

class ProjectVideo extends Component {
  render() {
    return (
      <div className='projectVideo-outerDiv' id={this.props.show}>
        <div className='projectVideo-innerDiv'>
          <iframe width="560" height="315" src={this.props.videoSource}
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen title='projectVideo'></iframe>
        </div>
      </div>
    );
  }
}

export default ProjectVideo
