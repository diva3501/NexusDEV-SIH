import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Assuming you're using a separate CSS file for custom styles

function Footer() {
  return (
    <footer className="footer bg-gradient-to-r from-blue-100 to-slate-200 text-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Branding Section */}
        <div className="footer-brand mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">NexusDEV</h2>
          <p className="text-sm mt-1">Connecting alumni worldwide</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-socials flex space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link hover:text-blue-500 transition-colors">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link hover:text-blue-400 transition-colors">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link hover:text-pink-500 transition-colors">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link hover:text-blue-700 transition-colors">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
      
      {/* Divider */}
      <div className="my-6 border-t border-gray-300"></div>

      {/* Copyright Section */}
      <div className="text-center text-sm">
        <p>&copy; 2024 NexusDEV. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
