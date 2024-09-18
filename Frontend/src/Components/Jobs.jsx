import React, { useState } from 'react';
import { getLoggedIn } from '../services/authService';
import NotLoggedIn from './helper/NotLoggedIn';

function Jobs() {
  const loggedIn = getLoggedIn();
  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: '',
    role: '',
    salary: '',
    contactEmail: '',
    jobType: 'Full-time', // Default value
  });
  const [jobs, setJobs] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Update form data as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobForm({ ...jobForm, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding job to the list
    setJobs([...jobs, jobForm]);
    // Clear form data
    setJobForm({
      title: '',
      company: '',
      location: '',
      description: '',
      requirements: '',
      role: '',
      salary: '',
      contactEmail: '',
      jobType: 'Full-time',
    });
    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000); // Hide success message after 5 seconds
  };

  // Filter jobs based on search term and category
  const filteredJobs = jobs.filter(job => {
    const matchesSearchTerm = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || job.jobType === categoryFilter;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="flex flex-col items-center justify-center h-auto bg-gray-50 p-8">
      {loggedIn ? (
        <div className="w-full max-w-5xl mx-auto">
          {/* Job Posting Form */}
          <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h1 className="text-2xl h4 mb-8 text-center text-gray-800">Post a Job Vacancy</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    name="title"
                    value={jobForm.title}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter job title"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={jobForm.company}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter company name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={jobForm.location}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter job location"
                    required
                  />
                </div>
                <div className="form-group col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    name="description"
                    value={jobForm.description}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter job description"
                    required
                  />
                </div>
                <div className="form-group col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Requirements</label>
                  <textarea
                    name="requirements"
                    value={jobForm.requirements}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter job requirements"
                    required
                  />
                </div>
                <div className="form-group col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={jobForm.role}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter job role"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700">Salary</label>
                  <input
                    type="text"
                    name="salary"
                    value={jobForm.salary}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter salary range"
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700">Job Type</label>
                  <select
                    name="jobType"
                    value={jobForm.jobType}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div className="form-group col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={jobForm.contactEmail}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter contact email"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Post Job
              </button>
            </form>
          </section>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg shadow-lg">
              Job posted successfully!
            </div>
          )}

          {/* Job Listings */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl h4 mb-8 text-center text-gray-800">Available Jobs</h2>
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row md:justify-between mb-8">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs"
                className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm mb-4 md:mb-0"
              />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              >
                <option value="All">All Job Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            {/* Job Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.company}</p>
                    <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
                    <p className="text-gray-700 mb-2"><strong>Salary:</strong> {job.salary}</p>
                    <p className="text-gray-700 mb-2"><strong>Role:</strong> {job.role}</p>
                    <p className="text-gray-700 mb-2"><strong>Description:</strong> {job.description}</p>
                    <p className="text-gray-700 mb-2"><strong>Requirements:</strong> {job.requirements}</p>
                    <p className="text-gray-700 mb-2"><strong>Contact:</strong> {job.contactEmail}</p>
                    <p className="text-gray-700 mb-2"><strong>Job Type:</strong> {job.jobType}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-700">No jobs available</p>
              )}
            </div>
          </section>
        </div>
      ) : (
        <NotLoggedIn />
      )}
    </div>
  );
}

export default Jobs;
