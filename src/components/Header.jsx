import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../components/image.png";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-box">
            <img src={logoImage} alt="Ibirugs Logo" />
          </div>
          <div className="logo-text">
            <span>IBIRUGS</span>
            <div className="subtext">Creative Work</div>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
         
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn-primary">Get in touch</Link>
          <button
            className="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="mobile-nav">
          
          <Link to="/work" onClick={() => setIsOpen(false)}>Work</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link> 
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
