import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';



const NewsLetter = () => {
    return (
        <article className="NewsLetter container-fluid pt-5 pb-3">

            <div className="col-5 mx-auto">

            <div className="NewsLetterText">
                <h2 className="LobsterText">Tilmeld dig vores nyhedsbrev</h2>
                <p className="pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>

            </div>

            <div className="row">
                <div className="col-12">

                    <form>
                        <div class="form-inline">
                            <div className="newslettericon"> <AiOutlineMail/> </div>
                            <input className="newsletterinput" type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Indtast din email" />
                            <button className="newsletterbutton" type="submit" >Tilmeld</button>
                        </div>

                        
                    </form>

                </div>
            </div>

            </div>


        </article>
    )
}

export default NewsLetter
