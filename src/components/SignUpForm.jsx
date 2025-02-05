// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import '../styles.css';

// // const SignUpForm = () => {
// //   return (
// //     <div className="form-container">
// //       <div
// //         className="form-box"
// //         style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
// //       >
// //         <h2>Sign Up</h2>
// //         <form id="sign-up-form">
// //           <InputField type="text" placeholder="Full Name" />
// //           <InputField type="email" placeholder="Email" />
// //           <InputField type="password" placeholder="Password" />
// //           <SubmitButton />
// //           <p className="login-link">
// //             Already registered?{' '}
// //             <Link to="/login">Login</Link>
// //           </p>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // // Subcomponents
// // const InputField = ({ type, placeholder }) => (
// //   <input
// //     type={type}
// //     placeholder={placeholder}
// //     required
// //     style={{
// //       width: '100%',
// //       padding: '10px',
// //       marginBottom: '15px',
// //       borderRadius: '4px',
// //       border: '1px solid #ddd',
// //     }}
// //   />
// // );

// // const SubmitButton = () => (
// //   <button
// //     type="submit"
// //     style={{
// //       width: '100%',
// //       padding: '10px',
// //       backgroundColor: '#007bff',
// //       color: '#fff',
// //       border: 'none',
// //       borderRadius: '4px',
// //       cursor: 'pointer',
// //     }}
// //   >
// //     Register
// //   </button>
// // );

// // export default SignUpForm;
// // SignUpForm.jsx (Frontend)
// import React, { useState } from 'react';
// import axios from 'axios';

// const SignUpForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/signup', formData);
//       console.log('Response:', response.data);
//     } catch (error) {
//       console.error('Error during sign up:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;
// SignUpForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();  // useNavigate instead of useHistory
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    // On success, navigate to another page
    navigate('/signin');  // Use navigate instead of history.push
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields here */}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
