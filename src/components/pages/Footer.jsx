import React from 'react'
import { HashLink } from 'react-router-hash-link';
import Chevron from '../gfx/chevron.png'

const Footer = () => {
    return (
        <article className="container-fluid footer pt-4 pb-1 mt-5">

            <div className="row">
                <div className="col-12">
                    <HashLink smooth to="#Top">
                        <img className="ChevronTop" src={Chevron} alt="ToTop" />
                    </HashLink>
                    <h3 className="LobsterText">
                        bageriet
                    </h3>
                    </div>
                    </div>

                    <div className="row">

                    <div className="col">
                    <p className="footertext text-center mx-auto py-2">Der er mange forskellige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer</p>
                    </div>
                    </div>
            

            <div className="row">
                <div className="copyright py-2 mb-1 container-fluid">
                    <p className="m-0">Copyright ® 2021 bageriet ApS</p>
                </div>
            </div>

        </article>
    )
}

export default Footer
