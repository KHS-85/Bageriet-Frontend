import React from 'react';

import Slide1 from '../gfx/slide1.jpg'
import Slide2 from '../gfx/slide2.jpg'
import Slide3 from '../gfx/slide3.jpg'


const SliderPage = () => {
    return (
        <div className="SliderElement">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={Slide1} alt="bread" />
                        <div class="carousel-caption d-none d-md-block">
                            <p>Vi elsker at lave brød</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={Slide2} alt="more bread" />
                        <div class="carousel-caption d-none d-md-block">
                            <p>Vi dyrker kreativitet</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={Slide3} alt="even more bread" />
                        <div class="carousel-caption d-none d-md-block">
                            <p>Vi har sans for detaljer</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Forrige</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Næste</span>
                </a>
            </div>
        </div>
    )
}



export default SliderPage
