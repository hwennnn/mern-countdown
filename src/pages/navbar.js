import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Countdown</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/" className="nav-link">Items</Link>
            </li>
            <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Item</Link>
            </li>
        </ul>
        </div>
        </nav>
    );
  
}

export default Navbar;