import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './nav.css';

export default class BurgerMenu extends React.Component {
  render () {
    return (
      <Menu right>
        <a id="about" className="menu-item" href="/about">
          <i className="far fa-address-card"></i>
          <span className='anchor-link'>About </span>
        </a>
        <a id="projects" className="menu-item" href="/about">
          <i className="fas fa-code-branch"></i>
          <span className='anchor-link'>Projects</span>
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <i className="far fa-envelope"></i>
          <span className='anchor-link'>Contact</span>
        </a>
      </Menu>
    );
  }
}
