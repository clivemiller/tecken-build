import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import our components
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';

function App() {
  return (
    <Router>
      <div className="App bg-gray-200 text-gray-800">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Products />
              <Pricing />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/all-products" element={<>
            <Header />
            <AllProducts />
            <Footer />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;