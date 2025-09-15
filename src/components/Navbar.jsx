// FileName - Navbar.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Buy DID", link: "/buy-did" },
    { text: "Sell DID", link: "/sell-did" },
    { text: "Rates", link: "/rates" },
    { text: "Coverage", link: "/coverage" },
    { text: "Interop", link: "/introp" },
    { text: "Contact", link: "/contact" },
    { text: "Login", link: "/login-page" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img 
            src="/img/didx-logo.png" 
            alt="DIDX Logo" 
            className="navbar__logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar__desktop">
          <ul className="navbar__menu">
            {menuItems.map((item, index) => (
              <li key={index} className="navbar__item">
                <Link 
                  to={item.link} 
                  className="navbar__link"
                  onClick={closeMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation */}
        <div className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
          <ul className="navbar__mobile-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="navbar__mobile-item">
                <Link 
                  to={item.link} 
                  className="navbar__mobile-link"
                  onClick={closeMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
