import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div id='nav-link-holder'>
      <NavLink className='nav-link' activeClassName='selected' to='/about'>ABOUT</NavLink>
      <NavLink className='nav-link' activeClassName='selected' to='/resume'>RESUME</NavLink>
      <NavLink className='nav-link' activeClassName='selected' to='/portfolio'>PORTFOLIO</NavLink>
      <NavLink className='nav-link' activeClassName='selected' to='/contact'>CONTACT</NavLink>
    </div>
  )
}
