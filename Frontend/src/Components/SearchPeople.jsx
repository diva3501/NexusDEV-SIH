import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaTag, FaBuilding } from 'react-icons/fa';
import { getLoggedIn } from "../services/authService";
import { Link } from "react-router-dom";

const SearchPeople = () => {
  const loggedIn = getLoggedIn();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Replace with actual search logic
    setSearchResults([
      { id: 1, name: 'Sahil Ali', role: 'Alumni' },
      { id: 2, name: 'Uncle Ben', role: 'Faculty' },
    ]);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200 my-12">
      {loggedIn ? (
        <div>
          <h2 className="text-2xl h4 mb-6 text-center text-gray-900">Advanced Search</h2>

          <div className="space-y-6">
            <div>
              <label htmlFor="searchInput" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <FaSearch className="mr-2 text-gray-500" /> Search
              </label>
              <input
                id="searchInput"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter search query"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="batch" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <FaCalendarAlt className="mr-2 text-gray-500" /> Batch
                </label>
                <input
                  id="batch"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter Batch"
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="year" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                  <FaTag className="mr-2 text-gray-500" /> Year
                </label>
                <input
                  id="year"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter Year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="branch" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <FaBuilding className="mr-2 text-gray-500" /> Branch
              </label>
              <input
                id="branch"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Branch"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
              />
            </div>

            <button
              className="w-full flex items-center justify-center py-3 px-6 border border-transparent text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              onClick={handleSearch}
            >
              <FaSearch className="inline-block mr-2" />
              Search
            </button>

            {searchResults.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Search Results:</h4>
                <ul className="space-y-2">
                  {searchResults.map((person) => (
                    <li key={person.id} className="p-4 bg-gray-100 border border-gray-200 rounded-lg flex items-center">
                      <FaSearch className="text-gray-500 mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">{person.name}</p>
                        <p className="text-gray-600">{person.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900">You're Not Logged In</h1>
          <p className="text-gray-600 mb-4">
            Please log in to access our search tab.
          </p>
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchPeople;
