import React, { Component } from 'react';
import './App.css';
//import Projects from './components/Projects';
import Header from './components/Header';
import Nav from './components/Nav/Nav';

class App extends React.Component {
   render() {
    return (
      <div className='App'>
        <Nav />
        <Header />
      </div>
     );
   }
}

export default App;
