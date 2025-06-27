import React from 'react'
import Img from '../shared/commondata'

const Aboutwsm = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row align-items-center" style={{ backgroundColor: '#f8f9fa' }} >
                    {/* Left Text Section */}
                    <div className="col-lg-7" >
                        <h1 className="comptitles mb-3">About Wall Street Marathi</h1>

                        <h5 className="text-secondary">
                            We Provide Best <span className="text-danger">Share Market Masterclasses</span> For You.
                        </h5>
                        <br />
                        <div style={{ textAlign: 'justify' }}>
                            <p>
                                Welcome to <strong>Wall Street Marathi</strong>, your premier destination for comprehensive stock
                                market education. Our range of popular courses caters to both beginners and advanced traders,
                                ensuring that everyone can benefit from our expertise. With options for both online and offline
                                training, participants delve into the fundamentals of stock market investing, covering essential
                                topics like fundamental analysis and intraday trading strategies.
                            </p>

                            <p>
                                Among our offerings, the “Master in Trading & Investment” course shines as one of our most
                                popular courses. Designed to equip participants with expert skills in stock analysis and informed
                                investment decision-making, this comprehensive program covers various aspects of stock market
                                trading and investment.
                            </p>

                            <p>
                                Whether you're embarking on your journey in stock market investing or seeking to enhance your
                                existing knowledge and skills, Bharti Share Market's courses provide valuable insights and
                                practical strategies tailored to your needs. Join us today and empower yourself with the
                                knowledge and confidence to excel in the dynamic world of trading and investment.
                            </p>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="col-lg-5 text-center">
                        <img
                            src={Img.screen3}
                            alt="student"
                            className="img-fluid shadow-lg"
                            style={{ height: '450px', width: '350px', borderRadius: '70px 10px 10px 10px ' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutwsm
