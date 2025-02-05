// import React, { useState } from 'react';
// import axios from 'axios';

// const SubmitForm = () => {
//   const [entries, setEntries] = useState([{}]);  // Initially, one empty entry
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState('');  // State to manage the submission status (success/error)

//   // Add new input entry (for multiple crops)
//   const addEntry = () => {
//     setEntries([...entries, {}]);
//   };

//   // Handle change in input fields
//   const handleChange = (index, field, value) => {
//     const updatedEntries = [...entries];
//     updatedEntries[index] = {
//       ...updatedEntries[index],
//       [field]: value
//     };
//     setEntries(updatedEntries);
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     try {
//       // Send all entries to the backend
//       const response = await axios.post('http://localhost:5000/your-endpoint', { data: entries });

//       // If the response is successful, set the message and status
//       if (response.data && response.data.message) {
//         setMessage(response.data.message); // Response message from the server
//         setStatus('success');  // Set status to 'success'
//       } else {
//         setMessage('Unexpected response from the server');
//         setStatus('error');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setMessage('An error occurred while sending data');
//       setStatus('error');  // Set status to 'error' in case of failure
//     }
//   };

//   return (
//     <div>
//       <h2>Enter Data for Crops</h2>
      
//       {entries.map((entry, index) => (
//         <div key={index}>
//           <h3>Entry {index + 1}</h3>
//           <div>
//             <label>Crop Name:</label>
//             <input
//               type="text"
//               value={entry.crop || ''}
//               onChange={(e) => handleChange(index, 'crop', e.target.value)}
//               placeholder="Enter crop name"
//             />
//           </div>
//           <div>
//             <label>Temperature (°C):</label>
//             <input
//               type="number"
//               value={entry.temperature || ''}
//               onChange={(e) => handleChange(index, 'temperature', e.target.value)}
//               placeholder="Enter temperature"
//             />
//           </div>
//           <div>
//             <label>Humidity (%):</label>
//             <input
//               type="number"
//               value={entry.humidity || ''}
//               onChange={(e) => handleChange(index, 'humidity', e.target.value)}
//               placeholder="Enter humidity"
//             />
//           </div>
//           <div>
//             <label>Soil pH:</label>
//             <input
//               type="number"
//               step="0.1"
//               value={entry.soilPh || ''}
//               onChange={(e) => handleChange(index, 'soilPh', e.target.value)}
//               placeholder="Enter soil pH"
//             />
//           </div>
//         </div>
//       ))}

//       <button onClick={addEntry}>Add Another Entry</button>
//       <button onClick={handleSubmit}>Submit Data</button>

//       {message && (
//         <p
//           style={{
//             color: status === 'success' ? 'green' : 'red',
//             fontWeight: 'bold',
//           }}
//         >
//           {message}
//         </p>
//       )}
//     </div>
//   );
// };

// export default SubmitForm;
import React, { useState } from 'react';
import axios from 'axios';

const SubmitForm = () => {
  const [entries, setEntries] = useState([{}]);  // Initially, one empty entry
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');  // State to manage the submission status (success/error)

  // Add new input entry (for multiple crops)
  const addEntry = () => {
    setEntries([...entries, {}]);
  };

  // Handle change in input fields
  const handleChange = (index, field, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index] = {
      ...updatedEntries[index],
      [field]: value
    };
    setEntries(updatedEntries);
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      // Send all entries to the backend
      const response = await axios.post('http://localhost:5000/your-endpoint', { data: entries });

      // If the response is successful, set the message and status
      if (response.data && response.data.message) {
        setMessage(response.data.message); // Response message from the server
        setStatus('success');  // Set status to 'success'
      } else {
        setMessage('Unexpected response from the server');
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while sending data');
      setStatus('error');  // Set status to 'error' in case of failure
    }
  };

  return (
    <div>
      <h2>Enter Data for Crops</h2>
      
      {entries.map((entry, index) => (
        <div key={index}>
          <h3>Entry {index + 1}</h3>
          <div>
            <label>Crop Name:</label>
            <input
              type="text"
              value={entry.crop || ''}
              onChange={(e) => handleChange(index, 'crop', e.target.value)}
              placeholder="Enter crop name"
            />
          </div>
          <div>
            <label>Temperature (°C):</label>
            <input
              type="number"
              value={entry.temperature || ''}
              onChange={(e) => handleChange(index, 'temperature', e.target.value)}
              placeholder="Enter temperature"
            />
          </div>
          <div>
            <label>Humidity (%):</label>
            <input
              type="number"
              value={entry.humidity || ''}
              onChange={(e) => handleChange(index, 'humidity', e.target.value)}
              placeholder="Enter humidity"
            />
          </div>
          <div>
            <label>Soil pH:</label>
            <input
              type="number"
              step="0.1"
              value={entry.soilPh || ''}
              onChange={(e) => handleChange(index, 'soilPh', e.target.value)}
              placeholder="Enter soil pH"
            />
          </div>
        </div>
      ))}

      <button onClick={addEntry}>Add Another Entry</button>
      <button onClick={handleSubmit}>Submit Data</button>

      {message && (
        <p
          style={{
            color: status === 'success' ? 'green' : 'red',
            fontWeight: 'bold',
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default SubmitForm;
