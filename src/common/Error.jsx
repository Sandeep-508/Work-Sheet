import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-8">Sorry, we couldn't find the page you're looking for.</p>
            <Link to="/" className="text-blue-500 hover:underline">
                Go back home
            </Link>
        </div>
    );
};

export default NotFound;
