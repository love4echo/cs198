import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">My Website</Link>
                </li>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/notHome">NotHome</Link>
                </li>
            </ul>
        </nav>
    )
  };
  
export default Navbar;