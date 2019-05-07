import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Projects />
      </header>
    </div>
  );
}

export default App;
