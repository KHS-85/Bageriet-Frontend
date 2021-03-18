import React from 'react'

import Img1 from '../gfx/article.jpg'
import Img2 from '../gfx/article2.jpg'
import Img3 from '../gfx/article3.jpg'

const Intro = () => {
    return (
        <article className="container pb-5">
            
            <div className="row">

                <div className="col-12">
                    <h3 className="LobsterText pt-5 pb-3">Vi skaber lækkert brød!</h3>
                </div>

                <div className="col-12 lorem pt-2 pb-5">
                    <p>Der er mange forskellige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har
                        tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud
                    </p>
                </div>
            </div>

            <div className="row pt-5 pb-5">

                <div className="col">
                    <img className="IntroImg" src={Img1} alt="bread"/>
                    <h5>kreativitet dyrkes</h5> <br/>
                    <p className="lorem2">Der er mange forskellige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har</p>
                </div>

                <div className="col">
                    <img className="IntroImg" src={Img2} alt="bread"/>
                    <h5>Vi elsker brød</h5> <br/>
                    <p className="lorem2">Der er mange forskellige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har</p>
                </div>

                <div className="col">
                    <img className="IntroImg" src={Img3} alt="bread"/>
                    <h5>Sans for detaljer</h5> <br/>
                    <p className="lorem2">Der er mange forskellige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har</p>
                </div>

            </div>

        </article>
    )
}

export default Intro
