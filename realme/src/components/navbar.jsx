import React from 'react';
import App from '../App.jsx';

function Navbar() {
  return (
    <div className="container">
    <nav>
      <h1>realme</h1>
      <ul>
        <li>Realme Smartphone</li>
        <li>Narzo Smartphone</li>
        <li>Audio Accessories</li>
      </ul>
      <div  className="right-hand">
        <p>Brand</p>
        <p>Support</p>
        <p>Community</p>
      </div>
    </nav>
  </div>
  );
}

export default Navbar;

