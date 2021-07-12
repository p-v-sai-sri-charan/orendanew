import React from 'react'
import Navbar from '../Navbar/Navbar'
import Ourwork from '../OurWork/Ourwork'
import Contact from '../Contact/Contact'
import Slider from '../Slider/Slider'

function Home() {
    return (
        <div>
            <Slider />
            <Ourwork />
            <Contact />
        </div>
    )
}

export default Home
