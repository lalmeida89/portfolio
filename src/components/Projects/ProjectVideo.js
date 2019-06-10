import React, { Component } from 'react';
import './projectVideo.css';

class ProjectVideo extends Component {
  constructor(props){
    super(props)
    this.state = {
      hidden: true
    }
  }

  componentDidMount(){
    this.setState({hidden: false})
  }

  componentWillUnmount(){
    this.setState({hidden: true})
  }

  render() {
    const {hidden} = this.state
    return (
      <div className='projectVideo-outerDiv' id={this.props.show}>
        <div className='projectVideo-innerDiv'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bebuiaSKtU4"
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

export default ProjectVideo
