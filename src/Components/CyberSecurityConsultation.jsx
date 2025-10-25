import {useState, useEffect} from 'react'
import { Shield, Lock, Eye, FileCheck, Users, AlertTriangle, CheckCircle, Award, ArrowRight } from 'lucide-react'

import CybersecurityCaseStudies from './CybersecurityCaseStudies'
const CyberSecurityConsultation = () => {
    const [showCaseStudies, setShowCaseStudies] = useState(false)
  const coreServices = [
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "Cyber Risk Assessments & Compliance Audits",
      subtitle: "PDPL, GDPR, ISO Standards",
      description: "Navigate the complex landscape of data protection regulations with confidence. Our comprehensive risk assessments identify vulnerabilities across your entire digital ecosystem while ensuring alignment with PDPL, GDPR, and ISO 27001 standards. We don't just check boxes—we build robust frameworks that protect your organization from regulatory penalties and reputational damage.",
      highlights: [
        "Gap analysis against PDPL and international standards",
        "Risk scoring and prioritization matrix",
        "Executive-ready compliance roadmaps",
        "Ongoing compliance monitoring and reporting"
      ],
      image: 'https://plus.unsplash.com/premium_photo-1676618539962-a492182bdae4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fERhdGElMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Identity & Consent Management",
      subtitle: "UAE PASS Integration",
      description: "Transform how you manage digital identities and user consent. Our UAE PASS integration solutions provide seamless, secure authentication while maintaining full compliance with national digital identity standards. We implement consent management frameworks that respect user privacy, build trust, and ensure your organization meets evolving regulatory requirements.",
      highlights: [
        "Seamless UAE PASS authentication integration",
        "Granular consent management workflows",
        "Privacy-by-design architecture",
        "Audit trails for compliance verification"
      ],
      image: 'https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Data Security & Incident Response",
      subtitle: "Proactive Defense Frameworks",
      description: "Prepare for threats before they materialize. Our layered security frameworks combine advanced encryption, real-time monitoring, and rapid incident response protocols. When security events occur, our battle-tested response procedures minimize impact, contain threats, and ensure business continuity while maintaining forensic integrity for investigation.",
      highlights: [
        "End-to-end data encryption strategies",
        "24/7 threat detection and monitoring",
        "Incident response playbooks and simulations",
        "Post-incident analysis and prevention measures"
      ],
      image: 'https://plus.unsplash.com/premium_photo-1676618539987-12b7c8a8ae61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGF0YSUyMHNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Cyber Resilience & Awareness Programs",
      subtitle: "Building Human Firewalls",
      description: "Your people are your greatest asset—and your biggest vulnerability. Transform your workforce into a security-conscious community through engaging, practical training programs. We combine behavioral psychology with real-world scenarios to create lasting change, reducing human-factor risks by up to 70% while fostering a culture of security awareness.",
      highlights: [
        "Interactive phishing simulation campaigns",
        "Role-based security training modules",
        "Security champion development programs",
        "Measurable behavior change metrics"
      ],
      image: 'https://images.unsplash.com/photo-1719255417989-b6858e87359e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3liZXIlMjBSZXNpbGllbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0d2438] via-[#1a3a52] to-[#0d2438] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#4a90b8]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#4a90b8]/30 mb-6">
                <span className="text-[#6bb3d8] font-semibold text-sm">License: Cyber Security Consulting</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Cyber Security Consulting
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your organization with enterprise-grade security solutions designed for the UAE's regulatory landscape. We transform security from a compliance burden into a competitive advantage.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] hover:from-[#6bb3d8] hover:to-[#4a90b8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Schedule Security Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => setShowCaseStudies(true)} className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
  View Case Studies
</button>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a90b8]/20 to-[#6bb3d8]/20"></div>
              
              <img src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2VjdXJpdHklMjBPcGVyYXRpb25zJTIwQ2VudGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" alt="" className='w-full h-full' />
            </div>
          </div>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection strategies aligned with UAE regulations and international best practices
            </p>
          </div>

          <div className="space-y-12">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                {/* Content Side */}
                <div className="flex-1 p-8 lg:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#4a90b8] font-semibold text-lg">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#4a90b8] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 relative min-h-[300px] lg:min-h-[400px] bg-gradient-to-br from-[#0d2438] to-[#1a3a52]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4a90b8]/10 to-[#6bb3d8]/10"></div>
                  
                 <img src={service.image} className='w-full h-full' alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Opportunity Section */}
      <div className="bg-gradient-to-br from-[#0d2438] via-[#1a3a52] to-[#0d2438] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-12 h-12 text-[#6bb3d8]" />
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Market Opportunity
                </h2>
              </div>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                With PDPL enforcement reshaping the UAE's data protection landscape, organizations in BFSI, healthcare, and semi-government sectors face unprecedented compliance challenges. Generic IT security providers lack the specialized knowledge required for UAE's unique regulatory environment.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">We Bridge This Critical Gap:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#6bb3d8] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">
                      <span className="font-semibold text-white">Localized Compliance Accelerators:</span> Pre-built frameworks specifically designed for UAE PDPL, reducing compliance time by 60%
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#6bb3d8] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">
                      <span className="font-semibold text-white">UAE PASS Integration Expertise:</span> Seamless national digital identity implementation with proven track record
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#6bb3d8] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">
                      <span className="font-semibold text-white">Regulatory Intelligence:</span> Continuous monitoring of UAE cybersecurity directives and proactive compliance updates
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#6bb3d8] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">
                      <span className="font-semibold text-white">Industry-Specific Solutions:</span> Tailored security frameworks for banking, insurance, healthcare, and government entities
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#4a90b8]/20 to-[#6bb3d8]/20 rounded-xl p-6 border border-[#4a90b8]/30">
                <p className="text-white font-semibold text-lg">
                  🎯 Our differentiation: Deep UAE regulatory expertise combined with international security standards, creating compliance solutions that protect both reputation and revenue.
                </p>
              </div>
            </div>
            {showCaseStudies && (
  <CybersecurityCaseStudies onClose={() => setShowCaseStudies(false)} />
)}
            {/* Market Opportunity Image */}
            <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a90b8]/20 to-[#6bb3d8]/20"></div>
            
              <img src="https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fERhdGElMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="" className='w-full h-full' />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] mb-2">
                100%
              </div>
              <p className="text-gray-600 font-medium">PDPL Compliance Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] mb-2">
                60%
              </div>
              <p className="text-gray-600 font-medium">Faster Compliance</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] mb-2">
                24/7
              </div>
              <p className="text-gray-600 font-medium">Threat Monitoring</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] mb-2">
                70%
              </div>
              <p className="text-gray-600 font-medium">Risk Reduction</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Digital Future?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a complimentary security assessment and discover your compliance gaps
          </p>
          <button className="bg-white text-[#4a90b8] hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            Request Free Assessment
          </button>
        </div>
      </div>
    </div>
  )
}

export default CyberSecurityConsultation