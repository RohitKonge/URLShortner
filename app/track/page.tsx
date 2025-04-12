'use client';

import { useState } from 'react';
import { getClickCount } from '@/lib/shortener';
import Link from 'next/link';

export default function TrackPage() {
  const [url, setUrl] = useState('');
  const [clicks, setClicks] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasResults, setHasResults] = useState(false);
  const [trackedShortId, setTrackedShortId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a shortened URL');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      setHasResults(false);
      
      // Extract the short ID from the URL
      let shortId = '';
      
      if (url.includes('/')) {
        // It looks like a full URL
        try {
          // Try to parse as a URL
          const urlObj = new URL(url);
          const pathParts = urlObj.pathname.split('/');
          // Get the last non-empty part of the path
          shortId = pathParts.filter(part => part.trim() !== '').pop() || '';
        } catch (e) {
          // If it can't be parsed as a URL, try to extract ID from a path-like string
          const parts = url.split('/');
          shortId = parts.filter(part => part.trim() !== '').pop() || '';
        }
      } else {
        // Assume it's just the ID itself
        shortId = url.trim();
      }
      
      if (!shortId) {
        setError('Invalid shortened URL format');
        setIsLoading(false);
        return;
      }
      
      setTrackedShortId(shortId);
      const clickCount = await getClickCount(shortId);
      setClicks(clickCount);
      setHasResults(true);
    } catch (e) {
      setError('An error occurred while tracking clicks');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="flex-grow">
        <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in">
            <Link href="/">
              <h1 className="text-6xl md:text-7xl font-extrabold mb-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text cursor-pointer transition-all duration-300 hover:scale-105">Short URL</h1>
            </Link>
            <p className="text-gray-600 text-xl mt-3 max-w-2xl mx-auto">Track your link performance</p>
          </div>
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">URL Click Counter</h1>
            <p className="text-gray-600 text-lg">
              Enter your shortened URL to track its performance and see how many clicks it received.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl mb-16 transform transition-all duration-300 hover:shadow-2xl border border-gray-100 backdrop-blur-sm bg-white/90">
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-6">
                <label htmlFor="url" className="block text-gray-800 text-xl font-medium mb-3 text-center">Enter your shortened URL</label>
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-grow">
                    <input
                      type="text"
                      id="url"
                      className="w-full px-5 py-4 border border-indigo-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 bg-indigo-50/30 shadow-inner"
                      placeholder="https://shorturl.at/AbCdE or just AbCdE"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium py-4 px-8 rounded-xl hover:from-indigo-700 hover:to-violet-700 transition duration-300 disabled:opacity-70 whitespace-nowrap shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 active:translate-y-0"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Loading...
                      </span>
                    ) : 'Track Clicks'}
                  </button>
                </div>
                <div className="mt-3 text-indigo-600 text-sm flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  <span>Example: shorturl.at/AbCdE or just AbCdE</span>
                </div>
              </div>

              {error && (
                <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-xl border border-red-200 shadow-md animate-fade-in">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                    {error}
                  </div>
                </div>
              )}
            </form>

            {hasResults && !isLoading && (
              <div className="mt-8 text-center bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 shadow-md transition-all duration-300 animate-fade-in">
                <p className="text-gray-600 mb-4 flex items-center justify-center gap-1 text-lg">
                  <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  </svg>
                  <span>Statistics for: <span className="font-semibold text-indigo-600">{trackedShortId}</span></span>
                </p>
                
                <div className="relative mb-6">
                  <div className="w-36 h-36 mx-auto bg-white rounded-full flex items-center justify-center border-8 border-indigo-100 shadow-lg">
                    <div className="text-6xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">{clicks}</div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                    Total Clicks
                  </div>
                </div>
                
                <div className="flex justify-center mt-8">
                  <Link 
                    href="/"
                    className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center group bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to URL Shortener
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="mb-16 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 p-8 rounded-3xl shadow-lg border border-indigo-100/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">How URL Click Counter Works</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-center">
                Our URL Click Counter provides real-time tracking of how many times your shortened links have been clicked.
              </p>
              <p className="text-center">
                Simply enter your shortened URL or its ID, and we'll show you the total number of clicks it has received.
              </p>
              <p className="text-center font-medium text-indigo-600">
                No registration required — track any shortened URL instantly!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gradient-to-r from-indigo-800 to-violet-900 text-white py-10 w-full border-t-4 border-indigo-500 mt-auto">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-300">© 2025 ShortUrl.at - Tool to shorten a long link</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="text-indigo-200 hover:text-white transition-colors duration-200 hover:underline">ShortURL</Link>
            <span className="text-gray-500">|</span>
            <Link href="/track" className="text-indigo-200 hover:text-white transition-colors duration-200 hover:underline">URL Click Counter</Link>
            <span className="text-gray-500">|</span>
            <Link href="/unshorten" className="text-indigo-200 hover:text-white transition-colors duration-200 hover:underline">Unshorten URL</Link>
            <span className="text-gray-500">|</span>
            <Link href="/terms" className="text-indigo-200 hover:text-white transition-colors duration-200 hover:underline">Terms of Service</Link>
            <span className="text-gray-500">|</span>
            <Link href="/privacy" className="text-indigo-200 hover:text-white transition-colors duration-200 hover:underline">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 