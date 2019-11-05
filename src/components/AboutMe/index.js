import React, { Component } from 'react';
import ProfilePic from '../../images/me.jpg'
import './aboutMe.css'

export default class AboutMe extends Component {
  render() {
    return (
      <div className='aboutMe-wrapper'>
        <div className='aboutMe-description aboutMe-bottomDiv'>
          <div className='aboutMe-text aboutMe'>
            <h3> A little about me </h3>
            <p>I went to college for Civil Engineering and there learned that I
              enjoyed building websites more than I liked building bridges.
              I'm an avid musician, Magic The Gathering and Lord of the Rings nerd,
              and I geek out mightily over Fantasy Football stats.
            </p>
          </div>
          <div className='aboutMe-picture aboutMe'>
            <img id='myFace-but-small' src={ProfilePic} alt='it is me' />
          </div>
          <div className='aboutMe-contact aboutMe'>
            <h3> Get in touch </h3>
            <a href='/'> <i className="fab fa-linkedin"></i> LinkedIn </a>
            <a href='/'> <i className="fab fa-github-square"></i> GitHub </a>
            <a href='/'> <i className="fas fa-envelope"></i> lalmeida89@gmail.com </a>
          </div>
        </div>
      </div>
    );
  }
}
