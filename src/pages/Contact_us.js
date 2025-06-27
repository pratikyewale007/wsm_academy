import React from 'react'
import Contactform from '../components/Contactform'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Img from '../shared/commondata'


const Contact_us = () => {
    return (
        <div className='backgroundimg'>
            <Navbar />
            <Contactform />
            <Footer />
        </div>
    )
}

export default Contact_us
