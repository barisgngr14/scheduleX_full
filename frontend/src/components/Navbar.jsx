// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
            <h1>Schedule<span className="gradient-text">X</span></h1>
            <ul className="nav-links">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../create_schedule/create_schedule.html">Create Schedule</a></li>
                <li><a href="../import_schedule/import_schedule.html">Import Schedule</a></li>
            </ul>
            <a href="/" className="logout-link"><i className="fas fa-sign-out-alt"></i> Çıkış</a>
        </nav>  
  );
}

export default Navbar;