import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Target, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional results that drive your business forward and create lasting impact."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you to understand and exceed your expectations."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to create solutions that give you a competitive edge."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Every project undergoes rigorous testing and quality assurance to ensure excellence."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "10+ years of experience in technology leadership and business strategy."
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in full-stack development and cloud architecture with 8+ years experience."
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Designer",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Creative designer specializing in UI/UX with a passion for user-centered design."
    },
    {
      name: "Emily Davis",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Digital marketing expert with proven track record in growth and brand building."
    }
  ];

  const achievements = [
    "500+ Successful Projects",
    "98% Client Satisfaction Rate",
    "5+ Years in Business",
    "24/7 Customer Support",
    "Award-Winning Team",
    "Global Client Base"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">ScaleziX</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are a forward-thinking technology company dedicated to helping businesses 
                scale and succeed in the digital landscape. With years of experience and a 
                passion for innovation, we deliver solutions that make a real difference.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of expert developers, designers, and digital strategists work 
                collaboratively to bring your vision to life. We believe in building 
                long-term partnerships with our clients, providing ongoing support and 
                guidance as your business grows.
              </p>
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="ScaleziX Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <div className="text-blue-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of professionals is dedicated to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud of what we've accomplished and the trust our clients place in us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <span className="text-lg font-semibold text-gray-900">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            To empower businesses with innovative technology solutions that drive growth, 
            enhance efficiency, and create meaningful digital experiences. We're committed 
            to being your trusted partner in digital transformation.
          </p>
          <Link 
            to="/services"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;