import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';

const NavBar = (props) => {
    let nav = props.user ?
      <div>
        <NavItem>
          <Link to="/memories" className='NavBar-link' >memories</Link>
        </NavItem>
        <NavItem>
          <Link to="" className="NavBar-link" onClick={props.handleLogout} >log out</Link>
        </NavItem>
        <NavItem>
          <span className="NavBar-welcome">Welcome, {props.user.name}</span>
        </NavItem>
      </div>
      :
      <div>
        <NavItem>
          <Link to="/login" className='NavBar-link'>log in</Link>
        </NavItem>
        <NavItem>
          <Link to="/signup" className='NavBar-link'>sign up</Link>
        </NavItem>
      </div>;
  
    return (
      <Navbar brand='home' right>
        {nav}
      </Navbar>
    );
  };
  
  export default NavBar;