// src/components/YourFormComponent.js
import React, { useState } from 'react';
import { postData } from '../services/api';  // Import the service function

const YourFormComponent = () => {
  const [yourData, setYourData] = useState('');  // Store form data here

  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent page reload on form submit
    try {
      const response = await postData(yourData);
      console.log('Response:', response);  // Handle the response
    } catch (error) {
      console.error('Error:', error);  // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={yourData}
        onChange={(e) => setYourData(e.target.value)}
        placeholder="Enter data"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourFormComponent;
