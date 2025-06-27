import React from 'react'
import Img from '../shared/commondata';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div>
            <section className="py-3">
                <div className="container">
                    <h2 className="title mb-5">Our <span style={{ color: '#437745' }}>Masterclasses</span> & <span style={{ color: '#437745' }}>Mentorships</span></h2>

                    {/* Carousel Start */}
                    <div id="courseCarousel" className="carousel slide" data-bs-interval="4000" data-bs-ride="carousel">
                        <div className="carousel-inner py-1">

                            {/* Slide 1 */}
                            <div className="carousel-item active">
                                <div className="row g-4 justify-content-center">
                                    <CourseCard
                                        title="Intraday Trading Masterclass"
                                        subtitle="(Live)"
                                        price="₹ 8999"
                                        original="11999"
                                        img={Img.intrad}
                                        duration="30 Days"
                                        url="/intraday_trading_masterclass"
                                    />
                                    <CourseCard
                                        title="Option Trading Masterclass "
                                        subtitle="(Live)"
                                        price="₹ 11999"
                                        original="16999"
                                        img={Img.option}
                                        duration="60 Days"
                                        url="/option_trading_masterclass"
                                    />
                                    <CourseCard
                                        title="Forex Trading Masterclass"
                                        subtitle="(Live)"
                                        price="₹ 12999"
                                        original="18999"
                                        img={Img.forex}
                                        duration="45 Days"
                                        url="/forex_masterclass"
                                    />
                                </div>
                            </div>

                            {/* Slide 2*/}
                            <div className="carousel-item">
                                <div className="row g-4 justify-content-center">
                                    <CourseCard
                                        title="Basics of Stock Market"
                                        subtitle="(Recorded)"
                                        price="₹ 3000"
                                        original="5000"
                                        img={Img.basic}
                                        duration="20 Lectures"
                                        url="/basics_of_stock_market"
                                    />
                                    <CourseCard
                                        title="Telegram Mentorships"
                                        subtitle="(3 & 6 Months)"
                                        price="3 - ₹ 4500, 6 - ₹ 7500"
                                        original="3 - 6000, 6 - 10000"
                                        img={Img.telegram}
                                        duration="3 & 6 Months"
                                        url="/telegram_mentorship"
                                    />
                                    <CourseCard
                                        title="1 to 1 Private Mentorship"
                                        subtitle="(2 Months)"
                                        price="₹ 9999"
                                        original="17999"
                                        img={Img.oneto1}
                                        duration="2 Months"
                                        url="/one-1_mentorship"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#courseCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#courseCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>


                    {/* View More Button */}
                    {/* <div className="text-center mt-4">
                        <button className="btn btn-dark btn-lg rounded-pill">
                            View More ➜
                        </button>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

const CourseCard = ({ title, subtitle, price, original, img, duration, url }) => (
    <div className="col-md-6 col-lg-4 d-flex">
        <div className="card shadow border-4 rounded-5 h-100 " style={{ backgroundColor: '#cdeccf' }}>
            <div className="card-body text-center background-light p-3">
                <h5 className="fw-bold ">{title}</h5>
                <h5 className="fw-bold ">{subtitle}</h5>
                <img
                    src={img}
                    alt={`${title} Icon`}
                    className="img-fluid my-2"
                    style={{ width: "300px", height: "250px" }}
                />
                <h6 className="fw-bold mb-3">Duration:- {duration}</h6>
                <p className="fs-5 fw-bold text-primary">{price}</p>
                <p className="text-muted">Original Price:₹ <del>{original}</del></p>
                <Link to={url} className="btn btn-primary w-50 rounded-pill">
                    Enroll Now
                </Link>
            </div>
        </div>
    </div>
);

export default Courses
