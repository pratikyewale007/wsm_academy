import React from 'react'
import Img from '../shared/commondata'

const Mentor = () => {
    return (
        <div>
            <section className="py-5 py-md-3">
                <div className="container">
                    <h3 className="title">Know your <span style={{ color: '#437745' }}>mentor</span></h3>
                    <br />
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-xl-center">
                                <div className="col-12 col-xl-10" style={{ textAlign: 'center' }}>
                                    <h2 className="mb-3">Pruthviraj Nikam</h2>
                                    <h4 className="mb-3">Founder of <span style={{ color: '#437745' }}>Wall </span><span style={{ color: '#03233F' }}>Street </span><span style={{ color: '#437745' }}>Marathi</span></h4>
                                    <p className="lead fs-6 mb-3 mb-xl-2">Pruthviraj Sunil Nikam is a big name in the world of STOCK MARKET in Maharashtra. He's the creator of Wall Street Marathi, a popular YouTube channel that teaches people who speak Marathi how to invest in the stock market.</p>
                                    <p className="lead fs-6 mb-3 mb-xl-2">With a mission to CHANGE finance, HE has built Wall Street Marathi into a thriving platform offering comprehensive training and mentorship. The channel's rapid growth and widespread recognition are a testament to its impact on 1.8 LAKH lives BOTH YOUTUBE AND INSTAGRAM COMBINED.</p>
                                    <p className="lead fs-6 mb-3 mb-xl-3">Wall Street Marathi has grown really fast and is now a major player in teaching people about the stock market in Maharashtra. His goal isn't just to teach people how to invest, but also to help them become confident and knowledgeable about money.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <img className="img-fluid rounded" loading="lazy" src={Img.mentor2} alt="About 2" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mentor
