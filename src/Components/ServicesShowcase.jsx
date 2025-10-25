import {useState, useEffect} from 'react'
import { Building2, Cloud, Code, Database, Globe, Shield, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import ExploreSolutions from './ExploreSolutions'
const ServicesShowcase = () => {
    const [showSolutions, setShowSolutions] = useState(false)
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "IT Strategy & Systems Integration",
      description: "Transform your business with comprehensive IT consulting services. We align your technology infrastructure with business objectives, ensuring seamless integration across all platforms and maximizing operational efficiency."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Portals & Digital Solutions",
      description: "Build powerful e-commerce platforms, intranets, and B2B portals that drive engagement. Our custom-built web solutions are designed to enhance user experience, streamline operations, and accelerate digital transformation."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Custom Application Development",
      description: "From concept to deployment, we create bespoke software applications tailored to your unique business needs. Our agile development approach ensures scalable, maintainable, and future-proof solutions."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "SaaS & Package Software Publishing",
      description: "Launch and scale your software-as-a-service products with confidence. We provide end-to-end support from architecture design to market deployment, ensuring your solution meets industry standards and user expectations."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Landing Zones for BFSI & Healthcare",
      description: "Navigate regulatory compliance with our specialized cloud solutions for Banking, Financial Services, Insurance, and Healthcare sectors. Our compliance-driven approach ensures PDPL-ready data strategies and secure cloud migration."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed Software & IT Equipment",
      description: "Access wholesale supply of enterprise-grade IT equipment and licensed software solutions. We provide cost-effective procurement strategies and vendor management to optimize your technology investments."
    }
  ]

  return (
    <div className="bg-gradient-to-br from-[#0d2438] via-[#1a3a52] to-[#0d2438] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Service Lines
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            Aligned to License & Market Opportunities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] mx-auto mt-6"></div>
        </div>

        {/* Main Category */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-xl flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Technology & IT Services</h3>
              <p className="text-gray-300 text-sm">
                License: IT Consultancy, Computer Service Activities, Web Portals, Programming, Software Publishing, Wholesale IT Equipment
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#4a90b8] transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-[#4a90b8]/50 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#6bb3d8] transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Market Opportunity Section */}
        <div className="bg-gradient-to-r from-[#4a90b8]/20 to-[#6bb3d8]/20 backdrop-blur-md rounded-2xl p-8 border border-[#4a90b8]/30">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-2xl flex items-center justify-center shadow-xl">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                Market Opportunity
                <span className="px-3 py-1 bg-[#4a90b8] text-white text-xs font-semibold rounded-full">UAE Focus</span>
              </h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                The UAE market presents exceptional opportunities for technology firms specializing in regulated industries. Many organizations struggle with cloud adoption compliance and data protection regulations. We bridge this gap by delivering:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#6bb3d8] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-200 text-sm">
                    <span className="font-semibold text-white">Regulated Cloud Playbooks:</span> Comprehensive frameworks for compliant cloud deployment in BFSI and healthcare sectors
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#6bb3d8] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-200 text-sm">
                    <span className="font-semibold text-white">PDPL-Ready Data Strategies:</span> Future-proof data governance solutions aligned with Personal Data Protection Law requirements
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#6bb3d8] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-200 text-sm">
                    <span className="font-semibold text-white">Compliance Automation:</span> Streamlined processes that reduce regulatory overhead while maintaining audit readiness
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#6bb3d8] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-200 text-sm">
                    <span className="font-semibold text-white">Secure Migration Pathways:</span> Risk-mitigated cloud adoption strategies that protect sensitive financial and healthcare data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Placeholder Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="relative rounded-xl overflow-hidden h-64 bg-white/5 border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4a90b8]/20 to-[#6bb3d8]/20 group-hover:opacity-75 transition-opacity"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Users className="w-16 h-16 text-white/50 mx-auto mb-3" />
                <p className="text-white/70 font-medium">Team Collaboration Image</p>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="" />
          </div>
          
          <div className="relative rounded-xl overflow-hidden h-64 bg-white/5 border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6bb3d8]/20 to-[#4a90b8]/20 group-hover:opacity-75 transition-opacity"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Shield className="w-16 h-16 text-white/50 mx-auto mb-3" />
                <p className="text-white/70 font-medium">Security & Compliance Image</p>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="" />
          </div>
        </div>
          {showSolutions && (
  <ExploreSolutions onClose={() => setShowSolutions(false)} />
)}
        {/* CTA Section */}
        <div className="text-center mt-16">
        <button onClick={() => setShowSolutions(true)} className="bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] hover:from-[#6bb3d8] hover:to-[#4a90b8] text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#4a90b8]/50">
            Explore Our Solutions
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServicesShowcase