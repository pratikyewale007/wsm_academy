import React from 'react'
import Img from '../shared/commondata'
import './Infnavbar.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocationOnIcon from '@mui/icons-material/LocationOn';// Icon for location
import PhoneIcon from '@mui/icons-material/Phone'; //Icon for phone
import EmailIcon from '@mui/icons-material/Email'; // Icon for email

const Infnavbar = () => {
    return (
        <div>
            <h3 className='titleheading'>जिथे NIKAM तिथे INCOME</h3>
            <marquee style={{ color: '#8B0000', fontSize: '20px' }}> Investment In Stock market is subject to market risk. There is no assured returns in the stock market so invest as per your risk appetite and read all the documents carefully before investing. </marquee>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={Img.logo} alt="Logo" width="105px" height="105px" className="d-inline-block align-text-top" />


                    </Link>
                    <b style={{ color: '#03233F', marginLeft: '-100px' }} className='fs-3'>WALL STREET MARATHI</b>

                    <div>
                        <Link to='https://www.youtube.com/@wallstreetmarathi' className="text text-decoration-none mx-3" style={{ color: 'red' }}><YouTubeIcon size={20} /></Link>

                        <Link to='https://api.whatsapp.com/send?phone=919422400117' className="text text-decoration-none mx-3" style={{ color: 'green' }}><WhatsAppIcon size={20} /></Link>
                        <Link to='https://www.instagram.com/wallstreetmarathi.official/' className="text text-decoration-none mx-3"
                            style={{ color: '#DC143C' }}><InstagramIcon size={20} /></Link>
                        <Link to='https://t.me/wallstreetmarathi' className="text text-decoration-none mx-3" style={{ color: 'blue' }}><TelegramIcon size={20} /></Link>

                    </div>

                    <div className='d-flex align-items-end flex-column bd-highligh'>
                        <Link to="/" className='nav-link active fs-6 fw-bold' style={{ color: 'darkblue' }} aria-current="page">+91 9845290122</Link>
                        <Link to="/" className='nav-link active fs-6 fw-bold' style={{ color: 'darkblue' }} aria-current="page"> support@wallstreetmarathi.com </Link>
                        <Link to="/" className='nav-link active fs-6 fw-bold' style={{ color: 'darkblue' }} aria-current="page"> Satara, Maharashtra  </Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Infnavbar
