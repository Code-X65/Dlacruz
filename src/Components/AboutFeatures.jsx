import React from 'react'

const AboutFeatures = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Who we are */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-20">
          <img 
            src="https://www.affilityconsulting.com/wp-content/uploads/2024/08/affility-business-strategy.jpg" 
            className="flex-1 w-full lg:max-w-2xl h-80 object-cover rounded-lg shadow-lg" 
            alt="Business strategy" 
          />
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Who we are</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our firm is designed to operate as one. A single global partnership united by a strong set of values. We are equally committed to both sides of our mission: attracting and developing a talented and diverse group of colleagues and helping our clients create meaningful and lasting change.
            </p>
          </div>
        </div>

        {/* How we work */}
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center mb-20">
          <img 
            src="https://www.affilityconsulting.com/wp-content/uploads/2024/08/affility-business-strategy.jpg" 
            className="flex-1 w-full lg:max-w-2xl h-80 object-cover rounded-lg shadow-lg" 
            alt="How we work" 
          />
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">How we work</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our firm is designed to operate as one. A single global partnership united by a strong set of values. We are equally committed to both sides of our mission: attracting and developing a talented and diverse group of colleagues and helping our clients create meaningful and lasting change.
            </p>
          </div>
        </div>

        {/* Our Commitments */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <img 
            src="https://www.affilityconsulting.com/wp-content/uploads/2024/08/affility-business-strategy.jpg" 
            className="flex-1 w-full lg:max-w-2xl h-80 object-cover rounded-lg shadow-lg" 
            alt="Our commitment" 
          />
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Commitment</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our firm is designed to operate as one. A single global partnership united by a strong set of values. We are equally committed to both sides of our mission: attracting and developing a talented and diverse group of colleagues and helping our clients create meaningful and lasting change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFeatures