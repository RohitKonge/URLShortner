'use client';

import { useState } from 'react';
import { createShortUrl } from '@/lib/shortener';
import copy from 'clipboard-copy';
import Link from 'next/link';

// Add FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is ShortURL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ShortURL is a free URL shortening service that allows you to create shortened links from long URLs. It's perfect for sharing links on social media, emails, and anywhere you need a concise link."
      }
    },
    {
      "@type": "Question",
      "name": "Is ShortURL free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ShortURL is completely free to use. You can create shortened URLs without any registration or costs."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track clicks on my shortened URLs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ShortURL provides click tracking for all shortened URLs. You can see how many times your link has been clicked in real-time."
      }
    }
  ]
};

export default function Home() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [shortId, setShortId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a URL');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      setCopied(false);
      
      // Validate URL format
      try {
        new URL(url);
      } catch (e) {
        setError('Please enter a valid URL');
        setIsLoading(false);
        return;
      }
      
      const newShortId = await createShortUrl(url);
      
      if (newShortId) {
        // Construct the full short URL
        const fullShortUrl = `${window.location.origin}/s/${newShortId}`;
        setShortUrl(fullShortUrl);
        setShortId(newShortId);
      } else {
        setError('Failed to create short URL');
      }
    } catch (e) {
      setError('An error occurred');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await copy(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy:', e);
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="flex-grow">
          <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
            <div className="text-center mb-12 animate-fade-in">
              <Link href="/">
                <h1 className="text-6xl md:text-7xl font-extrabold mb-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text cursor-pointer transition-all duration-300 hover:scale-105">Short URL</h1>
              </Link>
              <p className="text-gray-600 text-xl mt-3 max-w-2xl mx-auto">Simplify your links, amplify your reach</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl mb-16 transform transition-all duration-300 hover:shadow-2xl border border-gray-100 backdrop-blur-sm bg-white/90">
              <form onSubmit={handleSubmit} className="mb-6">
                <div className="mb-6">
                  <label htmlFor="url" className="block text-gray-800 text-xl font-medium mb-3 text-center">Paste the URL to be shortened</label>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-grow">
                      <input
                        type="text"
                        id="url"
                        className="w-full px-5 py-4 border border-indigo-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 bg-indigo-50/30 shadow-inner"
                        placeholder="https://example.com/very/long/url"
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
                          Creating...
                        </span>
                      ) : 'Shorten URL'}
                    </button>
                  </div>
                  <p className="text-lg text-gray-700 mt-6 text-center">
                    ShortURL is a free tool to shorten URLs and generate short links.
                  </p>
                  <p className="text-md text-gray-600 mt-2 text-center">
                    URL shortener allows to create a shortened link making it easy to share.
                  </p>
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
                
                {shortUrl && (
                  <div className="mt-8 bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 shadow-md transition-all duration-300 animate-fade-in">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Your shortened URL:</h2>
                    <div className="flex items-center mb-4">
                      <input
                        type="text"
                        readOnly
                        className="flex-1 border border-indigo-200 p-4 rounded-l-xl focus:outline-none bg-white font-medium text-indigo-600 shadow-inner"
                        value={shortUrl}
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
                    <div className="text-center mt-4">
                      <Link 
                        href="/track"
                        className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center group bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        View click statistics
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </form>
            </div>

            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Simple and fast URL shortener!</h2>
            
            <div className="text-gray-700 mb-16 text-center max-w-3xl mx-auto">
              ShortURL allows to shorten long links from <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">Instagram</a>, <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">Facebook</a>, <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">YouTube</a>, <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">Twitter</a>, <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">Linked In</a>, <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">WhatsApp</a>, <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">TikTok</a>, blogs and sites. Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check <Link href="/track" className="text-indigo-600 hover:text-indigo-800 font-medium">how many clicks it received</Link>.
            </div>

            <div className="mb-20 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 p-8 rounded-3xl shadow-lg border border-indigo-100/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Shorten, share and track</h2>
              <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
                Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with our click counter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 p-4 rounded-2xl group-hover:bg-indigo-200 transition-all duration-300">
                    <svg className="w-16 h-16 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 11C8.10457 11 9 10.1046 9 9C9 7.89543 8.10457 7 7 7C5.89543 7 5 7.89543 5 9C5 10.1046 5.89543 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 15V19H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 15.5V17C16 18.1046 15.1046 19 14 19H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 7V5C12 3.89543 12.8954 3 14 3C15.1046 3 16 3.89543 16 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Easy</h3>
                <p className="text-gray-600 text-center">ShortURL is easy and fast, enter the long link to get your shortened link</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 p-4 rounded-2xl group-hover:bg-indigo-200 transition-all duration-300">
                    <svg className="w-16 h-16 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 13.5C10 14.3284 9.32843 15 8.5 15C7.67157 15 7 14.3284 7 13.5C7 12.6716 7.67157 12 8.5 12C9.32843 12 10 12.6716 10 13.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 7.5C17 8.32843 16.3284 9 15.5 9C14.6716 9 14 8.32843 14 7.5C14 6.67157 14.6716 6 15.5 6C16.3284 6 17 6.67157 17 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 7.5H12.5C11.3954 7.5 10.5 8.39543 10.5 9.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 13.5H11.5C12.6046 13.5 13.5 12.6046 13.5 11.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Shortened</h3>
                <p className="text-gray-600 text-center">Use any link, no matter what size, ShortURL always shortens</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 p-4 rounded-2xl group-hover:bg-indigo-200 transition-all duration-300">
                    <svg className="w-16 h-16 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 3V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.0708 19.0711L17.6566 17.6569" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.34314 6.34317L4.92893 4.92896" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.92893 19.0711L6.34314 17.6569" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.6566 6.34317L19.0708 4.92896" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Secure</h3>
                <p className="text-gray-600 text-center">It is fast and secure, our service has HTTPS protocol and data encryption</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <Link href="/track" className="block">
                  <div className="flex justify-center mb-6">
                    <div className="bg-indigo-100 p-4 rounded-2xl group-hover:bg-indigo-200 transition-all duration-300">
                      <svg className="w-16 h-16 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.87 15H18.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Statistics</h3>
                  <p className="text-gray-600 text-center">Check the number of clicks that your shortened URL received</p>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 p-4 rounded-2xl group-hover:bg-indigo-200 transition-all duration-300">
                    <svg className="w-16 h-16 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Reliable</h3>
                <p className="text-gray-600 text-center">All links that try to disseminate spam, viruses and malware are deleted</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 p-4 rounded-2xl group-hover:bg-indigo-200 transition-all duration-300">
                    <svg className="w-16 h-16 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 17H8C4.5 17 4.5 7 8 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 10L17 7L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 20H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Devices</h3>
                <p className="text-gray-600 text-center">Compatible with smartphones, tablets and desktop</p>
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
    </>
  );
}