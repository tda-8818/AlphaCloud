import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 py-8 text-center text-gray-500 text-sm">
    <p>&copy; 2025 Alpha Cloud Pty Ltd. All rights reserved.</p>
    <div className="mt-4 space-x-4">
      <a href="#" className="hover:text-red-500 transition-colors">
        Privacy Policy
      </a>
      <span className="text-gray-600">•</span>
      <a href="#" className="hover:text-red-500 transition-colors">
        Terms of Service
      </a>
    </div>
  </footer>
);

export default Footer;