import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navLeft">
        <a href="#home" className="logo">Sahyog</a>
        <a href="#home">Home</a>
        <a href="#community">Community</a>
        <a href="#donations">Donations</a>
        <a href="#services">Services</a>
        <a href="#aboutus">About Us</a>
      </div>
      <div className="navRight">
        <select>
          <option value="User">User</option>
          <option value="Volunteer">Volunteer</option>
          <option value="NGO">NGO</option>
        </select>
        <button className="registerBtn">Register Now</button>
      </div>
    </nav>
    
  );
}

export default Navbar;
