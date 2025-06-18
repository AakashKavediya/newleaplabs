"use client";
import Link from "next/link";
import "@/stylingComponent/header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1000);
      if (window.innerWidth > 1000) {
        setIsMobileMenuOpen(false);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="Header">
      <h2 className="navHeading">NEW LEAP LABS</h2>
      
      {/* Hamburger menu icon for mobile */}
      {isMobileView && (
        <button className="hamburgerMenu" onClick={toggleMobileMenu}>
          <div className={`hamburgerLine ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburgerLine ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburgerLine ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </button>
      )}

      {/* Desktop Navigation */}
      {!isMobileView && (
        <nav className="navbar">
          <Link className="navLink" href="/">HOME</Link> 
          <Link className="navLink" href="/projects">PROJECT</Link> 
          <Link className="navLink" href="/achievements">ACHIEVEMENT</Link> 
          <Link className="navLink" href="/groundstation">GROUND STATION</Link> 
          
          <div 
            className="navLinkContainer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="navLink">ABOUT US</span>
            
            {isDropdownOpen && (
              <div className="dropdownMenu">
                <Link className="dropdownLink" href="/aboutus/teams">TEAM</Link>
                <Link className="dropdownLink" href="/aboutus/foundersandmentor">FOUNDERS AND MENTORS</Link>
                <Link className="dropdownLink" href="/aboutus/eventsandactivities">EVENTS AND ACTIVITIES</Link>
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Mobile Sidebar */}
      {isMobileView && (
        <div className={`mobileSidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobileNav">
            <Link className="mobileNavLink" href="/" onClick={toggleMobileMenu}>HOME</Link> 
            <Link className="mobileNavLink" href="/projects" onClick={toggleMobileMenu}>PROJECT</Link> 
            <Link className="mobileNavLink" href="/achievements" onClick={toggleMobileMenu}>ACHIEVEMENT</Link> 
            <Link className="mobileNavLink" href="/groundstation" onClick={toggleMobileMenu}>GROUND STATION</Link> 
            
            <div className="mobileNavLinkContainer">
              <span className="mobileNavLink" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                ABOUT US
              </span>
              
              {isDropdownOpen && (
                <div className="mobileDropdownMenu">
                  <Link className="mobileDropdownLink" href="/aboutus/teams" onClick={toggleMobileMenu}>TEAM</Link>
                  <Link className="mobileDropdownLink" href="/aboutus/foundersandmentor" onClick={toggleMobileMenu}>FOUNDERS AND MENTORS</Link>
                  <Link className="mobileDropdownLink" href="/aboutus/eventsandactivities" onClick={toggleMobileMenu}>EVENTS AND ACTIVITIES</Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div className="mobileMenuOverlay" onClick={toggleMobileMenu}></div>
      )}
    </div>
  );
};

export default Header;