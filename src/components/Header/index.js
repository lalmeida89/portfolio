import React, { Component } from 'react';
import {HeaderWrapper} from './HeaderWrapper';
import './header.css';
import ProfilePic from '../../images/washington.jpg'


class Header extends Component {
  render() {
    return (
      <div className='header-wrapper'>
        <HeaderWrapper />
        <figure id='header-picture'>
          <picture>
            <img
              id='my-face'
              src={ProfilePic}
              alt='it is me'/>
          </picture>
        </figure>
      </div>
    );
  }
}
export default Header
