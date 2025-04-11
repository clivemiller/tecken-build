import React from 'react';

// Import our components
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gray-200 text-gray-800">
      <Header />
      <Hero />
      <Products />
      {/* <Testimonials /> */}
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;