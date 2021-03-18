import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css';

import { FaLock } from 'react-icons/fa';

const Navbar = () => {
    return (
        <header id="Top" className="container-fluid px-0">

            <nav className="navbar navbar-expand-sm navbar-light px-0">

                {/* Navbar collapse button */}
                <div className="pl-3">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                    </button></div>

                {/* Collapses all links and searchbar */}
                <div className="collapse navbar-collapse pl-3" id="navbarSupportedContent">

                    {/* List of links on Navbar*/}

                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item navlist pt-3">
                            <NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active">FORSIDE</NavLink>
                        </li>
                        <li className="nav-item active navlist pt-3">
                            <NavLink to="/Products" className="navbar_link" activeClassName="navbar_link--active">PRODUKTER</NavLink>
                        </li>

                        <div className="logotitle">
                            <h1>Bageriet</h1>
                        </div>

                        <li className="nav-item navlist pt-3">
                            <NavLink to="/Kontakt" className="navbar_link" activeClassName="navbar_link--active">KONTAKT</NavLink>
                        </li>
                        <li className="nav-item navlist pt-3">
                            <NavLink to="/Login" className="navbar_link" activeClassName="navbar_link--active">LOGIN</NavLink>
                        </li>
                    </ul>

                </div>

            </nav>

        </header>
    )
}

export default Navbar