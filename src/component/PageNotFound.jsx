import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use `useNavigate` for navigation

function NotFoundPage() {
    const navigate = useNavigate(); // Hook to access navigation for redirecting

    const handleGoHome = () => {
        navigate('/'); // Navigate to homepage
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Oops! The page you’re looking for doesn’t exist.</p>
                <button 
                    onClick={handleGoHome} 
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                    Go Back to Home
                </button>
            </div>
        </div>
    );
}

export default NotFoundPage;
