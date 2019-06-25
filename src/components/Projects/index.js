import React, { Component } from 'react';
import {ProjectsWrapper} from './ProjectsWrapper'
import ProjectVideo from './ProjectVideo'
import BandTogetherPSD from '../../images/bandTogetherImg.png';
import MockDraftPSD from '../../images/mockDraftImg.png';
import FantasyRankerPSD from '../../images/fantasyRankerImg.png';
import './projects.css';

class MyProjects extends Component {
  constructor(props){
    super(props);
    this.state = {
        scrolledToProjects: false,
        hover: false,
        classname: 'hide'
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
    if (currentScrollY >= 80){
      this.setState({scrolledToProjects: true})
      window.removeEventListener('scroll', this.handleScroll);
    }
    console.log(this.state.scrolledToProjects);
  }

  /*hoverOn = () => {
    this.setState({ hover: true, classname: 'show' });
    console.log('hovering');
  }

  hoverOff = () => {
    this.setState({ hover: false, classname: 'hide' });
    console.log('not hovering');
  }*/

  render() {
    const {scrolledToProjects, hover, classname} = this.state
    return (
      <div className='projects-container' id={scrolledToProjects ? 'slide-in' : 'slide-out'}>
        <h1> Projects </h1>
          <ProjectsWrapper
            name='Band Together'
            imgSrc={BandTogetherPSD}
            altSrc='Band Together displayed in mobile, tablet, and desktop views'
            desc="Band Together is an app for musicians looking to jam. View other's profiles
              and click like on your favorite ones. If they like your profile, it's a match! A personal chatroom is created
              and you can set up your next jam sesh in real time."
            techStack={['fab fa-html5','fab fa-js-square','fab fa-node-js','fab fa-css3-alt']}
          />
        <ProjectsWrapper
          name='Build-A-Champion Workshop'
          imgSrc={MockDraftPSD}
          altSrc='Build-A-Champion Workshop displayed in mobile, tablet, and desktop views'
          desc="Struggling to build the perfect roster? Are you just plain bad at Fantasy Football?
            Look no further. With Build-A-Champion Workshop, you'll go from zero to hero. Well maybe not hero,
            but definitely better than zero.
			      Practice drafting against the computer, check out the latest player news,
            schedule and player rankings, until you've built the
			      roster of your dreams."
          techStack={['fab fa-html5','fab fa-js-square','fab fa-react','fab fa-css3-alt']}
          />
        <ProjectsWrapper
          name='Fantasy Football Ranker'
          imgSrc={FantasyRankerPSD}
          altSrc='Fantasy Ranker displayed in mobile, tablet, and desktop views'
          desc="Fantasy Football Ranker aims to challenge even the most diehard Football fan and see how well they remember
            where players ended up last year in their rankings. Built with React and given a sleek and smooth
            interface with the use of React Motion"
          techStack={['fab fa-html5','fab fa-js-square','fab fa-react','fab fa-css3-alt']}
          />
      </div>
    );
  }
}
export default MyProjects
