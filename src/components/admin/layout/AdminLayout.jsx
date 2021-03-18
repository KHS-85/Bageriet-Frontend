import React from 'react'
import { Redirect } from 'react-router-dom'

import AdminNavbar from './Navbar'
import Footer from '../../pages/Footer'
import Nyeste from '../../pages/Nyeste'

import { useGlobal } from 'reactn'

import '../../../App.css';

const AdminLayout = (props) => {

    //Global state tjekker om brugeren har adgang igennem en true/false
    const [authorized, setAuthorized] = useGlobal("authorized")

    if (!authorized) {
        return <Redirect to="/login" />

    }

    return (
        <div>

            < AdminNavbar />

            {props.children}

            < Footer />


        </div>
    )
}

export default AdminLayout