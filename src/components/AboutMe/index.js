import React, { Component } from 'react';
import ProfilePic from '../../images/washington.jpg'
import './aboutMe.css'

export default class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {
        scrolledToAboutMe: false
    }
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let currentScrollY = window.scrollY
    let screenWidth = window.screen.width
    if (screenWidth < 600) {
      if (currentScrollY >= 2000){
        this.setState({scrolledToAboutMe: true})
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
    if (currentScrollY >= 2300){
      this.setState({scrolledToAboutMe: true})
      window.removeEventListener('scroll', this.handleScroll);
    }
    console.log(this.state.scrolledToAboutMe, currentScrollY, window);
  }

  render() {
    const { scrolledToAboutMe } = this.state
    return (
      <div className='aboutMe-wrapper'
           id={scrolledToAboutMe ? 'hideImg' : 'showImg'}>
        <div className='aboutMe-description aboutMe-bottomDiv'>
          <div className='aboutMe-topDiv'>
            <img id='myFace-but-small' src={ProfilePic} alt='it is me' />
          </div>
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
