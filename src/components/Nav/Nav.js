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

  handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY >= 1) {
      this.setState({ location: 'navbar-show' });
    } else {
      this.setState({ location: 'navbar-hide' });
    }
    console.log(currentScrollY);
  };

  render() {
    return (
      <div className='navbar' id={this.state.location}>
        <div id='navbar-name'>
          <h4> Luiz A. </h4>
        </div>
        <BurgerMenu />
      </div>
    );
  }
}
