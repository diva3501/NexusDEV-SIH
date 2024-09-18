import React, { useState } from 'react';
import { FaDonate, FaInfoCircle } from 'react-icons/fa';
import { getLoggedIn } from '../services/authService';
import { Link } from 'react-router-dom';
import './DonationSchemes.css';

const schemes = [ 
  {
    id: 1,
    name: 'Library Development',
    description: 'Funding for expanding the library with new books, e-resources, and comfortable seating arrangements.',
    studentsInvolved: ['Amit Sharma', 'Rekha Singh'],
    facultyInvolved: ['Mr. Rajesh Kumar', 'Mrs. Anjali Patel'],
    fundingGoal: '₹40,000',
    amountGathered: '₹25,000',
    contactNumber: '+91-98765-43210',
    spoc: {
      name: 'Mr. Rajesh Kumar',
      role: 'Library Head',
      mobile: '+91-98765-43210',
      email: 'rajesh.kumar@example.com',
    }
  },
  {
    id: 2,
    name: 'Scholarship Fund',
    description: 'Providing scholarships to underprivileged students for their academic achievements and needs.',
    studentsInvolved: ['Neha Agarwal', 'Ravi Kumar'],
    facultyInvolved: ['Mr. Vijay Singh', 'Mrs. Priya Gupta'],
    fundingGoal: '₹50,000',
    amountGathered: '₹30,000',
    contactNumber: '+91-87654-32109',
    spoc: {
      name: 'Mrs. Priya Gupta',
      role: 'Scholarship Coordinator',
      mobile: '+91-87654-32109',
      email: 'priya.gupta@example.com',
    }
  },
  {
    id: 3,
    name: 'Tech Lab Enhancement',
    description: 'Upgrading technology labs with the latest computers and software to enhance learning experiences.',
    studentsInvolved: ['Rohit Sharma', 'Aarti Mehta'],
    facultyInvolved: ['Mr. Sunil Rao', 'Mrs. Seema Sharma'],
    fundingGoal: '₹45,000',
    amountGathered: '₹28,000',
    contactNumber: '+91-98765-12345',
    spoc: {
      name: 'Mr. Sunil Rao',
      role: 'Tech Lab Supervisor',
      mobile: '+91-98765-12345',
      email: 'sunil.rao@example.com',
    }
  },
  {
    id: 4,
    name: 'Sports Complex Improvement',
    description: 'Renovating and expanding the sports complex to include new facilities and equipment.',
    studentsInvolved: ['Pooja Singh', 'Karan Mehta'],
    facultyInvolved: ['Mr. Rajiv Kumar', 'Mrs. Nisha Joshi'],
    fundingGoal: '₹30,000',
    amountGathered: '₹18,000',
    contactNumber: '+91-87654-98765',
    spoc: {
      name: 'Mrs. Nisha Joshi',
      role: 'Sports Complex Manager',
      mobile: '+91-87654-98765',
      email: 'nisha.joshi@example.com',
    }
  },
  {
    id: 5,
    name: 'Community Outreach Program',
    description: 'Organizing community outreach programs to support local initiatives and development.',
    studentsInvolved: ['Suman Rani', 'Deepak Patel'],
    facultyInvolved: ['Mr. Anil Kumar', 'Mrs. Ritu Singh'],
    fundingGoal: '₹25,000',
    amountGathered: '₹12,000',
    contactNumber: '+91-98765-67890',
    spoc: {
      name: 'Mr. Anil Kumar',
      role: 'Community Outreach Head',
      mobile: '+91-98765-67890',
      email: 'anil.kumar@example.com',
    }
  },
  {
    id: 6,
    name: 'Green Campus Initiative',
    description: 'Implementing sustainability projects to make the campus eco-friendly and green.',
    studentsInvolved: ['Amit Patel', 'Kavita Desai'],
    facultyInvolved: ['Mr. Pradeep Saini', 'Mrs. Manju Mehta'],
    fundingGoal: '₹35,000',
    amountGathered: '₹20,000',
    contactNumber: '+91-87654-43210',
    spoc: {
      name: 'Mrs. Manju Mehta',
      role: 'Sustainability Coordinator',
      mobile: '+91-87654-43210',
      email: 'manju.mehta@example.com',
    }
  },
  {
    id: 7,
    name: 'Cultural Fest Support',
    description: 'Supporting the annual cultural fest with funds for organizing events and activities.',
    studentsInvolved: ['Raj Kumar', 'Nisha Patel'],
    facultyInvolved: ['Mr. Sanjay Verma', 'Mrs. Neelam Sharma'],
    fundingGoal: '₹50,000',
    amountGathered: '₹22,000',
    contactNumber: '+91-98765-54321',
    spoc: {
      name: 'Mrs. Neelam Sharma',
      role: 'Cultural Fest Coordinator',
      mobile: '+91-98765-54321',
      email: 'neelam.sharma@example.com',
    }
  }
];

const DonationSchemes = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [showSpocDetails, setShowSpocDetails] = useState(null);
  const loggedIn = getLoggedIn();

  const handleDonate = (scheme) => {
    setSelectedScheme(scheme);
    setShowSpocDetails({
      name: "Dr. Arun Patel",
      role: "Project Coordinator",
      mobile: "+91-98765-43210",
      email: "arun.patel@college.edu"
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center p-4 mt-5">
      {loggedIn ? (
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Donation Schemes</h2>
          {schemes.map((scheme) => (
            <div key={scheme.id} className="bg-white shadow-md rounded-md p-6 mb-4">
              <h3 className="text-xl font-semibold mb-2">{scheme.name}</h3>
              <p className="mb-2">{scheme.description}</p>
              <p className="mb-2"><strong>Students Involved:</strong> {scheme.studentsInvolved.join(', ')}</p>
              <p className="mb-2"><strong>Faculty Involved:</strong> {scheme.facultyInvolved.join(', ')}</p>
              <p className="mb-2"><strong>Funding Goal:</strong> {scheme.fundingGoal}</p>
              <p className="mb-2"><strong>Amount Gathered:</strong> {scheme.amountGathered}</p>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600"
                onClick={() => handleDonate(scheme)}
              >
                Donate
                <FaDonate className="inline-block ml-2" />
              </button>
            </div>
          ))}

          {showSpocDetails && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
              <div className="bg-white p-6 rounded-md shadow-lg w-11/12 sm:w-1/2">
                <h3 className="text-xl font-semibold mb-2">SPOC Details</h3>
                <p className="mb-2"><strong>Name:</strong> {showSpocDetails.name}</p>
                <p className="mb-2"><strong>Role:</strong> {showSpocDetails.role}</p>
                <p className="mb-2"><strong>Mobile:</strong> {showSpocDetails.mobile}</p>
                <p className="mb-2"><strong>Email:</strong> {showSpocDetails.email}</p>
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
                  onClick={() => setShowSpocDetails(null)}
                >
                  Close
                  <FaInfoCircle className="inline-block ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">You're Not Logged In</h1>
          <p className="text-gray-600 mb-4">Please log in to access donation schemes.</p>
          <Link
            to="/login"
            className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default DonationSchemes;