import React from 'react';
import './Coursesdesignedfor.css';


const Coursesdesignedfor = () => {
    const people = [
        { label: "Salaried Professional", icon: "👨‍💼", bg: "bg-purple" },
        { label: "Businessmen", icon: "💼", bg: "bg-yellow" },
        { label: "Students", icon: "🎓", bg: "bg-green" },
        { label: "Housewives", icon: "👩‍🍳", bg: "bg-pink" },
        { label: "Engineers", icon: "🧑‍💻", bg: "bg-green" },
        { label: "MBA Professional", icon: "🎓", bg: "bg-pink" },
        { label: "Charted Accountants", icon: "👨‍🏫", bg: "bg-purple" },
        { label: "Retired Individuals", icon: "👴", bg: "bg-yellow" },
    ];


    return (
        <div>
            <div className="container py-5 text-center">
                <h2 className="title mb-5">This <span style={{ color: '#437745' }}>Programs</span> Are <span style={{ color: '#437745' }}>Designed</span> For</h2>

                <div className="row g-4">
                    {people.map((item, index) => (
                        <div className="col-md-3 col-sm-6" key={index}>
                            <div className={`card-custom ${item.bg}`}>
                                <div className="icon">{item.icon}</div>
                                <p>{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='title text-center '>
                <h1>Learn from the only Trader with verified P&L</h1>
            </div>
        </div>
    )
}

export default Coursesdesignedfor
