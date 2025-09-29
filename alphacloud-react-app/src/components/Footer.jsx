import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 py-8 text-center text-gray-500 text-sm">
    <div className="container mx-auto px-4">
      <p>&copy; 2025 Alpha Cloud Pty Ltd. All rights reserved.</p>
      <p className="mt-2 text-xs">Australian Business Number (ABN): 12 345 678 901</p>
      <div className="mt-4 space-x-4">
        <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
        <span className="text-gray-600">•</span>
        <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
        <span className="text-gray-600">•</span>
        <a href="#" className="hover:text-red-500 transition-colors">ISO 27001 Certified</a>
      </div>
    </div>
  </footer>
);


export default Footer;