import React, { useState } from 'react'
import { Briefcase, Target, TrendingUp, Users, Lightbulb, BarChart3, Zap, CheckCircle, ArrowRight, Clock, Award, Globe } from 'lucide-react'

const BusinessManagementConsulting = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false)

  const services = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Corporate Strategy & Project Feasibility",
      description: "Shape your business future with data-driven strategies and comprehensive feasibility analysis. We help you make confident decisions about new ventures, market expansion, and strategic initiatives.",
      features: [
        "Strategic planning and roadmap development",
        "Market opportunity assessment and sizing",
        "Financial modeling and ROI projections",
        "Risk analysis and mitigation planning"
      ],
      impact: "95% of our strategy projects achieve their KPIs within 18 months"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Market Entry Analysis for UAE and GCC",
      description: "Navigate the Gulf market with confidence. Our localized expertise helps international firms and SMEs establish successful operations in the UAE and GCC region.",
      features: [
        "Regulatory and licensing requirements analysis",
        "Competitive landscape mapping",
        "Go-to-market strategy development",
        "Local partnership and network facilitation"
      ],
      impact: "Helped 50+ companies successfully enter UAE market"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Process Reengineering & Workforce Optimization",
      description: "Transform operational efficiency through intelligent process redesign and workforce alignment. We eliminate bottlenecks, reduce costs, and enhance productivity across your organization.",
      features: [
        "End-to-end process mapping and analysis",
        "Automation opportunity identification",
        "Workforce planning and optimization",
        "Change management and implementation support"
      ],
      impact: "Average 40% improvement in operational efficiency"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "CRM & WFM Integration for Measurable CX Improvement",
      description: "Elevate customer experience through seamless integration of Customer Relationship Management and Workforce Management systems. Turn customer data into actionable insights and improved service delivery.",
      features: [
        "CRM system selection and implementation",
        "Workforce management optimization",
        "Customer journey mapping and enhancement",
        "Performance metrics and KPI dashboards"
      ],
      impact: "Clients see 60% increase in customer satisfaction scores"
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Project Development Consulting and PMO Support",
      description: "Execute complex projects with precision and confidence. Our Project Management Office services provide the structure, methodology, and expertise to deliver on time and within budget.",
      features: [
        "PMO setup and governance frameworks",
        "Project portfolio management",
        "Agile and traditional methodology implementation",
        "Project rescue and turnaround services"
      ],
      impact: "98% on-time project delivery rate"
    }
  ]

  const valuePropositions = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Dubai D33 Alignment",
      description: "Our consulting frameworks are specifically designed to align with Dubai's D33 economic agenda, helping businesses contribute to and benefit from the emirate's growth strategy."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Value-Driven Digital Packs",
      description: "Pre-packaged consulting solutions that combine strategy, technology, and implementation—designed for SMEs who need enterprise-grade consulting at accessible price points."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Structured Methodology",
      description: "Proven frameworks adapted from global best practices but customized for UAE market dynamics, ensuring practical, implementable solutions."
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
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2438] via-[#1a3a52] to-[#2d4a62]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#4a90b8] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6bb3d8] rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
              <Briefcase className="w-5 h-5 text-[#6bb3d8]" />
              <span className="text-white font-semibold">License: Management Consultancies, Consultancy Project Development</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Business & Management
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6bb3d8] to-white">
                Consulting
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Strategic guidance that transforms vision into reality. From corporate strategy to project execution, we help businesses thrive in the dynamic UAE market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setShowConsultationForm(true)} className="group px-8 py-4 bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] hover:from-[#6bb3d8] hover:to-[#4a90b8] text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white rounded-xl font-semibold text-lg transition-all duration-300">
                Download Service Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="text-[#4a90b8] mb-4">{stat.icon}</div>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
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

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Left Side - Icon & Title */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br ${
                    index % 2 === 0 ? 'from-[#4a90b8] to-[#6bb3d8]' : 'from-[#0d2438] to-[#1a3a52]'
                  }`}>
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                      <BarChart3 className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-semibold">{service.impact}</span>
                    </div>
                  </div>

                  {/* Middle - Description */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-gray-50">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Side - Features */}
                  <div className="p-8 lg:p-12 bg-white">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">What We Deliver:</h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                          <div className="w-6 h-6 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Opportunity Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0d2438] to-[#1a3a52] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    Market Opportunity
                  </h2>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
                  <p className="text-gray-200 text-lg leading-relaxed mb-6">
                    Mid-market firms and SMEs lack access to affordable, structured management consulting, creating space for value-driven digital packs aligned to Dubai D33.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#6bb3d8] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold mb-1">Growing SME Sector</p>
                        <p className="text-gray-300 text-sm">UAE's SME market is expanding rapidly, with 94% of companies classified as SMEs seeking strategic guidance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#6bb3d8] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold mb-1">Dubai D33 Alignment</p>
                        <p className="text-gray-300 text-sm">Businesses need consultants who understand D33's vision to double Dubai's economy and become a top-3 global city</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#6bb3d8] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold mb-1">Affordable Solutions Gap</p>
                        <p className="text-gray-300 text-sm">Traditional consulting firms price out SMEs; we offer structured, value-driven digital consulting packages</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Value Propositions */}
              <div className="bg-gradient-to-br from-[#4a90b8]/20 to-[#6bb3d8]/20 p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-white mb-8">Why Choose Us</h3>
                <div className="space-y-6">
                  {valuePropositions.map((prop, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                          {prop.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{prop.title}</h4>
                          <p className="text-gray-200 text-sm leading-relaxed">{prop.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get a complimentary strategy session and discover growth opportunities
              </p>
              <button onClick={() => setShowConsultationForm(true)} className="bg-white text-[#4a90b8] hover:bg-gray-100 font-semibold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Consultation</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a90b8] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a90b8] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a90b8] focus:outline-none"
              />
              <textarea
                placeholder="Tell us about your business needs..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a90b8] focus:outline-none"
              ></textarea>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowConsultationForm(false)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default BusinessManagementConsulting