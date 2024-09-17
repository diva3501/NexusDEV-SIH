import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { getLoggedIn } from '../services/authService';
import NotLoggedIn from './helper/NotLoggedIn';

const BulkUpload = () => {
  const loggedIn = getLoggedIn();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      setUploading(true);
      setUploadSuccess(null);
      
      // Simulate file upload
      setTimeout(() => {
        setUploading(false);
        setUploadSuccess(true);
      }, 2000); // Replace with actual upload logic
      
    } else {
      setUploadSuccess(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-300 my-20">
      {loggedIn ? (
        <div>
          <h2 className="text-2xl h4 mb-6 text-center text-gray-900">Bulk Import Alumni</h2>
          <form onSubmit={handleUpload} encType='multipart/form-data'>
            <div className="mb-6">
              <label htmlFor="fileInput" className="block text-sm font-semibold text-gray-700 mb-2">
                Choose a file
              </label>
              <input
                id="fileInput"
                type="file"
                accept=".csv, .xlsx, .xls"
                className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleFileChange}
              />
            </div>

            {selectedFile && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Selected File:</h4>
                <p className="text-gray-700">{selectedFile.name}</p>
              </div>
            )}

            <button
              className={`w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${uploading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              type='submit'
              disabled={uploading}
            >
              {uploading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12a8 8 0 0116 0 8 8 0 01-16 0" />
                  </svg>
                  Uploading...
                </>
              ) : (
                <>
                  <FaUpload className="inline-block mr-2" />
                  Upload
                </>
              )}
            </button>

            {uploadSuccess === true && (
              <p className="mt-4 text-green-600 text-center">File uploaded successfully!</p>
            )}
            {uploadSuccess === false && (
              <p className="mt-4 text-red-600 text-center">Please select a file before uploading.</p>
            )}
          </form>
        </div>
      ) : (
        <NotLoggedIn text="Bulk Import"/>
      )}
    </div>
  );
};

export default BulkUpload;
