import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="NavBar">
      <div className="LogoSection">
        <img alt="logo" src="/logo.png" style={{width: "50px", height: "50px", padding:"0 10px"}}/>
        <h1 style={{fontFamily: "Cormorant"}}>East Java</h1>
      </div>
      <div className="NavItems" style={{borderLeft: "1px solid black", lineHeight: "79px", position: 'absolute',right: 0}}>
        <Link to="/" className="NavItems">
          Home
        </Link>
        <Link to="/about" className="NavItems">
          About
        </Link>
        <Link to="/contact" className="NavItems">
          Contact
        </Link>
        <Link to="/login" className="NavItems">
          Login
        </Link>
      </div>
      <div className="burgerVisible">
        <Menu
          right
          isOpen={isOpen}
          onStateChange={handleStateChange}
        >
          <Link to="/" className="bm-item" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="bm-item" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" className="bm-item" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/login" className="bm-item" onClick={closeMenu}>
            Login
          </Link>
        </Menu>
      </div>
    </div>
  );
}
