import React, { Component } from 'react';
import './aboutMe.css'

export default class AboutMe extends Component {
  render() {
    return (
      <div className='aboutMe-wrapper'>
        <h1> About Me </h1>
        <div className='aboutMe-description'>
        <p>I went to college for Civil Engineering and there learned that I
            enjoyed building websites more than I liked building bridges.
            I'm an avid musician, Magic The Gathering and Lord of the Rings nerd,
            and I geek out mightily over Fantasy Football stats. My current goal is to
            join a team that geeks out about higher order functions in javascript as
            much as I do and to never stop growing as a developer.
        </p>
        </div>
      </div>
    );
  }
}
