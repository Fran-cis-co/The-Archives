import React from 'react';
import { Link } from 'react-router';

// Create a component which tells the user the link they tried to go to for the website is not found and provide
// a way to return back to the homepage
const NotFoundPage = () => {
  return (
    <div>
    404 Not Found <br/>
    <Link to="/">Return to Homepage</Link>
    </div>
  )
}

export default NotFoundPage