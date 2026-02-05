import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import webDevImg from "@assets/generated_images/ai_web_development_dashboard_interface.png";
import { SEOHead, createServiceSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function WebDevelopmentPage() {
  const pageSchema = [
    createServiceSchema(
      "Web Development",
      "Custom web applications powered by AI including React, Next.js dashboards, PWAs, and intelligent search & recommendation systems.",
      "https://iscalestudio.com/services/web-development"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Services", url: "https://iscalestudio.com/services" },
      { name: "Web Development", url: "https://iscalestudio.com/services/web-development" }
    ])
  ];

  const features = [
    "Custom React & Next.js Applications",
    "AI-Powered Dashboards & Analytics",
    "Progressive Web Apps (PWA)",
    "Real-time Data Visualization",
    "Intelligent Search & Recommendation Systems",
    "Full-Stack AI Integration"
  ];

  const benefits = [
    "Faster time-to-market with intelligent automation",
    "Enhanced user experiences with personalization",
    "Reduced operational costs through smart algorithms",
    "Competitive advantage with cutting-edge technology",
    "Seamless integration with existing systems",
    "Scalable architecture for growth"
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Web Development Services Philippines | iScale Studio"
        description="Custom AI-powered web applications with React, Next.js, dashboards, PWAs, and intelligent recommendation systems. Transform your web presence with AI."
        canonical="https://iscalestudio.com/services/web-development"
        schema={pageSchema}
      />
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-[#8629e4] hover:text-[#9929ea] text-sm font-medium mb-4 block">
            ← Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              Web Development
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Build Intelligent Website</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              We create custom web applications infused with Artificial Intelligence. From predictive analytics dashboards to AI-powered recommendation engines, our web solutions combine modern design with intelligent functionality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={webDevImg} alt="Web Development" className="rounded-xl shadow-lg" width="600" height="327" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">What We Deliver</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our web development expertise spans across modern frameworks like React, Next.js, and Node.js. We leverage the latest AI technologies to create web applications that aren't just functional, but intelligent and adaptive.
              </p>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-12 mb-20"
          >
            <h2 className="text-4xl font-bold mb-12">Why Choose Our Web Development?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-[#9929ea] to-[#5808fb]">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured Web Development Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12">Featured Web Development Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌐",
                  title: "Smart Dashboards",
                  description: "AI-powered dashboards with predictive analytics and real-time insights for data-driven decisions",
                  features: ["Live Analytics", "AI Insights", "Real-time Data"]
                },
                {
                  icon: "🎯",
                  title: "Intelligent Recommendations",
                  description: "Smart recommendation engines that learn from user behavior and boost conversions",
                  features: ["Personalization", "Smart Algorithms", "Conversion Boost"]
                },
                {
                  icon: "⚡",
                  title: "High Performance",
                  description: "Lightning-fast web applications optimized with AI-driven caching and intelligent load balancing",
                  features: ["Fast Loading", "Smart Caching", "Optimized"]
                },
                {
                  icon: "🔍",
                  title: "Intelligent Search",
                  description: "Advanced search capabilities with AI understanding natural language queries and context",
                  features: ["NLP Search", "Semantic Search", "Smart Filters"]
                },
                {
                  icon: "📊",
                  title: "Data Visualization",
                  description: "Beautiful, interactive charts and visualizations that make complex data easy to understand",
                  features: ["Charts", "Graphs", "Interactive UI"]
                },
                {
                  icon: "🛡️",
                  title: "Enterprise Security",
                  description: "Built with security-first approach featuring AI-powered threat detection and prevention",
                  features: ["AI Security", "SSL/TLS", "Data Protection"]
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9929ea] group-hover:to-[#5808fb] transition-all">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <Badge key={i} className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-gray-700 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl font-bold">Ready to Build Your Intelligent Web Application?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Let's discuss how AI can transform your web application and help you stay ahead of the competition.
            </p>
            <Link href="/booking">
              <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
