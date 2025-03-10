import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Tecken completely transformed our storefront with their custom signage. The quality and attention to detail exceeded our expectations. We've received countless compliments from customers!",
      name: "<person name>",
      title: "<buisness title>",
      imageAlt: "<person photo>"
    },
    {
      id: 2,
      quote: "The vehicle wraps Tecken designed for our delivery fleet have dramatically increased our brand visibility. We've seen a measurable increase in business since rolling them out.",
      name: "<person name>",
      title: "<buisness title>",
      imageAlt: "<person photo>"
    },
    {
      id: 3,
      quote: "We needed signage for our new medical office, and Tecken delivered exactly what we needed. Professional, high-quality, and installed on time.",
      name: "<person name>",
      title: "<buisness title>",
      imageAlt: "<person photo>"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-200 text-gray-800 relative overflow-hidden">
      {/* Abstract floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-gray-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-16 left-1/3 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-9">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Don't just take our word for it. Here's what businesses like yours have to say about working with Tecken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-200 backdrop-blur-sm rounded-xl p-10 shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:-translate-y-2">
              <div>
                <svg className="h-10 w-10 text-gray-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 mb-8 font-light leading-relaxed italic">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-gray-200 border border-gray-300 flex-shrink-0 mr-4">
                  {/* Replace with actual client photos */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                    <span>{testimonial.imageAlt}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-12 text-gray-900">Our Work Speaks for Itself</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Replace with actual project images */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-64 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 overflow-hidden group">
                <div className="relative w-full h-full">
                  <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:scale-110 transition-transform duration-700">
                    <span>Project Image {item}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                    <div className="p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-gray-900 font-bold">Project Title</h4>
                      <p className="text-gray-600 text-sm">Project Category</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a 
            href="#contact" 
            className="inline-block px-10 py-4 mt-12 bg-transparent border border-black text-gray-900 font-medium rounded-full bg-white hover:bg-gray-300 hover:text-black transition-all duration-300 hover:-translate-y-1"
          >
            See More of Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;