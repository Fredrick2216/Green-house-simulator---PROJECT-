// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeroSection from './components/HeroSection'; // Landing Page Hero Section
// import SignUpForm from './components/SignUpForm'; // Sign-Up Form
// import SignInPage from './pages/SignInPage'; // Sign-In Page
// import LoginPage from './pages/LoginPage'; // Login Page
// import CropSimulationForm from './pages/CropSimulationForm'; // Crop Simulation Page
// import './styles.css'; // Global styles

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Landing Page with Hero Section and Sign-Up Form */}
//         <Route path="/" element={<div><HeroSection /><SignUpForm /></div>} />
        
//         {/* Sign-In Page */}
//         <Route path="/signin" element={<SignInPage />} />
        
//         {/* Login Page */}
//         <Route path="/login" element={<LoginPage />} />
        
//         {/* Crop Simulation Page */}
//         <Route path="/crop-selection" element={<CropSimulationForm />} />
        
//         {/* Fallback Route */}
//         <Route path="*" element={<div>404: Page Not Found</div>} />
//       </Routes>
//     </Router>
//   );
// }

// // Export the App component to use it elsewhere
// export default App;


// src/App.js
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import CropSimulationForm from './pages/CropSimulationForm';
import HeroSection from './components/HeroSection';
import SignInPage from './pages/SignInPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route 
        path="/login" 
        element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} 
      />
      <Route path="/signin" element={<SignInPage />} />
      <Route
        path="/crop-selection"
        element={
          <ProtectedRoute>
            <CropSimulationForm />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;