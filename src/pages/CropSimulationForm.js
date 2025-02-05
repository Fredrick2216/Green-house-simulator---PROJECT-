// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// // /* eslint-disable no-undef */
// // // // src/pages/CropSelectionPage.js
// // // // import React, { useState } from 'react';
// // // // import '../styles.css'; // Assuming styles.css handles global styling

// // // // const CropSimulationForm = () => {
// // // //   const [selectedCrop, setSelectedCrop] = useState('');
// // // //   const [soilType, setSoilType] = useState('');
// // // //   const [climate, setClimate] = useState('');

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     alert(`Selected Crop: ${selectedCrop}\nSoil Type: ${soilType}\nClimate: ${climate}`);
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-8 bg-cover bg-center" style={{ backgroundImage: 'url(../assets/background-image.jpg)' }}>
// // // //       <div className="text-center text-white py-10">
// // // //         <h1 className="text-4xl font-semibold">Welcome to Crop Selection</h1>
// // // //         <p className="mt-4 text-xl">Choose the best crop for your farm based on your preferences.</p>
// // // //       </div>
// // // //       <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
// // // //         <form onSubmit={handleSubmit}>
// // // //           <div className="mb-4">
// // // //             <label htmlFor="crop" className="block text-xl text-gray-700">Select a Crop:</label>
// // // //             <select
// // // //               id="crop"
// // // //               name="crop"
// // // //               value={selectedCrop}
// // // //               onChange={(e) => setSelectedCrop(e.target.value)}
// // // //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// // // //             >
// // // //               <option value="">Select a crop</option>
// // // //               <option value="wheat">Wheat</option>
// // // //               <option value="rice">Rice</option>
// // // //               <option value="corn">Corn</option>
// // // //               <option value="soybean">Soybean</option>
// // // //               <option value="potato">Potato</option>
// // // //               <option value="cotton">Cotton</option>
// // // //               <option value="sugarcane">Sugarcane</option>
// // // //               <option value="tomato">Tomato</option>
// // // //               <option value="barley">Barley</option>
// // // //               <option value="coffee">Coffee</option>
// // // //               <option value="cocoa">Cocoa</option>
// // // //               <option value="maize">Maize</option>
// // // //             </select>
// // // //           </div>
// // // //           <div className="mb-4">
// // // //             <label htmlFor="soil-type" className="block text-xl text-gray-700">Soil Type:</label>
// // // //             <select
// // // //               id="soil-type"
// // // //               name="soil-type"
// // // //               value={soilType}
// // // //               onChange={(e) => setSoilType(e.target.value)}
// // // //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// // // //             >
// // // //               <option value="">Select soil type</option>
// // // //               <option value="loam">Loam</option>
// // // //               <option value="clay">Clay</option>
// // // //               <option value="sand">Sand</option>
// // // //             </select>
// // // //           </div>
// // // //           <div className="mb-4">
// // // //             <label htmlFor="climate" className="block text-xl text-gray-700">Climate Preference:</label>
// // // //             <select
// // // //               id="climate"
// // // //               name="climate"
// // // //               value={climate}
// // // //               onChange={(e) => setClimate(e.target.value)}
// // // //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// // // //             >
// // // //               <option value="">Select climate</option>
// // // //               <option value="tropical">Tropical</option>
// // // //               <option value="temperate">Temperate</option>
// // // //               <option value="arid">Arid</option>
// // // //             </select>
// // // //           </div>
// // // //           <div className="flex justify-center">
// // // //             <button type="submit" className="px-8 py-3 bg-blue-600 text-white rounded-md text-xl hover:bg-blue-500 transition duration-300">
// // // //               Submit
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CropSimulationForm;
// // // // Inside CropSimulationForm.js
// // // import React, { useState } from 'react';
// // // import '../styles.css'; // Assuming styles.css handles global styling

