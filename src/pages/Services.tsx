import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  ShoppingCart,
  Cloud,
  Brain,
  Cpu,
  Search,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom web applications and websites built with cutting-edge technologies for optimal performance and user experience.",
      features: [
        "Custom Web Applications",
        "Responsive Design", 
        "Performance Optimization",
        "SEO Ready",
        "Secure & Scalable",
        "Modern Frameworks"
      ],
      technologies: ["React", "Node.js", "Next.js", "TypeScript", "MongoDB", "PostgreSQL"],
      startingPrice: "$2,999",
      link: "/services/web-development"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with Shopify integration, payment processing, and inventory management.",
      features: [
        "Shopify Development",
        "Custom E-commerce Platforms",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking",
        "Multi-vendor Support"
      ],
      technologies: ["Shopify", "Shopify Plus", "WooCommerce", "Stripe", "PayPal", "Square"],
      startingPrice: "$3,999",
      link: "/services/ecommerce-solutions"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Services",
      description: "AWS cloud solutions including migration, infrastructure setup, and ongoing management for scalable applications.",
      features: [
        "AWS Cloud Migration",
        "Infrastructure Setup",
        "DevOps Implementation",
        "Auto-scaling Solutions",
        "Monitoring & Logging",
        "Security Implementation"
      ],
      technologies: ["AWS", "EC2", "S3", "RDS", "Lambda", "CloudFormation"],
      startingPrice: "$2,499",
      link: "/services/cloud-services"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Consulting",
      description: "Strategic AI consulting to help businesses identify opportunities and implement AI solutions effectively.",
      features: [
        "AI Strategy Development",
        "Use Case Identification",
        "Technology Assessment",
        "Implementation Roadmap",
        "ROI Analysis",
        "Change Management"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "AWS AI", "Google AI"],
      startingPrice: "$1,999",
      link: "/services/ai-consulting"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "AI Development",
      description: "Custom AI solutions including machine learning models, chatbots, and intelligent automation systems.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Chatbot Development",
        "Predictive Analytics",
        "AI Integration"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Langchain", "Vector Databases"],
      startingPrice: "$4,999",
      link: "/services/ai-development"
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive conversions.",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "PPC Campaigns",
        "Content Strategy",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "Mailchimp", "HubSpot"],
      startingPrice: "$1,499",
      link: "/services/digital-marketing"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our design team creates wireframes and prototypes to visualize the solution before development begins."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers build your solution using best practices while our QA team ensures quality and performance."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support, maintenance, and optimization services."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We offer comprehensive technology solutions to help your business thrive in the digital world. 
            From web development to AI solutions, we've got you covered.
          </p>
          <Link 
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center gap-2"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-100 p-4 rounded-2xl flex-shrink-0">
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Starting at</div>
                        <div className="text-xl font-bold text-blue-600">{service.startingPrice}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link 
                        to={service.link}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link 
                        to="/contact"
                        className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a custom solution that drives results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link 
              to="/portfolio"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;