import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main 
      className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4"
      role="main"
      aria-labelledby="error-title"
    >
      <div className="text-center">
        <h1 
          id="error-title" 
          className="text-9xl font-bold text-gray-900"
          aria-label="Error 404"
        >
          404
        </h1>
        <h2 className="text-4xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-700 text-lg mt-4 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Return to homepage"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  )
}
