import CallToAction from '@/components/home/CallToAction';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function EducationSolutionsPage() {
  const services = [
    {
      name: 'Adaptive Learning Engine',
      slug: 'adaptive-learning-engine',
      description: 'Personalizes content to individual student needs for improved engagement and outcomes. AI algorithms analyze learning patterns and adjust curriculum delivery in real-time.',
      icon: '🧠',
      features: [
        'Personalized content delivery',
        'Learning pattern analysis',
        'Real-time curriculum adjustment'
      ]
    },
    {
      name: 'Student Risk Analytics',
      slug: 'student-risk-analytics',
      description: 'Predicts dropout risks and supports targeted interventions. Machine learning models identify at-risk students early and recommend support strategies.',
      icon: '📊',
      features: [
        'Dropout risk prediction',
        'Early intervention alerts',
        'Performance trend analysis'
      ]
    },
    {
      name: 'Smart Content Services',
      slug: 'smart-content-services',
      description: 'Automates content creation, summarization, and multilingual accessibility. NLP-powered tools generate educational materials and translate content seamlessly.',
      icon: '📚',
      features: [
        'Automated content creation',
        'Multilingual translation',
        'Content summarization'
      ]
    },
    {
      name: 'AI-Powered Remote Proctoring',
      slug: 'ai-powered-remote-proctoring',
      description: 'Maintains academic integrity with real-time cheating detection. Computer vision and behavioral analytics ensure secure remote examinations.',
      icon: '🔒',
      features: [
        'Real-time cheating detection',
        'Behavioral pattern analysis',
        'Secure exam environment'
      ]
    },
    {
      name: 'Learning Analytics Dashboard',
      slug: 'learning-analytics-dashboard',
      description: 'Comprehensive analytics platform that tracks student progress, engagement metrics, and learning outcomes across multiple courses and programs.',
      icon: '📈',
      features: [
        'Progress tracking',
        'Engagement metrics',
        'Performance analytics'
      ]
    },
    {
      name: 'Virtual Teaching Assistant',
      slug: 'virtual-teaching-assistant',
      description: 'AI-powered chatbot that provides 24/7 student support, answers questions, and guides learners through course materials and assignments.',
      icon: '🤖',
      features: [
        '24/7 student support',
        'Automated Q&A responses',
        'Course guidance system'
      ]
    },
    {
      name: 'Curriculum Optimization',
      slug: 'curriculum-optimization',
      description: 'Data-driven curriculum design and optimization based on learning outcomes and student feedback. Continuously improve course effectiveness.',
      icon: '⚙️',
      features: [
        'Data-driven curriculum design',
        'Learning outcome analysis',
        'Continuous improvement'
      ]
    },
    {
      name: 'Skills Assessment Platform',
      slug: 'skills-assessment-platform',
      description: 'Comprehensive skills evaluation system that measures competencies, identifies knowledge gaps, and recommends personalized learning paths.',
      icon: '🎯',
      features: [
        'Competency measurement',
        'Knowledge gap identification',
        'Personalized learning paths'
      ]
    },
    {
      name: 'Collaborative Learning Tools',
      slug: 'collaborative-learning-tools',
      description: 'AI-enhanced collaboration platforms that facilitate group projects, peer learning, and social interaction in virtual learning environments.',
      icon: '👥',
      features: [
        'Group project facilitation',
        'Peer learning support',
        'Social interaction tools'
      ]
    },
    {
      name: 'Corporate Training Solutions',
      slug: 'corporate-training-solutions',
      description: 'Enterprise-focused learning management systems with AI-driven training recommendations, compliance tracking, and skill development programs.',
      icon: '💼',
      features: [
        'Training recommendations',
        'Compliance tracking',
        'Skill development programs'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>EdTech Solutions | Veripoint Technologies</title>
        <meta name="description" content="AI-driven educational platforms that personalize learning, improve retention, and ensure assessment integrity across K-12, higher education, and corporate training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero Section */}
      <section className="relative h-[calc(100vh-120px)] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src="/videos/education.webm"
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
              EdTech Solutions
            </h1>
            <Link href="/video-pageedu">
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
                <span className="text-gray-700 font-medium">Education & Ed-Tech Solutions</span>
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
            <h2 className="text-3xl font-normal text-black mb-4">
              Choose Your Services
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Select from our comprehensive AI-driven educational solutions designed to personalize learning, improve retention, and ensure assessment integrity across K-12, higher education, and corporate training.
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
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-slate-900 mb-4">
              Why Choose AI-Powered Education?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover how AI transforms modern education and training operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Personalized Learning</h3>
              <p className="text-slate-600 leading-relaxed">AI adapts to individual learning styles and pace for optimal educational outcomes</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Academic Integrity</h3>
              <p className="text-slate-600 leading-relaxed">Advanced proctoring and assessment tools ensure fair and secure evaluations</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-8 shadow-sm border border-green-100">
              <div className="bg-white rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm">
                <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Improved Retention</h3>
              <p className="text-slate-600 leading-relaxed">Data-driven insights and early intervention systems boost student success rates</p>
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