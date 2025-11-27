import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@assets/iScale_Studio_V_1764045233039.png";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/iscalestudio/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/iscalestudio/", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/iscalestudio/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/iscalestudio/", label: "Instagram" }
  ];

  return (
    <>
      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <div className="bg-gradient-to-r from-[#9929ea]/10 via-[#5808fb]/10 to-[#2DBFBA]/10 border border-white/40 rounded-2xl p-8 md:p-12 text-center backdrop-blur-xl">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">Ready to Transform Your Business?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Let's discuss how AI and automation can help you scale faster and operate smarter.
              </p>
              <Link href="/booking">
                <a className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#9929ea] to-[#5808fb] text-white font-bold hover:shadow-lg hover:shadow-[#9929ea]/40 transition-all hover:scale-105">
                  Schedule a Consultation <ArrowRight className="h-4 w-4" />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white pt-20 pb-12">
        {/* Animated Background Elements */}
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/8 to-transparent rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-[#2DBFBA]/8 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/95 to-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-2xl hover:border-[#8629e4]/40 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                <Link href="/">
                  <a className="flex items-center mb-6 group-hover:scale-105 transition-transform">
                    <img src={logo} alt="iScale Studio" className="h-10 w-auto" />
                  </a>
                </Link>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Empowering businesses with cutting-edge AI solutions, intelligent workflow automation, and custom software development.
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9929ea]/10 to-[#5808fb]/10 border border-[#9929ea]/30 flex items-center justify-center text-[#8629e4] hover:from-[#9929ea] hover:to-[#5808fb] hover:text-white hover:border-[#9929ea] transition-all"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/95 to-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-2xl hover:border-[#8629e4]/40 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                <h3 className="font-display font-bold text-lg text-gray-900 mb-1">Services</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-[#9929ea] to-[#5808fb] rounded-full mb-6"></div>
                <ul className="space-y-3">
                  {[
                    { label: "AI Web & App", href: "/services" },
                    { label: "Workflow Automation", href: "/services" },
                    { label: "AI Agents", href: "/services" },
                    { label: "E-commerce Solutions", href: "/services" },
                    { label: "Custom AI/ML Models", href: "/services/ai-ml-development" }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href}>
                        <a className="text-gray-700 text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#9929ea] hover:to-[#5808fb] transition-all flex items-center gap-2 group/link">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#9929ea] to-[#5808fb] group-hover/link:scale-150 transition-transform"></span>
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/95 to-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-2xl hover:border-[#8629e4]/40 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                <h3 className="font-display font-bold text-lg text-gray-900 mb-1">Company</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-[#2DBFBA] to-[#5808fb] rounded-full mb-6"></div>
                <ul className="space-y-3">
                  {[
                    { label: "About Us", href: "/about" },
                    { label: "Services", href: "/services" },
                    { label: "Portfolio", href: "/portfolio" },
                    { label: "Case Studies", href: "/case-studies" },
                    { label: "Blog", href: "/blog" }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href}>
                        <a className="text-gray-700 text-sm hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#2DBFBA] hover:to-[#8629e4] transition-all flex items-center gap-2 group/link">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2DBFBA] to-[#5808fb] group-hover/link:scale-150 transition-transform"></span>
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/95 to-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-2xl hover:border-[#8629e4]/40 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                <h3 className="font-display font-bold text-lg text-gray-900 mb-1">Contact</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-[#8629e4] rounded-full mb-6"></div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#8629e4] shrink-0 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Capas, Tarlac<br />Philippines 2315</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#8629e4] shrink-0 flex-shrink-0" />
                    <a href="mailto:hello@iscalestudio.com" className="text-gray-700 text-sm hover:text-[#8629e4] transition-colors">hello@iscalestudio.com</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#8629e4] shrink-0 flex-shrink-0" />
                    <a href="tel:+639560623082" className="text-gray-700 text-sm hover:text-[#8629e4] transition-colors">+63 956 0623 082</a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-700">
            <p>&copy; {new Date().getFullYear()} iScale Studio. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy">
                <a className="hover:text-[#8629e4] transition-colors">Privacy Policy</a>
              </Link>
              <Link href="/terms-of-service">
                <a className="hover:text-[#8629e4] transition-colors">Terms of Service</a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
