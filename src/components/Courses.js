import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col } from "react-bootstrap";

const Courses = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8888/courses")
      .then((res) => setCourseData(res.data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  // Group into chunks of 3 for carousel slides
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const slides = chunkArray(courseData, 3);

  return (
    <section className="py-3">
      <Container>
        <h2 className="title mb-5">
          Our <span style={{ color: "#437745" }}>Masterclasses</span> &{" "}
          <span style={{ color: "#437745" }}>Mentorships</span>
        </h2>

        <Carousel interval={4000} pause="hover">
          {slides.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="g-4 justify-content-center">
                {group.map((course) => (
                  <Col key={course.id} md={6} lg={4}>
                    <CourseCard {...course} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

const CourseCard = ({
  id,
  title,
  subtitle,
  price,
  original,
  imgpath,
  duration,
  url,
}) => {
  const handleEnroll = () => {
    const course = {
      id,
      title,
      subtitle,
      price,
      original,
      imgpath,
      duration,
      url,
    };

    axios
      .post("http://localhost:8888/Cart", course)
      .then(() => {
        alert("Course added to cart!");
      })
      .catch((err) => {
        console.error("Error adding to cart:", err);
        alert("Failed to add to cart.");
      });
  };

  return (
    <div
      className="card shadow border-4 rounded-5 h-100"
      style={{ backgroundColor: "#cdeccf" }}
    >
      <div className="card-body text-center p-3">
        <h5 className="fw-bold">{title}</h5>
        <h6 className="fw-bold">{subtitle}</h6>
        <img
          src={imgpath}
          alt={`${title} Icon`}
          className="img-fluid my-2"
          style={{ width: "300px", height: "250px" }}
        />
        <h6 className="fw-bold mb-3">Duration: {duration}</h6>
        <p className="fs-5 fw-bold text-primary">{price}</p>
        <p className="text-muted">
          Original Price: ₹<del>{original}</del>
        </p>
        <button
          onClick={handleEnroll}
          className="btn btn-primary w-50 rounded-pill"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Courses;
