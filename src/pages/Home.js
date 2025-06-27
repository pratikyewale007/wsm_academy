import React from 'react'
import Navbar from '../components/Navbar'
import Infnavbar from '../components/Infnavbar'
import Homepgcarousel from '../components/Homepgcarousel'
import Aboutus from '../components/Aboutus'
import Coursesdesignedfor from '../components/Coursesdesignedfor'
import Courses from '../components/Courses'
import Mentor from '../components/Mentor'
import Footer from '../components/Footer'
import Img from '../shared/commondata'

const Home = () => {
    return (
        <div className='backgroundimg'>
            <Infnavbar />
            <Navbar />
            <Homepgcarousel />
            <Aboutus />
            <Courses />
            <Coursesdesignedfor />
            <Mentor />
            <Footer />
        </div>
    )
}

export default Home