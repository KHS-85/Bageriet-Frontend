import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <h2>navbar</h2>

        <NavLink to="/products" > Admin produkter </NavLink>

        </div>
    )
}

export default Navbar
