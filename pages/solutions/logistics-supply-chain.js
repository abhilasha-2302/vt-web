import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function LogisticsSolutionsPage() {
  const services = [
    {
      name: 'Smart Route Optimization Module',
      slug: 'smart-route-optimization',
      description: 'AI-powered route planning that dynamically adjusts delivery routes in real-time to reduce fuel consumption, minimize travel time, and improve delivery efficiency.',
      icon: '🚛',
      features: [
        'Dynamic route adjustment',
        'Fuel consumption optimization',
        'Real-time traffic integration'
      ]
    },
    {
      name: 'Secure Blockchain Shipment Tracking',
      slug: 'blockchain-shipment-tracking',
      description: 'Tamper-proof blockchain technology ensures complete end-to-end shipment visibility with immutable tracking records and secure data sharing across partners.',
      icon: '🔗',
      features: [
        'Tamper-proof tracking',
        'End-to-end visibility',
        'Immutable record keeping'
      ]
    },
    {
      name: 'Decentralized Vendor Verification System',
      slug: 'vendor-verification-system',
      description: 'Streamlined compliance and sourcing through secure decentralized identity verification, automating vendor onboarding and ensuring regulatory compliance.',
      icon: '✅',
      features: [
        'Secure identity verification',
        'Automated compliance checks',
        'Streamlined vendor onboarding'
      ]
    },
    {
      name: 'Predictive Fleet Maintenance',
      slug: 'predictive-fleet-maintenance',
      description: 'Machine learning algorithms predict vehicle maintenance needs before breakdowns occur, reducing downtime and extending fleet lifespan through proactive care.',
      icon: '🔧',
      features: [
        'Predictive maintenance alerts',
        'Downtime reduction',
        'Fleet lifespan optimization'
      ]
    },
    {
      name: 'Intelligent Warehouse Management',
      slug: 'intelligent-warehouse-management',
      description: 'AI-powered warehouse operations with automated inventory tracking, optimized picking routes, and real-time stock level management for maximum efficiency.',
      icon: '📦',
      features: [
        'Automated inventory tracking',
        'Optimized picking routes',
        'Real-time stock management'
      ]
    },
    {
      name: 'Demand Forecasting Engine',
      slug: 'demand-forecasting-engine',
      description: 'Advanced analytics predict customer demand patterns to optimize inventory levels, reduce stockouts, and improve supply chain planning accuracy.',
      icon: '📊',
      features: [
        'Demand pattern analysis',
        'Inventory optimization',
        'Supply chain planning'
      ]
    },
    {
      name: 'Real-Time Fleet Monitoring',
      slug: 'real-time-fleet-monitoring',
      description: 'IoT-enabled fleet tracking with real-time vehicle performance monitoring, driver behavior analysis, and automated safety compliance reporting.',
      icon: '📍',
      features: [
        'Vehicle performance tracking',
        'Driver behavior analysis',
        'Safety compliance automation'
      ]
    },
    {
      name: 'Supply Chain Risk Management',
      slug: 'supply-chain-risk-management',
      description: 'AI-powered risk assessment and mitigation strategies that identify potential disruptions and provide alternative sourcing recommendations.',
      icon: '⚠️',
      features: [
        'Risk assessment automation',
        'Disruption prediction',
        'Alternative sourcing recommendations'
      ]
    },
    {
      name: 'Last-Mile Delivery Optimization',
      slug: 'last-mile-delivery-optimization',
      description: 'Specialized algorithms optimize final delivery stages with customer preference integration, delivery time windows, and cost-effective routing.',
      icon: '🎯',
      features: [
        'Customer preference integration',
        'Delivery time optimization',
        'Cost-effective routing'
      ]
    },
    {
      name: 'Cross-Dock Operations Platform',
      slug: 'cross-dock-operations',
      description: 'Streamlined cross-docking operations with automated sorting, real-time coordination between inbound and outbound shipments, and efficiency optimization.',
      icon: '🔄',
      features: [
        'Automated sorting systems',
        'Real-time coordination',
        'Efficiency optimization'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI in Logistics – Smart Supply Chain | Veripoint</title>
        <meta name="description" content="AI-powered logistics solutions for route optimization, blockchain traceability, and supply chain visibility. Veripoint enables operational precision." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/logistics.webm"
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
              Logistics & Supply Chain Solutions
            </h1>
            <Link href="/video-pagelog">
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
                <span className="text-gray-700 font-medium">Logistics & Supply Chain Solutions</span>
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
              Select from our comprehensive AI-driven logistics solutions designed for optimization, real-time tracking, and vendor authentication, improving operational transparency, delivery efficiency, and risk management.
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
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
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
              Why Choose Smart Logistics?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how AI transforms logistics and supply chain operations with cutting-edge technology solutions that drive efficiency and transparency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Operational Efficiency</h3>
              <p className="text-slate-600 leading-relaxed">AI-driven route optimization and predictive maintenance reduce costs, minimize downtime, and improve overall operational performance.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Enhanced Security & Transparency</h3>
              <p className="text-slate-600 leading-relaxed">Blockchain-powered tracking and decentralized verification ensure secure, transparent, and tamper-proof supply chain operations.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Real-Time Visibility</h3>
              <p className="text-slate-600 leading-relaxed">IoT integration and real-time monitoring provide complete visibility into fleet performance, shipment status, and supply chain operations.</p>
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