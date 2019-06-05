import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Nav from './components/Nav/Nav';

class App extends React.Component {
   render() {
     //const {scrolledToProjects} = this.state
     return (
      <div className='App'>
        <Nav />
        <Header />
        <Projects />
      </div>
     );
   }
}

export default App;
