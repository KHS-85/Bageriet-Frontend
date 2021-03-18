import React from 'react'
import SliderPage from './SliderPage'
import Intro from './Intro'
import NewsLetter from './NewsLetter'
import Nyeste from './Nyeste'

const Home = () => {
    return (
        <div id="Home" className="home">
            <SliderPage/>
            <Intro/>
            <NewsLetter/>
            <Nyeste/>

        </div>
    )
}

export default Home
