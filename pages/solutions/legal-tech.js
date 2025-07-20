import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function LegalTechSolutionsPage() {
  const services = [
    {
      name: 'Contract Analysis Platform',
      slug: 'contract-analysis-platform',
      description: 'Advanced NLP-powered contract analysis that identifies key clauses, obligations, and potential risks. Automate contract review processes with intelligent document parsing.',
      icon: '📋',
      features: [
        'Key clause identification',
        'Risk detection algorithms',
        'Obligation tracking systems'
      ]
    },
    {
      name: 'Compliance Monitoring Engine',
      slug: 'compliance-monitoring-engine',
      description: 'Continuously monitor operations against regulatory frameworks including AML, GDPR, and SEBI requirements. Real-time compliance tracking and alerting.',
      icon: '⚖️',
      features: [
        'AML compliance tracking',
        'GDPR monitoring systems',
        'SEBI regulatory adherence'
      ]
    },
    {
      name: 'Legal Document Automation',
      slug: 'legal-document-automation',
      description: 'Intelligent document generation and template management for contracts, agreements, and legal filings. Streamline documentation workflows with AI assistance.',
      icon: '📄',
      features: [
        'Contract template generation',
        'Automated legal filings',
        'Document version control'
      ]
    },
    {
      name: 'Case Management System',
      slug: 'case-management-system',
      description: 'Comprehensive case tracking and management with AI-powered insights, deadline monitoring, and workflow optimization for legal professionals.',
      icon: '🗂️',
      features: [
        'Case tracking dashboards',
        'Deadline management alerts',
        'Workflow optimization tools'
      ]
    },
    {
      name: 'Legal Research Assistant',
      slug: 'legal-research-assistant',
      description: 'AI-powered legal research tool that analyzes case law, statutes, and regulations to provide relevant precedents and legal insights for case preparation.',
      icon: '🔍',
      features: [
        'Case law analysis',
        'Precedent identification',
        'Regulatory research automation'
      ]
    },
    {
      name: 'Due Diligence Automation',
      slug: 'due-diligence-automation',
      description: 'Streamline due diligence processes with AI-driven document review, risk assessment, and compliance verification for M&A and investment transactions.',
      icon: '🔎',
      features: [
        'Document review automation',
        'Risk assessment models',
        'Compliance verification tools'
      ]
    },
    {
      name: 'Intellectual Property Management',
      slug: 'ip-management-system',
      description: 'Manage patents, trademarks, and copyrights with AI-powered prior art searches, infringement detection, and portfolio optimization.',
      icon: '💡',
      features: [
        'Prior art search automation',
        'Infringement detection alerts',
        'IP portfolio optimization'
      ]
    },
    {
      name: 'Litigation Analytics',
      slug: 'litigation-analytics',
      description: 'Predictive analytics for litigation outcomes, judge behavior analysis, and strategic case planning using historical court data and case patterns.',
      icon: '📊',
      features: [
        'Outcome prediction models',
        'Judge behavior analysis',
        'Strategic case planning tools'
      ]
    },
    {
      name: 'Regulatory Change Monitoring',
      slug: 'regulatory-change-monitoring',
      description: 'Stay updated with regulatory changes across jurisdictions with AI-powered monitoring, impact analysis, and compliance requirement updates.',
      icon: '📡',
      features: [
        'Real-time regulatory tracking',
        'Impact assessment tools',
        'Compliance requirement updates'
      ]
    },
    {
      name: 'E-Discovery Solutions',
      slug: 'e-discovery-solutions',
      description: 'Advanced e-discovery platform with AI-powered document classification, privilege review, and evidence analysis for litigation support.',
      icon: '🔬',
      features: [
        'Document classification systems',
        'Privilege review automation',
        'Evidence analysis tools'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>LegalTech & AI – Contract & Compliance Tools | Veripoint</title>
        <meta name="description" content="AI legal solutions for contract review, compliance, document automation, and research. Veripoint enables faster, smarter legal operations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/legal.webm"
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
              Legal Tech Solutions
            </h1>
            <Link href="/video-pagelegal">
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
                <span className="text-gray-700 font-medium">Legal Tech Solutions</span>
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
              Select from our comprehensive AI-powered legal technology solutions designed to enhance contract analysis, streamline compliance monitoring, and optimize legal workflows for law firms, corporate legal departments, and legal service providers.
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
              Why Choose AI-Powered Legal Solutions?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transform your legal operations with intelligent technology that reduces manual workload, improves accuracy, and ensures comprehensive risk mitigation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Reduced Manual Workload</h3>
              <p className="text-slate-600 leading-relaxed">AI automation handles routine legal tasks, document review, and compliance monitoring, freeing up time for strategic work.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Improved Accuracy</h3>
              <p className="text-slate-600 leading-relaxed">Advanced NLP and machine learning ensure precise contract analysis, risk detection, and regulatory compliance monitoring.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Comprehensive Risk Mitigation</h3>
              <p className="text-slate-600 leading-relaxed">Proactive risk identification and continuous compliance monitoring protect against legal vulnerabilities and regulatory violations.</p>
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