import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-300 backdrop-blur-md bg-opacity-80 fixed w-full z-10 border-b border-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/tecken-logo-black.svg" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900">Tecken</span>
            <span className="text-sm text-gray-600 ml-2 mt-[5px]">Signs & Graphics</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-600 hover:text-black px-3 py-2 font-medium transition-all duration-300">
              Products
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-black px-3 py-2 font-medium transition-all duration-300">
              Our Work
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-black px-3 py-2 font-medium transition-all duration-300">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-black px-3 py-2 font-medium transition-all duration-300">
              About
            </a>
            <a 
              href="#contact" 
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 font-medium"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-200 border-t border-gray-200 backdrop-blur-lg bg-opacity-90">
            <a 
              href="#products" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300"
            >
              Products
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300"
            >
              Our Work
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300"
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-black text-white hover:bg-gray-800 text-center transition-all duration-300 mt-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;