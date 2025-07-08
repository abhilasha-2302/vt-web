import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const blogUrls = [
    {
      id: 1,
      url: "https://verification-challenges-solutions.blogspot.com/2025/06/verification-in-age-of-pci-express-gen7.html",
      title: "Verification in the Age of PCI Express Gen7: AI in IP Verification",
      description: "Exploring the challenges and solutions for verification in next-generation PCI Express implementations.",
      date: "June 2025",
      category: "PCIe Verification"
    },
    {
      id: 2,
      url: "https://verification-challenges-solutions.blogspot.com/2025/06/testbench-architecture-validation.html",
      title: "Testbench Architecture Validation",
      description: "Deep dive into modern testbench architecture patterns and validation methodologies.",
      date: "June 2025",
      category: "Architecture"
    }
  ];

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      setBlogs(blogUrls);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleBlogClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical Blogs
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Insights, innovations, and expertise from the world of verification and silicon solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {blogs.map((blog) => (
              <div 
                key={blog.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
                onClick={() => handleBlogClick(blog.url)}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blog.description}
                  </p>
                  
                  <div className="flex items-center text-green-600 font-semibold">
                    <span className="mr-2">Read Full Article</span>
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-green-700/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Content Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Follow our technical blog for the latest insights on verification methodologies, 
              silicon solutions, and industry best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://verification-challenges-solutions.blogspot.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Visit Our Blog Platform
              </a>
              
              <button 
                onClick={() => window.open('https://forms.gle/nA8YkAY7RoeEHZnB7', '_blank')}
                className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Blog Topics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'PCIe Verification', icon: '🔧' },
              { name: 'Testbench Architecture', icon: '🏗️' },
              { name: 'Silicon Solutions', icon: '💎' },
              { name: 'Industry Trends', icon: '📈' }
            ].map((topic, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="font-semibold text-gray-900">{topic.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}