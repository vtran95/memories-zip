import React from 'react';
import './NaviBar.css';
import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';

const NaviBar = (props) => {

    let nav = props.user ?
        <div>
            <Link to="/memories" className='NavBar-link' >memories</Link>
            <Link to="" className="NavBar-link" onClick={props.handleLogout} >log out</Link>
            <span className="NavBar-welcome">Welcome, {props.user.name}</span>
        </div>
        :
        <div>
            <Link to="/login" className='NavBar-link'>log in</Link>
            <Link to="/signup" className='NavBar-link'>sign up</Link>
        </div>;
        
  
    return (
      <nav>
        <Link to="/" className='NavBar-link'>memories.zip</Link>
        {nav}
      </nav>
    );
  };
  
  export default NaviBar;