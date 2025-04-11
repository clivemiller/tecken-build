import React, { useState, useRef, useEffect, createContext, useContext } from 'react';
import { X, AlertCircle, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Toast Context
const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success', duration = 5000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type, duration }]);
    
    // Auto remove
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, duration);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed bottom-0 right-0 p-4 z-50 flex flex-col items-end space-y-2">
        {toasts.map(toast => (
          <div 
            key={toast.id} 
            className={`flex items-center rounded-lg shadow-lg p-4 pr-12 animate-slideIn relative ${
              toast.type === 'success' ? 'bg-black text-white' : 
              toast.type === 'error' ? 'bg-gray-200 text-black border border-red-500' : 
              'bg-gray-200 text-gray-800 border border-gray-300'
            }`}
            style={{ minWidth: '300px', maxWidth: '450px' }}
          >
            <div className="mr-3">
              {toast.type === 'success' ? (
                <CheckCircle size={20} />
              ) : toast.type === 'error' ? (
                <AlertCircle size={20} className="text-red-500" />
              ) : (
                <AlertCircle size={20} />
              )}
            </div>
            <p className="pr-4">{toast.message}</p>
            <button 
              onClick={() => removeToast(toast.id)}
              className={`absolute top-1 right-1 p-1 ${
                toast.type === 'success' ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
              }`}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// Custom hook to use the toast
const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Email Confirmation Dialog Component
const EmailConfirmationDialog = ({ isOpen, onClose }) => {
  const [animationStage, setAnimationStage] = useState(0);
  
  useEffect(() => {
    if (isOpen) {
      // Reset animation when dialog opens
      setAnimationStage(0);
      
      // Timeline for animation stages
      const timeline = [
        setTimeout(() => setAnimationStage(4), 200), // Success message
      ];
      
      // Cleanup timeouts if dialog closes
      return () => timeline.forEach(timer => clearTimeout(timer));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-gray-200 border border-gray-200 rounded-xl shadow-2xl p-8 max-w-md w-full relative overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X size={24} />
        </button>        
        {/* SUCCESS ANIMATION */}
        <div className={`flex items-center justify-center ${animationStage >= 1 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          <svg className="w-16 h-16 text-green-500 animate-checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </div>
        {/* Success message */}
        <div className={`mt-6 text-center ${animationStage >= 2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          <h2 className="text-2xl font-bold text-gray-900">Email Sent!</h2>
          <p className="text-gray-600 mt-2">Thank you for your message. We will get back to you shortly.</p>
        </div>
        
        {/* Button shown at the end */}
        {animationStage >= 4 && (
          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    projectType: 'Business Signage'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const form = useRef();
  const { addToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_tecken-email', // Get this from EmailJS dashboard
      'template_0jo9omq', // Get this from EmailJS dashboard
      form.current,
      '_-jkNrYaXcZFa1UoT' // PUBLIC_KEY from EmailJS (not secret key)
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          projectType: 'Business Signage'
        });
        
        // Show animated confirmation dialog
        setShowConfirmation(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        // Show error toast instead of alert
        addToast('Sorry, there was an error sending your message. Please try again later.', 'error');
        setIsSubmitting(false);
      });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <section id="contact" className="py-24 bg-gray-200 relative">
      {/* Add the animation styles */}
      <style>
        {`
        @keyframes drawPath {
          0% { stroke-dasharray: 300; stroke-dashoffset: 300; }
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes flyAway {
          0% { transform: translateY(0) scale(1) rotate(0); }
          100% { transform: translateY(-30vh) scale(0.5) rotate(-10deg); }
        }
        
        @keyframes checkmark {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        `}
      </style>
      
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gray-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-9">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-10">
              <div className="flex-auto p-5">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-12 font-light">
                  Ready to discuss your project? Fill out the form, and our team will get back to you within 24 hours to discuss your signage needs.
                </p>
                
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="flex items-start mb-8">
                    <div className="bg-black text-white rounded-full p-3 mr-4">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Our Location</h4>
                      <p className="text-gray-600 font-light">2216 S. Main St. Suite D2<br />Moscow, ID 83843</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-8">
                    <div className="bg-black text-white rounded-full p-3 mr-4">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600 font-light">(208) 997 8230</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-black text-white rounded-full p-3 mr-4">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600 font-light">info@tecken.graphics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-200 w-full mb-6 shadow-xl rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Request a Quote</h3>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="name">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="px-4 py-3 placeholder-gray-400 text-gray-800 bg-gray-50 rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="email">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-4 py-3 placeholder-gray-400 text-gray-800 bg-gray-50 rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="px-4 py-3 placeholder-gray-400 text-gray-800 bg-gray-50 rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="company">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="px-4 py-3 placeholder-gray-400 text-gray-800 bg-gray-50 rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="projectType">
                      Project Type*
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="px-4 py-3 placeholder-gray-400 text-gray-800 bg-gray-50 rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full appearance-none"
                      required
                    >
                      <option value="Business Signage">Business Signage</option>
                      <option value="Vehicle Graphics">Vehicle Graphics</option>
                      <option value="Banners & Displays">Banners & Displays</option>
                      <option value="Info & Safety Signs">Info & Safety Signs</option>
                      <option value="Digital Prints">Digital Prints</option>
                      <option value="Dimensional Letters">Dimensional Letters</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="message">
                      Project Details*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="px-4 py-3 placeholder-gray-400 text-gray-800 bg-gray-50 rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <button
                    className="bg-black text-white active:bg-gray-800 text-sm font-bold uppercase px-8 py-4 rounded-full shadow-lg hover:shadow-gray-300/30 outline-none focus:outline-none mr-1 mb-1 w-full transition-all duration-300 hover:-translate-y-1"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Email confirmation dialog */}
      <EmailConfirmationDialog 
        isOpen={showConfirmation} 
        onClose={closeConfirmation} 
      />
    </section>
  );
};

// Wrap the Contact component with the ToastProvider
const ContactWithToasts = () => (
  <ToastProvider>
    <Contact />
  </ToastProvider>
);

export default ContactWithToasts;