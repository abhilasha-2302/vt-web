import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function SmartCitiesSolutionsPage() {
  const services = [
    {
      name: 'Intelligent Surveillance Systems',
      slug: 'intelligent-surveillance-systems',
      description: 'Real-time anomaly detection and weapon recognition integrated with existing CCTV networks. Advanced computer vision ensures comprehensive security monitoring.',
      icon: '📹',
      features: [
        'Real-time anomaly detection',
        'Weapon recognition',
        'CCTV network integration'
      ]
    },
    {
      name: 'Crowd Behavior Analytics',
      slug: 'crowd-behavior-analytics',
      description: 'Monitors crowd dynamics to predict and prevent safety incidents. AI algorithms analyze movement patterns and identify potential risks before they escalate.',
      icon: '👥',
      features: [
        'Crowd density monitoring',
        'Movement pattern analysis',
        'Incident prediction'
      ]
    },
    {
      name: 'Smart Radiation Safety Network',
      slug: 'crowd-behavior-analytics',
      description: 'Monitors crowd dynamics to predict and prevent safety incidents. AI algorithms analyze movement patterns and identify potential risks before they escalate.',
      icon: '👥',
      features: [
        'IoT Sensor Integration – Aggregates data from networked radiation detectors.',
        'Exposure Tracking – Personalizes your cumulative dose alerts.',
        'Emergency Routes – AI-recommended safest paths in real-time.',
        'Voice-Activated – Hands-free queries and emergency commands.',
        'Secure & Anonymous – No personal data stored, encrypted alerts.'
      ]
    },
    {
      name: 'License Plate Recognition (LPR)',
      slug: 'license-plate-recognition',
      description: 'AI integrates with IoT radiation sensors to monitor real-time exposure levels, predict risk zones, and guide you through safest paths during emergencies—all via voice commands or instant alerts.',
      icon: '🚗',
      features: [
        'Automated vehicle identification',
        'Access control systems',
        'Smart parking management'
      ]
    },
    {
      name: 'Integrated Urban Security Platform',
      slug: 'integrated-urban-security-platform',
      description: 'Connects disparate security systems for unified data sharing and operations. Centralized command and control for comprehensive city-wide security management.',
      icon: '🏢',
      features: [
        'Unified data sharing',
        'Centralized operations',
        'Multi-system integration'
      ]
    },
    {
      name: 'Traffic Flow Optimization',
      slug: 'traffic-flow-optimization',
      description: 'AI-powered traffic management system that analyzes real-time data to optimize signal timing and reduce congestion in urban environments.',
      icon: '🚦',
      features: [
        'Real-time traffic analysis',
        'Signal optimization',
        'Congestion reduction'
      ]
    },
    {
      name: 'Emergency Response System',
      slug: 'emergency-response-system',
      description: 'Automated incident detection and emergency response coordination. AI-driven alerts and resource allocation for faster emergency services deployment.',
      icon: '🚨',
      features: [
        'Automated incident detection',
        'Resource allocation',
        'Response coordination'
      ]
    },
    {
      name: 'Public Safety Analytics',
      slug: 'public-safety-analytics',
      description: 'Comprehensive crime pattern analysis and predictive policing tools. Data-driven insights for proactive law enforcement and community safety.',
      icon: '🛡️',
      features: [
        'Crime pattern analysis',
        'Predictive policing',
        'Safety trend monitoring'
      ]
    },
    {
      name: 'Environmental Monitoring',
      slug: 'environmental-monitoring',
      description: 'IoT-based air quality, noise, and environmental condition monitoring. Real-time data collection for sustainable urban planning and health protection.',
      icon: '🌍',
      features: [
        'Air quality monitoring',
        'Noise level tracking',
        'Environmental alerts'
      ]
    },
    {
      name: 'Smart Infrastructure Management',
      slug: 'smart-infrastructure-management',
      description: 'Predictive maintenance and monitoring of urban infrastructure including bridges, roads, and utilities. IoT sensors prevent failures before they occur.',
      icon: '🏗️',
      features: [
        'Predictive maintenance',
        'Infrastructure monitoring',
        'Failure prevention'
      ]
    },
    {
      name: 'Citizen Services Platform',
      slug: 'citizen-services-platform',
      description: 'AI-powered citizen engagement and service delivery platform. Chatbots and automated systems provide 24/7 municipal services and information.',
      icon: '🏛️',
      features: [
        'Citizen engagement tools',
        'Automated service delivery',
        '24/7 information access'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI for Smart Cities & Urban Security | Veripoint</title>
        <meta name="description" content="AI-driven smart city solutions for safety, traffic flow, and urban intelligence. Veripoint enables secure, efficient, future-ready cities." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/smart.webm"
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
              Smart Cities & Security Solutions
            </h1>
            <Link href="/video-pagesmart">
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
                <span className="text-gray-700 font-medium">Smart Cities & Security Solutions</span>
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
              Select from our comprehensive AI-driven smart city solutions designed to enhance public safety, optimize urban infrastructure, and create more efficient, secure urban environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 hover:border-emerald-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-500">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
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
              Why Choose Smart City Solutions?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how AI transforms urban infrastructure and public safety management with cutting-edge technology solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-emerald-50 rounded-lg p-8 shadow-sm border border-emerald-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Enhanced Public Safety</h3>
              <p className="text-slate-600 leading-relaxed">AI-powered surveillance and monitoring systems protect citizens and prevent incidents before they occur.</p>
            </div>
            <div className="text-center bg-emerald-50 rounded-lg p-8 shadow-sm border border-emerald-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Optimized Traffic Flow</h3>
              <p className="text-slate-600 leading-relaxed">Smart traffic management reduces congestion and improves urban mobility through intelligent routing.</p>
            </div>
            <div className="text-center bg-emerald-50 rounded-lg p-8 shadow-sm border border-emerald-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Integrated Operations</h3>
              <p className="text-slate-600 leading-relaxed">Unified platforms connect all city systems for seamless data sharing and coordinated response.</p>
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