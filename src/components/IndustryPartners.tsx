import React from 'react';

const IndustryPartners = () => {
  const partners = [
    {
      name: "AWS Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      description: "Amazon Web Services Partner"
    },
    {
      name: "Google Cloud Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      description: "Google Cloud Platform Partner"
    },
    {
      name: "Microsoft Azure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
      description: "Microsoft Azure Partner"
    },
    {
      name: "Shopify Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      description: "Shopify Plus Partner"
    },
    {
      name: "Meta Business",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      description: "Meta Business Partner"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Industry Partners
          </h2>
          <p className="text-lg text-gray-600">
            Trusted partnerships with leading technology companies
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll space-x-16">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[280px]"
              >
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-12 max-w-32 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default IndustryPartners;