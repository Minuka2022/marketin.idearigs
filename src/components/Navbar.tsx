import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'Work', path: '#work' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  const isActive = (path: string) => {
    if (typeof window !== 'undefined') {
      return window.location.hash === path;
    }
    return false;
  };

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without page reload
      window.history.pushState({}, '', path);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('home');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState({}, '', '#');
              }
            }}
            className="flex items-center"
          >
            <span className="text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors duration-200 relative group">
              Idearigs Studio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`${
                  isActive(item.path) ? 'text-orange-500' : 'text-gray-900 hover:text-green-600'
                } transition-colors duration-200 text-sm font-medium cursor-pointer relative group`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* WhatsApp DM Button */}
          <div className="hidden lg:block">
            <a 
              href="https://wa.me/94762021375" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <MessageCircle size={18} />
              <span>Send us a DM</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-green-600'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://wa.me/94762021375" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 mt-2"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={18} />
              <span>Send us a DM</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;