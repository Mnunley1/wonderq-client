import React from 'react';

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navLeft">
        <a 
          href="https://github.com/jddelia/WonderQ" 
          className="navItem"
        >
          Documentation
        </a>
      </div>

      <div className="navRight">
        <span className="navLogo">WonderQ</span>
      </div>
    </nav>
  );
};

export default Navbar;