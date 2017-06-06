import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar'
import { About } from '../About/About'
import { Resume } from '../Resume/Resume'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id='header'>
          <section id='nav-bar'>
            <NavBar />
          </section>
          <section id='logo-container'>
            <div id='name-logo'>
              <p className='name-logo-letter'>D</p>
              <p className='name-logo-letter'>A</p>
              <p className='name-logo-letter'>V</p>
              <p className='name-logo-letter'>E</p>
              <p className='name-logo-letter'>H</p>
              <p className='name-logo-letter'>U</p>
              <p className='name-logo-letter'>B</p>
              <p className='name-logo-letter'>E</p>
              <p className='name-logo-letter'>R</p>
              <p className='name-logo-letter'>T</p>
              <p className='name-logo-letter'>U</p>
              <p className='name-logo-letter'>S</p>
            </div>
          </section>
        </header>
        <Route path='/about' render={ ({ history }) => (
          <About history={ history }/>
        )}/>
        <Route path='/resume' render={ ({ history }) => (
          <Resume history={ history }/>
        )}/>
      </div>
    );
  }
}

export default App;