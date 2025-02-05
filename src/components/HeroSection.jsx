// import React from 'react';
// import '../styles.css'; // Updated path

// const HeroSection = () => {
//   return (
//     <div className="container">
//       <h1 className="title">Greenhouse Management Simulator</h1>
//       <p>
//         <i className="icon">🌱</i> Optimize your crop growth with our interactive and intelligent greenhouse management tool.
//         <br />
//         <i className="icon">🌡️</i> Monitor real-time environmental parameters such as temperature, humidity, and soil pH.
//         <br />
//         <i className="icon">📈</i> Get actionable insights tailored to your crops to ensure maximum productivity.
//         <br />
//         <i className="icon">🔔</i> Receive alerts when conditions deviate from optimal ranges to prevent potential risks.
//         <br />
//         <i className="icon">🌍</i> Designed for scalability, ease of use, and adaptability to various fruits and vegetables.
//       </p>
//     </div>
//   );
// };

// export default HeroSection;
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-white mb-8 animate-fade-in-down">
          Smart Agriculture Management System
        </h1>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <p className="text-xl text-gray-700 mb-6">
            <span className="text-green-500">🌱</span> Optimize your crop production with AI-powered insights
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <span className="text-2xl">🌡️</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Real-time Monitoring</h3>
                <p className="text-gray-600">Track soil, weather, and crop conditions</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Smart Analytics</h3>
                <p className="text-gray-600">AI-powered crop recommendations</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/login"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 text-lg"
            >
              Get Started
            </Link>
            <Link
              to="/signin"
              className="bg-white text-green-600 px-8 py-3 rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors duration-200 text-lg"
            >
              Create Account
            </Link>
          </div>
        </div>

        <div className="text-white mt-8">
          <p className="text-lg">
            Trusted by farmers across 50+ countries 🌍
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;