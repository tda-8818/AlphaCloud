import React from "react";
import logo from "../assets/logo.png";

// Header Component - Reusable across all sections.
const Header = ({ scrollToSection, isMenuOpen, setIsMenuOpen }) => (
  <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm p-4 md:px-8 transition-colors duration-300">
    <nav className="container mx-auto flex justify-between items-center py-2">
      {/* Logo and App Name, which acts as a home button */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
        <img
          src={logo}
          alt="Alpha Cloud Logo"
          className="h-12 md:h-16 w-auto"
        />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6 text-xl font-medium">
        <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-red-500 transition-colors">Home</button>
        <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-red-500 transition-colors">Services</button>
        <button onClick={() => scrollToSection('solutions')} className="text-gray-300 hover:text-red-500 transition-colors">Solutions</button>
        <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-red-500 transition-colors">Experience</button>
        <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-500 transition-colors">About</button>
        <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-500 transition-colors">Contact</button>
      </div>
      
      {/* Mobile Menu Button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-red-500 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </nav>

    {/* Mobile Menu Content */}
    <div className={`md:hidden bg-gray-900 bg-opacity-90 w-full rounded-b-xl px-4 py-6 text-center transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
      <button onClick={() => scrollToSection('home')} className="block py-2 text-gray-300 hover:text-red-500 transition-colors w-full">Home</button>
      <button onClick={() => scrollToSection('services')} className="block py-2 text-gray-300 hover:text-red-500 transition-colors w-full">Services</button>
      <button onClick={() => scrollToSection('solutions')} className="block py-2 text-gray-300 hover:text-red-500 transition-colors w-full">Solutions</button>
      <button onClick={() => scrollToSection('experience')} className="block py-2 text-gray-300 hover:text-red-500 transition-colors w-full">Experience</button>
      <button onClick={() => scrollToSection('about')} className="block py-2 text-gray-300 hover:text-red-500 transition-colors w-full">About</button>
      <button onClick={() => scrollToSection('contact')} className="block py-2 text-gray-300 hover:text-red-500 transition-colors w-full">Contact</button>
    </div>
  </header>
);

export default Header;