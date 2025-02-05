// export const submitCropData = async (data) => {
//     try {
//       const response = await fetch('http://localhost:5000/crop-selection', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       return await response.json(); // Return the response data
//     } catch (error) {
//       console.error('Error submitting crop data:', error);
//       throw error; // Optionally, throw the error to be handled elsewhere
//     }
//   };
export const submitCropData = async (data) => {
  try {
      const response = await fetch('http://localhost:5000/crop-selection', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json(); // Return the response data
  } catch (error) {
      console.error('Error submitting crop data:', error);
      throw error; // Optionally, throw the error to be handled elsewhere
  }
};
