import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu';
import './nav.css';

export default class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: ''
    };
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollTransition = element => {
      if (element === 'projects'){
        window.scrollTo({ top: 445, behavior: 'smooth'})
      }
      if (element === 'aboutMe'){
        window.scrollTo({ top: 2600, behavior: 'smooth'})
      }
      if (element === 'contact'){
        window.scrollTo({ top: 3000, behavior: 'smooth'})
    }
  }

  checkScreenWidth = () => {
    if(window.screen.width < 600){
      return ( <BurgerMenu /> )
    } else {
      return (
        <div className='menu-list-anchors'>
          <p className="nav-item" onClick={()=>this.scrollTransition('projects')}>
            <span className='nav-anchor-link'>Projects</span>
          </p>
          <p className="nav-item" onClick={()=>this.scrollTransition('aboutMe')}>
            <span className='nav-anchor-link'>About </span>
          </p>
          <p className="nav-item" onClick={()=>this.scrollTransition('contact')}>
            <span className='nav-anchor-link'>Contact</span>
          </p>
        </div>
      )
    }
  }

  handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY >= 1) {
      this.setState({ location: 'navbar-show' });
    } else {
      this.setState({ location: 'navbar-hide' });
    }
  };

  render() {
    return (
      <div className='navbar' id={this.state.location}>
        <div id='navbar-name'>
          <h4> Luiz A. </h4>
        </div>
        {this.checkScreenWidth()}
      </div>
    );
  }
}
