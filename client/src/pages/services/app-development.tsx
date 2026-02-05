import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import webDevImg from "@assets/generated_images/ai_app_development_dashboard_interface.png";
import { SEOHead, createServiceSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function AppDevelopmentPage() {
  const pageSchema = [
    createServiceSchema(
      "App Development",
      "Custom web application development with AI-powered features, intelligent dashboards, and seamless user experiences.",
      "https://iscalestudio.com/services/app-development"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Services", url: "https://iscalestudio.com/services" },
      { name: "App Development", url: "https://iscalestudio.com/services/app-development" }
    ])
  ];

  const features = [
    "Custom Web Application Development",
    "Intelligent Dashboards & Internal Tools",
    "AI-Powered Search & Data Processing",
    "Cloud-Native Scalable Solutions",
    "Progressive Web Apps (PWA) with AI Features",
    "Native iOS & Android Mobile Apps"
  ];

  const benefits = [
    "Tailored solutions built for your specific business logic",
    "High-performance web apps that scale with your growth",
    "Enhanced data insights through custom AI modules",
    "Seamless integration with your existing workflow",
    "Modern, responsive designs optimized for all devices",
    "Reduced development time with modular architecture"
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="App Development | Custom Web Apps Philippines | iScale Studio"
        description="Custom AI-powered web applications and internal tools. We build intelligent, scalable web solutions tailored to your business needs, with mobile support."
        canonical="https://iscalestudio.com/services/app-development"
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
              App Development
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Build Custom Web Applications</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              We specialize in building custom, high-performance web applications tailored to your business needs. From intelligent internal tools to customer-facing platforms, we deliver scalable solutions that drive growth.
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
              <img src={webDevImg} alt="Custom Web App Development" className="rounded-xl shadow-lg" width="600" height="327" />
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
                Our expertise is focused on creating sophisticated web applications that solve complex business challenges. We also provide native iOS and Android development for businesses that need a dedicated mobile presence.
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
            <h2 className="text-4xl font-bold mb-12">Why Choose Our App Development?</h2>
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

          {/* Featured App Development Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12">Featured Development Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "💻",
                  title: "Custom Web Apps",
                  description: "Full-stack web applications built with modern frameworks for maximum speed and reliability",
                  features: ["React/Next.js", "Scalable Backend", "Custom Logic"]
                },
                {
                  icon: "📊",
                  title: "Intelligent Dashboards",
                  description: "Data-driven interfaces that provide real-time insights and business intelligence",
                  features: ["Real-time Data", "Custom Charts", "AI Insights"]
                },
                {
                  icon: "🌐",
                  title: "Cloud-Native",
                  description: "Optimized for the cloud with auto-scaling and high availability built-in",
                  features: ["Serverless", "Edge Computing", "Scalable"]
                },
                {
                  icon: "📱",
                  title: "Mobile Ready",
                  description: "iOS and Android apps developed to complement your web presence",
                  features: ["React Native", "Cross-Platform", "App Store Ready"]
                },
                {
                  icon: "🔒",
                  title: "Secure & Compliant",
                  description: "Enterprise-grade security and data protection for your business data",
                  features: ["Encrypted", "Auth Systems", "Access Control"]
                },
                {
                  icon: "⚙️",
                  title: "Internal Tools",
                  description: "Custom software built to automate your internal operations and boost productivity",
                  features: ["Admin Panels", "Workflows", "Automation"]
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
                        <Badge key={i} className="bg-gradient-to-r from-[#9929ea]/10 to-[#5808fb]/10 border border-[#9929ea]/30 text-gray-700 hover:from-[#9929ea]/20 hover:to-[#5808fb]/20 transition-all text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
