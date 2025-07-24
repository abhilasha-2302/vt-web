import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function ManufacturingSolutionsPage() {
  const services = [
    {
      name: 'Virtual Data Analytics',
      slug: 'virtual-data-analytics',
      description: 'Empowering manufacturers with real-time video intelligence to reduce downtime, ensure safety, and optimize operations.',
      icon: '📊',
      features: [
        'Predictive Maintenance from Machine Behavior',
        'AI-based Visual Defect Detection on Production Lines',
        'Real-time Safety & PPE Compliance Monitoring',
        'Intelligent Tracking of Assets & Inventory Flow'
      ]
    },
    {
      name: 'Visual Quality Inspection',
      slug: 'visual-quality-inspection',
      description: 'AI-enabled computer vision systems detect defects and quality issues in real-time during production, ensuring consistent product quality and reducing waste.',
      icon: '👁️',
      features: [
        'Real-time defect detection',
        'Automated quality control',
        'Production line integration'
      ]
    },
    {
      name: 'Digital Twin Models',
      slug: 'digital-twin-models',
      description: 'Real-time digital simulation of manufacturing operations enables process optimization, scenario testing, and predictive analysis for enhanced efficiency.',
      icon: '🏭',
      features: [
        'Real-time plant simulation',
        'Process optimization',
        'Scenario testing capabilities'
      ]
    },
    {
      name: 'Predictive Maintenance',
      slug: 'predictive-maintenance',
      description: 'Machine learning algorithms analyze equipment data to predict failures before they occur, minimizing unplanned downtime and optimizing maintenance schedules.',
      icon: '🔧',
      features: [
        'Failure prediction',
        'Maintenance scheduling',
        'Downtime minimization'
      ]
    },
    {
      name: 'Production Planning Optimizer',
      slug: 'production-planning-optimizer',
      description: 'AI-driven production scheduling that optimizes resource allocation, minimizes bottlenecks, and maximizes throughput across manufacturing operations.',
      icon: '📋',
      features: [
        'Resource optimization',
        'Bottleneck elimination',
        'Throughput maximization'
      ]
    },
    {
      name: 'Supply Chain Integration',
      slug: 'supply-chain-integration',
      description: 'Seamless integration with suppliers and distributors using AI-powered demand forecasting and inventory optimization for just-in-time manufacturing.',
      icon: '🔗',
      features: [
        'Supplier integration',
        'Demand forecasting',
        'Inventory optimization'
      ]
    },
    {
      name: 'Energy Management System',
      slug: 'energy-management-system',
      description: 'Smart energy optimization using IoT sensors and AI analytics to reduce energy consumption, monitor usage patterns, and optimize cost efficiency.',
      icon: '⚡',
      features: [
        'Energy consumption optimization',
        'Usage pattern analysis',
        'Cost efficiency improvement'
      ]
    },
    {
      name: 'Workforce Analytics Platform',
      slug: 'workforce-analytics-platform',
      description: 'AI-powered workforce optimization analyzing productivity patterns, skill utilization, and safety metrics to enhance operational performance.',
      icon: '👥',
      features: [
        'Productivity analysis',
        'Skill optimization',
        'Safety monitoring'
      ]
    },
    {
      name: 'Automated Process Control',
      slug: 'automated-process-control',
      description: 'Advanced process automation with SCADA/MES integration for real-time control, monitoring, and optimization of manufacturing processes.',
      icon: '🎛️',
      features: [
        'SCADA/MES integration',
        'Real-time process control',
        'Automated optimization'
      ]
    },
    {
      name: 'Product Lifecycle Management',
      slug: 'product-lifecycle-management',
      description: 'Comprehensive PLM system with AI insights for product design optimization, lifecycle tracking, and continuous improvement processes.',
      icon: '♻️',
      features: [
        'Design optimization',
        'Lifecycle tracking',
        'Continuous improvement'
      ]
    },
    {
      name: 'Compliance & Safety Monitoring',
      slug: 'compliance-safety-monitoring',
      description: 'Automated compliance tracking and safety monitoring using AI to ensure regulatory adherence and maintain safe working environments.',
      icon: '🛡️',
      features: [
        'Regulatory compliance',
        'Safety monitoring',
        'Automated reporting'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI in Manufacturing – Predictive & Smart Ops | Veripoint</title>
        <meta name="description" content="AI in manufacturing for predictive maintenance, quality control, and simulation. Veripoint enables smart factory transformation and efficiency." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/manufacturing.webm"
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
              Manufacturing Solutions
            </h1>
            <Link href="/video-pagemanu">
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
                <span className="text-gray-700 font-medium">Manufacturing Solutions</span>
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
              Select from our comprehensive AI-powered manufacturing solutions designed for quality control, predictive maintenance, and digital simulation, reducing downtime and increasing throughput.
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
              Why Choose Smart Manufacturing?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how AI transforms manufacturing operations with cutting-edge technology solutions that enhance quality, efficiency, and productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Enhanced Quality Control</h3>
              <p className="text-slate-600 leading-relaxed">AI-powered visual inspection and automated quality control systems ensure consistent product quality and reduce defect rates significantly.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Reduced Downtime</h3>
              <p className="text-slate-600 leading-relaxed">Predictive maintenance and digital twin technology prevent equipment failures and optimize maintenance schedules for maximum uptime.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Increased Throughput</h3>
              <p className="text-slate-600 leading-relaxed">Optimized production planning and automated process control maximize manufacturing efficiency and boost overall throughput performance.</p>
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