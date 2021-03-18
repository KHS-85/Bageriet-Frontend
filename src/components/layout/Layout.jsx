import React from 'react'
import Footer from '../pages/Footer'
import Header from '../pages/Header'

const Layout = (props) => {
    return (
        <div>

        <Header />
        
        {props.children}

        <Footer /> 

        </div>
    )
}

export default Layout
