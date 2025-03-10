import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Company Info */}
          <div className="w-full md:w-4/12 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-black rounded-md mr-2">
                {/* Logo placeholder */}
              </div>
              <span className="text-xl font-bold">Tecken</span>
              <span className="text-sm text-gray-600 ml-2 mt-[5px]">Signs & Graphics</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-sm">
              Creating high-quality, custom signage and graphic solutions for businesses since 2005.
              We bring your vision to life with precision and creativity.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#contact" className="text-gray-500 hover:text-black transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#contact" className="text-gray-500 hover:text-black transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                </svg>
              </a>
              <a href="#contact" className="text-gray-500 hover:text-black transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
              <a href="#contact" className="text-gray-500 hover:text-black transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="w-full md:w-2/12 mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-600 hover:text-black transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-black transition-colors">Products</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-black transition-colors">Our Work</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div className="w-full md:w-3/12 mb-8 md:mb-0">
            <h4 className="text-lg font-bold mb-4 text-gray-900">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-600 hover:text-black transition-colors">Business Signage</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-black transition-colors">Vehicle Graphics</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-black transition-colors">Banners & Displays</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-black transition-colors">Info & Safety Signs</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-black transition-colors">Digital Prints</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-black transition-colors">Product 6</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} Tecken Signs & Graphics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#products" className="text-gray-600 hover:text-black text-sm transition-colors">Privacy Policy</a>
              <a href="#products" className="text-gray-600 hover:text-black text-sm transition-colors">Terms of Service</a>
              <a href="#products" className="text-gray-600 hover:text-black text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;