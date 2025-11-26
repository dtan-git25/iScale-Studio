import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin, Loader } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "ai-development",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "ai-development",
          message: ""
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              Get in Touch
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-base sm:text-lg text-gray-700">We'd love to hear from you. Let's discuss how we can help transform your business with AI and automation.</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/8 to-transparent rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-[#2DBFBA]/8 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              </div>

              {[
                {
                  icon: <Mail className="h-6 w-6" />,
                  label: "Email",
                  value: "hello@iscalestudio.com",
                  href: "mailto:hello@iscalestudio.com"
                },
                {
                  icon: <Phone className="h-6 w-6" />,
                  label: "Phone",
                  value: "+63 (2) 1234-5678",
                  href: "tel:+6321234567"
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  label: "Office",
                  value: "Manila, Philippines",
                  href: "#"
                }
              ].map((contact, idx) => (
                <motion.a
                  key={idx}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 p-4 bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md border border-white/60 rounded-xl hover:border-[#9929ea]/40 transition-all group"
                  data-testid={`contact-info-${idx}`}
                >
                  <div className="text-[#9929ea] flex-shrink-0 mt-1">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{contact.label}</p>
                    <p className="font-medium text-gray-900 group-hover:text-[#9929ea] transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <p className="text-sm text-gray-600 mb-4">Follow us on social media</p>
                <div className="flex gap-3">
                  {["LinkedIn", "Twitter", "GitHub"].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="p-3 bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md border border-white/60 rounded-lg hover:border-[#9929ea]/40 hover:text-[#9929ea] transition-all text-gray-700 text-sm font-medium"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-white/95 to-white/60 backdrop-blur-xl border border-white/60 p-6 sm:p-8 rounded-2xl shadow-xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-700">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-lg focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900 placeholder-gray-500"
                        data-testid="input-name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-lg focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900 placeholder-gray-500"
                          data-testid="input-email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+63 9XX-XXX-XXXX"
                          className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-lg focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900 placeholder-gray-500"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                        className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-lg focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900 placeholder-gray-500"
                        data-testid="input-company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Service of Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-lg focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900"
                        data-testid="select-service"
                      >
                        <option value="ai-development">AI Web & App Development</option>
                        <option value="workflow-automation">Workflow Automation</option>
                        <option value="ai-agents">AI Agent Development</option>
                        <option value="ecommerce-solutions">E-commerce Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project and how we can help..."
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-lg focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900 placeholder-gray-500 resize-none"
                        data-testid="textarea-message"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-[#9929ea] to-[#5808fb] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#9929ea]/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      data-testid="button-submit"
                    >
                      {loading ? (
                        <>
                          <Loader className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-600 text-center">
                      We typically respond within 24 hours. You'll receive a confirmation email shortly.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
