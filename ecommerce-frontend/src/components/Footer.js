// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import footer-specific styles

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 My E-Commerce Site. All rights reserved.</p>
        <nav className="footer-nav">
          <ul>
            {/* Footer navigation links */}
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#faq">FAQ</a></li> {/* Added an extra link for FAQ */}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
