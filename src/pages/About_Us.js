import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutwsm from '../components/Aboutwsm'
import Statscount from '../components/Statscount'
import Successtories from '../components/Successtories'
import Fewords from '../components/Fewords'
import Img from '../shared/commondata'

const About_Us = () => {
    return (
        <div className='backgroundimg'>
            <Navbar />
            <Aboutwsm />
            <Statscount />
            <Successtories />
            <Fewords />
            <Footer />
        </div>
    )
}

export default About_Us
