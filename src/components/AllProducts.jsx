import React from 'react';
import image_truck from './../assets/images/IMG_1859.jpg';
import image_design from './../assets/images/IMG_3663.jpg';
import image_banner from './../assets/images/IMG_1986.jpg';
import image_signage from './../assets/images/IMG_1996.jpg';

// Previous products (copied from Products.jsx)
const previousProducts = [
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
    title: 'Vehicle Wraps',
    description: 'Our licensed installers can wrap your vehicle with custom graphics to promote your brand.',
    imageAlt: 'Vehicle Wrap',
    image: image_truck
  },
  {
    id: 6,
    title: 'Graphic and Website Design',
    description: 'Let our design team create a unique logo, website, or marketing materials for your business with unlimited reiterations until satifaction.',
    imageAlt: 'design',
    image: image_design
  },
];

// Additional products array
const additionalProducts = [
  {
    id: 101,
    title: 'Varied Vinyl Materials for all applications',
    description: 'Different materials for indoor, out door, windows, vehicles, long term, short term, and more.',
  },
  {
    id: 102,
    title: 'Magentic Solutions',
    description: 'Flexible magnetic solutions for any purpose.',
  },
  {
    id: 103,
    title: 'Adhesive Fabrics',
    description: 'Fantastic adhesive fabrics for wall graphics, displays, and more.',
  },
  {
    id: 104,
    title: 'Banners',
    description: 'High-quality banners for any event.',
  },
  {
    id: 105,
    title: 'Special type vinyls',
    description: 'Dry Erase, reflective, and more',
  },
  {
    id: 106,
    title: 'Other Material options',
    description: 'Foam board, corrugated plastic, pvc, backlit, and aluminium.',
  },
  {
    id: 107,
    title: 'Custom Products',
    description: 'Cards, stickers, labels, resturant menus, and other paper products. ',
  }
  // Add more as needed
];

const AllProducts = () => (
  <section className="py-24 bg-gray-50 min-h-screen">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 text-center">All Products</h2>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Main Product Categories</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {previousProducts.map(product => (
          <div key={product.id} className="bg-gray-200 rounded-xl overflow-hidden border border-gray-200">
            <div className="h-64 bg-gray-100 flex items-center justify-center">
              <img alt={product.imageAlt} src={product.image} className="object-cover h-full w-full" />
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h4>
              <p className="text-gray-600 mb-4 font-light">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Other Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {additionalProducts.map(product => (
          <div key={product.id} className="bg-gray-100 rounded-xl p-8 border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h4>
            <p className="text-gray-600 font-light">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AllProducts;
