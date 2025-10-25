import React, { useState } from 'react'
import { X, Building2, Calendar, Target, TrendingUp, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Shield, Lock, Users, FileCheck, Award, ExternalLink } from 'lucide-react'

const CybersecurityCaseStudies = ({ onClose }) => {
  const [currentStudy, setCurrentStudy] = useState(0)

  const caseStudies = [
    {
      id: 1,
      company: "Emirates National Bank",
      industry: "Banking & Financial Services",
      logo: "ENB",
      color: "from-blue-600 to-blue-800",
      image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&auto=format&fit=crop",
      challenge: "The bank faced increasing cyber threats and needed to comply with new PDPL regulations while maintaining seamless customer experience across digital channels.",
      solution: "Implemented a comprehensive cybersecurity framework including real-time threat monitoring, data encryption, and UAE PASS integration for secure customer authentication.",
      duration: "8 months",
      team: "12 specialists",
      services: ["Risk Assessment", "PDPL Compliance", "UAE PASS Integration", "24/7 Monitoring"],
      results: [
        { metric: "Security Incidents", value: "95% Reduction", icon: <Shield className="w-6 h-6" /> },
        { metric: "Compliance Score", value: "100%", icon: <CheckCircle2 className="w-6 h-6" /> },
        { metric: "Customer Trust", value: "+87%", icon: <Users className="w-6 h-6" /> },
        { metric: "Response Time", value: "<10 min", icon: <TrendingUp className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "The transformation has been remarkable. Not only are we fully compliant, but our security posture is now a competitive advantage.",
        author: "Khalid Al-Mazrouei",
        position: "Chief Security Officer"
      },
      highlights: [
        "Zero data breaches since implementation",
        "Achieved ISO 27001 certification in record time",
        "Reduced security operational costs by 40%",
        "Enhanced customer authentication experience"
      ]
    },
    {
      id: 2,
      company: "HealthCare Plus Network",
      industry: "Healthcare",
      logo: "HCP",
      color: "from-green-600 to-emerald-800",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
      challenge: "Managing sensitive patient data across 15 facilities while ensuring HIPAA compliance and protecting against ransomware attacks that plagued the healthcare sector.",
      solution: "Deployed end-to-end encryption, implemented zero-trust architecture, conducted extensive staff training, and established incident response protocols.",
      duration: "10 months",
      team: "15 specialists",
      services: ["Data Security", "Zero-Trust Architecture", "Staff Training", "Incident Response"],
      results: [
        { metric: "Data Protection", value: "99.99%", icon: <Lock className="w-6 h-6" /> },
        { metric: "Staff Compliance", value: "98%", icon: <Users className="w-6 h-6" /> },
        { metric: "System Uptime", value: "99.97%", icon: <TrendingUp className="w-6 h-6" /> },
        { metric: "Threat Detection", value: "Real-time", icon: <Shield className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "Patient data security was our top concern. This solution gave us peace of mind and improved our operational efficiency significantly.",
        author: "Dr. Fatima Al-Hashimi",
        position: "Medical Director"
      },
      highlights: [
        "Protected 2M+ patient records",
        "Prevented 150+ potential security incidents",
        "Trained 800+ healthcare staff members",
        "Achieved full regulatory compliance"
      ]
    },
    {
      id: 3,
      company: "National Insurance Corporation",
      industry: "Insurance",
      logo: "NIC",
      color: "from-purple-600 to-indigo-800",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
      challenge: "Legacy systems with security vulnerabilities, lack of data governance framework, and difficulty meeting new insurance data protection standards.",
      solution: "Modernized security infrastructure, implemented comprehensive data governance, established consent management system, and automated compliance reporting.",
      duration: "6 months",
      team: "10 specialists",
      services: ["Security Modernization", "Data Governance", "Consent Management", "Compliance Automation"],
      results: [
        { metric: "Risk Score", value: "-82%", icon: <Shield className="w-6 h-6" /> },
        { metric: "Audit Time", value: "-70%", icon: <FileCheck className="w-6 h-6" /> },
        { metric: "Data Accuracy", value: "99.8%", icon: <CheckCircle2 className="w-6 h-6" /> },
        { metric: "Cost Savings", value: "35%", icon: <TrendingUp className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "Moving from legacy to modern security was daunting, but the team made it seamless. We're now industry leaders in data protection.",
        author: "Ahmed Al-Mansoori",
        position: "Chief Information Officer"
      },
      highlights: [
        "Secured 5M+ policy holder records",
        "Automated 90% of compliance checks",
        "Reduced audit preparation time from weeks to days",
        "Enhanced customer data privacy controls"
      ]
    },
    {
      id: 4,
      company: "Dubai Government Entity",
      industry: "Government",
      logo: "DGE",
      color: "from-red-600 to-rose-800",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
      challenge: "Required to implement UAE PASS authentication for 50+ public services while maintaining highest security standards and ensuring accessibility for all citizens.",
      solution: "Designed and deployed comprehensive identity management system with UAE PASS integration, multi-factor authentication, and accessibility features.",
      duration: "12 months",
      team: "18 specialists",
      services: ["UAE PASS Integration", "Identity Management", "Access Control", "Security Training"],
      results: [
        { metric: "Services Secured", value: "50+", icon: <Shield className="w-6 h-6" /> },
        { metric: "User Adoption", value: "92%", icon: <Users className="w-6 h-6" /> },
        { metric: "Authentication Speed", value: "<3 sec", icon: <TrendingUp className="w-6 h-6" /> },
        { metric: "Security Rating", value: "A+", icon: <Award className="w-6 h-6" /> }
      ],
      testimonial: {
        quote: "The UAE PASS integration transformed how citizens access our services. Security and user experience improved dramatically.",
        author: "Mohammed Al-Ketbi",
        position: "Director of Digital Services"
      },
      highlights: [
        "Processed 1M+ secure authentications monthly",
        "Eliminated password-related security issues",
        "Improved citizen satisfaction by 75%",
        "Set new standard for government digital services"
      ]
    }
  ]

  const nextStudy = () => {
    setCurrentStudy((prev) => (prev + 1) % caseStudies.length)
  }

  const prevStudy = () => {
    setCurrentStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const study = caseStudies[currentStudy]

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-[#0d2438] to-[#1a3a52] rounded-t-3xl p-6 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">Success Stories</h2>
              <p className="text-gray-300">Real results from real clients</p>
            </div>
            <button
              onClick={onClose}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-b-3xl shadow-2xl overflow-hidden">
            {/* Hero Section with Image */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src={study.image} 
                alt={study.company}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              
              {/* Company Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <div className={`inline-block bg-gradient-to-r ${study.color} text-white px-4 py-2 rounded-lg font-bold text-2xl mb-3`}>
                      {study.logo}
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2">{study.company}</h3>
                    <p className="text-gray-200 text-lg">{study.industry}</p>
                  </div>
                  <div className="text-right text-white">
                    <p className="text-sm opacity-75 mb-1">Case Study {currentStudy + 1} of {caseStudies.length}</p>
                    <div className="flex gap-2">
                      {caseStudies.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            index === currentStudy ? 'w-8 bg-white' : 'w-4 bg-white/40'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-8 lg:p-12">
              {/* Project Info Cards */}
              <div className="grid md:grid-cols-4 gap-4 mb-12">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <Calendar className="w-8 h-8 text-[#4a90b8] mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Duration</p>
                  <p className="text-xl font-bold text-gray-900">{study.duration}</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <Users className="w-8 h-8 text-[#4a90b8] mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Team Size</p>
                  <p className="text-xl font-bold text-gray-900">{study.team}</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <Target className="w-8 h-8 text-[#4a90b8] mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Services</p>
                  <p className="text-xl font-bold text-gray-900">{study.services.length}</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <Award className="w-8 h-8 text-[#4a90b8] mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <p className="text-xl font-bold text-green-600">Success</p>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-red-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">The Challenge</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Our Solution</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Services Provided */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Services Provided</h4>
                <div className="flex flex-wrap gap-3">
                  {study.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-6 py-3 bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results Grid */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Measurable Results</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {study.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#0d2438] to-[#1a3a52] rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                        {result.icon}
                      </div>
                      <p className="text-sm text-gray-300 mb-2">{result.metric}</p>
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6bb3d8] to-white">
                        {result.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {study.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-700 font-medium">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-[#0d2438] to-[#1a3a52] rounded-2xl p-8 lg:p-12 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#4a90b8] rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6bb3d8] rounded-full opacity-10 blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl text-[#6bb3d8] opacity-50 mb-4">"</div>
                  <p className="text-white text-xl lg:text-2xl leading-relaxed mb-8 italic">
                    {study.testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-full flex items-center justify-center text-white font-bold text-2xl`}>
                      {study.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">{study.testimonial.author}</p>
                      <p className="text-gray-300">{study.testimonial.position}</p>
                      <p className="text-[#6bb3d8] text-sm">{study.company}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevStudy}
                  className="flex items-center gap-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-gray-700 transition-all duration-300 group"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="hidden sm:inline">Previous Case</span>
                </button>

                <button className="px-8 py-4 bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] hover:from-[#6bb3d8] hover:to-[#4a90b8] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Get Similar Results
                  <ExternalLink className="w-5 h-5" />
                </button>

                <button
                  onClick={nextStudy}
                  className="flex items-center gap-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-gray-700 transition-all duration-300 group"
                >
                  <span className="hidden sm:inline">Next Case</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CybersecurityCaseStudies