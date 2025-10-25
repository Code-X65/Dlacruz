import { ChevronDown, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Logo from '../assets/Images/removebgLogo1.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const closeMobileMenu = () => {
  setIsMobileMenuOpen(false);
  setIsDropdownOpen(false);
};
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const services = [
  { name: 'Technology & IT Services', slug: 'technology-it-services' },
  { name: 'Cyber Security Consultation', slug: 'cyber-security-consultation' },
  { name: 'Business Management Consulting', slug: 'business-management-consulting' },
  { name: 'Marketing, Branding & Advertising', slug: 'marketing-branding-advertising' },
  { name: 'Software Innovation', slug: 'software-innovation' },
  { name: 'Digital Marketing', slug: 'digital-marketing' }
]

  return (
    <>
      <div
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
  isScrolled
    ? 'bg-[#1a3a52]/95 backdrop-blur-md shadow-lg py-2'
    : 'bg-[#0d2438]/90 py-2 md:py-4'
}`}
      >
        {/* Animated bottom border */}
        <div
         className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4a90b8] via-[#6bb3d8] to-[#4a90b8] transition-opacity duration-500 ${
  isScrolled ? 'opacity-100' : 'opacity-0'
}`}
        />

        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <h1
              className={`font-bold uppercase text-white transition-all duration-500 ${
                isScrolled ? 'text-2xl md:text-3xl' : 'text-2xl md:text-3xl lg:text-4xl'
              }`}
            >
              <img src={Logo} alt="" className='w-48' />
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex gap-8 font-medium items-center text-gray-300">
              <Link to='/about'>  <li className="hover:text-[#6bb3d8] cursor-pointer transition-all duration-300 hover:scale-105 list-none">
                  About Us
                </li></Link>

                {/* Dropdown Menu */}
                <li
                  className="relative group list-none"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                 <div className="flex items-center gap-1 hover:text-[#6bb3d8] cursor-pointer transition-all duration-300">
                    Our Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Dropdown Content */}
                  <div
                   className={`absolute top-full left-0 mt-2 w-64 bg-[#1a3a52]/95 backdrop-blur-md rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
                      isDropdownOpen
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-2 invisible'
                    }`}
                  >
                    <div className="py-2">
                     {services.map((service, index) => (
  <Link 
    to={`/services/${service.slug}`} 
    key={index}
  >
    <div
      className="px-4 py-3 hover:bg-[#4a90b8]/20 hover:text-[#6bb3d8] cursor-pointer transition-all duration-200 text-gray-300"
      style={{
        animationDelay: `${index * 50}ms`,
        animation: isDropdownOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none',
      }}
    >
      {service.name}
    </div>
  </Link>
))}
                    </div>
                  </div>
                </li>

<Link to='/case-studies'>
  <li className="hover:text-[#6bb3d8] cursor-pointer transition-all duration-300 hover:scale-105 list-none">
    Case Studies
  </li>
</Link>
                <Link to='/careers'>
  <li className="hover:text-[#6bb3d8] cursor-pointer transition-all duration-300 hover:scale-105 list-none">
    Careers
  </li>
</Link>

<Link to='/location'>
  <li className="hover:text-[#6bb3d8] cursor-pointer transition-all duration-300 hover:scale-105 list-none">
    Location
  </li>
</Link>

<Link to='/insights'>
  <li className="hover:text-[#6bb3d8] cursor-pointer transition-all duration-300 hover:scale-105 list-none">
    Insights
  </li>
</Link>
              </nav>

              <div className="bg-[#4a90b8] hover:bg-[#6bb3d8] text-white px-6 py-2.5 rounded-lg cursor-pointer font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4a90b8]/50">
                Subscribe
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-300 hover:text-[#6bb3d8] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              isMobileMenuOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col gap-4 pb-6">
            <Link to='/about' onClick={closeMobileMenu}>
  <div className="text-gray-300 hover:text-[#6bb3d8] cursor-pointer transition-all duration-300 py-2 border-b border-gray-700">
    About Us
  </div>
</Link>

              {/* Mobile Dropdown */}
              <div>
                <div
                  className="flex items-center justify-between text-gray-300 hover:text-[#6bb3d8] cursor-pointer transition-all duration-300 py-2 border-b border-gray-700"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Our Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                 {services.map((service, index) => (
  <Link 
    to={`/services/${service.slug}`} 
    key={index} 
    onClick={closeMobileMenu}
  >
    <div className="pl-4 py-2 text-gray-400 hover:text-[#6bb3d8] cursor-pointer transition-all duration-200">
      {service.name}
    </div>
  </Link>
))}
                </div>
              </div>

    

<Link to='/case-studies' onClick={closeMobileMenu}>
  <div className="text-gray-300 hover:text-[#6bb3d8] cursor-pointer transition-all duration-300 py-2 border-b border-gray-700">
    Case Studies
  </div>
</Link>

<Link to='/careers' onClick={closeMobileMenu}>
  <div className="text-gray-300 hover:text-[#6bb3d8] cursor-pointer transition-all duration-300 py-2 border-b border-gray-700">
    Careers
  </div>
</Link>


<Link to='/location' onClick={closeMobileMenu}>
  <div className="text-gray-300 hover:text-[#6bb3d8] cursor-pointer transition-all duration-300 py-2 border-b border-gray-700">
    Location
  </div>
</Link>


<Link to='/insights' onClick={closeMobileMenu}>
  <div className="text-gray-300 hover:text-[#6bb3d8] cursor-pointer transition-all duration-300 py-2 border-b border-gray-700">
    Insights
  </div>
</Link>

             <div className="bg-[#4a90b8] hover:bg-[#6bb3d8] text-white px-6 py-3 rounded-lg cursor-pointer font-medium transition-all duration-300 text-center mt-2">
                Subscribe
              </div>
            </nav>
          </div>
        </div>
      </div>

   

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;