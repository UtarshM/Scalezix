import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, CheckCircle, CreditCard, Package, BarChart3, Users } from 'lucide-react';

const EcommerceSolutions = () => {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Integration",
      description: "Secure payment gateways with multiple payment options"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory Management",
      description: "Real-time inventory tracking and automated stock management"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting for business insights"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Management",
      description: "Advanced customer relationship management tools"
    }
  ];

  const services = [
    "Shopify Store Development",
    "Shopify Plus Enterprise Solutions",
    "Custom E-commerce Platforms",
    "Payment Gateway Integration",
    "Inventory Management Systems",
    "Order Management & Fulfillment",
    "Multi-vendor Marketplace Development",
    "E-commerce Mobile Apps",
    "Third-party Integrations",
    "Performance Optimization",
    "SEO for E-commerce",
    "Ongoing Maintenance & Support"
  ];

  const shopifyFeatures = [
    "Custom Shopify Theme Development",
    "Shopify App Development",
    "Shopify Plus Migration",
    "Multi-store Management",
    "Advanced Checkout Customization",
    "Shopify API Integration",
    "Automated Workflows",
    "International Expansion Setup"
  ];

  const technologies = [
    { name: "Shopify", category: "Platform" },
    { name: "Shopify Plus", category: "Enterprise" },
    { name: "Liquid", category: "Template" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Stripe", category: "Payment" },
    { name: "PayPal", category: "Payment" },
    { name: "Klaviyo", category: "Marketing" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <ShoppingCart className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold">E-commerce Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Shopify & E-commerce <span className="text-blue-600">Development</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build powerful e-commerce stores with Shopify and custom platforms. We create 
                scalable online stores that drive sales and provide exceptional shopping experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
                >
                  Start Your Store
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/portfolio"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 text-center"
                >
                  View Portfolio
                </Link>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-2xl font-bold text-green-600 mb-2">Starting at $3,999</div>
                <p className="text-gray-600">Complete e-commerce solution with Shopify integration</p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="E-commerce Development"
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
              Complete E-commerce Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build and grow a successful online business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <div className="text-blue-600">
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

      {/* Shopify Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Shopify Expertise
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                As certified Shopify partners, we specialize in creating high-converting 
                Shopify stores that scale with your business growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {shopifyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Shopify Plus Partner</h3>
                <p className="text-green-100">
                  Certified to handle enterprise-level Shopify Plus implementations
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Shopify Development"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our E-commerce Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive e-commerce solutions from concept to launch and beyond
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

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              E-commerce Technologies
            </h2>
            <p className="text-xl text-gray-600">
              We use the best e-commerce platforms and tools to build your online store
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's build a high-converting e-commerce store that drives sales and grows your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Store
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

export default EcommerceSolutions;