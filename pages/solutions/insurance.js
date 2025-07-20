import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function InsuranceSolutionsPage() {
  const services = [
    {
      name: 'AI Underwriting Engine',
      slug: 'ai-underwriting-engine',
      description: 'Automated risk scoring and policy issuance with unprecedented accuracy and speed. Machine learning models analyze vast datasets for precise risk assessment.',
      icon: '⚖️',
      features: [
        'Automated risk scoring',
        'Fast policy issuance',
        'Accurate risk assessment'
      ]
    },
    {
      name: 'Claims Intelligence Layer',
      slug: 'claims-intelligence-layer',
      description: 'Advanced predictive analytics to detect fraudulent and high-risk claims early in the process. Reduce losses and streamline legitimate claim processing.',
      icon: '🔍',
      features: [
        'Fraud detection',
        'Risk prediction',
        'Automated claims processing'
      ]
    },
    {
      name: '24/7 Virtual Assistants',
      slug: 'virtual-assistants',
      description: 'AI-powered chatbots providing instant, scalable customer support across all channels. Natural language processing ensures human-like interactions.',
      icon: '💬',
      features: [
        'Instant customer support',
        'Multi-channel integration',
        'Natural language processing'
      ]
    },
    {
      name: 'Cloud-Native Data Infrastructure',
      slug: 'cloud-data-infrastructure',
      description: 'Secure and compliant data management with robust disaster recovery capabilities. Scalable architecture for growing insurance operations.',
      icon: '☁️',
      features: [
        'Secure data management',
        'Disaster recovery',
        'Regulatory compliance'
      ]
    },
    {
      name: 'Predictive Risk Analytics',
      slug: 'predictive-risk-analytics',
      description: 'Advanced machine learning models for comprehensive risk assessment across all insurance lines. Improve pricing accuracy and reduce losses.',
      icon: '📈',
      features: [
        'Comprehensive risk models',
        'Pricing optimization',
        'Loss reduction analytics'
      ]
    },
    {
      name: 'Automated Policy Management',
      slug: 'automated-policy-management',
      description: 'RPA-enhanced policy administration from application to renewal. Streamline workflows and reduce manual processing errors.',
      icon: '📋',
      features: [
        'Policy automation',
        'Workflow optimization',
        'Error reduction'
      ]
    },
    {
      name: 'Customer Engagement Platform',
      slug: 'customer-engagement-platform',
      description: 'AI-driven personalized customer experiences across touchpoints. Improve retention and satisfaction through targeted communications.',
      icon: '👥',
      features: [
        'Personalized experiences',
        'Multi-touchpoint engagement',
        'Retention optimization'
      ]
    },
    {
      name: 'Regulatory Compliance Suite',
      slug: 'regulatory-compliance-suite',
      description: 'Automated compliance monitoring and reporting systems. Stay current with changing regulations and reduce compliance risks.',
      icon: '📊',
      features: [
        'Automated compliance monitoring',
        'Regulatory reporting',
        'Risk mitigation'
      ]
    },
    {
      name: 'Actuarial Intelligence',
      slug: 'actuarial-intelligence',
      description: 'AI-enhanced actuarial modeling and pricing strategies. Leverage big data and machine learning for competitive advantage.',
      icon: '🔢',
      features: [
        'Advanced actuarial modeling',
        'Data-driven pricing',
        'Competitive intelligence'
      ]
    },
    {
      name: 'Digital Claims Processing',
      slug: 'digital-claims-processing',
      description: 'End-to-end digital claims management with computer vision and document processing. Accelerate settlements and improve customer satisfaction.',
      icon: '📱',
      features: [
        'Digital claims intake',
        'Computer vision processing',
        'Automated settlements'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI in Insurance – Claims & Underwriting | Veripoint</title>
        <meta name="description" content="AI-powered insurance solutions for automated underwriting, claims, and customer engagement. Veripoint drives smarter digital insurance workflows." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/insurance.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
              Insurance Solutions
            </h1>
            <Link href="/video-pageins">
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
                <span className="text-gray-700 font-medium">Insurance Solutions</span>
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
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl text-black mb-4">
              Choose Your Services
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Select from our comprehensive AI-powered insurance solutions designed to accelerate underwriting, reduce fraud, and enhance customer engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
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
      <section id="benefits" className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-white mb-4">
              Why Choose AI-Powered Insurance?
            </h2>
            <p className="text-lg text-white">
              Transform your insurance operations with intelligent automation and analytics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Faster Processing</h3>
              <p className="text-gray-600">Automated underwriting and claims processing reduce time-to-decision</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Fraud Reduction</h3>
              <p className="text-gray-600">Advanced AI models detect fraudulent patterns and reduce losses</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Enhanced Customer Experience</h3>
              <p className="text-gray-600">24/7 AI support and personalized service improve customer satisfaction</p>
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