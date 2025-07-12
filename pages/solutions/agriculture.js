import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function AgricultureSolutionsPage() {
  const services = [
    {
      name: 'Smart Farming Intelligence',
      slug: 'smart-farming-intelligence',
      description: 'Real-time soil, weather, and crop health monitoring integrated with farm management systems. IoT sensors provide continuous data streams for informed decision-making.',
      icon: '🌱',
      features: [
        'Real-time soil monitoring',
        'Weather data integration',
        'Crop health analytics'
      ]
    },
    {
      name: 'Yield Forecast & Prediction',
      slug: 'yield-forecast-prediction',
      description: 'AI-powered crop yield predictions to optimize supply chain and trading decisions. Machine learning models analyze historical and real-time data for accurate forecasting.',
      icon: '📊',
      features: [
        'Accurate yield predictions',
        'Supply chain optimization',
        'Trading decision support'
      ]
    },
    {
      name: 'Climate Risk Management',
      slug: 'climate-risk-management',
      description: 'Advanced monitoring dashboard that assesses environmental risks such as droughts and floods to inform proactive agricultural strategies and risk mitigation.',
      icon: '🌦️',
      features: [
        'Drought risk assessment',
        'Flood prediction systems',
        'Proactive strategy planning'
      ]
    },
    {
      name: 'Automated Farm Operations',
      slug: 'automated-farm-operations',
      description: 'AI and IoT-powered automation for irrigation and resource management based on predictive analytics. Optimize water usage and resource allocation automatically.',
      icon: '🚜',
      features: [
        'Automated irrigation systems',
        'Resource optimization',
        'Predictive maintenance'
      ]
    },
    {
      name: 'Precision Agriculture',
      slug: 'precision-agriculture',
      description: 'Geospatial analytics and remote sensing to monitor land and crop health at scale. Satellite imagery and drone data provide comprehensive field insights.',
      icon: '🛰️',
      features: [
        'Satellite monitoring',
        'Drone analytics',
        'Field health mapping'
      ]
    },
    {
      name: 'Supply Chain Optimization',
      slug: 'supply-chain-optimization',
      description: 'Streamline agri-supply chains with AI-driven logistics and inventory management. Reduce waste and improve distribution efficiency from farm to market.',
      icon: '📦',
      features: [
        'Logistics optimization',
        'Inventory management',
        'Waste reduction systems'
      ]
    },
    {
      name: 'Crop Disease Detection',
      slug: 'crop-disease-detection',
      description: 'Early detection of plant diseases and pest infestations using computer vision and machine learning. Prevent crop loss through timely interventions.',
      icon: '🔬',
      features: [
        'Disease early detection',
        'Pest identification',
        'Treatment recommendations'
      ]
    },
    {
      name: 'Livestock Monitoring',
      slug: 'livestock-monitoring',
      description: 'AI-powered livestock health and behavior monitoring systems. Track animal welfare, breeding cycles, and optimize feed management for better productivity.',
      icon: '🐄',
      features: [
        'Health monitoring',
        'Behavior analytics',
        'Feed optimization'
      ]
    },
    {
      name: 'Soil Analysis & Management',
      slug: 'soil-analysis-management',
      description: 'Comprehensive soil analysis using IoT sensors and lab integration. Monitor nutrient levels, pH, and soil composition for optimal crop growth.',
      icon: '🌍',
      features: [
        'Nutrient level monitoring',
        'pH optimization',
        'Soil composition analysis'
      ]
    },
    {
      name: 'Agricultural Finance & Insurance',
      slug: 'agricultural-finance-insurance',
      description: 'AI-driven crop insurance and agricultural finance solutions. Risk assessment and claims processing for farmers and agricultural businesses.',
      icon: '💰',
      features: [
        'Crop insurance automation',
        'Risk assessment models',
        'Claims processing optimization'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Agriculture & Agribusiness Solutions | Veripoint Technologies</title>
        <meta name="description" content="AI-driven agricultural solutions for crop optimization, climate risk management, and smart farming operations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      {/* Video Hero Section */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/agriculture.webm"
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
              Agriculture & Agribusiness Solutions
            </h1>
            <Link href="/video-pageagri">
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
                <span className="text-gray-700 font-medium">Agriculture</span>
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
              Select from our comprehensive AI-driven agricultural services designed to optimize crop yields, enhance climate risk management, and streamline farming operations for sustainable agriculture.
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
              Why Choose Smart Agriculture?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how AI transforms modern farming and agribusiness operations with cutting-edge technology solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Increased Crop Yields</h3>
              <p className="text-slate-600 leading-relaxed">AI-driven insights optimize growing conditions and resource allocation for maximum productivity and sustainable farming.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Climate Risk Protection</h3>
              <p className="text-slate-600 leading-relaxed">Advanced monitoring and prediction systems protect against weather risks and enable proactive risk management.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Sustainable Operations</h3>
              <p className="text-slate-600 leading-relaxed">Resource optimization and environmental monitoring for eco-friendly agriculture and long-term sustainability.</p>
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