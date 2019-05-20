import React, { Component } from 'react';
import {HeaderWrapper} from './HeaderWrapper';
import './header.css';


class Header extends Component {
  render() {
    return (
      <div className='header-wrapper'>
        <HeaderWrapper />
        <figure id='header-picture'>
          <picture>
            <img
              id='my-face'
              src='https://pixel.nymag.com/imgs/fashion/daily/2018/08/17/magazine/tessa-thompson-1.w570.h712.jpg' />
          </picture>
        </figure>
      </div>
    );
  }
}
export default Header
