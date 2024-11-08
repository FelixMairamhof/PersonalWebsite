import React from 'react';
import Link  from 'next/link';


const NotFound: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Page Not Found</h1>
            <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className="not-found-link">Go back to Home</Link>
        </div>
    );
};

export default NotFound;