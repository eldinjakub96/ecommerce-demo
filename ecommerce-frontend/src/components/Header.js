// src/components/Header.js

import React from 'react';
import './Header.css'; // Import header-specific styles

// Header component
const Header = () => {
  return (
    <header>
    <div class="logo">
        <a href="#">My Store</a>
    </div>
    <nav>
        <ul class="nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>
  );
};

export default Header;
