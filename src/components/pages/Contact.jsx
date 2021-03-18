import React from 'react'
import Map from '../gfx/map.jpg'

const Contact = () => {
    return (
        <div id="Contact" className="container contact mb-5">

            <div className="container">

            <div className="row">
                <div className="col-12">
                    <h2 className="LobsterText pb-2 mt-5">Kontakt os</h2>
                </div>
                <div className="col-12 lorem pb-5 mb-3">
                    <p>Der er mange forskellige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har
                    tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud
                    </p>
                </div>

            </div>

                <div className="row">

                    <div className="col-xs-12 col-md-6">

                        <form>
                            {/* Name */}
                            <div className="form-group col-xs-3">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Dit navn..." />
                            </div>
                            {/* Email */}
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Din e-mail..." />
                            </div>
                            {/* Emne */}
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Dit emne..." />
                            </div>
                            {/* Message */}
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Din besked..." rows="7"></textarea>
                            </div>
                            <button type="submit" className="contactsubmitbtn btn btn-secondary mb-5">Send</button>

                        </form>

                    </div>

                    <div className="col-xs-12 col-md-6">

                        <p className="text-left">Adresse: <span className="grey"> Øster Uttrupvej 1, 9200 Ålborg </span></p>
                        <p className="text-left">Telefon: <span className="grey"> +45 25 26 95 40 </span> </p>
                        <img className="FakeMap img-fluid mb-5" src={Map} alt="FakeMap"/>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact
