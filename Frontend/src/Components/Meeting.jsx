import React, { useState } from 'react';
import { getLoggedIn } from "../services/authService";
import { Link } from "react-router-dom";

const VideoConference = () => {
  const loggedIn = getLoggedIn();
  const [meetingLink, setMeetingLink] = useState('');
  const [showNotifyButton, setShowNotifyButton] = useState(false);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);

  // List of available links
  const links = [
    'https://meet.google.com/hbg-zxay-vtv',
    'https://meet.google.com/stj-yort-cys',
    'https://meet.google.com/rws-rywg-aua',
    'https://meet.google.com/zhp-uauh-hir'
  ];

  const handleGenerateMeetingLink = () => {
    // Randomly select a link from the list
    const randomIndex = Math.floor(Math.random() * links.length);
    const newMeetingLink = links[randomIndex];
    setMeetingLink(newMeetingLink);
    setShowNotifyButton(true); // Show the "Notify Students" button after generating the link
  };

  const handleNotifyStudents = () => {
    // Logic to notify students (e.g., send notifications)
    console.log('Notification sent for meeting:', meetingLink);

    // Show notification popup
    setShowNotificationPopup(true);

    // Hide notification popup after 3 seconds
    setTimeout(() => setShowNotificationPopup(false), 3000);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200 mt-5 mb-5">
      {loggedIn ? (
        <div>
          <h2 className="text-2xl h4 text-gray-900 mb-6">Video Conference with Alumni</h2>

          <div className="mb-6">
            <label htmlFor="meetingLink" className="block text-sm font-medium text-gray-700">
              Meeting Link
            </label>
            <input
              id="meetingLink"
              type="text"
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
              value={meetingLink}
              readOnly
              placeholder="Generated meeting link will appear here..."
            />
          </div>

          <div className="mb-6">
            <button
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition duration-200"
              onClick={handleGenerateMeetingLink}
            >
              Generate Meeting Link
            </button>
          </div>

          {showNotifyButton && (
            <div className="mb-6">
              <button
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 transition duration-200"
                onClick={handleNotifyStudents}
              >
                Notify Students
              </button>
            </div>
          )}

          {showNotificationPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2 text-green-600">Notification Sent!</h3>
                <p className="text-gray-700">Students have been notified about the meeting.</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">You're Not Logged In</h1>
          <p className="text-gray-600 mb-6">
            Please log in to access our meeting tab.
          </p>
          <Link
            to="/login"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-800 transition duration-200"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default VideoConference;
