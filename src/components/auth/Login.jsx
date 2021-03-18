import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState, useGlobal, useEffect } from 'reactn'

import {FaLock} from 'react-icons/fa';


//api call
import { loginAdmin, loginCheck } from '../helpers/apicall'

const Login = () => {

    const history = useHistory()

    const [authorized, setAuthorized] = useGlobal("authorized") //behøver ikke hedde det samme (authorized -> authorized) // vi sætter "authorized" til enten true eller false 
    const [message, setMessage] = useState()

    //tjek lige om brugeren i forvejen er logget ind
    useEffect(() => {
        
        loginCheck().then(res => {

            if(res.status) {

                console.log("OK")
                setAuthorized(true)
                history.push("/Admin")

            } else {

                console.log("NO")
                setAuthorized(true)

            }

        })

    }, [])

    // bruger ikke parantes om "e" siden der kun er ét argument
    const handleLogin = e => {

        e.preventDefault();

        console.log(e.target.email.value, e.target.password.value)

        loginAdmin(e.target).then(response => { // kræver at ens api kan håndtere formData

            console.log("login attempt:", response)
            
            if (response !== "error") {

                setAuthorized(true)

                //login lykkedes
                history.push("/Admin")
            } else {
                setAuthorized(false)
                setMessage("login mislykkedes - brugernavn og/eller password matcher ikke ")

            }

        })

    }

    return (
        <div className="container" >
            <div className="mt-5 pt-5">

                <h1 className="mt-5 pt-5">Admin Login</h1>

                <p> {message} </p>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email
                        <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" required />
                        </label>

                    </div>
                    <div className="form-group">
                        <label >Password
                            <input name="password" type="password" className="form-control" placeholder="Password" required />
                        </label>
                    </div>

                    <button type="submit" className="btn btn-dark"><FaLock /> Login</button>
                </form>

            </div>
        </div>
    )
}

export default Login
