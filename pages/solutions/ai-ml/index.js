import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function AiMlSolutionsPage() {
  const industries = [
    {
      name: 'Telecommunication',
      slug: 'telecommunication',
      description: 'Advanced AI solutions for network optimization, predictive maintenance, and customer experience enhancement with real-time analytics and automated fault detection.',
      icon: '📡',
      features: [
        'Network Performance Optimization',
        'Predictive Equipment Maintenance',
        'Customer Experience Analytics'
      ]
    },
    {
      name: 'Agriculture',
      slug: 'agriculture',
      description: 'Smart farming solutions with precision agriculture, crop monitoring, and yield optimization using satellite imagery and IoT sensors.',
      icon: '🌾',
      features: [
        'Precision Crop Monitoring',
        'Smart Irrigation Systems',
        'Yield Prediction Analytics'
      ]
    },
    {
      name: 'Insurance',
      slug: 'insurance',
      description: 'Risk assessment, fraud detection, and automated claims processing with AI-powered analytics and machine learning algorithms.',
      icon: '🛡️',
      features: [
        'Risk Assessment Automation',
        'Fraud Detection Systems',
        'Automated Claims Processing'
      ]
    },
    {
      name: 'Ed-tech',
      slug: 'education',
      description: 'Personalized learning experiences, automated grading, and intelligent tutoring systems with adaptive learning algorithms.',
      icon: '🎓',
      features: [
        'Personalized Learning Platforms',
        'Automated Assessment Systems',
        'Intelligent Tutoring Systems'
      ]
    },
    {
      name: 'Security & Smart-City Infrastructure',
      slug: 'security-smart-city',
      description: 'Intelligent surveillance, traffic management, and urban planning with AI-driven insights and real-time monitoring systems.',
      icon: '🏙️',
      features: [
        'Intelligent Surveillance Systems',
        'Traffic Management Optimization',
        'Urban Planning Analytics'
      ]
    },
    {
      name: 'Energy, Utilities & Power Grids',
      slug: 'energy-utilities',
      description: 'Smart grid optimization, renewable energy management, and predictive maintenance for power infrastructure.',
      icon: '⚡',
      features: [
        'Smart Grid Optimization',
        'Renewable Energy Management',
        'Infrastructure Predictive Maintenance'
      ]
    },
    {
      name: 'Logistics & Supply Chain',
      slug: 'logistics-supply-chain',
      description: 'Route optimization, demand forecasting, and inventory management solutions with real-time tracking and analytics.',
      icon: '🚚',
      features: [
        'Route Optimization Algorithms',
        'Demand Forecasting Models',
        'Inventory Management Systems'
      ]
    },
    {
      name: 'Retail & E-Commerce',
      slug: 'retail-ecommerce',
      description: 'Personalized shopping experiences, inventory optimization, and customer behavior analytics with recommendation engines.',
      icon: '🛒',
      features: [
        'Personalized Recommendation Engines',
        'Inventory Optimization',
        'Customer Behavior Analytics'
      ]
    },
    {
      name: 'Healthcare',
      slug: 'healthcare',
      description: 'Medical imaging analysis, drug discovery, and personalized treatment recommendations with AI-powered diagnostic tools.',
      icon: '🏥',
      features: [
        'Medical Imaging Analysis',
        'Drug Discovery Acceleration',
        'Personalized Treatment Systems'
      ]
    },
    {
      name: 'Manufacturing',
      slug: 'manufacturing',
      description: 'Quality control automation, production optimization, and predictive maintenance with computer vision and IoT integration.',
      icon: '🏭',
      features: [
        'Quality Control Automation',
        'Production Optimization',
        'Predictive Maintenance Systems'
      ]
    },
    {
      name: 'Legal Tech',
      slug: 'legal-tech',
      description: 'Document analysis, contract review, and legal research automation with natural language processing and machine learning.',
      icon: '⚖️',
      features: [
        'Automated Document Analysis',
        'Contract Review Systems',
        'Legal Research Automation'
      ]
    },
    {
      name: 'Financial Services',
      slug: 'financial-services',
      description: 'Algorithmic trading, risk management, and fraud detection with advanced machine learning models and real-time analytics.',
      icon: '💰',
      features: [
        'Algorithmic Trading Systems',
        'Risk Management Analytics',
        'Real-time Fraud Detection'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI/ML Solutions | Veripoint Technologies</title>
        <meta name="description" content="Industry-specific AI and ML solutions for intelligent automation, predictive analytics, and data-driven decision making" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section - Adjusted Height */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/ai.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content overlay - centered */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
              AI/ML Solutions
            </h1>
            <Link href="/video-pageai">
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

      {/* Navigation Section - Only Key Benefits and Industries */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex space-x-8">
              <a href="#industries" className="text-gray-700 hover:text-gray-900 font-medium">Industries</a>
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

      {/* Industries Grid */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl text-black mb-4">
              Choose Your Industry
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Select your industry to explore customized AI/ML solutions designed to drive intelligent automation, predictive analytics, and data-driven decision making in your business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={`/solutions/${industry.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">
                      {industry.icon}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <span>Explore Solutions</span>
                    <svg className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-black mb-4">
              Why Choose AI/ML Solutions?
            </h2>
            <p className="text-lg text-black">
              Discover the transformative benefits of artificial intelligence and machine learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Intelligent Automation</h3>
              <p className="text-gray-600">Automate complex processes with AI-driven decision making</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">Forecast trends and prevent issues before they occur</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">Extract valuable insights from complex data patterns</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Cost Optimization</h3>
              <p className="text-gray-600">Reduce operational costs through intelligent optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">12</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-600">Average Cost Reduction</div>
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