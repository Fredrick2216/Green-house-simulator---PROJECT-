import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save user data or validate here
    console.log('Sign-in form data:', formData);
    navigate('/login'); // Navigate to login page
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>
        Already registered?{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => navigate('/login')}
        >
          Log in
        </span>
      </p>
    </div>
  );
};

export default SignInPage;


// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const SignInPage = () => {
// //   const navigate = useNavigate();
  
// //   const handleRegisterClick = () => {
// //     // Navigate to the Login Page when the Register button is clicked
// //     navigate('/login');
// //   };

// //   return (
// //     <div>
// //       <h1>Sign In Page</h1>
// //       {/* Your sign-in form here */}
      
// //       <button onClick={handleRegisterClick}>Register</button> {/* Navigate to Login */}
// //     </div>
// //   );
// // };

// // export default SignInPage;
