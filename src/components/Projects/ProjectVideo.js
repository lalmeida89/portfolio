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
          <h1> {this.props.title} </h1>
        </div>
      </div>
    );
  }
}

export default ProjectVideo
