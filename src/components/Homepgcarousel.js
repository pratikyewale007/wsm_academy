import Img from "../shared/commondata";
import './Homepgcarousel.css';

const Homepgcarousel = () => {
    return (
        <div>
            <h2 className="title py-5">Start, Learn & Scale your stock market <br /> returns in <span style={{ color: '#437745' }}> intraday trading from scratch</span> </h2>
            {/* Carousel component for the home page */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ maxHeight: '400px', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)' }}>

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={Img.logo2} className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'fill' }} />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Img.screen1} className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'fill' }} />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Img.screen2} className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'fill' }} />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={Img.banner} className="d-block w-100" alt="..." style={{ height: '400px', objectFit: 'fill' }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Homepgcarousel

