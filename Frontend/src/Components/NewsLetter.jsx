import React, { useState } from "react";
import { getLoggedIn } from "../services/authService";
import { Link } from "react-router-dom";

const samplePosts = [
  {
    id: 1,
    title: "Alumni Donation to New Library Project",
    description: "Our alumni have generously donated to the new library project, helping us create a state-of-the-art facility for future generations.",
    type: "Donation",
    likes: 0,
  },
  {
    id: 2,
    title: "Annual Sports Day Success",
    description: "The annual sports day was a huge success with participation from students, faculty, and alumni. Check out the highlights!",
    type: "Activity",
    likes: 0,
  },
  {
    id: 3,
    title: "Scholarship Fundraising Event",
    description: "A successful fundraising event for scholarships was held last weekend. Thank you to all who participated and contributed.",
    type: "Donation",
    likes: 0,
  },
  {
    id: 4,
    title: "Guest Lecture on AI Innovations",
    description: "We had an inspiring guest lecture on AI innovations from one of our distinguished alumni. The session was highly informative and engaging.",
    type: "Activity",
    likes: 0,
  },
];

function Newsletter() {
  const loggedIn = getLoggedIn();
  const [posts, setPosts] = useState(samplePosts);

  // Handle like button click
  const handleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-50">
      {loggedIn ? (
        <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl h4 mb-4">Newsletter</h1>
          <p className="text-gray-600 mb-6">
            Stay up-to-date with our latest news and updates!
          </p>

          {posts.map((post) => (
            <div key={post.id} className="mb-6 p-4 border rounded-md shadow-sm bg-gray-50">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <span
                className="inline-flex items-center bg-blue-500 text-white px-3 py-1 rounded-md text-sm cursor-pointer"
                onClick={() => handleLike(post.id)}
              >
                👍 Like {post.likes}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">You're Not Logged In</h1>
          <p className="text-gray-600 mb-4">
            Please log in to access our newsletter.
          </p>
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
}

export default Newsletter;
