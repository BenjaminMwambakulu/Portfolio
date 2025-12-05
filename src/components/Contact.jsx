import React, { useEffect, useState } from "react";
// Firestore imports
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase"; // existing Firestore config
import { importImage } from "../Essentials/getImages";
import { motion } from "motion/react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  // Firestore state for contact section
  const [contactInfo, setContactInfo] = useState(null);
  const [loadingContact, setLoadingContact] = useState(true);
  const [contactError, setContactError] = useState(null);

  useEffect(() => {
    const fetchContactSection = async () => {
      try {
        // Read contact section from Firestore: sectionData/contactSection
        const contactRef = doc(db, "sectionData", "contactSection");
        const contactSnap = await getDoc(contactRef);

        if (contactSnap.exists()) {
          const data = contactSnap.data();
          setContactInfo({
            heading: data.heading || "Let's Work Together",
            subheading:
              data.subheading ||
              "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!",
            email: data.email || "",
            phone: data.phone || "",
            location: data.location || "",
            website: data.website || "",
            github: data.github || "",
            linkedin: data.linkedin || "",
            twitter: data.twitter || "",
            whatsapp: data.whatsapp || "",
            availability: data.availability || "Available where needed",
          });
        } else {
          // Fallback if contactSection doc does not exist
          setContactInfo({
            heading: "Let's Work Together",
            subheading:
              "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!",
            email: "",
            phone: "",
            location: "",
            website: "",
            github: "",
            linkedin: "",
            twitter: "",
            whatsapp: "",
            availability: "Available where needed",
          });
        }
      } catch (err) {
        console.error("Error fetching contact section from Firestore:", err);
        setContactError("Unable to load contact information.");
        setContactInfo({
          heading: "Let's Work Together",
          subheading:
            "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!",
          email: "",
          phone: "",
          location: "",
          website: "",
          github: "",
          linkedin: "",
          twitter: "",
          whatsapp: "",
          availability: "Available where needed",
        });
      } finally {
        setLoadingContact(false);
      }
    };

    fetchContactSection();
  }, []);

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
    setSubmitStatus(null);
    setSubmitMessage("");

    // Get EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if all credentials are provided
    if (!serviceId || !templateId || !publicKey) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setSubmitMessage("EmailJS configuration is missing. Please check your environment variables.");
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 5000);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "mwambakulubenjamin2o5@gmail.com",
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setSubmitMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 5000);

    } catch (error) {
      console.error('EmailJS error:', error);
      setIsSubmitting(false);
      setSubmitStatus("error");
      setSubmitMessage("Failed to send message. Please try again or contact me directly via email.");

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 5000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-10 left-4 sm:left-10 lg:left-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.div
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-15"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-500 rounded-full blur-2xl opacity-25 absolute top-4 left-4"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-4 sm:right-6 lg:right-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.div
            className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.25, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/4 sm:right-1/3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <motion.div
            className="w-22 h-22 sm:w-30 sm:h-30 lg:w-36 lg:h-36 bg-gradient-to-r from-indigo-500 to-blue-800 rounded-full blur-3xl opacity-10"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Circuit Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </motion.div>

        {/* Scanning Effect */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute top-1/3"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute top-2/3"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-4 sm:mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {/* Firestore-powered heading */}
            {loadingContact
              ? "Loading contact section..."
              : contactInfo?.heading || "Let's Work Together"}
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {/* Firestore-powered subheading */}
            {loadingContact
              ? "Please wait while contact details load."
              : contactInfo?.subheading ||
                "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!"}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div>
              <motion.h3
                className="text-xl sm:text-2xl font-mono font-bold mb-4 sm:mb-6 text-white text-center lg:text-left"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Get In Touch
              </motion.h3>

              {/* Contact Details */}
              <div className="space-y-4">
                {[
                  {
                    icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    label: "Email",
                    value: contactInfo?.email || "",
                    href: contactInfo?.email
                      ? `mailto:${contactInfo.email}`
                      : null,
                  },
                  {
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                    label: "Phone",
                    value: contactInfo?.phone || "",
                    href: contactInfo?.phone
                      ? `tel:${contactInfo.phone}`
                      : null,
                  },
                  {
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                    label: "Location",
                    value: contactInfo?.location || "",
                    href: null,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    whileHover={{
                      scale: 1.02,
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      boxShadow: "0 4px 20px rgba(59, 130, 246, 0.1)"
                    }}
                  >
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {item.label}
                      </p>
                      {item.href ? (
                        <motion.a
                          href={item.href}
                          className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base break-all"
                          whileHover={{ x: 5 }}
                        >
                          {item.value || "Not provided yet"}
                        </motion.a>
                      ) : (
                        <p className="text-white text-sm sm:text-base">
                          {item.value || "Not provided yet"}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.h4
                className="text-base sm:text-lg font-mono font-semibold mb-3 sm:mb-4 text-white text-center lg:text-left"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Connect With Me
              </motion.h4>
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                {/* Firestore-powered social links (GitHub, LinkedIn, Twitter, Website, WhatsApp) */}
                {[
                  contactInfo?.github && {
                    name: "GitHub",
                    url: contactInfo.github,
                    icon: "github.png",
                  },
                  contactInfo?.linkedin && {
                    name: "LinkedIn",
                    url: contactInfo.linkedin,
                    icon: "linkedin.png",
                  },
                  contactInfo?.twitter && {
                    name: "Twitter",
                    url: contactInfo.twitter,
                    icon: "twitter.png",
                  },
                  contactInfo?.website && {
                    name: "Website",
                    url: contactInfo.website,
                    icon: "supabase.png",
                  },
                  contactInfo?.whatsapp && {
                    name: "WhatsApp",
                    url: contactInfo.whatsapp,
                    icon: "facebook.png",
                  },
                ]
                  .filter(Boolean)
                  .map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700/50 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all group"
                    initial={{ opacity: 0, scale: 0, rotate: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + index * 0.05,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      scale: 1.2,
                      y: -5,
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.img
                      src={importImage(social.icon)}
                      alt={social.name}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-blue-400 text-xs font-bold hidden">
                      {social.name.charAt(0)}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              className="p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(34, 197, 94, 0.5)",
                boxShadow: "0 4px 20px rgba(34, 197, 94, 0.1)"
              }}
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <p className="text-green-400 font-semibold text-sm sm:text-base">
                  {contactInfo?.availability || "Available where needed"}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{
              borderColor: "rgba(59, 130, 246, 0.5)",
              boxShadow: "0 8px 32px rgba(59, 130, 246, 0.1)"
            }}
          >
            {/* Form Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 rounded-2xl"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.h3
              className="relative text-xl sm:text-2xl font-mono font-bold mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text text-center lg:text-left"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Send Me a Message
            </motion.h3>

            <form onSubmit={handleSubmit} className="relative space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-blue-300 mb-2 group-focus-within:text-cyan-300 transition-colors">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 hover:border-gray-500 transition-all text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-blue-300 mb-2 group-focus-within:text-cyan-300 transition-colors">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 hover:border-gray-500 transition-all text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-blue-300 mb-2 group-focus-within:text-cyan-300 transition-colors">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 hover:border-gray-500 transition-all text-sm sm:text-base"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-blue-300 mb-2 group-focus-within:text-cyan-300 transition-colors">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 hover:border-gray-500 transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-blue-500/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
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
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>

              {submitStatus && (
                <motion.div
                  className={`p-3 sm:p-4 rounded-lg border ${submitStatus === "success"
                    ? "bg-green-500/10 border-green-500/30"
                    : "bg-red-500/10 border-red-500/30"
                    }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={`text-center font-semibold text-sm sm:text-base ${submitStatus === "success" ? "text-green-400" : "text-red-400"
                    }`}>
                    {submitMessage}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Optional non-intrusive error text within existing layout */}
        {contactError && !loadingContact && (
          <p className="mt-4 text-center text-sm text-red-400">
            {contactError}
          </p>
        )}
      </div>
    </motion.section>
  );
}

export default Contact;