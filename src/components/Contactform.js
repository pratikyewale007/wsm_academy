import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocationOnIcon from '@mui/icons-material/LocationOn';// Icon for location
import PhoneIcon from '@mui/icons-material/Phone'; //Icon for phone
import EmailIcon from '@mui/icons-material/Email'; // Icon for email


const Contactform = () => {
    return (
        <div>
            <section className="py-5 ">
                <div className="container">
                    <div className="row g-5 align-items-start">
                        <h3 className='comptitles'>Contact Us</h3>
                        {/* Left Column - Contact Info */}
                        <div className="col-md-5">
                            <h3 className="mb-4">We're Always Eager to Hear From You!</h3>
                            <h6><LocationOnIcon /><strong> Address</strong></h6>
                            <p>
                                Head Office: No 5959, 4th Floor, Marvel Fuego,<br />
                                Rajwada Road, Near Rasta Peth,<br />
                                Satara 415001.
                            </p>
                            <h6><EmailIcon /><strong> Email</strong></h6>
                            <p>support@wallstreetmarathi.com</p>
                            <h6><PhoneIcon /><strong> Phone</strong></h6>
                            <p>+91 9422400117</p>

                            {/* Social Icons */}
                            <div className="d-flex gap-3 mt-3">
                                <Link to='https://www.youtube.com/@wallstreetmarathi' className="text-dark text-decoration-none"><YouTubeIcon size={20} /></Link>
                                <Link to='https://www.instagram.com/wallstreetmarathi.official/' className="text-dark text-decoration-none"><InstagramIcon size={20} /></Link>
                                <Link to='https://www.instagram.com/fyipruthviraj/' className="text-dark text-decoration-none"><InstagramIcon size={20} /></Link>
                                <Link to='https://api.whatsapp.com/send?phone=919422400117' className="text-dark text-decoration-none"><WhatsAppIcon size={20} /></Link>
                                <Link to='https://t.me/wallstreetmarathi' className="text-dark text-decoration-none"><TelegramIcon size={20} /></Link>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="col-md-7">
                            <div className="bg-light p-4 shadow rounded">
                                <h4 className="mb-2">Get In Touch</h4>
                                <p className="mb-4 text-muted">Fill out this form for booking a consultant advising session.</p>
                                <form>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First Name" required />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-2">
                                            <input type="text" className="form-control" value="+91" readOnly />
                                        </div>
                                        <div className="col-10">
                                            <input type="tel" className="form-control" placeholder="Mobile Number" required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email Address" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Query Please if Any" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="City" />
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-select">
                                            <option>-Select Program Type-</option>
                                            <option>Basic of Stock Market Course</option>
                                            <option>Intraday Trading Masterclass</option>
                                            <option>Option Trading Masterclass</option>
                                            <option>Forex Masterclass</option>
                                            <option>Telegram Mentorships</option>
                                            <option>1 to 1 Private Mentorship</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <select className="form-select">
                                            <option>-Select Preferred Language-</option>
                                            <option>English</option>
                                            <option>Hindi</option>
                                            <option>Marathi</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-info w-100 "><strong>Submit</strong></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='m-3'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60823.73282232176!2d73.97706128204429!3d17.67461474671398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239be08d96bbd%3A0x5f4adf559fb4b19a!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1750417495453!5m2!1sen!2sin" title="wall street marathi" width={'100%'} height={'300px'}></iframe>
            </div>
        </div>
    )
}

export default Contactform
