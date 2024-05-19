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
      <div className="NavItems" style={{borderLeft: "1px solid black", lineHeight: "79px"}}>
        <Link to="/" className="NavItems">
          Home
        </Link>
        <Link to="/about" className="NavItems">
          About
        </Link>
        <Link to="/gallery" className="NavItems">
          Gallery
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
          <Link to="/gallery" className="bm-item" onClick={closeMenu}>
            Gallery
          </Link>
        </Menu>
      </div>
    </div>
  );
}
