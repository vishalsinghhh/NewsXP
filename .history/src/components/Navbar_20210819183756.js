import React from 'react'
import { Link } from "react-router-dom";
import logo from '../images/logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
