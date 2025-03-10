import React from 'react';
import image_truck from './../assets/images/IMG_1859.jpg';
import image_banner from './../assets/images/IMG_1986.jpg';
import image_signage from './../assets/images/IMG_1996.jpg'; 

const Products = () => {
  const productCategories = [
    {
      id: 1,
      title: 'Business Signage',
      description: 'Custom storefront signs, channel letters, monument signs, and more to increase visibility and brand recognition.',
      imageAlt: 'Business Signage Display',
      image: image_truck
    },
    {
      id: 2,
      title: 'Vehicle Graphics',
      description: 'Transform your vehicles into mobile advertisements with partial or full wraps, decals, and magnetic signs.',
      imageAlt: 'Vehicle with Custom Graphics',
      image: image_truck
    },
    {
      id: 3,
      title: 'Banners & Displays',
      description: 'Eye-catching banners, trade show displays, and promotional materials for events and marketing campaigns.',
      imageAlt: 'Trade Show Display Banner',
      image: image_banner
    },
    {
      id: 4,
      title: 'Info & Safety Signs',
      description: 'Compliant Info, wayfinding solutions, and safety signs to meet your needs.',
      imageAlt: 'Info Signage',
      image: image_signage
    },
    {
      id: 5,
      title: 'Digital Prints',
      description: 'High-resolution large format printing for posters, wall graphics, window displays, and more.',
      imageAlt: 'Large Format Digital Printing',
      image: image_truck
    },
    {
      id: 6,
      title: 'Product 6',
      description: '.. .. .. .. ',
      imageAlt: 'Product 6',
      image: image_truck
    },
  ];

  return (
    <section id="products" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTI2MmQiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTYgbC0zIDMgLTMtMy02IDAgMCAwIDAgNiAzIDMgLTMgMyAwIDYgNiAwIDMgLTMgMyAzIDYgMCAwIDAgMCAtNiAtMyAtMyAzIC0zeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-9">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We offer a wide range of custom signs and graphics solutions to meet your business needs.
            Each product is designed and crafted with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((product) => (
            <div 
              key={product.id} 
              className="bg-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-300/30 group hover:-translate-y-2 border border-gray-200"
            >
              <div className="h-64 bg-gray-100 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-500 group-hover:scale-110 transition-transform duration-500">
                  <img alt={product.imgAlt} src={product.image}/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white opacity-70"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 font-light">
                  {product.description}
                </p>
                <a 
                  href="#contact" 
                  className="text-black font-medium hover:text-gray-600 inline-flex items-center transition-all duration-300 group-hover:translate-x-2"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-2" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="inline-block px-10 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-300/30 hover:-translate-y-1"
          >
            Request Custom Design
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;