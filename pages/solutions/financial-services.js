import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function FinancialServicesSolutionsPage() {
  const services = [
    {
      name: 'AI-Driven Algorithmic Trading',
      slug: 'algorithmic-trading-systems',
      description: 'Optimize trade execution using real-time market signals, news sentiment analysis, and historical trend patterns. Advanced ML models process vast datasets for intelligent trading decisions.',
      icon: '📈',
      features: [
        'Real-time market signal processing',
        'News sentiment analysis',
        'Historical trend pattern recognition'
      ]
    },
    {
      name: 'Real-Time Fraud Detection',
      slug: 'fraud-detection-engines',
      description: 'Identify suspicious transactions instantly using anomaly detection, behavioral profiling, and rule-based AI systems. Protect against financial crimes with advanced monitoring.',
      icon: '🛡️',
      features: [
        'Anomaly detection algorithms',
        'Behavioral profiling systems',
        'Rule-based AI monitoring'
      ]
    },
    {
      name: 'Credit & Risk Analytics',
      slug: 'credit-risk-analytics',
      description: 'Predict credit defaults, optimize lending portfolios, and assess exposure risks using advanced predictive models and comprehensive risk scoring systems.',
      icon: '📊',
      features: [
        'Credit default prediction',
        'Lending portfolio optimization',
        'Risk exposure assessment'
      ]
    },
    {
      name: 'Regulatory Compliance Monitoring',
      slug: 'compliance-monitoring',
      description: 'Automate reporting and alerts for KYC, AML, SEBI, and RBI compliance requirements. Ensure regulatory adherence with intelligent monitoring systems.',
      icon: '⚖️',
      features: [
        'KYC/AML automation',
        'SEBI/RBI compliance tracking',
        'Automated regulatory reporting'
      ]
    },
    {
      name: 'Robo-Advisory Services',
      slug: 'robo-advisory-services',
      description: 'AI-powered investment advisory platform providing personalized portfolio recommendations, risk assessment, and automated rebalancing for optimal returns.',
      icon: '🤖',
      features: [
        'Personalized portfolio management',
        'Automated rebalancing',
        'Risk-adjusted recommendations'
      ]
    },
    {
      name: 'Digital Banking Solutions',
      slug: 'digital-banking-solutions',
      description: 'Transform banking operations with AI chatbots, personalized customer experiences, and intelligent process automation for enhanced digital services.',
      icon: '🏦',
      features: [
        'Intelligent chatbot systems',
        'Personalized banking experiences',
        'Process automation workflows'
      ]
    },
    {
      name: 'Insurance Underwriting AI',
      slug: 'insurance-underwriting-ai',
      description: 'Automate insurance underwriting processes with AI-driven risk assessment, claims processing, and fraud detection for improved accuracy and efficiency.',
      icon: '📋',
      features: [
        'Automated risk assessment',
        'Claims processing optimization',
        'Insurance fraud detection'
      ]
    },
    {
      name: 'Market Research & Analytics',
      slug: 'market-research-analytics',
      description: 'Advanced market intelligence using AI to analyze market trends, competitor analysis, and investment opportunities for strategic decision-making.',
      icon: '📉',
      features: [
        'Market trend analysis',
        'Competitor intelligence',
        'Investment opportunity scoring'
      ]
    },
    {
      name: 'Blockchain Financial Solutions',
      slug: 'blockchain-financial-solutions',
      description: 'Secure, tamper-proof transaction logging and automated financial instruments using blockchain technology and smart contracts for enhanced security.',
      icon: '⛓️',
      features: [
        'Secure transaction logging',
        'Smart contract automation',
        'Blockchain-based settlements'
      ]
    },
    {
      name: 'Payment Processing Intelligence',
      slug: 'payment-processing-intelligence',
      description: 'Intelligent payment processing systems with fraud prevention, transaction optimization, and seamless API integration with existing financial infrastructure.',
      icon: '💳',
      features: [
        'Fraud prevention systems',
        'Transaction optimization',
        'API integration capabilities'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI in Finance – Risk, Compliance & Trading | Veripoint</title>
        <meta name="description" content="AI solutions for trading, fraud detection, risk analysis, and regulatory compliance. Veripoint powers digital innovation in finance and fintech." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/financial.webm"
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
              Financial Services Solutions
            </h1>
            <Link href="/video-pagefin">
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
                <span className="text-gray-700 font-medium">Financial Services Solutions</span>
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
              Select from our comprehensive AI-driven financial services designed to enhance trading performance, strengthen security, optimize risk management, and ensure regulatory compliance across banking, insurance, and fintech operations.
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
              Why Choose AI-Powered Financial Solutions?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transform your financial operations with cutting-edge AI technology that enhances decision-making, reduces risk, and ensures regulatory compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Enhanced Trading Performance</h3>
              <p className="text-slate-600 leading-relaxed">AI-driven algorithms optimize trade execution and market timing for superior returns and reduced transaction costs.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Advanced Risk Management</h3>
              <p className="text-slate-600 leading-relaxed">Real-time fraud detection and predictive risk analytics protect against financial losses and ensure secure operations.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Regulatory Compliance</h3>
              <p className="text-slate-600 leading-relaxed">Automated compliance monitoring ensures adherence to KYC, AML, SEBI, and RBI regulations with intelligent reporting.</p>
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