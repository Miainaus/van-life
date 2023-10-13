import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className='header'>
        <Link to='/'>
          <h2>#VANLIFE</h2>
        </Link>
        <div className='links'>
          <Link to='/vans'>Vans</Link>
          <Link to='/host'>Host</Link>
          <Link to='/about'>About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
