import React from 'react'
import MyProducts from './MyProducts'

const Nyeste = () => {
    return (
        <article className="container-fluid nyeste py-5 my-5">

            <div className="row">
                <div className="col-12">
                    <h2 className="LobsterText pb-2">Nyeste bagværk</h2>
                </div>
                <div className="col-12 lorem pb-4">
                    <p>Der er mange forskellige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har
                    tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud
                    </p>
                </div>

            </div>

            <div className="row">

            <MyProducts/>

            </div>

        </article>
    )
}

export default Nyeste
