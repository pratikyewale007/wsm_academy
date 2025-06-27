import React from 'react'
import './Aboutus.css'
import Img from "../shared/commondata";

const Aboutus = () => {
    return (
        <div>
            <section className="py-3 py-md-5">
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className="col-12 col-lg-6">
                            <img className="img-fluid rounded" loading="lazy" src={Img.logomean} alt="About 2" />
                            <img className="img-fluid rounded" loading="lazy" src={Img.selfwelcome} alt="About 2" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-xl-center">
                                <div className="col-12 col-xl-11">
                                    <h2 className="title mb-3 text-center">About <span style={{ color: '#437745' }}>Us</span></h2>
                                    <p className="lead fs-6 mb-3 mb-xl-2 text-center">Welcome to Bharti Share Market, your premier destination for comprehensive stock market education. Our range of popular courses caters to both beginners and advanced traders, ensuring that everyone can benefit from our expertise. With options for both online and offline training, participants delve into the fundamentals of stock market investing, covering essential topics like fundamental analysis and intraday trading strategies.</p>
                                    <p className="lead fs-6 mb-3 mb-xl-2 text-center">Among our offerings, the "Master in Trading & Investment" course shines as one of our most popular courses. Designed to equip participants with expert skills in stock analysis and informed investment decision-making, this comprehensive program covers various aspects of stock market trading and investment.</p>
                                    <p className="lead fs-6 mb-3 mb-xl-3 text-center">Whether you're embarking on your journey in stock market investing or seeking to enhance your existing knowledge and skills, Bharti Share Market's courses provide valuable insights and practical strategies tailored to your needs. Join us today and empower yourself with the knowledge and confidence to excel in the dynamic world of trading and investment.</p>

                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="fs-5 m-0">Our evolution procedure is super intelligent.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="fs-5 m-0">We deliver services beyond expectations.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-4 mb-xl-5">
                                        <div className="me-3 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="fs-5 m-0">Let's hire us to reach your objectives.</p>
                                        </div>
                                    </div>
                                    <button type="button" className="btn bsb-btn-xl btn-outline-primary rounded-pill">Connect Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutus
