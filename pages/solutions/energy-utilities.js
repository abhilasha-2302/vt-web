import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function EnergyUtilitiesPage() {
  const services = [
    {
      name: 'Smart Grid Optimization Suite',
      slug: 'smart-grid-optimization',
      description: 'AI-driven platform leverages IoT sensors and machine learning to autonomously stabilize your power network—preventing blackouts, reducing costs, and balancing loads seamlessly.',
      icon: '⚡',
      features: [
        'Outage Prediction – Anticipate failures before they happen using transformer health analytics.',
        'Surge Protection – Auto-isolate voltage spikes in <2ms to protect infrastructure.',
'Insulation Fault Detection – Pinpoint degradation in cables/substations with 99.2% accuracy.',
'Demand Forecasting – AI models adjust to weather, events, and usage patterns in real-time.',
'Load Balancing Automation – Dynamically reroute power to prevent overloads.'
      ]
    },
    {
      name: 'Predictive Maintenance for Critical Assets',
      slug: 'predictive-maintenance',
      description: 'Our IoT-powered monitoring tools analyze performance data to anticipate equipment failures before they occur. This ensures timely maintenance, minimizes costly downtime, and extends the life of valuable infrastructure.',
      icon: '🔧',
      features: [
        'Equipment health monitoring',
        'Failure prediction',
        'Maintenance scheduling'
      ]
    },
    {
      name: 'Smart Meter Data Analytics',
      slug: 'smart-meter-analytics',
      description: 'Leveraging advanced analytics, our platform detects abnormal energy usage, identifies potential theft, and ensures billing accuracy—helping utilities increase revenue protection and operational efficiency.',
      icon: '📊',
      features: [
        'Usage pattern analysis',
        'Theft detection systems',
        'Billing accuracy improvement'
      ]
    },
    {
      name: 'Dynamic Tariff Management Engine',
      slug: 'tariff-management',
      description: 'Utilizing real-time consumption patterns, market dynamics, and regulatory inputs, our engine enables utilities to offer flexible, consumption-based pricing models—promoting fairness, transparency, and smarter energy use.',
      icon: '💰',
      features: [
        'Dynamic pricing models',
        'Market analysis integration',
        'Consumption-based billing'
      ]
    },
    {
      name: 'Renewable Energy Integration',
      slug: 'renewable-integration',
      description: 'Seamlessly integrate solar, wind, and hydro power sources into existing grid infrastructure. Our AI-driven systems optimize renewable energy distribution and storage for maximum efficiency.',
      icon: '🌞',
      features: [
        'Solar integration systems',
        'Wind power optimization',
        'Energy storage management'
      ]
    },
    {
      name: 'Power Grid Cybersecurity',
      slug: 'grid-cybersecurity',
      description: 'Comprehensive cybersecurity solutions to protect critical energy infrastructure from threats. Real-time monitoring and threat detection ensure grid security and regulatory compliance.',
      icon: '🔒',
      features: [
        'Threat detection systems',
        'Security monitoring',
        'Compliance management'
      ]
    },
    {
      name: 'Energy Trading & Market Analytics',
      slug: 'energy-trading',
      description: 'Advanced analytics for energy trading decisions and market optimization. Real-time market data analysis helps utilities and traders make informed decisions in volatile energy markets.',
      icon: '📈',
      features: [
        'Market trend analysis',
        'Trading optimization',
        'Price forecasting'
      ]
    },
    {
      name: 'Distribution Network Optimization',
      slug: 'network-optimization',
      description: 'Optimize power distribution networks for maximum efficiency and minimal losses. AI-driven routing and load management ensure optimal power delivery across the grid.',
      icon: '🌐',
      features: [
        'Network efficiency analysis',
        'Loss minimization',
        'Route optimization'
      ]
    },
    {
      name: 'Energy Storage Management',
      slug: 'storage-management',
      description: 'Intelligent battery and energy storage systems management. Optimize charging cycles, predict storage needs, and manage grid-scale energy storage for peak efficiency.',
      icon: '🔋',
      features: [
        'Battery optimization',
        'Storage forecasting',
        'Grid-scale management'
      ]
    },
    {
      name: 'Regulatory Compliance & Reporting',
      slug: 'compliance-reporting',
      description: 'Automated compliance monitoring and reporting systems for energy regulations. Ensure adherence to environmental standards and regulatory requirements with real-time tracking.',
      icon: '📋',
      features: [
        'Automated compliance tracking',
        'Regulatory reporting',
        'Environmental monitoring'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI for Energy & Utilities – Smart Grid | Veripoint Technologies</title>
        <meta name="description" content="Smart energy solutions using AI for grid optimization, predictive maintenance, and sustainable infrastructure. Veripoint drives energy transformation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/energy.webm"
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
              Energy & Utilities Solutions
            </h1>
            <Link href="/video-pageenergy">
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
                <span className="text-gray-700 font-medium">Energy, Utilities & Power Grids</span>
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
              Select from our comprehensive AI-driven energy solutions designed to optimize grid operations, enhance infrastructure reliability, and streamline utility management for sustainable energy systems.
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
              Why Choose Smart Energy Solutions?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how AI transforms modern energy infrastructure and utility operations with cutting-edge technology solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Enhanced Grid Reliability</h3>
              <p className="text-slate-600 leading-relaxed">AI-driven monitoring and predictive maintenance ensure consistent power delivery and minimize outages for reliable energy infrastructure.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Operational Efficiency</h3>
              <p className="text-slate-600 leading-relaxed">Smart analytics optimize energy distribution, reduce losses, and improve resource allocation for maximum operational efficiency.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Sustainable Energy Future</h3>
              <p className="text-slate-600 leading-relaxed">Seamless renewable energy integration and environmental monitoring for eco-friendly power systems and carbon footprint reduction.</p>
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