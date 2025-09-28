import React from "react";

// Header Component - Reusable across all sections.
const Header = ({ scrollToSection, isMenuOpen, setIsMenuOpen }) => (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm p-4 md:px-8 transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center py-2">
        {/* Logo and App Name, which acts as a home button */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
          {/* Logo placeholder */}
          <div className="h-12 md:h-16 w-12 md:w-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            AC
          </div>
          <span className="text-white text-2xl font-bold tracking-tight">Alpha Cloud</span>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-red-500 transition-colors">Home</button>
          <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-red-500 transition-colors">Services</button>
          <button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-red-500 transition-colors">Products</button>
          <button onClick={() => scrollToSection('solutions')} className="text-gray-300 hover:text-red-500 transition-colors">Solutions</button>
          <button onClick={() => scrollToSection('partners')} className="text-gray-300 hover:text-red-500 transition-colors">Partners</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-500 transition-colors">About Us</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-500 transition-colors">Contact</button>
        </div>
        <button onClick={() => scrollToSection('contact')} className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg">Get a Quote</button>
        
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
        <button onClick={() => scrollToSection('products')} className="block py-2 text-gray-300 hover:text-red-500 transition-colors w-full">Products</button>
        <button onClick={() => scrollToSection('solutions')} className="block py-2 text-gray-300 hover:text-red-500 transition-colors w-full">Solutions</button>
        <button onClick={() => scrollToSection('partners')} className="block py-2 text-gray-300 hover:text-red-500 transition-colors w-full">Partners</button>
        <button onClick={() => scrollToSection('about')} className="block py-2 text-gray-300 hover:text-red-500 transition-colors w-full">About Us</button>
        <button onClick={() => scrollToSection('contact')} className="block py-2 text-gray-300 hover:text-red-500 transition-colors w-full">Contact</button>
        <button onClick={() => scrollToSection('contact')} className="block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors mx-auto">Get a Quote</button>
      </div>
    </header>
);

export default Header;