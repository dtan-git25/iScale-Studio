import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader, Zap, Clock, Users, CheckCircle2, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-white via-white to-gray-50/50">
      {/* Animated Background */}
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/5 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="fixed bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-[#2DBFBA]/5 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-[#9929ea]/10 to-[#2DBFBA]/10 border border-[#9929ea]/30 backdrop-blur-sm">
              <Badge className="bg-transparent border-0 text-[#8629e4] font-medium">Let's Connect</Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Ready to Transform <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#2DBFBA]">
                Your Business?
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Join hundreds of companies leveraging AI-powered solutions to streamline operations and drive growth. Let's explore how we can help you succeed.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {[
              { icon: <Clock className="h-6 w-6" />, label: "Quick Response", desc: "Reply within 24 hours" },
              { icon: <Users className="h-6 w-6" />, label: "Expert Team", desc: "Experienced professionals" },
              { icon: <Zap className="h-6 w-6" />, label: "Fast Implementation", desc: "Rapid project start" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white/60 rounded-xl p-6 text-center hover:border-[#9929ea]/40 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#9929ea] to-[#5808fb] rounded-lg flex items-center justify-center text-white mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#9929ea]/40 transition-all">
                  {stat.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Get in Touch</h2>
                <p className="text-gray-700">Multiple ways to reach us. Choose what works best for you.</p>
              </div>

              {/* Contact Cards */}
              {[
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email",
                  value: "hello@iscalestudio.com",
                  desc: "For general inquiries",
                  href: "mailto:hello@iscalestudio.com",
                  gradient: "from-pink-500 to-rose-500",
                  bgGradient: "from-pink-500/10 to-rose-500/10"
                },
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: "Phone",
                  value: "+63 (2) 1234-5678",
                  desc: "Mon-Fri, 9 AM - 6 PM",
                  href: "tel:+6321234567",
                  gradient: "from-blue-500 to-cyan-500",
                  bgGradient: "from-blue-500/10 to-cyan-500/10"
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: "Office",
                  value: "Manila, Philippines",
                  desc: "Southeast Asia HQ",
                  href: "#",
                  gradient: "from-purple-500 to-violet-500",
                  bgGradient: "from-purple-500/10 to-violet-500/10"
                }
              ].map((contact, idx) => (
                <motion.a
                  key={idx}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-6 hover:border-[#9929ea]/40 transition-all"
                  data-testid={`contact-method-${idx}`}
                >
                  <div className={`flex items-start gap-4`}>
                    <div className={`w-14 h-14 bg-gradient-to-br ${contact.bgGradient} rounded-xl flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-[#9929ea]/30 transition-all flex-shrink-0`}>
                      <div className={`text-transparent bg-clip-text bg-gradient-to-r ${contact.gradient}`}>
                        {contact.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900 mb-1">{contact.title}</h3>
                      <p className="font-medium text-[#9929ea] mb-1 group-hover:text-[#7a1fbf] transition-colors">{contact.value}</p>
                      <p className="text-sm text-gray-600">{contact.desc}</p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-10 pt-8 border-t border-gray-200"
              >
                <p className="text-sm font-medium text-gray-900 mb-4">Follow our journey</p>
                <div className="flex gap-3 flex-wrap">
                  {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/60 rounded-lg hover:border-[#9929ea]/40 hover:text-[#9929ea] transition-all text-gray-700 text-sm font-medium group hover:shadow-lg"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-white/95 to-white/60 backdrop-blur-xl border border-white/60 p-8 rounded-2xl shadow-xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-700 mb-6">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                    <p className="text-sm text-gray-600">Typically within 24 hours. Check your email for updates.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-900">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900 placeholder-gray-400 font-medium"
                        data-testid="input-name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-900">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900 placeholder-gray-400 font-medium"
                          data-testid="input-email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-900">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+63 9XX-XXX-XXXX"
                          className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900 placeholder-gray-400 font-medium"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-900">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                        className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900 placeholder-gray-400 font-medium"
                        data-testid="input-company"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-900">What brings you here? *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900 font-medium"
                        data-testid="select-service"
                      >
                        <option value="ai-development">AI Web & App Development</option>
                        <option value="workflow-automation">Workflow Automation</option>
                        <option value="ai-agents">AI Agent Development</option>
                        <option value="ecommerce-solutions">E-commerce Solutions</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-900">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project. What are you trying to achieve? What are your main challenges?"
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:border-[#9929ea]/40 focus:ring-2 focus:ring-[#9929ea]/20 transition-all text-gray-900 placeholder-gray-400 font-medium resize-none"
                        data-testid="textarea-message"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-[#9929ea] to-[#5808fb] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#9929ea]/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
                      data-testid="button-submit"
                    >
                      {loading ? (
                        <>
                          <Loader className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-600 text-center">
                      📧 We'll respond within 24 hours. Check your email for updates.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#9929ea]/10 to-[#2DBFBA]/10 border border-[#9929ea]/30 backdrop-blur-md rounded-2xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Not sure where to start?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Schedule a free 30-minute consultation with our team. We'll discuss your challenges and explore how AI can transform your business.
            </p>
            <Link href="/booking">
              <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
