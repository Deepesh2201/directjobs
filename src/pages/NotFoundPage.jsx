import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-primary">
            <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
            <p className="text-white">Oops! The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFoundPage;