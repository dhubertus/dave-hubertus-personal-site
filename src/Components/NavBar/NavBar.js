import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';
import Scroll from 'react-scroll'

export const NavBar = () => {

  const scrollAbout = () => {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('about-container', {
        duration: 1000,
        delay: 150,
        smooth: true
      })
    }, 100)
  }
  const scrollResume = () => {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('resume-container', {
        duration: 1000,
        delay: 150,
        smooth: true
      })
    }, 100)
  }
  const scrollPortfolio = () => {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('portfolio-container', {
        duration: 1000,
        delay: 150,
        smooth: true
      })
    }, 100)
  }

  const scrollContact = () => {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('contact-container', {
        duration: 1000,
        delay: 150,
        smooth: true
      })
    }, 100)

  }

  return (
    <div id='nav-link-holder'>
      <NavLink
        className='nav-link'
        activeClassName='selected'
        to='/about'
        onClick={() => scrollAbout()}>ABOUT</NavLink>
      <NavLink
        className='nav-link'
        activeClassName='selected'
        to='/resume'
        onClick={() => scrollResume()}>RESUME</NavLink>
      <NavLink
        className='nav-link'
        activeClassName='selected'
        to='/portfolio'
        onClick={() => scrollPortfolio()}>PORTFOLIO</NavLink>
      <NavLink
        className='nav-link'
        activeClassName='selected'
        to='/contact'
        onClick={() => scrollContact()}>CONTACT</NavLink>
    </div>
  )
}
