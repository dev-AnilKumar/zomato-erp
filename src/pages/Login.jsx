import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission,
    // such as sending data to your backend.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661432769134-758550b8fedb?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-sm w-full space-y-6 ">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Welcome to Foodify</h2>
        <p className="text-center text-gray-500">Sign in to order your favorite meals</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center">
          <Link>
            <span className="text-indigo-600 hover:text-indigo-700 text-sm">Forgot Password?</span>
          </Link>
        </div>

        {/* Signup Link */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            <Link to="/register">
              Don't have an account?{' '}
              <span className="text-indigo-600 hover:text-indigo-700">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
