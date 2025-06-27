import React from 'react'
import '../components/Video_testimonials.css'

const testimonials = [
    {
        name: "Ganesh Nikam",
        message:
            "The psychology lessons were a game-changer for me. The course is great for anyone starting out.",
        videoUrl: "#",
        rating: 5,
    },
    {
        name: "Ashvini Karpe",
        message:
            "The course was fantastic! My trading accuracy has significantly improved, and I’m making more consistent profits.",
        videoUrl: "#",
        rating: 5,
    },
    {
        name: "Prasad Pawar",
        message:
            "I started my journey with WSM in 2023 and then I had great results in Trading and Psychology.",
        videoUrl: "#",
        rating: 5,
    },
    {
        name: "Ashvini Karpe",
        message:
            "The course was fantastic! My trading accuracy has significantly improved, and I’m making more consistent profits.",
        videoUrl: "#",
        rating: 5,
    },
];


const TestimonialCard = ({ name, message, videoUrl, rating }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card text-center shadow rounded-4 p-3">
                <div className="mb-3">
                    <div className="position-relative">
                        <video className="w-100 rounded" src={videoUrl} controls poster="https://via.placeholder.com/300x500" />
                        {/* Replace placeholder with thumbnail if needed */}
                    </div>
                </div>
                <h5 className="fw-bold">{name}</h5>
                <div className="text-warning mb-2">
                    {"★".repeat(rating)}{"☆".repeat(5 - rating)}
                </div>
                <p className="small text-muted">{message}</p>
                <p className="mt-3 mb-0 text-secondary">@wallstreetmarathi</p>
            </div>
        </div>
    );
};

const Video_testimonials = () => {
    return (
        <div>
            <div className="container py-5">
                <h2 className="text-center mb-4">#HappyTrader Testimonials</h2>
                <div className="row">
                    {testimonials.map((t, index) => (
                        <TestimonialCard key={index} {...t} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Video_testimonials
