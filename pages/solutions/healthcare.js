import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function HealthcareSolutionsPage() {
  const services = [
    {
      name: 'Diagnostic Imaging AI',
      slug: 'diagnostic-imaging-ai',
      description: 'AI-assisted medical image analysis integrated with EMR and PACS systems. Advanced computer vision algorithms enhance diagnostic accuracy and speed for radiologists.',
      icon: '🏥',
      features: [
        'Medical image analysis',
        'EMR & PACS integration',
        'Diagnostic accuracy enhancement'
      ]
    },
    {
      name: 'Personalized Treatment Recommenders',
      slug: 'personalized-treatment-recommenders',
      description: 'AI-powered treatment recommendation systems that tailor care plans using clinical data, patient history, and evidence-based medicine for optimal outcomes.',
      icon: '💊',
      features: [
        'Personalized care plans',
        'Clinical data analysis',
        'Evidence-based recommendations'
      ]
    },
    {
      name: 'Risk Prediction Dashboards',
      slug: 'risk-prediction-dashboards',
      description: 'Advanced analytics platforms that identify high-risk patients for early intervention, preventing complications and improving care coordination.',
      icon: '⚠️',
      features: [
        'Patient risk stratification',
        'Early intervention alerts',
        'Predictive health analytics'
      ]
    },
    {
      name: 'Virtual Health Assistants',
      slug: 'virtual-health-assistants',
      description: 'Conversational AI tools for appointment scheduling, patient queries, and remote care management, improving accessibility and patient engagement.',
      icon: '🤖',
      features: [
        'Appointment scheduling',
        'Patient query resolution',
        'Remote care support'
      ]
    },
    {
      name: 'Clinical Decision Support',
      slug: 'clinical-decision-support',
      description: 'AI-powered clinical decision support systems that provide real-time guidance to healthcare providers based on patient data and medical best practices.',
      icon: '🩺',
      features: [
        'Real-time clinical guidance',
        'Medical best practices',
        'Provider decision support'
      ]
    },
    {
      name: 'Drug Discovery Platform',
      slug: 'drug-discovery-platform',
      description: 'AI-accelerated drug discovery and development using machine learning to identify potential compounds and predict drug interactions.',
      icon: '🧬',
      features: [
        'Compound identification',
        'Drug interaction prediction',
        'Research acceleration'
      ]
    },
    {
      name: 'Electronic Health Records Optimization',
      slug: 'ehr-optimization',
      description: 'Intelligent EHR systems with automated documentation, clinical coding assistance, and workflow optimization to reduce administrative burden.',
      icon: '📋',
      features: [
        'Automated documentation',
        'Clinical coding assistance',
        'Workflow optimization'
      ]
    },
    {
      name: 'Remote Patient Monitoring',
      slug: 'remote-patient-monitoring',
      description: 'IoT-enabled remote monitoring systems with AI analysis for continuous patient health tracking and automated alert generation.',
      icon: '📱',
      features: [
        'Continuous health monitoring',
        'IoT device integration',
        'Automated health alerts'
      ]
    },
    {
      name: 'Medical Chatbots & Triage',
      slug: 'medical-chatbots-triage',
      description: 'AI-powered triage systems and medical chatbots that provide initial patient assessment and direct appropriate care pathways.',
      icon: '💬',
      features: [
        'Automated patient triage',
        'Symptom assessment',
        'Care pathway direction', 
      ]
    },
    {
      name: 'Mental Health Agent',
      slug: 'medical-chatbots-triage',
      description: 'AI companion offers a safe, anonymous space to share your thoughts—anytime, anywhere. Speak freely through voice chat and receive compassionate, judgment-free responses in real time. No accounts, no tracking, just instant support when you need it most.',
      icon: '💬',
      features: [
        'Voice Chat',
        '100% Private',
        'Instant Replies', 
      ]
    },
    
    {
      name: 'Healthcare Analytics Platform',
      slug: 'healthcare-analytics-platform',
      description: 'Comprehensive healthcare data analytics for population health management, outcome tracking, and quality improvement initiatives.',
      icon: '📊',
      features: [
        'Population health insights',
        'Outcome measurement',
        'Quality improvement tracking'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Healthcare Solutions| Veripoint Technologies</title>
        <meta name="description" content="AI-driven healthcare solutions for diagnostic imaging, personalized treatment, patient engagement, and clinical decision support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/healthcare.webm"
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
              Healthcare Solutions
            </h1>
            <Link href="/video-pagehealth">
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
                <span className="text-gray-700 font-medium">Healthcare Solutions</span>
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
              Select from our comprehensive AI-driven healthcare solutions that support early diagnosis, personalized treatment, patient engagement, and operational intelligence—improving care quality and outcomes.
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
              Why Choose AI-Powered Healthcare?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how AI transforms healthcare delivery with cutting-edge technology solutions that enhance diagnosis, treatment, and patient care outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Improved Diagnostic Accuracy</h3>
              <p className="text-slate-600 leading-relaxed">AI-assisted medical imaging and diagnostic tools enhance accuracy and speed, enabling earlier detection and better patient outcomes.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Personalized Patient Care</h3>
              <p className="text-slate-600 leading-relaxed">AI-driven treatment recommendations and risk prediction enable personalized care plans tailored to individual patient needs and conditions.</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Operational Efficiency</h3>
              <p className="text-slate-600 leading-relaxed">Automated workflows, intelligent documentation, and predictive analytics reduce administrative burden and optimize healthcare operations.</p>
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