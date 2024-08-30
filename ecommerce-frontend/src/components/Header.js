// src/components/Header.js

import React from 'react';
import './Header.css'; // Import header-specific styles

// Header component
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>My E-Commerce Site</h1>
        <nav className="nav">
          <ul>
            {/* Navigation links */}
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
