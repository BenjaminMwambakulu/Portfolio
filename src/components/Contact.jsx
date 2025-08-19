import React, { useState } from "react";
import { contactInfo } from "../Essentials/content";
import { importImage } from "../Essentials/getImages";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="filter blur-3xl opacity-20">
          <div className="bg-blue-400 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full absolute top-10 left-4 sm:left-10 lg:left-20 animate-pulse"></div>
          <div className="bg-blue-600 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full absolute bottom-20 right-4 sm:right-6 lg:right-10 animate-bounce"></div>
          <div className="bg-blue-800 w-22 h-22 sm:w-30 sm:h-30 lg:w-36 lg:h-36 rounded-full absolute top-1/2 right-1/4 sm:right-1/3"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-4 sm:mb-6 text-white">
            {contactInfo.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {contactInfo.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-mono font-bold mb-4 sm:mb-6 text-white text-center lg:text-left">
                Get In Touch
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                    <p className="text-white text-sm sm:text-base">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-mono font-semibold mb-3 sm:mb-4 text-white text-center lg:text-left">
                Connect With Me
              </h4>
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                {contactInfo.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700/50 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all group"
                  >
                    <img
                      src={importImage(social.icon)}
                      alt={social.name}
                      className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-blue-400 text-xs font-bold hidden">
                      {social.name.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-green-400 font-semibold text-sm sm:text-base">{contactInfo.availability}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/50">
            <h3 className="text-xl sm:text-2xl font-mono font-bold mb-4 sm:mb-6 text-white text-center lg:text-left">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm sm:text-base"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-center font-semibold text-sm sm:text-base">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;