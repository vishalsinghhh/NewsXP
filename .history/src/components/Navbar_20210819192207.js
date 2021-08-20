import React from 'react'
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import './Components.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-center">
                <Link to='/'>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
