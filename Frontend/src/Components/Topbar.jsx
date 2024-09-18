import React, { useState } from 'react';
import { FaHome, FaCalendar, FaBriefcase, FaVideo, FaSearch, FaEnvelopeOpenText, FaUpload, FaBars, FaTimes, FaUserTie } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLoggedIn } from '../services/authService';
import { logout } from '../features/authSlice';
import Dropdown from './helper/Dropdown';

function Topbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const loggedIn = getLoggedIn();
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white shadow-md text-gray-800 p-4 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex items-center mb-4 lg:mb-0">
        <FaUserTie className="mr-2 h-8 w-8 text-blue-500 mb-4" />
        <a href='/' className="text-2xl font-extrabold mb-3">
          NexusDEV
        </a>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes className="text-2xl text-gray-800" /> : <FaBars className="text-2xl text-gray-800" />}
      </div>

      <nav className={`lg:flex lg:flex-row lg:space-x-6 font-semibold items-center ${isMobileMenuOpen ? 'flex flex-col space-y-2' : 'hidden'} transition-all duration-300 ease-in-out`}>
        {loggedIn ? (
          <>
            {/* Add any additional logged-in specific links here */}
          </>
        ) : (
          <>
            <Link to="/home" className="text-lg flex items-center hover:text-blue-500 transition-colors">
              <FaHome className="mr-2 text-xl" /> Home
            </Link>
          </>
        )}
      <Link to="/donation" className="text-lg flex items-center hover:text-blue-500 transition-colors">
          <FaEnvelopeOpenText className="mr-2 text-xl" /> Donation
        </Link>
        
        <Link to="/jobs" className="text-lg flex items-center hover:text-blue-500 transition-colors">
          <FaBriefcase className="mr-2 text-xl" /> Jobs
        </Link>
        <Dropdown />
        <Link to="/meeting" className="text-lg flex items-center hover:text-blue-500 transition-colors">
          <FaVideo className="mr-2 text-xl" /> Meeting
        </Link>
        <Link to="/events" className="text-lg flex items-center hover:text-blue-500 transition-colors">
          <FaCalendar className="mr-2 text-xl" /> Events
        </Link>
        <Link to="/search-people" className="text-lg flex items-center hover:text-blue-500 transition-colors">
          <FaSearch className="mr-2 text-xl" /> Search Alumni
        </Link>
        

        {loggedIn ? (
          <NavLink
            onClick={() => {
              dispatch(logout());
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Logout
          </NavLink>
        ) : (
          <>
            <Link
              to="/register"
              className="border border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium mt-2 lg:mt-0"
            >
              Login
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Topbar;
