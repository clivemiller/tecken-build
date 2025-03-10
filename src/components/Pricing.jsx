import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const services = [
    {
      id: 1,
      title: 'Design Services',
      description: 'Our experienced design team will bring your vision to life with custom graphics and signage concepts.',
      features: [
        'Initial consultation and needs assessment',
        'Custom design concepts',
        'Digital mockups and proofs',
        'Unlimited revisions until approval',
        'Print-ready file preparation'
      ],
      isPopular: false,
      cta: 'Schedule Consultation'
    },
    {
      id: 2,
      title: 'Full-Service Solutions',
      description: 'From concept to installation, we handle every aspect of your signage project with precision and care.',
      features: [
        'All Design Services features',
        'Premium materials selection',
        'Fabrication and production',
        'Professional installation',
        'Permit acquisition assistance',
        'Ongoing maintenance available'
      ],
      isPopular: true,
      cta: 'Get a Complete Quote'
    },
    {
      id: 3,
      title: 'Express Production',
      description: 'Need signs fast? Our express service delivers quality signage on an accelerated timeline.',
      features: [
        'Rapid design process',
        'Expedited production',
        'Quick-turn options available',
        'Rush installation scheduling',
        'Same quality guarantees'
      ],
      isPopular: false,
      cta: 'Request Rush Quote'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-9">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We offer comprehensive signage solutions tailored to your specific needs.
            Choose the service package that works best for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`bg-gray-200 rounded-xl overflow-hidden relative border border-gray-200 transition-all duration-500 hover:-translate-y-2 ${
                service.isPopular ? 'ring-2 ring-black transform md:-translate-y-4 shadow-xl' : 'shadow-lg'
              }`}
            >
              {service.isPopular && (
                <div className="bg-black text-white py-1 px-6 absolute top-0 right-0 rounded-bl-xl text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 font-light">{service.description}</p>
                <div className="space-y-4 mb-10">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href="#contact" 
                  className={`w-full block text-center py-4 px-6 rounded-full font-medium transition-all duration-300 ${
                    service.isPopular 
                      ? 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-gray-300/20' 
                      : 'bg-gray-200 text-gray-800 border border-gray-300 hover:bg-gray-100 hover:text-black'
                  }`}
                >
                  {service.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-200 rounded-xl shadow-2xl p-10 max-w-4xl mx-auto border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Quote</h3>
          <p className="text-gray-600 mb-8 font-light">
            Have a unique project in mind? We provide custom quotes tailored to your specific requirements.
            Contact us with details about your project for a personalized estimate.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-black text-white py-4 px-10 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-300/20 hover:-translate-y-1"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;