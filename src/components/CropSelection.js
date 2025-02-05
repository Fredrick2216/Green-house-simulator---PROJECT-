// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CropSelection = () => {
//     const [city, setCity] = useState('');
//     const [crop, setCrop] = useState('');
//     const [temperature, setTemperature] = useState('');
//     const [humidity, setHumidity] = useState('');
//     const [ph, setPh] = useState('');
//     const [climate, setClimate] = useState('');
//     const [result, setResult] = useState(null);
//     const [alternativeCrops, setAlternativeCrops] = useState([]);
//     const [adjustmentTips, setAdjustmentTips] = useState('');
//     const [showPopup, setShowPopup] = useState(false);
//     const [showAdjustmentPopup, setShowAdjustmentPopup] = useState(false);

//     useEffect(() => {
//         if (city && crop) {
//             fetchWeatherAndCropData();
//         }
//     }, [city, crop]);

//     const fetchWeatherAndCropData = async () => {
//         try {
//             const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608`);
//             const data = weatherRes.data;
//             setTemperature(data.main.temp);
//             setHumidity(data.main.humidity);
//             setClimate(data.weather[0].main);

//             const cropRes = await axios.get(`http://localhost:5000/crop-info?crop=${crop}`);
//             setPh(cropRes.data.soilPh);
//         } catch (error) {
//             console.error("Error fetching data", error);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:5000/crop-selection', { crop, temperature, humidity, climate, ph });
//             setResult(res.data);
//             setAlternativeCrops(res.data.alternatives);
//             setAdjustmentTips(res.data.adjustmentTips);
            
//             if (!res.data.isOptimal) {
//                 setShowPopup(true);
//             }
//             if (res.data.adjustmentTips) {
//                 setShowAdjustmentPopup(true);
//             }
//         } catch (error) {
//             console.error("Error submitting crop selection", error);
//         }
//     };

//     return (
//         <div className="crop-selection-form">
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} required />
//                 <select value={crop} onChange={(e) => setCrop(e.target.value)} required>
//                     <option value="">Select Crop</option>
//                     <option value="wheat">Wheat</option>
//                     <option value="rice">Rice</option>
//                     <option value="maize">Maize</option>
//                     <option value="barley">Barley</option>
//                     <option value="sugarcane">Sugarcane</option>
//                     <option value="cotton">Cotton</option>
//                     <option value="soybean">Soybean</option>
//                     <option value="coffee">Coffee</option>
//                     <option value="tea">Tea</option>
//                     <option value="sunflower">Sunflower</option>
//                     <option value="tomato">Tomato</option>
//                     <option value="potato">Potato</option>
//                     <option value="grapes">Grapes</option>
//                 </select>
//                 <button type="submit">Analyze Crop Selection</button>
//             </form>

//             {showPopup && (
//                 <div className="popup">
//                     <h3>Not Optimal!</h3>
//                     <p>{result?.message}</p>
//                     <h4>Alternative Crops:</h4>
//                     <ul>
//                         {alternativeCrops.map((alt) => (
//                             <li key={alt}>{alt}</li>
//                         ))}
//                     </ul>
//                     <button onClick={() => setShowPopup(false)}>Close</button>
//                 </div>
//             )}

//             {showAdjustmentPopup && (
//                 <div className="adjustment-popup">
//                     <h3>Crop Suitability Adjustment</h3>
//                     <p>{adjustmentTips}</p>
//                     <button onClick={() => setShowAdjustmentPopup(false)}>Close</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CropSelection;
