import React from 'react'

const HomeBanner = () => {
  return (
    <>
    <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
            Start your transformation
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Partner with us to build competitive advantage through strategy and technology.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300">
            Get in touch
          </button>
        </div>
      </section>
    </>
  )
}

export default HomeBanner