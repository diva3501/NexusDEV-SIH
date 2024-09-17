import React from 'react';
import graduationIllustration from '../assets/img/graduation_illustration.svg';
import connectingTeamsIllustration from '../assets/img/connecting_teams.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faHandshake, faBriefcase, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Home.css'; // Import the custom CSS file for additional styling

function Home() {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="container text-center text-white">
          <h1 className="display-3 font-weight-bold">Welcome to NexusDEV</h1>
          <p className="lead">Fostering growth and collaboration between students, alumni, and institutions.</p>
          <a href="#" className="btn btn-warning btn-lg mt-4 px-5 py-3">Get Started</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-5">
        <div className="row align-items-center mb-5">
          {/* Content Section */}
          <div className="col-lg-6 mb-4">
            <h2 className="font-weight-bold mb-4">Your Gateway to Success</h2>
            <p className="text-muted mb-4">
              NexusDEV bridges the gap between students, alumni, and institutions by offering mentorship, job opportunities, and collaborative projects. 
              Explore our platform to find mentors, discover job openings, and participate in meaningful projects.
            </p>
            <a href="#" className="btn btn-primary btn-lg px-4 py-2 mt-5">Explore Now</a>
          </div>

          {/* Illustration Section */}
          <div className="col-lg-6 text-center">
            <img src={graduationIllustration} alt="Graduation Illustration" className="img-fluid rounded shadow-lg" />
          </div>
        </div>

        {/* Sections for Current Students, Alumni, and Institution */}
        <div className="row mb-5">
          <div className="col-lg-4 mb-4">
            <div className="card card-custom shadow-sm border-0 hover-shadow">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faUserGraduate} size="3x" className="text-primary mb-3" />
                <h5 className="card-title">For Students</h5>
                <p className="card-text">Access mentorship, job portals, collaborative projects, and networking opportunities tailored for you.</p>
                <a href="#" className="btn btn-outline-primary mt-5">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card card-custom shadow-sm border-0 hover-shadow">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faHandshake} size="3x" className="text-primary mb-3" />
                <h5 className="card-title">For Alumni</h5>
                <p className="card-text">Stay engaged by mentoring students, posting job opportunities, and sharing your success stories.</p>
                <a href="#" className="btn btn-outline-primary mt-5">Discover More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card card-custom shadow-sm border-0 hover-shadow">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faBriefcase} size="3x" className="text-primary mb-3" />
                <h5 className="card-title">For Institutions</h5>
                <p className="card-text">Manage engagement, track donations, and host events to enhance alumni relations.</p>
                <a href="#" className="btn btn-outline-primary mt-5">Find Out More</a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="text-center my-5">
  <h3 className="font-weight-bold mb-5">Key Features</h3>
  <div className="row">
    <div className="col-md-4 mb-4">
      <div className="key-feature-card text-center p-4 shadow-sm rounded-lg">
        <div className="icon-container mb-4">
          <FontAwesomeIcon icon={faChartLine} size="3x" className="text-primary" />
        </div>
        <h5 className="font-weight-bold mb-3">Tag and Filter</h5>
        <p className="text-muted">Easily search for alumni based on skills, location, industry, or graduation year.</p>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="key-feature-card text-center p-4 shadow-sm rounded-lg">
        <div className="icon-container mb-4">
          <FontAwesomeIcon icon={faUserGraduate} size="3x" className="text-primary" />
        </div>
        <h5 className="font-weight-bold mb-3">Direct Messaging</h5>
        <p className="text-muted">Engage in real-time conversations with mentors and peers.</p>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="key-feature-card text-center p-4 shadow-sm rounded-lg">
        <div className="icon-container mb-4">
          <FontAwesomeIcon icon={faBriefcase} size="3x" className="text-primary" />
        </div>
        <h5 className="font-weight-bold mb-3">Profile Tracking</h5>
        <p className="text-muted">Monitor your progress, set goals, and track your achievements.</p>
      </div>
    </div>
  </div>
</div>
      </main>
    </div>
  );
}

export default Home;
