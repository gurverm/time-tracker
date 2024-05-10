import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Time Tracker App hello</h1>
      <p>Track your time efficiently and effortlessly.</p>
      <div>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default HomePage;
