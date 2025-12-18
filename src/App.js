import { Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import './styles/animations.css';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <nav className={`navbar navbar-expand-lg navbar-light bg-light animate__animated animate__fadeInDown ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>Printer Support</Link>
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
                <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services" onClick={closeMenu}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog" onClick={closeMenu}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq" onClick={closeMenu}>FAQ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer style={{ marginTop: '40px' }} />
    </div>
  );
}

export default App;
