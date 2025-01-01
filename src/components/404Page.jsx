import React from 'react';

const MedicalNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="text-6xl text-blue-500 font-bold mb-4">404</div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Medical Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          We're sorry, but the medical page you're looking for doesn't exist or has been removed.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default MedicalNotFound;
