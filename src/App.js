import React from 'react';
import './breakpoints.css';
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Nav from './components/Nav/Nav';
import AboutMe from './components/AboutMe'

class App extends React.Component {
   render() {
     return (
      <div className='App'>
        <Nav />
        <Header />
        <Projects />
        <AboutMe />
      </div>
     );
   }
}

export default App;
