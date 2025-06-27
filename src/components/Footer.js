import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocationOnIcon from '@mui/icons-material/LocationOn';// Icon for location
import PhoneIcon from '@mui/icons-material/Phone'; //Icon for phone
import EmailIcon from '@mui/icons-material/Email'; // Icon for email
import { Link } from 'react-router-dom';
import Img from '../shared/commondata'

const Footer = () => {
    return (
        <div>
            <footer className="text-dark pt-5 py-5" style={{ backgroundImage: 'url(' + Img.footerbg + ')', height: '100%', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Container>
                    <Row className="justify-content-between">
                        {/* Company Info */}
                        <Col md={3} className="mb-3">
                            <h5 style={{ color: '#03233F' }}><span style={{ color: '#437745' }}>WALL</span> STREET <span style={{ color: '#437745' }}>MARATHI</span></h5>
                            <div className="container-fluid">
                                <Link className="navbar-brand" to='/'>
                                    <img src={Img.logo} alt="Logo" width="100px" height="100px" />
                                </Link>
                            </div>
                        </Col>


                        {/* Quick Links & Social Media */}
                        <Col md={3}>
                            <h5>Follow Us</h5>
                            <div className="d-flex gap-3">
                                <Link to='https://www.youtube.com/@wallstreetmarathi' className="text-dark text-decoration-none"><YouTubeIcon size={20} /></Link>
                                <Link to='https://www.instagram.com/wallstreetmarathi.official/' className="text-dark text-decoration-none"><InstagramIcon size={20} /></Link>
                                <Link to='https://www.instagram.com/fyipruthviraj/' className="text-dark text-decoration-none"><InstagramIcon size={20} /></Link>
                                <Link to='https://t.me/wallstreetmarathi' className="text-dark text-decoration-none"><TelegramIcon size={20} /></Link>
                                <Link to='https://api.whatsapp.com/send?phone=919422400117' className="text-dark text-decoration-none"><WhatsAppIcon size={20} /></Link>
                            </div>
                        </Col>

                        {/* Quik links */}
                        <Col md={2}>
                            <h5 className="">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to='/' className="text-dark text-decoration-none">About Us</Link></li>
                                <li><Link to='/' className="text-dark text-decoration-none">Contact</Link></li>
                            </ul>
                        </Col>

                        {/* Help Section */}
                        <Col md={2}>
                            <h5>Help</h5>
                            <ul className="list-unstyled">
                                <li><Link to='/' className="text-dark text-decoration-none">Faq's</Link></li>
                                <li><Link to='/' className="text-dark text-decoration-none">Terms & Conditions</Link></li>
                            </ul>
                        </Col>
                        <hr style={{ backgroundColor: "white" }} />
                    </Row>

                    <Row className="mt-1 justify-content-between ">
                        <Col md={3}>
                            <p> <span><LocationOnIcon /></span> Head Office: No 5959, 4th Floor, Marvel Fuego, Rajwada Road, Near Rasta Peth, Satara 415001.</p>
                        </Col>
                        <Col md={3}>
                            <p><strong><PhoneIcon /> </strong> 9422400117</p>
                            <p><strong><EmailIcon /> </strong> <Link href="mailto:bakanksha346@gmail.com" className="text-dark">support@wallstreetmarathi.com</Link></p>
                        </Col>
                        <Col md={4}>
                            <p><strong>Franchise Queries:</strong> <Link href="mailto:bakanksha346@gmail.com" className="text-dark">franchisequery@wallstreetmarathi.com</Link></p>
                        </Col>
                        <div>
                            <b> Disclaimer: </b>Investment In Stock market is subject to market risk. There is no assured returns in the stock market so invest as per your risk appetite and read all the documents carefully before investing.
                        </div>
                    </Row>

                    <hr style={{ backgroundColor: "white" }} />

                    {/* Copyright and Developer Credit */}
                    <Row className="text-center">
                        <Col>
                            <p>&copy; {new Date().getFullYear()} Wall Street Marathi. All Rights Reserved.
                                <br />Designed by <strong>Pratik Yewale</strong> using <strong>React.js</strong>.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
