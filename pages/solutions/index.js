import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function AiMlSolutionsPage() {
  const industries = [
    {
      name: 'Telecommunication',
      slug: 'telecommunication',
      description: 'AI-powered network optimization with predictive maintenance algorithms. Real-time traffic analysis and automated fault detection. Machine learning models for customer churn prediction and service quality enhancement.',
      icon: '📡',
      features: [
        'Network optimization & predictive maintenance',
        'Real-time traffic analysis',
        'Customer churn prediction'
      ]
    },
    {
      name: 'Agriculture',
      slug: 'agriculture',
      description: 'Precision agriculture with IoT sensors and satellite imagery analysis. Crop health monitoring using computer vision and drone technology. AI-driven yield optimization and weather pattern prediction.',
      icon: '🌾',
      features: [
        'Precision agriculture & crop monitoring',
        'Computer vision for crop health',
        'Yield optimization algorithms'
      ]
    },
    {
      name: 'Insurance',
      slug: 'insurance',
      description: 'Advanced risk assessment models using machine learning algorithms. Automated fraud detection with real-time pattern recognition. Claims processing automation with document analysis and NLP.',
      icon: '🛡️',
      features: [
        'ML-powered risk assessment',
        'Real-time fraud detection',
        'Automated claims processing'
      ]
    },
    {
      name: 'Education & Ed-tech',
      slug: 'education-edtech',
      description: 'Personalized learning pathways with adaptive AI algorithms. Automated grading systems with natural language processing. Intelligent tutoring systems and student performance analytics.',
      icon: '🎓',
      features: [
        'Personalized learning pathways',
        'Automated grading with NLP',
        'Intelligent tutoring systems'
      ]
    },
    {
      name: 'Security & Smart-City Infrastructure',
      slug: 'security-smart-city',
      description: 'Computer vision-based surveillance with real-time threat detection. AI-powered traffic management and urban planning optimization. Smart city analytics for resource allocation and public safety.',
      icon: '🏙️',
      features: [
        'Real-time threat detection',
        'AI-powered traffic management',
        'Smart city resource optimization'
      ]
    },
    {
      name: 'Energy, Utilities & Power Grids',
      slug: 'energy-utilities',
      description: 'Smart grid optimization with demand forecasting algorithms. Renewable energy management with weather prediction models. Predictive maintenance for power infrastructure and energy efficiency optimization.',
      icon: '⚡',
      features: [
        'Smart grid demand forecasting',
        'Renewable energy management',
        'Infrastructure predictive maintenance'
      ]
    },
    {
      name: 'Logistics & Supply Chain',
      slug: 'logistics-supply-chain',
      description: 'Route optimization algorithms with real-time traffic and weather data. Demand forecasting using historical data and market trends. Inventory management with automated replenishment systems.',
      icon: '🚚',
      features: [
        'Real-time route optimization',
        'AI-driven demand forecasting',
        'Automated inventory management'
      ]
    },
    {
      name: 'Retail & E-Commerce',
      slug: 'retail-ecommerce',
      description: 'Personalized recommendation engines with collaborative filtering. Dynamic pricing optimization based on market conditions. Customer behavior analytics and inventory optimization algorithms.',
      icon: '🛒',
      features: [
        'Personalized recommendation engines',
        'Dynamic pricing optimization',
        'Customer behavior analytics'
      ]
    },
    {
      name: 'Healthcare',
      slug: 'healthcare',
      description: 'Medical imaging analysis with deep learning models for diagnostic accuracy. Drug discovery acceleration using AI-powered molecular analysis. Personalized treatment recommendations based on patient data and outcomes.',
      icon: '🏥',
      features: [
        'Medical imaging with deep learning',
        'AI-powered drug discovery',
        'Personalized treatment recommendations'
      ]
    },
    {
      name: 'Manufacturing',
      slug: 'manufacturing',
      description: 'Quality control automation using computer vision and defect detection. Production optimization with real-time analytics and process improvement. Predictive maintenance for equipment and machinery.',
      icon: '🏭',
      features: [
        'Computer vision quality control',
        'Real-time production optimization',
        'Equipment predictive maintenance'
      ]
    },
    {
      name: 'Legal Tech',
      slug: 'legal-tech',
      description: 'Document analysis and contract review using natural language processing. Legal research automation with AI-powered case law analysis. Compliance monitoring and risk assessment algorithms.',
      icon: '⚖️',
      features: [
        'NLP-powered document analysis',
        'Automated legal research',
        'Compliance monitoring systems'
      ]
    },
    {
      name: 'Smart Manufacturing & Predictive Maintenance',
      slug: 'smart-manufacturing',
      description: 'IoT-enabled manufacturing with real-time sensor data analysis. Machine learning models for failure prediction and maintenance scheduling. Digital twin technology for process optimization.',
      icon: '🔧',
      features: [
        'IoT sensor data analysis',
        'ML failure prediction models',
        'Digital twin optimization'
      ]
    },
    {
      name: 'Customer Support & AI Chatbots',
      slug: 'customer-support',
      description: 'Intelligent chatbots with natural language understanding and context awareness. Automated ticket routing and priority classification. Sentiment analysis for customer satisfaction monitoring.',
      icon: '💬',
      features: [
        'Context-aware AI chatbots',
        'Automated ticket classification',
        'Real-time sentiment analysis'
      ]
    },
    {
      name: 'Supply Chain & Logistics Optimization',
      slug: 'supply-chain-optimization',
      description: 'End-to-end supply chain visibility with real-time tracking and analytics. Optimization algorithms for warehouse management and distribution. Risk assessment and mitigation strategies.',
      icon: '📊',
      features: [
        'Real-time supply chain visibility',
        'Warehouse optimization algorithms',
        'Automated risk assessment'
      ]
    },
    {
      name: 'Energy Efficiency & Smart Grid Support',
      slug: 'energy-efficiency',
      description: 'Energy consumption optimization using machine learning algorithms. Smart grid management with load balancing and demand response. Carbon footprint tracking and reduction strategies.',
      icon: '🌱',
      features: [
        'ML energy consumption optimization',
        'Smart grid load balancing',
        'Carbon footprint analytics'
      ]
    },
    {
      name: 'Market & Demand Forecasting',
      slug: 'market-forecasting',
      description: 'Advanced analytics for market trend analysis and prediction. Demand forecasting using time series analysis and external data sources. Price prediction models and market volatility assessment.',
      icon: '📈',
      features: [
        'Market trend prediction models',
        'Time series demand forecasting',
        'Price volatility assessment'
      ]
    },
    {
      name: 'Voice of Customer (VoC) Analytics',
      slug: 'voc-analytics',
      description: 'Customer sentiment analysis across multiple channels and platforms. Natural language processing for feedback categorization and insights. Real-time emotion detection and response recommendations.',
      icon: '🗣️',
      features: [
        'Multi-channel sentiment analysis',
        'NLP feedback categorization',
        'Real-time emotion detection'
      ]
    },
    {
      name: 'Sustainability & Carbon Footprint Analytics',
      slug: 'sustainability-analytics',
      description: 'Environmental impact assessment using IoT data and satellite imagery. Carbon footprint optimization with machine learning models. Sustainability reporting automation and compliance tracking.',
      icon: '🌍',
      features: [
        'IoT environmental impact assessment',
        'ML carbon footprint optimization',
        'Automated sustainability reporting'
      ]
    },
    {
      name: 'Product Development Acceleration with Digital Twins',
      slug: 'digital-twins',
      description: 'Virtual product modeling and simulation for accelerated development cycles. AI-powered design optimization and performance prediction. Real-time testing and validation using digital twin technology.',
      icon: '🔬',
      features: [
        'Virtual product modeling',
        'AI design optimization',
        'Real-time digital validation'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Silicon Verification | AI Innovation | Blockchain Solutions – Veripoint</title>
        <meta name="description" content="aExplore our advanced portfolio: silicon design verification, AI enterprise applications, and scalable blockchain platforms. Trusted by global leaders for robust, transformative solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section - Adjusted Height */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/aiml.webm"
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
            <Link href="/video-page">
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
              Select your industry to explore enterprise AI solutions tailored to industry needs—customizable, scalable, and designed to accelerate your success with intelligent automation and data-driven insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
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
      <section id="benefits" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-black mb-4">
              Why Choose AI/ML?
            </h2>
            <p className="text-lg text-black">
              Discover the transformative benefits of artificial intelligence and machine learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Intelligent Automation</h3>
              <p className="text-gray-600">Automate complex processes with AI-powered decision making</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a1 1 0 001-1V3a1 1 0 00-1-1H6a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">Forecast trends and patterns with advanced machine learning</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">Transform raw data into actionable business intelligence</p>
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