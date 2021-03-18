import React from 'react'

import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaDribbble} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container-fluid footer">

            <div className="container footertop">

            <div className="row">

                <div className="col-12 col-md-4 pb-4 order-lg-1 location">
                    <h4 className="pb-3 boldtext">LOCATION</h4>
                    <p>Duevej 85</p>
                    <p>8500 Grenå</p>
                </div>

                <div className="col-12 col-md-4 pb-4 order-lg-3">
                    <h4 className="pb-3 boldtext">ABOUT BOSTON GAMING</h4>
                    <p>
                    Boston Gaming is a small newly
                    founded company, driven by the
                    passion of custom pc builds.
                    </p>
                </div>

                <div className="col-12 col-md-4 pb-4 order-lg-2">
                    <h4 className="pb-3 boldtext">AROUND THE WEB</h4>
                    <p> 
                    <span className="socialicon"><FaFacebook/></span>
                    <span className="socialicon"><FaTwitter/></span>
                    <span className="socialicon"><FaLinkedin/></span> 
                    <span className="socialicon"><FaDribbble/></span>  
                    </p>

                </div>

            </div>

            </div>

            <div className="copyright container-fluid">
                <p>Copyright ® Boston Gaming</p>
            </div>

        </div>
    )
}


export default Footer
