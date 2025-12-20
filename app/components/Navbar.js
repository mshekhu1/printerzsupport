'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../src/App.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBranchesDropdownOpen, setIsBranchesDropdownOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isBranchesDropdownOpen && !event.target.closest('.nav-item.dropdown.branches')) {
        setIsBranchesDropdownOpen(false);
      }
    };

    if (isBranchesDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isBranchesDropdownOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsBranchesDropdownOpen(false);
  };

  const toggleBranchesDropdown = () => {
    setIsBranchesDropdownOpen(!isBranchesDropdownOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light animate__animated animate__fadeInDown ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="/" onClick={closeMenu}>
          Printer Support
        </Link>
        <button 
          className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`} 
          type="button" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about" onClick={closeMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services" onClick={closeMenu}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/blog" onClick={closeMenu}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/forum" onClick={closeMenu}>Forum</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/brands" onClick={closeMenu}>Printer Brands</Link>
            </li>
            <li 
              className="nav-item dropdown branches"
              onMouseEnter={() => {
                if (window.innerWidth > 991) {
                  setIsBranchesDropdownOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 991) {
                  setIsBranchesDropdownOpen(false);
                }
              }}
            >
              <button 
                className={`nav-link dropdown-toggle ${isBranchesDropdownOpen ? 'active' : ''}`}
                onClick={toggleBranchesDropdown}
                type="button"
              >
                Branches
              </button>
              <ul className={`dropdown-menu ${isBranchesDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" href="/us" onClick={closeMenu}>United States</Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/canada" onClick={closeMenu}>Canada</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/faq" onClick={closeMenu}>FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

