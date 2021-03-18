import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h3>Sorry! Page not found!</h3>
            <Link to="/">
                Go Home
            </Link>
        </div>
    )
}

export default NotFound
