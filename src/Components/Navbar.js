import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Brand Name on the Left */}
        <div className="flex-shrink-0">
          <h1 className="text-white text-4xl font-bold">Ondřej Beránek</h1>
        </div>

        {/* Links centered in the available space */}
        <div className="flex-1 flex justify-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">Domů</Link>
          <Link to="/about" className="text-white hover:text-gray-200">O mně</Link>
          <Link to="/projects" className="text-white hover:text-gray-200">Projekty</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Kontakt</Link>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="text-white ml-4 p-2 rounded-md focus:outline-none">
          {darkMode ? (
            <i className="fas fa-sun"></i> // Sun icon for light mode
          ) : (
            <i className="fas fa-moon"></i> // Moon icon for dark mode
          )}
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <i className={`fas fa-bars ${isMobileMenuOpen ? 'open' : ''}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-blue-600 p-4`}>
        <ul className="space-y-4">
          <li><Link to="/" className="text-white font-bold" onClick={toggleMenu}>Domů</Link></li>
          <li><Link to="/about" className="text-white font-bold" onClick={toggleMenu}>O mně</Link></li>
          <li><Link to="/projects" className="text-white font-bold" onClick={toggleMenu}>Projekty</Link></li>
          <li><Link to="/contact" className="text-white font-bold" onClick={toggleMenu}>Kontakt</Link></li>
        </ul>    
      </div>
    </nav>
  );
};

export default Navbar;
