import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import {FaUnlock} from 'react-icons/fa';
import {RiAdminFill} from 'react-icons/ri';



import './navbar.css';

//api - call 
import { logoutAdmin } from '../../helpers/apicall'

const AdminNavbar = () => {

    const history = useHistory()

    const handleLogout = () => {

        logoutAdmin().then(res => {

            history.push('/') // Hvor man skal sendes hen når der logges ud

        })

    }


    return (
        <header id="Top" className="container-fluid mt-3 mx-0 px-0">

            <nav className="navbar navbar-expand-lg navbar-light px-0">

            

                <div className="col-4">
                    <h2 className="logoareaadmin"> <NavLink exact to="/Admin" className="noeffect"> <span className="adminlogo"><RiAdminFill/></span> BAGERIET ADMIN </NavLink> </h2>
                </div>


                {/* Navbar collapse button */}
                <div className="pl-3">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                    </button></div>

                {/* Collapses all links and searchbar */}
                <div className="collapse navbar-collapse pl-3" id="navbarSupportedContent">

                    {/* List of links on Navbar*/}

                    <ul className="navbar-nav py-2 mx-auto">
                        <li className="nav-item active navlist">
                            <NavLink exact to="/" className="navbar_link mr-5" activeClassName="navbar_link--active"><span className="imgrey">Tilbage til forsiden</span></NavLink>
                        </li>
                        
                        <li className="nav-item navlist">
                            <NavLink to="/Admin/products" className="navbar_link" activeClassName="navbar_link--active">Administrer Produkter</NavLink>
                        </li>
                    </ul>

                    <button className="btn btn-outline-dark btn-sm" onClick={handleLogout} > <FaUnlock/> Log ud</button>

                </div>

            </nav>

        </header>
    )
}

export default AdminNavbar
