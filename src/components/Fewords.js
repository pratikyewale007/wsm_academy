import React from 'react'
import Img from '../shared/commondata'

const Fewords = () => {
    return (
        <div>
            <section className="py-5 py-md-3">
                <div className="container">
                    <h3 className="comptitles">Few Words from the Founder</h3>
                    <br />
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className="col-12 col-lg-6">
                            <img className="img" height='430px' width='490px' loading="lazy" src={Img.mentor} style={{ paddingLeft: '100px', borderRadius: '20px 70px 20px 70px' }} />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-xl-center">
                                <div className="col-12 col-xl-11" style={{ textAlign: 'justify' }}>
                                    <h4 className="mb-3">Pruthviraj Nikam - The Visionary Educator Behind Wall Street Marathi</h4>
                                    <p className="lead fs-6 mb-3 mb-xl-2">Pruthviraj Sunil Nikam, founder of Wall Street Marathi, is a driving force in making stock market education accessible to the Marathi-speaking community. With a vision to revolutionize financial literacy, he has empowered over 1.8 lakh individuals through YouTube and Instagram. His platform stands as a beacon for those eager to learn investing and take control of their financial future. From grassroots to greatness, his journey continues to inspire aspiring investors across Maharashtra.</p>
                                    <p className="lead fs-6 mb-3 mb-xl-2">Pruthviraj Sunil Nikam, known on Instagram as @fyipruthviraj, is a Stock Market Trader & Trainer based in Satara, Maharashtra. He's also the driving force behind Wall Street Marathi, where he delivers financial wisdom and mentorship to the Marathi-speaking community.</p>
                                    <p className="lead fs-6 mb-3 mb-xl-3">Through both YouTube and Instagram, he has empowered 1.8 lakh+ learners, combining short-form social content with in-depth trainings to build confidence in investing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Fewords
