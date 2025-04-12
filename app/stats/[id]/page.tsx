'use client';

import { useState, useEffect } from 'react';
import { getClickCount } from '@/lib/shortener';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export default function StatsPage({ params }: PageProps) {
  const shortId = params.id;
  const [clicks, setClicks] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timeout | null>(null);

  const fetchStats = async () => {
    try {
      const clickCount = await getClickCount(shortId);
      setClicks(clickCount);
      setLoading(false);
    } catch (e) {
      console.error('Error fetching stats:', e);
      setError('Failed to load statistics');
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchStats();
    
    // Set up a refresh interval to update the click count every 5 seconds
    const interval = setInterval(fetchStats, 5000);
    setRefreshInterval(interval);
    
    // Clean up on unmount
    return () => {
      if (refreshInterval) {
        clearInterval(refreshInterval);
      }
    };
  }, [shortId]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="max-w-2xl mx-auto py-12 px-4">
          <div className="text-center mb-10">
            <Link href="/">
              <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text cursor-pointer">Short URL</h1>
            </Link>
          </div>
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-700 mb-2">URL Statistics</h1>
            <p className="text-gray-600">
              Track how many times your shortened URL has been clicked
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-700 mb-2">Shortened URL short_id:</h2>
              <div className="flex items-center">
                <div className="bg-gray-100 p-3 rounded w-full font-mono break-all">
                  {shortId}
                </div>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="p-4 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl font-bold text-blue-600 mb-2">{clicks}</div>
                <p className="text-gray-600">Total Clicks</p>
                <p className="text-xs text-gray-500 mt-2">Updates automatically every 5 seconds</p>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Link 
                href="/"
                className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Shorten Another URL
              </Link>
              
              <button
                onClick={fetchStats}
                className="inline-block bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-md hover:bg-gray-300 transition duration-200"
              >
                Refresh Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 w-full border-t-4 border-cyan-500 mt-auto">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-300">© 2025 ShortUrl.at - Tool to shorten a long link</p>
          </div>
          <div className="flex flex-wrap justify-center space-x-2 text-sm">
            <Link href="/" className="text-blue-400 hover:underline">ShortURL</Link>
            <span className="text-gray-500">|</span>
            <Link href="/track" className="text-blue-400 hover:underline">URL Click Counter</Link>
            <span className="text-gray-500">|</span>
            <Link href="/unshorten" className="text-blue-400 hover:underline">Unshorten URL</Link>
            <span className="text-gray-500">|</span>
            <Link href="/terms" className="text-blue-400 hover:underline">Terms of Service</Link>
            <span className="text-gray-500">|</span>
            <Link href="/privacy" className="text-blue-400 hover:underline">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 