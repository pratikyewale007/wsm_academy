import React from 'react'
import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaThumbsUp } from 'react-icons/fa';

const Statscount = () => {
    return (
        <div className="container py-0" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="row text-center g-3">

                {/* Card 1 */}
                <div className="col-md-3 col-6">
                    <div className="p-4 shadow-sm bg-green rounded">
                        <div className="bg-purple rounded-circle d-inline-block p-3 mb-3">
                            <FaUserGraduate size={50} color="#00b894" />
                        </div>
                        <h4 className="fw-bold">10K+</h4>
                        <p className="mb-0 text-uppercase small">Trained Students</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-3 col-6">
                    <div className="p-4 shadow-sm bg-purple rounded">
                        <div className="bg-green rounded-circle d-inline-block p-3 mb-3">
                            <FaChalkboardTeacher size={50} color="#ff7675" />
                        </div>
                        <h4 className="fw-bold">50k+</h4>
                        <p className="mb-0 text-uppercase small">Client Base</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-3 col-6">
                    <div className="p-4 shadow-sm bg-green rounded">
                        <div className="bg-purple rounded-circle d-inline-block p-3 mb-3">
                            <FaUsers size={50} color="#6c5ce7" />
                        </div>
                        <h4 className="fw-bold">30+</h4>
                        <p className="mb-0 text-uppercase small">Working Employees</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-3 col-6">
                    <div className="p-4 shadow-sm bg-purple rounded">
                        <div className="bg-green rounded-circle d-inline-block p-3 mb-3">
                            <FaThumbsUp size={50} color="#fdcb6e" />
                        </div>
                        <h4 className="fw-bold">20+</h4>
                        <p className="mb-0 text-uppercase small">Franchise Partners</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statscount
