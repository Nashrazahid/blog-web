"use client";

import React, { useState } from 'react';
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from '@/firebaseConfig';

const CommentSection = () => {
  const [user, setUser] = useState<{ name: string | null; email: string | null } | null>(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ user: string; text: string }[]>([]);
  const [showGoogleLogin, setShowGoogleLogin] = useState(false);

  // Handle Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;
      setUser({
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      });
      setShowGoogleLogin(false); // Hide the Google login option after login
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Add Comment Function
  const handleAddComment = () => {
    if (comment.trim()) {
      if (!user) {
        setShowGoogleLogin(true);
      } else {
        setComments([...comments, { user: user.name || 'Anonymous', text: comment }]);
        setComment('');
      }
    }
  };

  return (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          className="w-full p-2 border border-gray-300 rounded-lg mb-2"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>

      {showGoogleLogin && !user && (
        <div className="mb-4">
          <p className="text-gray-700 mb-2">Please log in to add your comment.</p>
          <button
            onClick={handleGoogleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Continue with Google
          </button>
        </div>
      )}

      {user && (
        <div className="mb-4">
          <p className="text-xl font-semibold">Welcome, {user.name}</p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2"
          >
            Logout
          </button>
        </div>
      )}

      <div>
        {comments.length > 0 ? (
          comments.map((cmt, index) => (
            <div
              key={index}
              className="p-2 border-b border-gray-300 flex justify-between items-center"
            >
              <span>
                <strong>{cmt.user}</strong>: {cmt.text}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
