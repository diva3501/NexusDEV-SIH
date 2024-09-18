import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faBriefcase, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Lottie from "react-lottie";
import animationData from "../assets/lottie/innovation-animation.json"; 
function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero position-relative d-flex align-items-center">
        <div className="container text-center text-white hero-content">
          <img src="/assets/1.jpg" alt="Alumni Connection" className="alumni-hero-image img-fluid rounded" />
          <h1 className="display-4 font-weight-bold hero-title">Welcome to NexusDEV</h1>
          <p className="lead mb-4">Connect. Innovate. Grow. Build lasting alumni connections and accelerate your career.</p>
          <a href="#" className="btn btn-explore mt-3 px-5 py-3">Explore Now</a>
        </div>
        <img src="/assets/alumniconnect.svg" alt="Alumni Connect" className="alumni-connect-svg position-absolute" />
      </section>

      <section className="features-section py-5">
        <div className="container text-center">
          <h3 className="font-weight-bold mb-5">How NexusDEV Can Help You</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card feature-card shadow h-100">
                <FontAwesomeIcon icon={faUserGraduate} size="4x" className="text-primary mb-3" />
                <h5 className="font-weight-bold">For Students</h5>
                <p className="text-muted">Discover internships, mentorships, and exclusive learning opportunities to fuel your growth.</p>
                <a href="#" className="btn btn-primary mt-3">Explore</a>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card feature-card shadow h-100">
                <FontAwesomeIcon icon={faHandshake} size="4x" className="text-success mb-3" />
                <h5 className="font-weight-bold">For Alumni</h5>
                <p className="text-muted">Reconnect with your alma mater, mentor students, and stay involved with the latest developments.</p>
                <a href="#" className="btn btn-success mt-3">Get Involved</a>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card feature-card shadow h-100">
                <FontAwesomeIcon icon={faBriefcase} size="4x" className="text-warning mb-3" />
                <h5 className="font-weight-bold">For Institutions</h5>
                <p className="text-muted">Manage alumni relations, enhance institutional networks, and improve career support.</p>
                <a href="#" className="btn btn-warning mt-3">Engage Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="success-stories py-5 bg-light">
        <div className="container text-center">
          <h3 className="font-weight-bold mb-5">Alumni Success Stories</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="story-card shadow p-4">
                <img src="/assets/success1.jpg" alt="Alumni Success 1" className="story-image img-fluid rounded" />
                <h5 className="font-weight-bold mt-3">John Doe</h5>
                <p className="text-muted">From student to CEO – how NexusDEV shaped my journey to success.</p>
                <a href="#" className="btn btn-outline-primary mt-3">Read More</a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="story-card shadow p-4">
                <img src="/assets/success2.jpg" alt="Alumni Success 2" className="story-image img-fluid rounded" />
                <h5 className="font-weight-bold mt-3">Jane Smith</h5>
                <p className="text-muted">Building a startup with the help of NexusDEV alumni connections.</p>
                <a href="#" className="btn btn-outline-success mt-3">Read More</a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="story-card shadow p-4">
                <img src="/assets/success3.jpg" alt="Alumni Success 3" className="story-image img-fluid rounded" />
                <h5 className="font-weight-bold mt-3">Mark Johnson</h5>
                <p className="text-muted">Turning innovative ideas into real-world solutions with NexusDEV.</p>
                <a href="#" className="btn btn-outline-warning mt-3">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section py-5 text-white">
        <div className="container text-center">
          <h3 className="font-weight-bold mb-3">Ready to Make a Difference?</h3>
          <p className="lead mb-4">Join NexusDEV today and become part of an innovative, connected, and thriving community.</p>
          <a href="#" className="btn btn-light btn-lg px-5 py-3">Join Now</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
