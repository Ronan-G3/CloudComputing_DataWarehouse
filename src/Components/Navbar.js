// src/Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure your CSS file is correctly linked

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Analytics</Link>
    <Link to="/dataset1">Dataset 1</Link>
    <Link to="/dataset2">Dataset 2</Link>
  </nav>
);

export default Navbar;
