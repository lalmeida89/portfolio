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
            projectLink='https://bandtogether-app.herokuapp.com'
            codeLink='https://github.com/lalmeida89/BandTogether'
          />
        <ProjectsWrapper
          name='Build-A-Champion Workshop'
          imgSrc={MockDraftPSD}
          altSrc='Build-A-Champion Workshop displayed in mobile, tablet, and desktop views'
          desc="Struggling to build the perfect roster? Are you just plain bad at Fantasy Football?
            Look no further. Practice drafting against the computer, check out the latest player news,
            schedule and player rankings, and build the
			      roster of your dreams."
          techStack={['fab fa-html5','fab fa-js-square','fab fa-react','fab fa-css3-alt']}
          projectLink='http://sharp-nightingale-21d173.netlify.com/'
          codeLink='https://github.com/lalmeida89/FantasyFootball-MockDraft'
          />
        <ProjectsWrapper
          name='Fantasy Football Ranker'
          imgSrc={FantasyRankerPSD}
          altSrc='Fantasy Ranker displayed in mobile, tablet, and desktop views'
          desc="Fantasy Football Ranker aims to challenge even the most diehard Football fan and see how well they remember
            where players ended up last year in their rankings. Built with React and given a sleek and smooth
            interface with the use of React Motion"
          techStack={['fab fa-html5','fab fa-js-square','fab fa-react','fab fa-css3-alt']}
          projectLink='https://romantic-yonath-4a367e.netlify.com/'
          codeLink='https://github.com/lalmeida89/FantasyFootball-Ranker'
          />
      </div>
    );
  }
}
export default MyProjects
