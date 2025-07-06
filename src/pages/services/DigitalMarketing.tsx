import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, CheckCircle, TrendingUp, Users, Target, Mail } from 'lucide-react';

const DigitalMarketing = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Improve search rankings and organic traffic"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "PPC Campaigns",
      description: "Targeted advertising campaigns for maximum ROI"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Engage audiences across all social platforms"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Marketing",
      description: "Automated email campaigns and nurture sequences"
    }
  ];

  const services = [
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click (PPC) Advertising",
    "Social Media Marketing",
    "Content Marketing Strategy",
    "Email Marketing Automation",
    "Conversion Rate Optimization",
    "Google Analytics Setup",
    "Social Media Management",
    "Influencer Marketing",
    "Online Reputation Management",
    "Marketing Automation",
    "Performance Tracking & Reporting"
  ];

  const platforms = [
    { name: "Google Ads", category: "PPC" },
    { name: "Facebook Ads", category: "Social" },
    { name: "Instagram Ads", category: "Social" },
    { name: "LinkedIn Ads", category: "B2B" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "SEMrush", category: "SEO" },
    { name: "Mailchimp", category: "Email" },
    { name: "HubSpot", category: "CRM" }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$1,499",
      features: [
        "SEO Audit & Optimization",
        "Google My Business Setup",
        "Basic Social Media Management",
        "Monthly Performance Reports"
      ]
    },
    {
      name: "Growth",
      price: "$2,999",
      features: [
        "Everything in Starter",
        "PPC Campaign Management",
        "Content Marketing Strategy",
        "Email Marketing Setup",
        "Advanced Analytics"
      ]
    },
    {
      name: "Enterprise",
      price: "$4,999",
      features: [
        "Everything in Growth",
        "Multi-platform Campaigns",
        "Marketing Automation",
        "Dedicated Account Manager",
        "Custom Reporting Dashboard"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Search className="w-8 h-8 text-green-600" />
                </div>
                <span className="text-green-600 font-semibold">Digital Marketing</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Digital Marketing <span className="text-green-600">Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Boost your online presence and drive conversions with comprehensive digital marketing strategies. 
                From SEO to social media marketing, we help you reach your target audience effectively.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
                >
                  Start Marketing
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/portfolio"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 text-center"
                >
                  View Results
                </Link>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-2xl font-bold text-green-600 mb-2">Starting at $1,499</div>
                <p className="text-gray-600">Comprehensive digital marketing package</p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Digital Marketing"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing solutions to grow your online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <div className="text-green-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Marketing Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect package for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                index === 1 ? 'bg-green-600 text-white' : 'bg-white border border-gray-100'
              }`}>
                <h3 className={`text-2xl font-bold mb-4 ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-4xl font-bold mb-6 ${index === 1 ? 'text-white' : 'text-green-600'}`}>
                  {pkg.price}
                  <span className={`text-lg font-normal ${index === 1 ? 'text-green-100' : 'text-gray-500'}`}>
                    /month
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                        index === 1 ? 'text-green-200' : 'text-green-500'
                      }`} />
                      <span className={index === 1 ? 'text-green-100' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors duration-200 ${
                    index === 1 
                      ? 'bg-white text-green-600 hover:bg-gray-100' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Marketing Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to succeed in digital marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Marketing Platforms We Use
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading tools and platforms for maximum results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{platform.name}</h3>
                <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  {platform.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Let's create a digital marketing strategy that drives traffic, generates leads, and increases sales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start Marketing
            </Link>
            <Link 
              to="/services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;