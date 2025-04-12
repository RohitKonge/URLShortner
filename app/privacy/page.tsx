import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="flex-grow max-w-5xl mx-auto py-16 px-4 sm:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <Link href="/">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text cursor-pointer transition-all duration-300 hover:scale-105">Short URL</h1>
          </Link>
          <p className="text-gray-600 text-xl mt-3 max-w-2xl mx-auto">How we protect your data</p>
        </div>
        
        <div className="bg-white p-10 rounded-3xl shadow-xl mb-16 transform transition-all duration-300 hover:shadow-2xl border border-gray-100 backdrop-blur-sm bg-white/90">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              The privacy policy explains what personal information we collect and how it is used. The Site collects 
              this information to analyze and provide better experiences with our services. If you do not want to 
              agree to the Privacy Policy, you must not access or use the Site.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Information Collected</h2>
            <p className="mb-8">
              The Site may collect personal information, such as your email address, when you use the contact 
              form or sign up for our services. In addition, we collect information about your use of our services, 
              including your IP address, web browser and operating system, and identify the number of visitors and 
              understand how they use the Site.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Use of Information</h2>
            <p className="mb-8">
              We use your personal information to provide and improve our services, including content 
              personalization and data analytics. Our team may contact you to send updates about our services or 
              to answer questions and comments.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Information Sharing</h2>
            <p className="mb-8">
              We do not sell or share your personal information with third parties, except as necessary to provide 
              our services or as required by law.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Security</h2>
            <p className="mb-8">
              We take reasonable steps to protect your personal information from loss, theft or unauthorized use. 
              However, we cannot guarantee that your information is completely secure.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Updating Information</h2>
            <p className="mb-8">
              To request an update or fix on a shortened URL you created, go to the contact form and enter the long 
              URL and short URL you want to change.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Privacy Rights</h2>
            <p className="mb-8">
              ShortURL may send messages to advertise a product or service, and you may choose not to receive 
              marketing messages by unsubscribing from our list.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Cookies and Advertising Network</h2>
            <div className="p-5 border border-indigo-100 rounded-xl bg-indigo-50/50 mb-8">
              <p className="mb-4">
                We may use third-party advertising companies to display ads when you visit our Site. These 
                companies, may use cookies which are small text files placed on your device and similar technologies 
                to collect information for the purpose of displaying ads related to products and services of interest to 
                you.
              </p>
              <p className="mb-4">
                ShortURL may display advertisements served by advertising companies, which uses cookies to 
                identify user preferences and browsing habits. Users can get more information about these cookies 
                and privacy on advertising companies's websites.
              </p>
              <p className="mb-0">
                Web browsers accept cookies automatically, but if you prefer you can modify the configuration of 
                your browser to refuse cookies. However, this can affect how you are able to interact with our Site and 
                other sites on the Internet.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Privacy Policy Changes</h2>
            <p className="mb-8">
              We reserve the right to modify this policy at any time. Any changes will be posted on this page and 
              will take effect immediately.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Other Information</h2>
            <p className="mb-8">
              If there are any questions regarding privacy or need any further information, please contact our team.
            </p>
          </div>
          
          <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200 flex items-start space-x-3">
            <svg className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
            <div className="text-sm text-yellow-800">
              <p className="font-semibold mb-1">Important Notice</p>
              <p>This privacy policy is effective as of January 1, 2025. We encourage you to periodically review this page for the latest information on our privacy practices.</p>
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