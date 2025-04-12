'use client';

import { useState } from 'react';
import Link from 'next/link';
import supabase from '@/lib/supabase';

export default function UnshortenPage() {
  const [shortUrl, setShortUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasResults, setHasResults] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!shortUrl) {
      setError('Please enter a shortened URL');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      setHasResults(false);
      setCopied(false);
      
      // Extract the short ID from the URL
      let shortId = '';
      
      if (shortUrl.includes('/')) {
        // It looks like a full URL
        try {
          // Try to parse as a URL
          const urlObj = new URL(shortUrl);
          const pathParts = urlObj.pathname.split('/');
          // Get the last non-empty part of the path
          shortId = pathParts.filter(part => part.trim() !== '').pop() || '';
        } catch (e) {
          // If it can't be parsed as a URL, try to extract ID from a path-like string
          const parts = shortUrl.split('/');
          shortId = parts.filter(part => part.trim() !== '').pop() || '';
        }
      } else {
        // Assume it's just the ID itself
        shortId = shortUrl.trim();
      }
      
      if (!shortId) {
        setError('Invalid shortened URL format');
        setIsLoading(false);
        return;
      }
      
      // Get the original URL from Supabase
      const { data, error: supabaseError } = await supabase
        .from('urls')
        .select('original_url')
        .eq('short_id', shortId)
        .single();

      if (supabaseError || !data) {
        setError('URL not found or invalid');
        setIsLoading(false);
        return;
      }

      setOriginalUrl(data.original_url);
      setHasResults(true);
    } catch (e) {
      setError('An error occurred while processing the URL');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(originalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy:', e);
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
            <p className="text-gray-600 text-xl mt-3 max-w-2xl mx-auto">Check where shortened links lead to</p>
          </div>
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Unshorten URL</h1>
            <p className="text-gray-600 text-lg">
              Reveal the destination of any shortened URL before visiting it.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl mb-16 transform transition-all duration-300 hover:shadow-2xl border border-gray-100 backdrop-blur-sm bg-white/90">
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-6">
                <label htmlFor="shortUrl" className="block text-gray-800 text-xl font-medium mb-3 text-center">Enter a shortened URL</label>
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-grow">
                    <input
                      type="text"
                      id="shortUrl"
                      className="w-full px-5 py-4 border border-indigo-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 bg-indigo-50/30 shadow-inner"
                      placeholder="https://shorturl.at/AbCdE or just AbCdE"
                      value={shortUrl}
                      onChange={(e) => setShortUrl(e.target.value)}
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
                        Checking...
                      </span>
                    ) : 'Unshorten URL'}
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
              <div className="mt-8 bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 shadow-md transition-all duration-300 animate-fade-in">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd"></path>
                  </svg>
                  <h2 className="text-xl font-medium text-gray-800">Original Destination</h2>
                </div>
                
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    readOnly
                    className="flex-1 border border-indigo-200 p-4 rounded-l-xl focus:outline-none bg-white font-medium text-indigo-600 shadow-inner"
                    value={originalUrl}
                  />
                  <button
                    onClick={handleCopy}
                    className={`${copied ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-600 to-violet-600'} text-white px-6 py-4 rounded-r-xl transition duration-300 font-medium`}
                  >
                    <span className="flex items-center">
                      {copied ? (
                        <>
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          Copied!
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                          </svg>
                          Copy
                        </>
                      )}
                    </span>
                  </button>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start space-x-3">
                  <svg className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-1">Safety Warning</p>
                    <p>Always be careful when visiting unfamiliar links. Make sure you trust the source before proceeding. This tool helps you verify where a shortened URL will redirect before clicking.</p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <a 
                    href={originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center"
                  >
                    Visit Original URL
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="mb-16 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 p-8 rounded-3xl shadow-lg border border-indigo-100/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Why Use URL Unshortener?</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-center">
                Short URLs can hide the actual destination, which may pose security risks. Our URL unshortener reveals where a shortened link leads before you click.
              </p>
              <p className="text-center">
                This helps protect you from potentially harmful websites, phishing attempts, or unexpected content.
              </p>
              <p className="text-center font-medium text-indigo-600">
                Stay safe online — always check before you click!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
              <div className="flex justify-center mb-5">
                <div className="bg-indigo-100 p-3 rounded-2xl group-hover:bg-indigo-200 transition-all duration-300">
                  <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Protect Yourself</h3>
              <p className="text-gray-600 text-center text-sm">Avoid malicious websites by checking where shortened URLs lead before clicking</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
              <div className="flex justify-center mb-5">
                <div className="bg-indigo-100 p-3 rounded-2xl group-hover:bg-indigo-200 transition-all duration-300">
                  <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Preview Links</h3>
              <p className="text-gray-600 text-center text-sm">Know where you're going before visiting any short URL from social media or emails</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
              <div className="flex justify-center mb-5">
                <div className="bg-indigo-100 p-3 rounded-2xl group-hover:bg-indigo-200 transition-all duration-300">
                  <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">Instant Results</h3>
              <p className="text-gray-600 text-center text-sm">Get immediate access to the original URL with our fast and reliable service</p>
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