import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="flex-grow max-w-5xl mx-auto py-16 px-4 sm:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <Link href="/">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text cursor-pointer transition-all duration-300 hover:scale-105">Short URL</h1>
          </Link>
          <p className="text-gray-600 text-xl mt-3 max-w-2xl mx-auto">Rules and guidelines for our service</p>
        </div>
        
        <div className="bg-white p-10 rounded-3xl shadow-xl mb-16 transform transition-all duration-300 hover:shadow-2xl border border-gray-100 backdrop-blur-sm bg-white/90">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The terms of service establish the rules for accessing and using the ShortURL, including any content
              functionality and services offered by Site, whether as a guest or registered user.
            </p>
            
            <p className="mb-4">
              Be sure to read the terms of service carefully before using the Site. This page explains the terms of use
              of ShortURL, the user when using the Site is conditioned to the acceptance of the terms of use.
            </p>
            
            <p className="mb-8">
              URL Shortener is a service that transforms the link from a site, blog, forum or social network into a
              shortened link to be shared in elsewhere.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Conditions of Use</h2>
            <p className="mb-4">
              In order to provide a free service, it is necessary to agree to the conditions of use when using our
              services:
            </p>
            
            <ul className="mb-6 ml-6 space-y-2">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Short URLs that do not have at least one click per month are disabled</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Short URLs that have been disabled may become available for use by other users</span>
              </li>
            </ul>
            
            <p className="mb-4">It is not allowed to create shortened URLs that redirect to:</p>
            
            <ul className="mb-8 ml-6 space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Content, video, audio, image, book, game or any material protected by copyright</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Content that infringes the intellectual property rights or other rights of third parties</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Unauthorized streaming of movies or tv shows</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Download files</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Content that spreads phishing, malware or viruses</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Abusive or suspicious content</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Pornographic or sexual content</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Violent or prejudiced content</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Content related to drugs, weapons or alcohol</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Disgusting, explicit or offensive content that causes any kind of discomfort to users</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Pop-ups, scripts and malicious code</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Page that redirects to another page</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Not found, blank or expired pages</span>
              </li>
            </ul>
            
            <p className="mb-6">
              Any shortened URL that leads to a landing page that fits the above conditions is disabled, all URLs
              created are analyzed by our team. If we receive a report of spam or notice any kind of abusive
              behavior against our terms of service the shortened URL will be deleted without notice.
            </p>
            
            <p className="mb-8">
              If you want to request an update or correction of a shortened URL that you created, access our
              contact form informing the long URL and the short URL, our team will check if it is possible to change
              your shortened URL.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Premium Service</h2>
            <p className="mb-4">
              The premium service offers many additional features with a complete dashboard to monitor your
              shortened link statistics. Therefore, we recommend using the premium service to:
            </p>
            
            <ul className="mb-8 ml-6 space-y-2">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Promotion of products and services</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Ads and paid traffic</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Email marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Business and companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Redirect shortened links to other landing pages</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Customize shortened links with words and numbers</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Access to a complete dashboard with detailed statistics</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span>Use QR codes, API, browser extensions and many other features</span>
              </li>
            </ul>
            
            <p className="mb-8">
              The premium plan was created to give you greater control over your shortened links since we cannot
              offer any guarantee of unlimited continuity in the free service.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Disclaimer</h2>
            <p className="mb-8">
              The free service of ShortURL has some limitations therefore we cannot guarantee that the Site or
              services will be uninterrupted secure or error free. None of the employees or owners will be
              responsible for any errors or omissions on this Site or for any damage you may suffer.
              <br /><br />
              As we receive a large number of emails from users, we are unable to respond to all messages.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">User's Responsibility</h2>
            <p className="mb-8">
              By using this Site you assume personal responsibility for the results of your actions. You agree to
              assume full responsibility for any damages or injuries you suffer as a result of using or using the
              service available on this Site or other resources available from this Site. You agree to use your
              judgment and conduct due diligence before taking any action or implementing any plan or policy
              suggested or recommended on this Site.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Errors and Omissions</h2>
            <p className="mb-8">
              This Site offers a free service, but is not guaranteed to be accurate, complete and up-to-date.
              Although we have taken appropriate steps to ensure the accuracy of the information, we cannot claim
              that the Site is error-free. By using the Site, you agree that the information may be inaccurate and are
              responsible for verifying any information obtained before taking action.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">No Guarantees</h2>
            <p className="mb-4">
              You agree that the Site has not made any guarantees about the results of taking any action, whether
              recommended on this Site or not. ShortURL provides resources to help users achieve success in
              business and other areas.
            </p>
            <p className="mb-4">
              It is also recognized that previous results are not a guarantee of future results. Therefore, results
              achieved by third parties applying the services of this Site are not a guarantee that you or any other
              person or entity will obtain similar results.
            </p>
            <p className="mb-8">
              This service does not provide guarantees on performance or operation. In addition, the ShortURL
              makes no representations or warranties, express or implied, regarding the information, content or
              services made available on or through this Site. To the extent permitted by law, ShortURL disclaims
              all warranties, express or implied, including implied warranties of marketing and fitness for a
              particular purpose.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Limitation of Liability</h2>
            <p className="mb-4">
              You agree to absolve the Site of any and all liability or loss that you or any person or entity associated
              with you may suffer or incur as a result of use of the information contained on this Site and/or the
              resources you may use from this Site. You agree that the Site shall not be liable to you for any type of
              damages, including direct, indirect, special, incidental, equitable, or consequential loss or damages
              for use of this Site.
            </p>
            <p className="mb-4">
              The information, software, products, and services included in or available through the Site may
              include inaccuracies or typographical errors. The developers may make improvements and/or
              changes in the Site at any time. Changes are periodically added to the information on this page.
            </p>
            <p className="mb-8">
              The Site and/or its developers make no representations about the suitability, reliability, availability,
              timeliness, and accuracy of the information, software, products and services contained on the Site for
              any purpose. To the maximum extent permitted by applicable law, all such information, software,
              products and services are provided "As is" without warranty or condition of any kind. The Site and/or
              its desenvolvedores hereby disclaim all warranties and conditions with regard to this information,
              software, products and services, including all implied warranties or conditions of merchantability,
              fitness for a particular purpose, title, and non-infringement.
              <br /><br />
              The developers of this Site shall not be held liable for any damages, including but not limited to loss
              of use, data, or profits, resulting from the use or performance of the service, the delay or inability to
              use the Site or related services, the provision or failure to provide services, or any information,
              software, products and services obtained through the Site. This limitation applies regardless of the
              cause of the damages, whether based on contract, tort, negligence, strict liability, or otherwise.
              However, this limitation may not apply to you if your jurisdiction does not allow the exclusion or
              limitation of liability for incidental or consequential damages.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Terms Updates</h2>
            <p className="mb-8">
              ShortURL reserves the right to update or change these terms of use at any time, the most current
              version will always be available on this page.
            </p>
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