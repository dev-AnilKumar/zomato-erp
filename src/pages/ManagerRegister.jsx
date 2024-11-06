import React, { useState } from 'react';

const ManagerRegister = () => {
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [restaurantPhone, setRestaurantPhone] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(restaurantPhone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    // Here, you would typically handle the registration logic (e.g., sending data to your backend).
    console.log('Restaurant Owner Registered:', {
      ownerName,
      email,
      password,
      restaurantName,
      restaurantAddress,
      restaurantPhone,
    });

    // Clear the error if the form submission is successful
    setError('');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1591571998424-209d072a0b72?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjg5NjAyNjI&ixlib=rb-4.0.3&q=80&w=1080')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-sm w-full space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Restaurant Owner Registration</h2>
        <p className="text-center text-gray-500">Sign up to manage your restaurant and start receiving orders.</p>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Owner Name Input */}
          <div>
            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Your Full Name</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

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

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Restaurant Name Input */}
          <div>
            <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700">Restaurant Name</label>
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Restaurant Address Input */}
          <div>
            <label htmlFor="restaurantAddress" className="block text-sm font-medium text-gray-700">Restaurant Address</label>
            <input
              type="text"
              id="restaurantAddress"
              name="restaurantAddress"
              value={restaurantAddress}
              onChange={(e) => setRestaurantAddress(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Restaurant Phone Input */}
          <div>
            <label htmlFor="restaurantPhone" className="block text-sm font-medium text-gray-700">Restaurant Phone</label>
            <input
              type="tel"
              id="restaurantPhone"
              name="restaurantPhone"
              value={restaurantPhone}
              onChange={(e) => setRestaurantPhone(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Register Restaurant
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600 hover:text-indigo-700">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagerRegister;


// Restaurant Type: You could add a dropdown or radio buttons to ask the owner what type of food their restaurant serves (e.g., "Italian", "Chinese", "Mexican", etc.).

// Restaurant Logo Upload: You can add a file input so restaurant owners can upload their restaurant logo or images.

// Location Map: You might want to integrate a location picker (e.g., Google Maps API) to help restaurant owners specify their exact location.

// Form Validation: Implement more sophisticated form validation, especially on the backend side, to ensure all data