import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './nav.css';

export default class BurgerMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange = state => {
    this.setState({menuOpen : state.isOpen})
  }

  closeMenu = () => {
    this.setState({menuOpen: false})
  }

  scrollTransition = element => {
    if (element == 'projects'){
      window.scrollTo({ top: 700, behavior: 'smooth'})
    }
    this.closeMenu()
  }

  render () {
    return (
      <Menu right isOpen={this.state.menuOpen}
            onStateChange={(state)=> this.handleStateChange(state)}>
        <p id="about" className="menu-item" href="/">
          <i className="far fa-address-card"></i>
          <span className='anchor-link'>About </span>
        </p>
        <p id="projects" className="menu-item" onClick={()=>this.scrollTransition('projects')}>
          <i className="fas fa-code-branch"></i>
          <span className='anchor-link'>Projects</span>
        </p>
        <p id="contact" className="menu-item" href="/contact">
          <i className="far fa-envelope"></i>
          <span className='anchor-link'>Contact</span>
        </p>
      </Menu>
    );
  }
}
