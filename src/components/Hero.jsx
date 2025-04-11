import React from 'react';
import image_employee from './../assets/images/IMG_3670.jpg'; 

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-40 bg-gray-200 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gray-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-9">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Custom Signage Solutions for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
              From storefront signs to vehicle graphics, we provide high-quality custom signage that helps your business stand out.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-black text-white rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-300/30 hover:-translate-y-1">
                Get Started
              </a>
              <a href="#products" className="px-8 py-4 bg-transparent border border-gray-900 text-gray-900 rounded-full text-base font-medium bg-white hover:bg-gray-300 transition-all duration-300 hover:-translate-y-1">
                Our Products
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="relative">
              {/* Hero image placeholder - replace with actual image */}
              <div className="bg-gray-100 rounded-2xl h-96 w-full overflow-hidden shadow-xl">
                <div className="h-full w-full flex items-center justify-center text-gray-500">
                  <img src={image_employee} alt={"Hero Employee"} className="m-4 relative top-16" />
                </div>
                
                {/* Floating elements for visual interest */}
                <div className="absolute top-16 -left-8 h-20 w-28 bg-black rounded-xl flex items-center justify-center shadow-lg transform -rotate-6">
                  <span className="text-white font-bold text-lg ml-3">Fast</span>
                  <span className="text-white text-sm ml-1 mr-2">production</span>
                </div>
                
                <div className="absolute bottom-16 -right-8 h-24 w-40 bg-black rounded-xl flex items-center justify-center shadow-lg transform rotate-6">
                  <div className="text-center">
                    <span className="text-white font-bold text-lg ml-3">Excellent</span>
                    <span className="text-white text-lg ml-1 mr-2">print quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted brands section
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider">Trusted by local brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Replace with actual client logos */}
            {/* {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-10 w-24 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
                Client Logo {item}
              </div>
            ))} */}
          {/* </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;