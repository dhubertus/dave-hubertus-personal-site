import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar'
import { About } from '../About/About'
import { Resume } from '../Resume/Resume'
import { Contact } from '../Contact/Contact'
import { push as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll'


import './App.css';

class App extends Component {
  scrollAbout() {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('about-container', {
        duration: 1000,
        delay: 150,
        smooth: true
      })
    }, 500)
  }

  scrollResume() {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('resume-container', {
        duration: 1000,
        delay: 150,
        smooth: true
      })
    }, 500)
  }

  scrollPortfolio() {

  }

  scrollContact() {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('contact-container', {
        duration: 1000,
        delay: 150,
        smooth: true
      })
    }, 500)
  }


  render() {
    return (
      <div id='outer-container'>
          <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ '280px' } isOpen={ false } left>

            <NavLink
              onClick={ () => this.scrollAbout() }
              className="menu-item"
              activeClassName='selected-menu'
              to="/about">ABOUT</NavLink>
            <NavLink
              onClick={ () => this.scrollResume() }
              className="menu-item"
              activeClassName='selected-menu`'
              to="/resume">RESUME</NavLink>
            <NavLink
              className="menu-item"
              activeClassName='selected-menu`'
              to="/portfolio">PORTFOLIO</NavLink>
            <NavLink
              onClick={ () => this.scrollContact() }
              className="menu-item"
              activeClassName='selected-menu`'
              to="/contact">CONTACT</NavLink>

          </Menu>

          <main id="page-wrap">
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
        <Route path='/contact' render={ ({ history }) => (
          <Contact history={ history }/>
        )}/>
      </div>
      </main>
      </div>
    );
  }
}

export default App;




{/* <p className='name-logo-letter'>D</p>
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
<p className='name-logo-letter'>S</p> */}
