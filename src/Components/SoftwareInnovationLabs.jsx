import React, { useState } from 'react'
import { Sparkles, ArrowRight, X, Code2, Brain, Database, Microscope, Rocket, Star } from 'lucide-react'

const SoftwareInnovationLabs = () => {
  const [selectedLab, setSelectedLab] = useState(null)
  const [showContactModal, setShowContactModal] = useState(false)

  const innovations = [
    {
      title: "Proprietary SaaS Development & Software Publishing",
      description: "Build groundbreaking SaaS products from concept to market. Our full-stack development expertise combined with go-to-market strategies ensures your software reaches its full potential.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop",
      detailImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
      capabilities: [
        "Cloud-native SaaS architecture design",
        "Multi-tenant platform development",
        "API-first development approach",
        "Software licensing and distribution",
        "Product market fit validation",
        "Go-to-market strategy and execution"
      ],
      badge: "Product Innovation"
    },
    {
      title: "AI Pilots: Chatbots, Predictive Analytics, RAG Systems",
      description: "Deploy production-ready AI solutions that transform operations. From intelligent chatbots to advanced predictive models and Retrieval-Augmented Generation systems.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      detailImage: "https://images.unsplash.com/photo-1676911809746-7f4ca4f7b901?w=800&auto=format&fit=crop",
      capabilities: [
        "Custom AI chatbot development (GPT, Claude, Gemini)",
        "Predictive analytics and forecasting models",
        "RAG systems for enterprise knowledge bases",
        "Computer vision and NLP solutions",
        "AI model fine-tuning and optimization",
        "MLOps and model deployment pipelines"
      ],
      badge: "AI & Machine Learning"
    },
    {
      title: "Data Analytics & Decision Intelligence Platforms",
      description: "Turn data into competitive advantage with intelligent platforms that provide real-time insights and drive strategic decisions across your organization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      detailImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      capabilities: [
        "Business intelligence dashboard development",
        "Real-time data pipeline architecture",
        "Advanced analytics and data science",
        "Decision support systems",
        "Data warehouse and lake design",
        "Automated reporting and insights"
      ],
      badge: "Data Intelligence"
    },
    {
      title: "Research & Development Partnerships",
      description: "Collaborate with our innovation lab to explore cutting-edge technologies and bring ambitious ideas to life through structured R&D programs.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop",
      detailImage: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&auto=format&fit=crop",
      capabilities: [
        "Technology proof-of-concept development",
        "Innovation workshops and ideation",
        "Academic and industry collaboration",
        "Patent and IP strategy support",
        "Emerging technology exploration",
        "Innovation roadmap development"
      ],
      badge: "R&D Excellence"
    }
  ]

  const labStats = [
    { number: "50+", label: "AI Models Deployed" },
    { number: "25+", label: "SaaS Products Built" },
    { number: "99.9%", label: "System Uptime" },
    { number: "15+", label: "Patents Filed" }
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section with Full Background Image */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&auto=format&fit=crop"
            alt="Innovation Lab"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/50 to-black"></div>
        </div>

        {/* Animated Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-purple-500/30 mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Innosphere Labs</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Software & </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                  Innovation
                </span>
              </h1>

              <div className="text-sm text-gray-400 mb-8 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Computer Programming</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Software Publishing</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">IT Services</span>
              </div>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Where cutting-edge AI meets enterprise software. We build intelligent systems that push the boundaries of what's possible.
              </p>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => setShowContactModal(true)} className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-xl font-bold transition-all duration-300 shadow-2xl shadow-purple-500/50 hover:shadow-cyan-500/50 hover:scale-105 flex items-center gap-3">
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:bg-white/10 rounded-xl font-bold transition-all duration-300">
                  Explore Our Labs
                </button>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-6">
              <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
                  50+
                </div>
                <div className="text-gray-300 font-semibold mb-2">AI Models Deployed</div>
                <div className="text-sm text-gray-500">Production-ready solutions</div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    25+
                  </div>
                  <div className="text-gray-300 text-sm font-semibold">SaaS Products</div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-300 text-sm font-semibold">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Stats Bar */}
      <div className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {labStats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-5xl font-bold mb-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {stat.number}
                  </span>
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Innovation Labs Grid */}
      <div className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 px-6 py-3 rounded-full border border-purple-500/20">
                <Star className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-semibold">Innovation Labs</span>
              </div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end innovation from AI pilots to production-grade SaaS platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                onClick={() => setSelectedLab(innovation)}
                className="group relative cursor-pointer"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={innovation.image}
                      alt={innovation.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                  
                  <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 rounded-full text-sm font-bold">
                      {innovation.badge}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {innovation.description}
                    </p>
                    <div className="flex items-center gap-3 text-cyan-400 font-semibold group-hover:gap-5 transition-all">
                      Explore Lab <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Opportunity Section with Images */}
      <div className="py-32 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6">
                <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 px-6 py-3 rounded-full border border-purple-500/20">
                  <Rocket className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold">Market Opportunity</span>
                </div>
              </div>

              <h2 className="text-5xl font-bold mb-8 text-white leading-tight">
                Filling the AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Readiness Gap</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                UAE organizations are eager to experiment with AI but lack safe rollout frameworks—a gap Innosphere fills with AI-readiness packages.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Safe AI Rollout</h4>
                    <p className="text-gray-400">Structured frameworks for experimenting with AI without business risk</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Pilot-to-Production</h4>
                    <p className="text-gray-400">Proven methodologies to take AI pilots from concept to enterprise scale</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Enterprise Integration</h4>
                    <p className="text-gray-400">Seamless integration with existing systems and workflows</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">R&D Partnerships</h4>
                    <p className="text-gray-400">Collaborative innovation programs with academic and industry leaders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop"
                  alt="AI Development"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-2xl font-bold">AI Innovation</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop"
                    alt="Software Development"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold">SaaS Platforms</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&auto=format&fit=crop"
                    alt="Data Analytics"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold">Data Intelligence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Background */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1600&auto=format&fit=crop"
            alt="Innovation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-black/90 to-cyan-900/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Future?</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Join leading organizations leveraging AI and innovation to transform their industries
          </p>
          <button onClick={() => setShowContactModal(true)} className="px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-purple-500/50 hover:shadow-cyan-500/50 hover:scale-105">
            Schedule Innovation Workshop
          </button>
        </div>
      </div>

      {/* Lab Detail Modal */}
      {selectedLab && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 overflow-y-auto">
          <div className="min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <button
                onClick={() => setSelectedLab(null)}
                className="mb-6 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all ml-auto"
              >
                <X className="w-7 h-7 text-white" />
              </button>

              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={selectedLab.detailImage}
                    alt={selectedLab.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute top-8 left-8">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 rounded-full font-bold">
                      {selectedLab.badge}
                    </div>
                  </div>
                </div>

                <div className="p-12">
                  <h2 className="text-4xl font-bold text-white mb-6">{selectedLab.title}</h2>
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed">{selectedLab.description}</p>

                  <h3 className="text-2xl font-bold text-white mb-6">Core Capabilities</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-10">
                    {selectedLab.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{capability}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={() => setShowContactModal(true)} className="px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-xl font-bold transition-all duration-300 shadow-xl hover:scale-105">
                    Start This Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-white/20 rounded-3xl max-w-md w-full p-8 shadow-2xl relative">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <h3 className="text-3xl font-bold text-white mb-2">Let's Innovate Together</h3>
            <p className="text-gray-400 mb-8">Tell us about your project and we'll get back to you within 24 hours</p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 focus:border-purple-500 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 focus:border-purple-500 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 focus:border-purple-500 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Tell us about your innovation needs..."
                rows="4"
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 focus:border-purple-500 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-xl">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SoftwareInnovationLabs