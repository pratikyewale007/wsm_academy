import React from 'react'
import Img from '../shared/commondata'

const Successtories = () => {
    return (
        <div>
            <section className="py-5 py-md-5">
                <div className="container">
                    <h3 className='comptitles'>Our Success Stories</h3>
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center" style={{ backgroundColor: '#f8f9fa' }}>
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-xl-center">
                                <div className="col-12 col-xl-11" style={{ textAlign: 'justify' }}>
                                    <p className="lead fs-6 mb-3 mb-xl-2">Start on the success journey of Wall Street Marathi, where education, innovation and empowerment converge. Our commitment lies in nurturing essential skills and confidence in our students, guided by a highly experienced faculty with over a decade in financial markets. Having educated over 1,70,000 individuals through impactful seminars and classroom programs, our focus extends to promoting financial literacy. Our initiatives not only educate individuals but also contribute to the growth of numerous businesses. As a part of Bharti Group of Companies, we continue to be at the forefront of education and support for both individuals and businesses, fostering success in every facet of our journey. Welcome to a realm where knowledge meets progress with Bharti Group of Companies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <img className="img-fluid shadow-lg" loading="lazy" src={Img.success} alt="About 2" style={{ borderRadius: '70px 10px 70px 10px' }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Successtories
