import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import scalezixLogo from '../assets/Screenshot_2025-07-06_at_11.40.08_AM-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'E-commerce Solutions', path: '/services/ecommerce-solutions' },
        { name: 'Cloud Services', path: '/services/cloud-services' },
        { name: 'AI Consulting', path: '/services/ai-consulting' },
        { name: 'AI Development', path: '/services/ai-development' },
        { name: 'Digital Marketing', path: '/services/digital-marketing' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/src/assets/Screenshot_2025-07-06_at_11.40.08_AM-removebg-preview.png" 
              alt="ScaleziX" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`font-medium transition-colors duration-200 flex items-center gap-1 ${
                        location.pathname === item.path || location.pathname.startsWith('/services/')
                          ? 'text-blue-600' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            to={dropdownItem.path}
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors duration-200 ${
                      location.pathname === item.path 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 font-medium transition-colors duration-200 ${
                    location.pathname === item.path 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-4">
                    {item.dropdownItems?.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <Link 
                to="/contact"
                className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