// // // const CropSimulationForm = () => {
// // //   const [formData, setFormData] = useState({
// // //     crop: '',
// // //     temperature: '',
// // //     humidity: '',
// // //     soilPh: '',
// // //     soilType: '',
// // //     climate: '',
// // //   });

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     fetch('http://localhost:5000/crop-selection', {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify(formData),
// // //     })
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         console.log('Response:', data);
// // //       })
// // //       .catch((error) => {
// // //         console.error('Error:', error);
// // //       });
// // //   };

// // //   return (
// // //     <div
// // //       className="container mx-auto p-8 bg-cover bg-center"
// // //       style={{ backgroundImage: 'url(../assets/background-image.jpg)' }}
// // //     >
// // //       <div className="text-center text-white py-10">
// // //         <h1 className="text-4xl font-semibold">Welcome to Crop Selection</h1>
// // //         <p className="mt-4 text-xl">Choose the best crop for your farm based on your preferences.</p>
// // //       </div>
// // //       <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
// // //         <form onSubmit={handleSubmit}>
// // //           <div className="mb-4">
// // //             <label htmlFor="crop" className="block text-xl text-gray-700">Select a Crop:</label>
// // //             <select
// // //               id="crop"
// // //               name="crop"
// // //               value={formData.crop}
// // //               onChange={handleInputChange}
// // //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// // //             >
// // //               <option value="">Select a crop</option>
// // //               <option value="Wheat">Wheat</option>
// // //               <option value="Rice">Rice</option>
// // //               <option value="Corn">Corn</option>
// // //               <option value="Soybean">Soybean</option>
// // //               <option value="Potato">Potato</option>
// // //             </select>
// // //           </div>
// // //           <div className="mb-4">
// // //             <label htmlFor="temperature" className="block text-xl text-gray-700">Temperature:</label>
// // //             <input
// // //               type="number"
// // //               name="temperature"
// // //               placeholder="Temperature (°C)"
// // //               value={formData.temperature}
// // //               onChange={handleInputChange}
// // //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// // //             />
// // //           </div>
// // //           <div className="mb-4">
// // //             <label htmlFor="humidity" className="block text-xl text-gray-700">Humidity:</label>
// // //             <input
// // //               type="number"
// // //               name="humidity"
// // //               placeholder="Humidity (%)"
// // //               value={formData.humidity}
// // //               onChange={handleInputChange}
// // //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// // //             />
// // //           </div>
// // //           <div className="mb-4">
// // //             <label htmlFor="soilPh" className="block text-xl text-gray-700">Soil pH:</label>
// // //             <input
// // //               type="number"
// // //               name="soilPh"
// // //               placeholder="Soil pH"
// // //               value={formData.soilPh}
// // //               onChange={handleInputChange}
// // //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// // //             />
// // //           </div>
// // //           <div className="mb-4">
// // //             <label htmlFor="soilType" className="block text-xl text-gray-700">Soil Type:</label>
// // //             <select
// // //               id="soilType"
// // //               name="soilType"
// // //               value={formData.soilType}
// // //               onChange={handleInputChange}
// // //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// // //             >
// // //               <option value="">Select soil type</option>
// // //               <option value="Loam">Loam</option>
// // //               <option value="Clay">Clay</option>
// // //               <option value="Sand">Sand</option>
// // //             </select>
// // //           </div>
// // //           <div className="mb-4">
// // //             <label htmlFor="climate" className="block text-xl text-gray-700">Climate Preference:</label>
// // //             <select
// // //               id="climate"
// // //               name="climate"
// // //               value={formData.climate}
// // //               onChange={handleInputChange}
// // //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// // //             >
// // //               <option value="">Select climate</option>
// // //               <option value="Tropical">Tropical</option>
// // //               <option value="Temperate">Temperate</option>
// // //               <option value="Arid">Arid</option>
// // //             </select>
// // //           </div>
// // //           <div className="flex justify-center">
// // //             <button
// // //               type="submit"
// // //               className="px-8 py-3 bg-blue-600 text-white rounded-md text-xl hover:bg-blue-500 transition duration-300"
// // //             >
// // //               Submit
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CropSimulationForm;
// // import React, { useState } from 'react';
// // import '../styles.css'; // Assuming styles.css handles global styling

// // const CropSimulationForm = () => {
// //   const [formData, setFormData] = useState({
// //     crop: '',
// //     temperature: '',
// //     humidity: '',
// //     soilPh: '',
// //     soilType: '',
// //     climate: '',
// //   });
// //   const [recommendations, setRecommendations] = useState('');
// //   const [showModal, setShowModal] = useState(false);
// //   const [error, setError] = useState('');

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Validate pH range (1-14)
// //     if (formData.soilPh < 1 || formData.soilPh > 14) {
// //       setError('Soil pH must be between 1 and 14.');
// //       return;
// //     }

// //     // Clear any previous errors
// //     setError('');

// //     console.log('Submitting data:', formData); // Log form data

// //     fetch('http://localhost:5000/crop-selection', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(formData),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log('Response from backend:', data); // Log backend response
// //         setRecommendations(data.recommendations);
// //         setShowModal(true); // Show the modal with recommendations
// //       })
// //       .catch((error) => {
// //         console.error('Error:', error);
// //         setError('An error occurred while submitting the form.');
// //       });
// //   };

// //   return (
// //     <div
// //       className="container mx-auto p-8 bg-cover bg-center"
// //       style={{ backgroundImage: 'url(../assets/background-image.jpg)' }}
// //     >
// //       <div className="text-center text-white py-10">
// //         <h1 className="text-4xl font-semibold">Welcome to Crop Selection</h1>
// //         <p className="mt-4 text-xl">Choose the best crop for your farm based on your preferences.</p>
// //       </div>
// //       <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label htmlFor="crop" className="block text-xl text-gray-700">Select a Crop:</label>
// //             <select
// //               id="crop"
// //               name="crop"
// //               value={formData.crop}
// //               onChange={handleInputChange}
// //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// //               required
// //             >
// //               <option value="">Select a crop</option>
// //               <option value="Wheat">Wheat</option>
// //               <option value="Rice">Rice</option>
// //               <option value="Corn">Corn</option>
// //               <option value="Soybean">Soybean</option>
// //               <option value="Potato">Potato</option>
// //             </select>
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="temperature" className="block text-xl text-gray-700">Temperature:</label>
// //             <input
// //               type="number"
// //               name="temperature"
// //               placeholder="Temperature (°C)"
// //               value={formData.temperature}
// //               onChange={handleInputChange}
// //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="humidity" className="block text-xl text-gray-700">Humidity:</label>
// //             <input
// //               type="number"
// //               name="humidity"
// //               placeholder="Humidity (%)"
// //               value={formData.humidity}
// //               onChange={handleInputChange}
// //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="soilPh" className="block text-xl text-gray-700">Soil pH:</label>
// //             <input
// //               type="number"
// //               name="soilPh"
// //               placeholder="Soil pH"
// //               value={formData.soilPh}
// //               onChange={handleInputChange}
// //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// //               min="1"
// //               max="14"
// //               required
// //             />
// //             {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="soilType" className="block text-xl text-gray-700">Soil Type:</label>
// //             <select
// //               id="soilType"
// //               name="soilType"
// //               value={formData.soilType}
// //               onChange={handleInputChange}
// //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// //               required
// //             >
// //               <option value="">Select soil type</option>
// //               <option value="Loam">Loam</option>
// //               <option value="Clay">Clay</option>
// //               <option value="Sand">Sand</option>
// //             </select>
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="climate" className="block text-xl text-gray-700">Climate Preference:</label>
// //             <select
// //               id="climate"
// //               name="climate"
// //               value={formData.climate}
// //               onChange={handleInputChange}
// //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// //               required
// //             >
// //               <option value="">Select climate</option>
// //               <option value="Tropical">Tropical</option>
// //               <option value="Temperate">Temperate</option>
// //               <option value="Arid">Arid</option>
// //             </select>
// //           </div>
// //           <div className="flex justify-center">
// //             <button
// //               type="submit"
// //               className="px-8 py-3 bg-blue-600 text-white rounded-md text-xl hover:bg-blue-500 transition duration-300"
// //             >
// //               Submit
// //             </button>
// //           </div>
// //         </form>
// //       </div>

// //       {/* Modal for Recommendations */}
// //       {showModal && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
// //           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
// //             <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
// //             <p className="text-gray-700">{recommendations}</p>
// //             <button
// //               onClick={() => setShowModal(false)}
// //               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CropSimulationForm;

// // import React, { useState } from 'react';
// // import '../styles.css';

// // const CropSimulationForm = () => {
// //   const [formData, setFormData] = useState({
// //     crop: '',
// //     temperature: '',
// //     humidity: '',
// //     soilPh: '',
// //     soilType: '',
// //     climate: '',
// //     location: '',
// //   });
// //   const [recommendations, setRecommendations] = useState('');
// //   const [alternativeCrops, setAlternativeCrops] = useState([]);
// //   const [showModal, setShowModal] = useState(false);
// //   const [error, setError] = useState('');

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const fetchWeatherData = async () => {
// //     if (!formData.location) {
// //       setError('Please enter a location.');
// //       return;
// //     }

// //     try {
// //       const response = await fetch('http://localhost:5001/fetch-weather', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ location: formData.location }),
// //       });
// //       const data = await response.json();
// //       setFormData({
// //         ...formData,
// //         temperature: data.temperature,
// //         humidity: data.humidity,
// //         climate: data.climate,
// //       });
// //     } catch (error) {
// //       console.error('Error fetching weather data:', error);
// //       setError('Failed to fetch weather data.');
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (formData.soilPh < 1 || formData.soilPh > 14) {
// //       setError('Soil pH must be between 1 and 14.');
// //       return;
// //     }

// //     setError('');

// //     try {
// //       const response = await fetch('http://localhost:5001/crop-selection', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(formData),
// //       });
// //       const data = await response.json();
// //       setRecommendations(data.recommendations);
// //       setAlternativeCrops(data.alternativeCrops);
// //       setShowModal(true);
// //     } catch (error) {
// //       console.error('Error:', error);
// //       setError('An error occurred while submitting the form.');
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-8 bg-cover bg-center flex items-center justify-center min-h-screen" style={{ backgroundImage: 'url(../assets/background-image.jpg)' }}>
// //       <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label htmlFor="location" className="block text-xl text-gray-700">Location:</label>
// //             <input
// //               type="text"
// //               name="location"
// //               placeholder="Enter city"
// //               value={formData.location}
// //               onChange={handleInputChange}
// //               onBlur={fetchWeatherData}
// //               className="w-full p-3 mt-2 bg-gray-100 rounded-md text-gray-700"
// //               required
// //             />
// //           </div>
// //           {/* Other form fields */}
// //           <div className="flex justify-center">
// //             <button type="submit" className="px-8 py-3 bg-blue-600 text-white rounded-md text-xl hover:bg-blue-500 transition duration-300">
// //               Submit
// //             </button>
// //           </div>
// //         </form>
// //       </div>

// //       {showModal && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
// //           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
// //             <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
// //             <p className="text-gray-700">{recommendations}</p>
// //             {alternativeCrops.length > 0 && (
// //               <div className="mt-4">
// //                 <h3 className="text-xl font-semibold">Alternative Crops:</h3>
// //                 <ul className="list-disc list-inside">
// //                   {alternativeCrops.map((crop, index) => (
// //                     <li key={index} className="text-gray-700">{crop}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}
// //             <button
// //               onClick={() => setShowModal(false)}
// //               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CropSimulationForm;
// // CropSimulationForm.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function CropSimulationForm() {
// //   const [location, setLocation] = useState('');
// //   const [climateData, setClimateData] = useState(null);
// //   const [crop, setCrop] = useState('');
// //   const [temperature, setTemperature] = useState('');
// //   const [humidity, setHumidity] = useState('');
// //   const [soilPh, setSoilPh] = useState('');
// //   const [recommendation, setRecommendation] = useState('');

// //   const handleLocationChange = async (e) => {
// //     setLocation(e.target.value);
// //     try {
// //       // Fetch climate data for the entered location
// //       const response = await axios.post('http://localhost:5001/get-weather', { location });
// //       setClimateData(response.data);
// //     } catch (error) {
// //       console.error('Error fetching weather data:', error);
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (!location || !crop || !temperature || !humidity || !soilPh) {
// //       alert('Please fill in all fields');
// //       return;
// //     }

// //     // Fetch crop constraints and check optimal conditions
// //     const cropConstraints = constraints[crop];
// //     let message = '';

// //     if (temperature < cropConstraints.temp[0] || temperature > cropConstraints.temp[1]) {
// //       message += `Temperature should be between ${cropConstraints.temp[0]}°C and ${cropConstraints.temp[1]}°C. `;
// //     }
// //     if (humidity < cropConstraints.humidity[0] || humidity > cropConstraints.humidity[1]) {
// //       message += `Humidity should be between ${cropConstraints.humidity[0]}% and ${cropConstraints.humidity[1]}%. `;
// //     }
// //     if (soilPh < cropConstraints.ph[0] || soilPh > cropConstraints.ph[1]) {
// //       message += `Soil pH should be between ${cropConstraints.ph[0]} and ${cropConstraints.ph[1]}. `;
// //     }

// //     if (message) {
// //       setRecommendation(`Not optimal for ${crop}. ${message}`);
// //     } else {
// //       setRecommendation(`Optimal for ${crop}!`);
// //     }
// //   };

// //   return (
// //     <div className="crop-selection-form">
// //       <h1>Crop Simulation Form</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Location:</label>
// //           <input
// //             type="text"
// //             value={location}
// //             onChange={handleLocationChange}
// //             placeholder="Enter city"
// //           />
// //         </div>
// //         {climateData && (
// //           <div>
// //             <p>Temperature: {climateData.temperature}°C</p>
// //             <p>Humidity: {climateData.humidity}%</p>
// //             <p>Climate: {climateData.description}</p>
// //           </div>
// //         )}
// //         <div>
// //           <label>Crop:</label>
// //           <select onChange={(e) => setCrop(e.target.value)} value={crop}>
// //             <option value="Wheat">Wheat</option>
// //             <option value="Rice">Rice</option>
// //             <option value="Corn">Corn</option>
// //             <option value="Soybean">Soybean</option>
// //             <option value="Potato">Potato</option>
// //           </select>
// //         </div>
// //         <div>
// //           <label>Temperature:</label>
// //           <input
// //             type="number"
// //             value={temperature}
// //             onChange={(e) => setTemperature(e.target.value)}
// //             placeholder="Enter temperature"
// //           />
// //         </div>
// //         <div>
// //           <label>Humidity:</label>
// //           <input
// //             type="number"
// //             value={humidity}
// //             onChange={(e) => setHumidity(e.target.value)}
// //             placeholder="Enter humidity"
// //           />
// //         </div>
// //         <div>
// //           <label>Soil pH:</label>
// //           <input
// //             type="number"
// //             value={soilPh}
// //             onChange={(e) => setSoilPh(e.target.value)}
// //             placeholder="Enter soil pH"
// //           />
// //         </div>
// //         <button type="submit">Check Optimality</button>
// //       </form>

// //       <div>
// //         <h3>Recommendation: {recommendation}</h3>
// //         {/* Optionally display more information about suitable crops */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default CropSimulationForm;
// // import React, { useState } from 'react';

// // const CropSimulationForm = () => {
// //   const [crop, setCrop] = useState('');
// //   const [temperature, setTemperature] = useState('');
// //   const [humidity, setHumidity] = useState('');
// //   const [soilPh, setSoilPh] = useState('');
// //   const [location, setLocation] = useState('');
// //   const [recommendations, setRecommendations] = useState('');

// //   // Expanded list of globally cultivated crops
// //   const crops = [
// //     'wheat', 'rice', 'corn', 'potato', 'soybean', 'barley', 'oats', 'sorghum', 'millet', 'rye',
// //     'cassava', 'sweet potato', 'yam', 'sugarcane', 'coffee', 'tea', 'cocoa', 'cotton', 'peanut', 'sunflower',
// //     'rapeseed', 'mustard', 'chickpea', 'lentil', 'peas', 'beans', 'flax', 'sesame', 'quinoa', 'amaranth',
// //     'banana', 'apple', 'grapes', 'orange', 'mango', 'papaya', 'pineapple', 'coconut', 'avocado', 'pomegranate',
// //     'strawberry', 'blueberry', 'blackberry', 'raspberry', 'cherry', 'peach', 'plum', 'apricot', 'fig', 'olive',
// //     'tomato', 'cucumber', 'pumpkin', 'eggplant', 'cabbage', 'cauliflower', 'broccoli', 'spinach', 'lettuce', 'kale',
// //     'carrot', 'beetroot', 'radish', 'onion', 'garlic', 'ginger', 'turmeric', 'pepper', 'chili', 'vanilla'
// //   ];

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const cropData = { crop, temperature, humidity, soilPh, location };

// //     try {
// //       const response = await fetch('http://localhost:5001/crop-selection', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(cropData),
// //       });

// //       const data = await response.json();
// //       setRecommendations(data.recommendations);
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Crop Selection</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Crop:</label>
// //           <select value={crop} onChange={(e) => setCrop(e.target.value)} required>
// //             <option value="">Select a crop</option>
// //             {crops.map((cropOption) => (
// //               <option key={cropOption} value={cropOption}>
// //                 {cropOption.charAt(0).toUpperCase() + cropOption.slice(1)}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //         <button type="submit">Submit</button>
// //       </form>
// //       <div>
// //         <h3>Recommendations</h3>
// //         <p>{recommendations}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // // ✅ Export the component
// // export default CropSimulationForm;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CropSimulationForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     crop: '',
//     temperature: '',
//     humidity: '',
//     soilPh: '',
//     soilType: '',
//     climate: '',
//   });
//   const [location, setLocation] = useState('');
//   const [recommendations, setRecommendations] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   // Debounce location input
//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       if (location.length > 2) {
//         fetchWeatherData(location);
//       }
//     }, 500);

//     return () => clearTimeout(timerId);
//   }, [location]);

//   const fetchWeatherData = async (city) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608`
//       );
      
//       if (!response.ok) throw new Error('City not found');
      
//       const data = await response.json();
//       const tempCelsius = (data.main.temp - 273.15).toFixed(1);
      
//       let climate = 'Temperate';
//       if (tempCelsius > 25) {
//         climate = data.main.humidity > 60 ? 'Tropical' : 'Arid';
//       }

//       setFormData(prev => ({
//         ...prev,
//         temperature: tempCelsius,
//         humidity: data.main.humidity,
//         climate: climate
//       }));
      
//     } catch (error) {
//       setError('Failed to fetch weather data. Please check city name.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (formData.soilPh < 1 || formData.soilPh > 14) {
//       setError('Soil pH must be between 1 and 14.');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/crop-selection', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
      
//       const data = await response.json();
//       setRecommendations(data);
//       setShowModal(true);
//       setError('');

//     } catch (error) {
//       setError('Failed to get recommendations. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
//           <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//             Crop Simulation & Analysis
//           </h1>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Location Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Location (City)
//               </label>
//               <input
//                 type="text"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter city name"
//                 required
//               />
//               {isLoading && <p className="text-sm text-gray-500 mt-1">Fetching weather data...</p>}
//             </div>

//             {/* Crop Selection */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Select Crop
//               </label>
//               <select
//                 value={formData.crop}
//                 onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//                 required
//               >
//                 <option value="">Select a crop</option>
//                 <option value="Wheat">Wheat</option>
//                 <option value="Rice">Rice</option>
//                 <option value="Corn">Corn</option>
//                 <option value="Soybean">Soybean</option>
//                 <option value="Potato">Potato</option>
//               </select>
//             </div>

//             {/* Auto-filled Weather Data */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Temperature (°C)
//                 </label>
//                 <input
//                   type="number"
//                   value={formData.temperature}
//                   readOnly
//                   className="w-full px-4 py-2 border rounded-md bg-gray-100"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Humidity (%)
//                 </label>
//                 <input
//                   type="number"
//                   value={formData.humidity}
//                   readOnly
//                   className="w-full px-4 py-2 border rounded-md bg-gray-100"
//                 />
//               </div>
//             </div>

//             {/* Soil Inputs */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Soil pH
//                 </label>
//                 <input
//                   type="number"
//                   step="0.1"
//                   value={formData.soilPh}
//                   onChange={(e) => setFormData({ ...formData, soilPh: e.target.value })}
//                   className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Soil Type
//                 </label>
//                 <select
//                   value={formData.soilType}
//                   onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
//                   className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//                   required
//                 >
//                   <option value="">Select soil type</option>
//                   <option value="Loam">Loam</option>
//                   <option value="Clay">Clay</option>
//                   <option value="Sand">Sand</option>
//                 </select>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
//             >
//               Analyze Crop Conditions
//             </button>

//             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//           </form>
//         </div>

//         {/* Recommendations Modal */}
//         {showModal && recommendations && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//             <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
//               <h2 className="text-2xl font-bold mb-4">
//                 {recommendations.isOptimal ? (
//                   <span className="text-green-600">✅ Optimal Conditions</span>
//                 ) : (
//                   <span className="text-yellow-600">⚠️ Adjustments Needed</span>
//                 )}
//               </h2>
              
//               <div className="mb-6">
//                 <p className="text-gray-700 leading-relaxed">
//                   {recommendations.message}
//                 </p>
//               </div>

//               {recommendations.alternatives.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold mb-3">
//                     Suggested Alternative Crops:
//                   </h3>
//                   <div className="grid grid-cols-2 gap-2">
//                     {recommendations.alternatives.map((crop) => (
//                       <div
//                         key={crop}
//                         className="p-2 bg-green-100 rounded-md text-center text-green-800 text-sm"
//                       >
//                         {crop}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <button
//                 onClick={() => setShowModal(false)}
//                 className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
//               >
//                 Close Analysis
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CropSimulationForm;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CropSimulationForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Assuming you have some logic to fetch recommendations and show the modal

  return (
    <div>
      {/* Other content of the form */}
      
      {/* Modify the modal rendering part */}
      {showModal && recommendations && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">
              {recommendations.isOptimal ? (
                <span className="text-green-600">✅ Optimal Conditions</span>
              ) : (
                <span className="text-yellow-600">⚠️ Adjustments Needed</span>
              )}
            </h2>
            
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {recommendations.message}
              </p>

              {/* Detailed Recommendations Accordion */}
              <div className="mt-6 space-y-4">
                {recommendations.detailedSuggestions.temperature && (
                  <div className="border rounded-lg overflow-hidden">
                    <button
                      className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100"
                      onClick={() => toggleSection('temperature')}
                    >
                      <h3 className="font-semibold">
                        🌡️ Temperature Recommendations
                      </h3>
                    </button>
                    {expandedSection === 'temperature' && (
                      <div className="p-3 bg-white">
                        <p>{recommendations.detailedSuggestions.temperature}</p>
                      </div>
                    )}
                  </div>
                )}

                {recommendations.detailedSuggestions.humidity && (
                  <div className="border rounded-lg overflow-hidden">
                    <button
                      className="w-full p-3 text-left bg-green-50 hover:bg-green-100"
                      onClick={() => toggleSection('humidity')}
                    >
                      <h3 className="font-semibold">
                        💧 Humidity Recommendations
                      </h3>
                    </button>
                    {expandedSection === 'humidity' && (
                      <div className="p-3 bg-white">
                        <p>{recommendations.detailedSuggestions.humidity}</p>
                      </div>
                    )}
                  </div>
                )}

                {recommendations.detailedSuggestions.ph && (
                  <div className="border rounded-lg overflow-hidden">
                    <button
                      className="w-full p-3 text-left bg-yellow-50 hover:bg-yellow-100"
                      onClick={() => toggleSection('ph')}
                    >
                      <h3 className="font-semibold">
                        🌱 Soil pH Recommendations
                      </h3>
                    </button>
                    {expandedSection === 'ph' && (
                      <div className="p-3 bg-white">
                        <p>{recommendations.detailedSuggestions.ph}</p>
                        <p className="mt-2 text-sm text-gray-600">
                          {recommendations.detailedSuggestions.ph.includes('low') 
                            ? 'Recommended amendments: Agricultural lime, dolomite'
                            : 'Recommended amendments: Sulfur, peat moss'}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {recommendations.alternatives.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  🚜 Suggested Alternative Crops:
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {recommendations.alternatives.map((crop) => (
                    <div
                      key={crop}
                      className="p-2 bg-green-100 rounded-md text-center text-green-800 text-sm"
                    >
                      {crop}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Close Analysis
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropSimulationForm;
