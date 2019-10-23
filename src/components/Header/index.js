import React, { Component } from 'react';
import {HeaderWrapper} from './HeaderWrapper';
import './header.css';
import ProfilePic from '../../images/washington.jpg'


export default class Header extends Component {
  render() {
    return (
      <div className='header-wrapper'>
        <HeaderWrapper />
        <div id='header-picture'>
          <img id='my-face'
            src={ProfilePic}
            alt='it is me' />
        </div>
      </div>
    );
  }
}
