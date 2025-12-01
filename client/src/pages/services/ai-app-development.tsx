import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import webDevImg from "@assets/generated_images/ai_app_development_dashboard_interface.png";
import { SEOHead, createServiceSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function AIAppDevelopmentPage() {
  const pageSchema = [
    createServiceSchema(
      "AI App Development",
      "Native and cross-platform mobile app development with AI-powered features, computer vision, and intelligent assistants.",
      "https://iscalestudio.com/services/ai-app-development"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Services", url: "https://iscalestudio.com/services" },
      { name: "AI App Development", url: "https://iscalestudio.com/services/ai-app-development" }
    ])
  ];

  const features = [
    "Native Mobile App Development (iOS & Android)",
    "Cross-Platform Applications with React Native",
    "AI-Powered Mobile Assistants",
    "Offline-First AI Processing",
    "Computer Vision & Image Recognition Apps",
    "Enterprise Mobile Solutions"
  ];

  const benefits = [
    "Faster time-to-market with intelligent automation",
    "Enhanced user experiences with personalization",
    "Reduced operational costs through smart algorithms",
    "Competitive advantage with cutting-edge technology",
    "Seamless integration with existing systems",
    "Optimized performance for mobile devices"
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="AI App Development | Mobile & Desktop Apps Philippines | iScale Studio"
        description="Custom AI-powered mobile and desktop applications with React Native, computer vision, intelligent assistants, and offline AI processing."
        canonical="https://iscalestudio.com/services/ai-app-development"
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
              AI App Development
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Build Intelligent Mobile Apps</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              We create custom mobile and desktop applications infused with Artificial Intelligence. From AI-powered assistants to intelligent data processing, our apps deliver powerful functionality right in your users' hands.
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
              <img src={webDevImg} alt="AI App Development" className="rounded-xl shadow-lg" width="600" height="327" />
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
                Our AI app development expertise spans across native iOS/Android development and cross-platform frameworks. We leverage the latest AI technologies to create mobile applications that are intelligent, responsive, and user-friendly.
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
            <h2 className="text-4xl font-bold mb-12">Why Choose Our AI App Development?</h2>
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
            <h2 className="text-4xl font-bold mb-12">Featured App Development Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📱",
                  title: "Native Mobile Apps",
                  description: "iOS and Android native apps with seamless AI integration and offline capabilities",
                  features: ["iOS/Android", "Native Performance", "Offline Mode"]
                },
                {
                  icon: "🤖",
                  title: "AI Assistants",
                  description: "Intelligent mobile assistants that understand context and provide personalized guidance",
                  features: ["NLP Integration", "Personalization", "Smart Learning"]
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  description: "Optimized performance with AI-driven caching and intelligent resource management",
                  features: ["Fast Loading", "Smart Caching", "Optimized"]
                },
                {
                  icon: "📸",
                  title: "Computer Vision",
                  description: "Advanced image recognition and processing capabilities built into your app",
                  features: ["Image Recognition", "OCR", "Real-time Processing"]
                },
                {
                  icon: "🔒",
                  title: "Secure & Scalable",
                  description: "Enterprise-grade security with AI-powered threat detection and auto-scaling",
                  features: ["AI Security", "Auto-Scaling", "Encryption"]
                },
                {
                  icon: "📊",
                  title: "Smart Analytics",
                  description: "Built-in monitoring and AI-driven insights that track user behavior and app performance",
                  features: ["User Analytics", "Performance Tracking", "Insights"]
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
