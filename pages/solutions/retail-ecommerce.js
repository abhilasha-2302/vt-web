import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function RetailSolutionsPage() {
  const services = [
    {
      name: 'Personalized Product Recommendations',
      slug: 'personalized-product-recommendations',
      description: 'Real-time recommender systems that analyze customer behavior, purchase history, and preferences to deliver individualized shopping experiences that increase conversions.',
      icon: '🎯',
      features: [
        'Behavior-driven personalization',
        'Real-time recommendation engine',
        'Cross-selling optimization'
      ]
    },
    {
      name: 'Dynamic Pricing Engine',
      slug: 'dynamic-pricing-engine',
      description: 'AI-powered pricing strategies that automatically adjust prices in response to demand patterns, competitor activity, and inventory levels for maximum profitability.',
      icon: '📈',
      features: [
        'Real-time price optimization',
        'Competitor monitoring',
        'Demand-based adjustments'
      ]
    },
    {
      name: 'Visual Search Interface',
      slug: 'visual-search-interface',
      description: 'Advanced computer vision technology enabling customers to search for products using images, creating intuitive discovery experiences integrated into storefronts.',
      icon: '🔍',
      features: [
        'Image-based product discovery',
        'Visual similarity matching',
        'Mobile-optimized search'
      ]
    },
    {
      name: 'AI Customer Assistants',
      slug: 'ai-customer-assistants',
      description: 'Intelligent chatbots and virtual assistants providing automated, multi-channel customer support for faster response times and consistent service quality.',
      icon: '🤖',
      features: [
        'Multi-channel support',
        'Natural language processing',
        '24/7 automated assistance'
      ]
    },
    {
      name: 'Inventory Intelligence',
      slug: 'inventory-intelligence',
      description: 'AI-driven inventory management that predicts demand, optimizes stock levels, and prevents stockouts while minimizing carrying costs.',
      icon: '📦',
      features: [
        'Demand forecasting',
        'Stock optimization',
        'Automated reordering'
      ]
    },
    {
      name: 'Customer Journey Analytics',
      slug: 'customer-journey-analytics',
      description: 'Comprehensive tracking and analysis of customer interactions across all touchpoints to optimize the shopping experience and identify conversion opportunities.',
      icon: '🛍️',
      features: [
        'Journey mapping',
        'Conversion optimization',
        'Behavioral insights'
      ]
    },
    {
      name: 'Fraud Detection System',
      slug: 'fraud-detection-system',
      description: 'Real-time fraud prevention using machine learning to detect suspicious transactions, protect customer data, and reduce chargebacks.',
      icon: '🛡️',
      features: [
        'Real-time transaction monitoring',
        'Risk scoring algorithms',
        'Automated fraud prevention'
      ]
    },
    {
      name: 'Supply Chain Optimization',
      slug: 'supply-chain-optimization',
      description: 'End-to-end supply chain visibility and optimization using AI to improve logistics efficiency, reduce costs, and enhance delivery performance.',
      icon: '🚚',
      features: [
        'Logistics optimization',
        'Delivery tracking',
        'Vendor management'
      ]
    },
    {
      name: 'Customer Sentiment Analysis',
      slug: 'customer-sentiment-analysis',
      description: 'AI-powered analysis of customer reviews, social media mentions, and feedback to understand brand perception and improve customer satisfaction.',
      icon: '💬',
      features: [
        'Review sentiment analysis',
        'Social media monitoring',
        'Brand perception tracking'
      ]
    },
    {
      name: 'Marketing Automation Platform',
      slug: 'marketing-automation-platform',
      description: 'Intelligent marketing campaigns powered by AI that deliver personalized content, optimize ad spend, and maximize customer engagement.',
      icon: '📱',
      features: [
        'Personalized campaigns',
        'Ad spend optimization',
        'Customer segmentation'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI in Retail – Personalization & Automation | Veripoint</title>
        <meta name="description" content="Retail AI for personalization, dynamic pricing, and automated customer service. Veripoint powers intelligent e-commerce and omnichannel growth." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/retail.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
              Retail & E-Commerce Solutions
            </h1>
            <Link href="/video-pageretail">
              <button className="inline-flex items-center bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch
              </button>
            </Link>
          </div>
        </div>
      </section>
{/* Breadcrumb Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg 
                  className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link 
                  href="/solutions/ai-ml" 
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  AI/ML Solutions
                </Link>
              </li>
              <li className="flex items-center">
                <svg 
                  className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-700 font-medium">Retail & E-Commerce Solutions</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* Navigation Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">Services</a>
              <a href="#benefits" className="text-gray-700 hover:text-gray-900 font-medium">Key Benefits</a>
            </div>
           <a
              href="https://forms.gle/kRqgCBJqn98PieQc6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl font-normal text-slate-900 mb-4">
              Choose Your Services
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Select from our comprehensive AI-driven retail solutions designed to enhance personalization, automate pricing strategies, and improve customer interactions—driving conversions and loyalty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 hover:border-green-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-500">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-slate-900 mb-4">
              Why Choose AI-Powered Retail?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how AI transforms retail and e-commerce operations with cutting-edge technology solutions that drive growth and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Increased Conversions</h3>
              <p className="text-slate-600 leading-relaxed">AI-driven personalization and recommendations boost sales by delivering the right products to the right customers at the right time.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Optimized Pricing</h3>
              <p className="text-slate-600 leading-relaxed">Dynamic pricing engines maximize profitability by automatically adjusting prices based on market conditions and demand patterns.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Enhanced Customer Experience</h3>
              <p className="text-slate-600 leading-relaxed">AI-powered customer service and personalized shopping experiences build loyalty and improve customer satisfaction scores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact">
        <CallToAction />
      </section>
    </Layout>
  );
}