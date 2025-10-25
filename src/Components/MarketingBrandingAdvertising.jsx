import React, { useState } from 'react'
import { Briefcase, Target, TrendingUp, Users, Lightbulb, BarChart3, Zap, CheckCircle, ArrowRight, Clock, Award, Globe, X, ChevronRight } from 'lucide-react'

const BusinessManagementConsulting = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false)
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Corporate Strategy & Project Feasibility",
      description: "Shape your business future with data-driven strategies and comprehensive feasibility analysis. We help you make confident decisions about new ventures, market expansion, and strategic initiatives.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
      features: [
        "Strategic planning and roadmap development",
        "Market opportunity assessment and sizing",
        "Financial modeling and ROI projections",
        "Risk analysis and mitigation planning"
      ],
      impact: "95% of our strategy projects achieve their KPIs within 18 months",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Market Entry Analysis for UAE and GCC",
      description: "Navigate the Gulf market with confidence. Our localized expertise helps international firms and SMEs establish successful operations in the UAE and GCC region.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop",
      features: [
        "Regulatory and licensing requirements analysis",
        "Competitive landscape mapping",
        "Go-to-market strategy development",
        "Local partnership and network facilitation"
      ],
      impact: "Helped 50+ companies successfully enter UAE market",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Process Reengineering & Workforce Optimization",
      description: "Transform operational efficiency through intelligent process redesign and workforce alignment. We eliminate bottlenecks, reduce costs, and enhance productivity across your organization.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
      features: [
        "End-to-end process mapping and analysis",
        "Automation opportunity identification",
        "Workforce planning and optimization",
        "Change management and implementation support"
      ],
      impact: "Average 40% improvement in operational efficiency",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "CRM & WFM Integration for Measurable CX Improvement",
      description: "Elevate customer experience through seamless integration of Customer Relationship Management and Workforce Management systems. Turn customer data into actionable insights and improved service delivery.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
      features: [
        "CRM system selection and implementation",
        "Workforce management optimization",
        "Customer journey mapping and enhancement",
        "Performance metrics and KPI dashboards"
      ],
      impact: "Clients see 60% increase in customer satisfaction scores",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Project Development Consulting and PMO Support",
      description: "Execute complex projects with precision and confidence. Our Project Management Office services provide the structure, methodology, and expertise to deliver on time and within budget.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop",
      features: [
        "PMO setup and governance frameworks",
        "Project portfolio management",
        "Agile and traditional methodology implementation",
        "Project rescue and turnaround services"
      ],
      impact: "98% on-time project delivery rate",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const valuePropositions = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Dubai D33 Alignment",
      description: "Our consulting frameworks are specifically designed to align with Dubai's D33 economic agenda, helping businesses contribute to and benefit from the emirate's growth strategy.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Value-Driven Digital Packs",
      description: "Pre-packaged consulting solutions that combine strategy, technology, and implementation—designed for SMEs who need enterprise-grade consulting at accessible price points.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Structured Methodology",
      description: "Proven frameworks adapted from global best practices but customized for UAE market dynamics, ensuring practical, implementable solutions.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop"
    }
  ]

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <Briefcase className="w-8 h-8" /> },
    { number: "95%", label: "Client Retention", icon: <Users className="w-8 h-8" /> },
    { number: "40%", label: "Avg. Efficiency Gain", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "12 Weeks", label: "Avg. Implementation", icon: <Clock className="w-8 h-8" /> }
  ]

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section with Parallax Image */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&auto=format&fit=crop"
            alt="Business Strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d2438]/95 via-[#1a3a52]/90 to-[#2d4a62]/95"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#4a90b8] rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#6bb3d8] rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
                <Briefcase className="w-5 h-5 text-[#6bb3d8]" />
                <span className="text-white font-semibold">License: Management Consultancies, Consultancy Project Development</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Business & Management
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6bb3d8] via-white to-[#6bb3d8] mt-2">
                  Consulting
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
                Strategic guidance that transforms vision into reality. From corporate strategy to project execution, we help businesses thrive in the dynamic UAE market.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setShowConsultationForm(true)} className="group px-8 py-4 bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] hover:from-[#6bb3d8] hover:to-[#4a90b8] text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white rounded-xl font-semibold text-lg transition-all duration-300">
                  Download Service Brochure
                </button>
              </div>
            </div>

            {/* Hero Image Cards */}
            <div className="hidden lg:block relative h-96">
              <div className="absolute top-0 right-0 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop"
                  alt="Strategy Session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a90b8]/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop"
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6bb3d8]/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4a90b8]/10 to-[#6bb3d8]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-[#4a90b8] mb-4">{stat.icon}</div>
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] mb-2">
                    {stat.number}
                  </p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section with Images */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive management solutions tailored for the UAE business landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredService === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/70 transition-opacity duration-500 ${
                    hoveredService === index ? 'opacity-95' : 'opacity-90'
                  }`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    {React.cloneElement(service.icon, { className: "w-8 h-8 text-white" })}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#6bb3d8] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-[#6bb3d8]" />
                      <span className="text-[#6bb3d8] text-sm font-semibold">{service.impact}</span>
                    </div>
                    <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Opportunity Section with Visual Cards */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#4a90b8] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6bb3d8] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Market Opportunity
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mid-market firms and SMEs lack access to affordable, structured management consulting, creating space for value-driven digital packs aligned to Dubai D33.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0">
                  <img 
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2438] via-[#0d2438]/90 to-[#0d2438]/70"></div>
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#4a90b8] group-hover:to-[#6bb3d8] transition-all duration-300">
                    {React.cloneElement(prop.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{prop.title}</h3>
                  <p className="text-gray-300 leading-relaxed flex-grow">{prop.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#6bb3d8] font-semibold group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Visual Elements */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="relative rounded-2xl overflow-hidden h-64 group">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop"
                alt="Consulting Session"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-2xl font-bold mb-2">Expert Guidance</p>
                <p className="text-gray-300">15+ years of UAE market experience</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-64 group">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop"
                alt="Success Stories"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-2xl font-bold mb-2">Proven Results</p>
                <p className="text-gray-300">150+ successful transformations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Background Image */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop"
                alt="Strategy Meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d2438]/95 to-[#1a3a52]/95"></div>
            </div>
            
            <div className="relative z-10 p-12 lg:p-16 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-200 mb-10">
                  Get a complimentary strategy session and discover growth opportunities tailored for your business
                </p>
                <button onClick={() => setShowConsultationForm(true)} className="px-10 py-5 bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] hover:from-[#6bb3d8] hover:to-[#4a90b8] text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Book Your Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setShowConsultationForm(false)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Request Consultation</h3>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours</p>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4a90b8] focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4a90b8] focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4a90b8] focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Tell us about your business needs..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4a90b8] focus:outline-none transition-colors resize-none"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BusinessManagementConsulting