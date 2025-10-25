import React, { useState } from 'react'
import { Megaphone, Palette, TrendingUp, Video, BarChart2, Sparkles, Target, Users, Award, Zap, Eye, Heart, Star, ArrowRight, Play, X } from 'lucide-react'

const MarketingBrandingAdvertising = () => {
  const [activeService, setActiveService] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  const services = [
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "End-to-End Advertising Campaigns",
      subtitle: "Digital + Traditional",
      description: "Launch campaigns that captivate audiences and drive conversions. We blend digital innovation with traditional media expertise to create integrated marketing experiences that deliver measurable results.",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop",
      capabilities: [
        "Multi-channel campaign strategy and execution",
        "Media planning and buying across all platforms",
        "Creative concept development and production",
        "Campaign performance tracking and optimization"
      ],
      results: { reach: "5M+", engagement: "+250%", roi: "450%" }
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Digital Marketing Excellence",
      subtitle: "SEO, SEM, PPC, Programmatic Ads",
      description: "Dominate search rankings and paid channels with data-driven digital marketing strategies. Our performance marketing approach ensures every dirham spent contributes to your bottom line.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      capabilities: [
        "Search engine optimization (SEO) and technical audits",
        "Pay-per-click (PPC) campaign management",
        "Programmatic advertising and audience targeting",
        "Social media advertising and influencer partnerships"
      ],
      results: { traffic: "+320%", leads: "+185%", cpa: "-40%" }
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Brand Identity & Reputation Management",
      subtitle: "Build Trust, Inspire Loyalty",
      description: "Craft distinctive brand identities that resonate with your target market. We help businesses establish powerful brand presence and manage their reputation across all touchpoints.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
      capabilities: [
        "Brand strategy and positioning frameworks",
        "Visual identity design and brand guidelines",
        "Reputation monitoring and crisis management",
        "Brand storytelling and messaging architecture"
      ],
      results: { awareness: "+200%", sentiment: "92%", recall: "+165%" }
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Creative Content Studio",
      subtitle: "Arabic & English Campaigns",
      description: "Produce engaging content that tells your brand story across cultures. Our bilingual creative studio specializes in culturally-relevant campaigns that connect with UAE and GCC audiences.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop",
      capabilities: [
        "Video production and motion graphics",
        "Photography and visual asset creation",
        "Copywriting in Arabic and English",
        "Social media content calendars and management"
      ],
      results: { videos: "500+", engagement: "+280%", shares: "+340%" }
    },
    {
      icon: <BarChart2 className="w-10 h-10" />,
      title: "MarTech Implementation",
      subtitle: "CRM, Automation, Analytics",
      description: "Transform marketing operations with cutting-edge technology. We implement and optimize marketing automation platforms, CRM systems, and analytics tools for data-driven decision making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      capabilities: [
        "Marketing automation platform setup and optimization",
        "CRM integration and workflow automation",
        "Advanced analytics and attribution modeling",
        "Customer data platform (CDP) implementation"
      ],
      results: { automation: "85%", efficiency: "+190%", insights: "Real-time" }
    }
  ]

  const marketOpportunities = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Creative-Only Focus Gap",
      description: "Most competitors focus on creative execution. We integrate strategy, Martech, and analytics for measurable ROI."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance-Driven",
      description: "Campaigns backed by data science and continuous optimization, not just pretty visuals."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Bilingual Excellence",
      description: "Native-level Arabic and English capabilities for authentic GCC market communication."
    }
  ]

  const achievements = [
    { icon: <Eye />, number: "50M+", label: "Impressions Delivered" },
    { icon: <Heart />, number: "250%", label: "Avg. Engagement Increase" },
    { icon: <Star />, number: "4.8/5", label: "Client Satisfaction" },
    { icon: <Zap />, number: "180+", label: "Campaigns Launched" }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section with Video */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&auto=format&fit=crop"
            alt="Marketing Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2438]/95 via-[#1a3a52]/90 to-[#0d2438]/95"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4a90b8]/20 to-[#6bb3d8]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#4a90b8]/30 mb-6">
                  <Megaphone className="w-5 h-5 text-[#6bb3d8]" />
                  <span className="text-[#6bb3d8] font-semibold">License: Advertising, Web Portals, IT Services</span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Marketing, Branding
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6bb3d8] via-[#4a90b8] to-[#6bb3d8] animate-gradient">
                    & Advertising
                  </span>
                </h1>

                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Transform your brand into a market leader with integrated campaigns that blend creativity, technology, and measurable results.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] hover:from-[#6bb3d8] hover:to-[#4a90b8] text-white rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3">
                    Start Your Campaign
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => setShowVideo(true)} className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    Watch Our Work
                  </button>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop"
                    alt="Creative Campaign"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-2xl font-bold">Award-Winning Campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Achievements Bar */}
      <div className="py-16 bg-gradient-to-r from-[#0d2438] to-[#1a3a52] -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {React.cloneElement(achievement.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6bb3d8] to-white mb-2">
                  {achievement.number}
                </p>
                <p className="text-gray-300 font-medium">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our Service Arsenal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing solutions that drive growth and build lasting brand equity
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeService === index
                    ? 'bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] text-white shadow-xl scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {React.cloneElement(service.icon, { className: "w-5 h-5" })}
                <span className="hidden sm:inline">{service.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Results Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(services[activeService].results).map(([key, value], idx) => (
                      <div key={idx} className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30">
                        <p className="text-white/80 text-xs uppercase mb-1">{key}</p>
                        <p className="text-white text-2xl font-bold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-2xl flex items-center justify-center shadow-lg">
                    {services[activeService].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                      {services[activeService].title}
                    </h3>
                    <p className="text-[#4a90b8] font-semibold text-lg">
                      {services[activeService].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {services[activeService].description}
                </p>

                <h4 className="font-bold text-gray-900 mb-4 text-lg">Core Capabilities:</h4>
                <div className="space-y-3">
                  {services[activeService].capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Opportunity Section with Images */}
      <div className="py-20 bg-gradient-to-br from-[#0d2438] to-[#1a3a52] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6bb3d8] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a90b8] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Market Opportunity
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most competitors focus on creative-only execution. We integrate strategy, MarTech + analytics for measurable ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {marketOpportunities.map((opportunity, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4a90b8] to-[#6bb3d8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{opportunity.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{opportunity.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Showcase Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop"
                alt="Team Collaboration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white text-xl font-bold">Strategic Planning</p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop"
                alt="Creative Studio"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white text-xl font-bold">Creative Excellence</p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white text-xl font-bold">Data-Driven Results</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop"
              alt="Campaign Success"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d2438]/95 to-[#1a3a52]/95"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Launch Your Next Big Campaign?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Get a free campaign strategy session and discover how we can amplify your brand
                </p>
                <button className="px-10 py-4 bg-gradient-to-r from-[#4a90b8] to-[#6bb3d8] hover:from-[#6bb3d8] hover:to-[#4a90b8] text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  Get Free Strategy Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/[0.5] backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-all"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
              <iframe className='w-full h-full' src="https://www.youtube.com/embed/yHGRBTZI6w0" title="The Art of Marketing — for Good | Raja Rajamannar | TED" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default MarketingBrandingAdvertising