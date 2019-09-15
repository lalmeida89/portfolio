import React from 'react';
import './breakpoints.css';
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Nav from './components/Nav/Nav';
import AboutMe from './components/AboutMe'
import Contact from './components/ContactMe'

class App extends React.Component {
   render() {
     return (
      <div className='App'>
        <Nav />
        <Header />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
     );
   }
}

export default App;
