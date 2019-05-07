import React, { Component } from 'react';
import {HeaderWrapper} from './HeaderWrapper';
import './header.css';

const headerStyle = {
  height: '200px',
  width: '100%'
}

class Header extends Component {
  render() {
    return (
      <div style={headerStyle} className='header-wrapper'>
        <HeaderWrapper name='bob' desc='im bob' />
      </div>
    );
  }
}
export default Header
