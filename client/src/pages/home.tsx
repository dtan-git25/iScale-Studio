import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Workflow, Database, Globe, Zap, Check, Calendar, MessageSquare, Briefcase, GitBranch, Rocket, MapPin, Lightbulb, TrendingUp, Handshake, Users, Shield, ChevronLeft, ChevronRight, Server, Cloud, Settings, Layers, ArrowUpRight, Smartphone, Bot, ShoppingCart, Brain, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { PenSquare } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedServices } from "@/components/sections/animated-services";
import { AnimatedProcess } from "@/components/sections/animated-process";
import { AnimatedFeatures } from "@/components/sections/animated-features";
import { Reviews } from "@/components/sections/reviews";
import { AnimatedFAQ } from "@/components/sections/animated-faq";
import { AnimatedAbout } from "@/components/sections/animated-about";
import heroImage from "@assets/generated_images/abstract_ai_neural_network_background.png";
import servicesImage from "@assets/generated_images/abstract_ai_neural_network_visualization.png";
import processImage from "@assets/generated_images/digital_workflow_automation_process.png";
import featuresImage from "@assets/generated_images/tech_expertise_collaboration_network.png";
import portfolioImage from "@assets/generated_images/ai_machine_learning_data_flow.png";
import fintechImg from "@assets/generated_images/fintech_dashboard_project.png";
import ecommerceImg from "@assets/generated_images/e-commerce_platform_project.png";
import marketingImg from "@assets/generated_images/marketing_automation_system.png";
import chatbotImg from "@assets/generated_images/ai_chatbot_application.png";
import realEstateImg from "@assets/generated_images/real_estate_mobile_app.png";
import healthcareImg from "@assets/generated_images/healthcare_management_system.png";
import appDevImg from "@assets/generated_images/ai_mobile_app_development_interface.png";
import webDevImg from "@assets/generated_images/futuristic_web_development_concept.png";

// Tech Stack Component
function TechStack() {
  const technologies = [
    { name: "React", icon: <Code className="h-7 w-7" />, gradient: "from-blue-500 to-cyan-500" },
    { name: "Next.js", icon: <Layers className="h-7 w-7" />, gradient: "from-gray-700 to-gray-900" },
    { name: "Node.js", icon: <Server className="h-7 w-7" />, gradient: "from-green-500 to-emerald-500" },
    { name: "Python", icon: <Code className="h-7 w-7" />, gradient: "from-yellow-500 to-orange-500" },
    { name: "PostgreSQL", icon: <Database className="h-7 w-7" />, gradient: "from-blue-600 to-blue-400" },
    { name: "Supabase", icon: <Database className="h-7 w-7" />, gradient: "from-emerald-500 to-teal-500" },
    { name: "n8n", icon: <Workflow className="h-7 w-7" />, gradient: "from-orange-500 to-red-500" },
    { name: "Zapier", icon: <Zap className="h-7 w-7" />, gradient: "from-orange-400 to-amber-500" },
    { name: "OpenAI", icon: <Cpu className="h-7 w-7" />, gradient: "from-[#8629e4] to-[#5808fb]" },
    { name: "Claude", icon: <Cpu className="h-7 w-7" />, gradient: "from-[#bc09d7] to-[#8629e4]" },
    { name: "Google Gemini", icon: <Cloud className="h-7 w-7" />, gradient: "from-blue-500 to-purple-500" },
    { name: "LangChain", icon: <Settings className="h-7 w-7" />, gradient: "from-[#8629e4] to-[#2DBFBA]" }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-white/95 to-white">
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/8 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-[#2DBFBA]/8 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium mb-4">
              Technology Stack
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Built With Industry-Leading Tools</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We partner with the best technologies available to build robust, scalable, and innovative solutions that power modern businesses.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 group-hover:border-[#8629e4]/40 h-full">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl`}
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 4, delay: idx * 0.1, repeat: Infinity }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech.icon}
                  </motion.div>

                  {/* Name */}
                  <p className="text-sm font-bold text-gray-900 text-center">{tech.name}</p>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-700 mb-6">
            We're constantly exploring and integrating new technologies to stay ahead of the curve.
          </p>
          <Link href="/booking">
            <Button className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
              Discuss Your Tech Stack <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-0 lg:pt-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
                AI-Powered Digital Solutions
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-4">
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#2DBFBA]">AI-Powered</span> Digital Solutions
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Custom AI-powered applications, intelligent workflow automation, and autonomous agents designed for Philippine businesses to scale faster and operate smarter.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/booking">
                  <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-gray-300 hover:bg-gray-50">
                    View Our Solutions
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Client Testimonials */}
          <div className="mt-16">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    quote: "iScale transformed our business operations with an intelligent automation system that reduced manual tasks by 80%. Their team was professional and delivered on time.",
                    author: "Maria Santos",
                    role: "Operations Director"
                  },
                  {
                    quote: "The AI-powered web platform they built increased our customer engagement by 150%. Highly recommended for any business looking to scale with technology.",
                    author: "Rafael Reyes",
                    role: "Founder & CEO"
                  },
                  {
                    quote: "Outstanding service and exceptional technical expertise. They built a custom ML model that improved our predictive accuracy by 65%. Definitely the best choice for AI solutions.",
                    author: "Anna Mercado",
                    role: "Tech Lead"
                  }
                ].map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border border-white/40 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-[#8629e4] text-xs">{testimonial.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* AI Web Development Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#8629e4]"></span>
                Build intelligent web applications
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">AI Web Development</h2>
              <p className="text-base md:text-lg text-gray-700 mb-8">
                We create custom web applications infused with Artificial Intelligence. From predictive analytics dashboards to AI-powered recommendation engines, our web solutions combine modern design with intelligent functionality.
              </p>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-6">
                <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">KEY FEATURES</h3>
                <ul className="space-y-4">
                  {[
                    "Custom React & Next.js Applications",
                    "AI-Powered Dashboards & Analytics",
                    "Progressive Web Apps (PWA)",
                    "Real-time Data Visualization",
                    "Intelligent Search & Recommendation Systems"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#8629e4] flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/services/ai-web-development">
                  <Button variant="outline" className="rounded-full px-6 h-11 border-gray-300 hover:bg-gray-50">
                    Full Details →
                  </Button>
                </Link>
                <Link href="/booking">
                  <Button className="btn-gradient border-0 rounded-full px-6 h-11 shadow-lg shadow-[#9929ea]/40">
                    Book a Call
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img src={webDevImg} alt="AI Web Development" className="rounded-xl shadow-lg w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "ai-web-development",
                title: "AI Web Development",
                subtitle: "Build intelligent web applications",
                shortDesc: "Custom web applications powered by cutting-edge AI technology.",
                icon: Globe,
                gradient: "from-cyan-500 to-blue-500",
                href: "/services/ai-web-development"
              },
              {
                id: "ai-app-development",
                title: "AI App Development",
                subtitle: "Build intelligent mobile apps",
                shortDesc: "Custom mobile apps powered by cutting-edge AI technology.",
                icon: Smartphone,
                gradient: "from-blue-500 to-indigo-500",
                href: "/services/ai-app-development"
              },
              {
                id: "workflow-automation",
                title: "Workflow Automation",
                subtitle: "Eliminate manual tasks",
                shortDesc: "Enterprise-grade automation workflows that connect your tools and run on autopilot.",
                icon: Zap,
                gradient: "from-purple-500 to-pink-500",
                href: "/services/workflow-automation"
              },
              {
                id: "ai-agents",
                title: "AI Agent Development",
                subtitle: "Deploy digital workforce",
                shortDesc: "Autonomous AI agents that handle complex inquiries and multi-step business logic.",
                icon: Bot,
                gradient: "from-pink-500 to-rose-500",
                href: "/services/ai-agents"
              },
              {
                id: "ecommerce-solutions",
                title: "E-commerce Solutions",
                subtitle: "Elevate your online store",
                shortDesc: "Powerful e-commerce platforms with integrated AI features to drive sales.",
                icon: ShoppingCart,
                gradient: "from-emerald-500 to-teal-500",
                href: "/services/ecommerce-solutions"
              },
              {
                id: "ai-ml-development",
                title: "Custom AI/ML Models",
                subtitle: "Build proprietary ML models",
                shortDesc: "Custom machine learning models tailored to your specific data and business needs.",
                icon: Brain,
                gradient: "from-orange-500 to-yellow-500",
                href: "/services/ai-ml-development"
              }
            ].map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link href={service.href}>
                  <a className="block h-full">
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col"
                    >
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-xs text-[#8629e4] font-medium mb-4 uppercase tracking-wide">{service.subtitle}</p>
                      <p className="text-gray-700 text-sm flex-grow leading-relaxed">{service.shortDesc}</p>
                    </motion.div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedAbout />

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="absolute top-32 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium mb-4">
                Our Process
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Proven Approach</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                A structured methodology designed to deliver exceptional results while ensuring transparency and continuous collaboration.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Discovery & Planning", desc: "Understanding your needs and crafting a strategic roadmap." },
              { num: "02", title: "Strategy & Development", desc: "Building your AI-powered solution with best practices." },
              { num: "03", title: "Testing & Refinement", desc: "Ensuring excellence in every detail." },
              { num: "04", title: "Launch & Support", desc: "Going live and ongoing optimization and support." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="group relative"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, delay: idx * 0.12, repeat: Infinity }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full"
                >
                  <div className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                    {/* Animated Step Number Background */}
                    <motion.div
                      className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#9929ea]/10 to-[#5808fb]/10 rounded-full blur-2xl group-hover:from-[#9929ea]/20 group-hover:to-[#5808fb]/20 transition-all"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity }}
                    />

                    {/* Step Number */}
                    <div className="relative z-10 mb-4">
                      <motion.div
                        className="inline-block"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, delay: idx * 0.15, repeat: Infinity }}
                      >
                        <span className="text-4xl font-bold bg-gradient-to-r from-[#9929ea] to-[#5808fb] bg-clip-text text-transparent">
                          {step.num}
                        </span>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-700 leading-relaxed relative z-10 flex-grow">
                      {step.desc}
                    </p>

                    {/* Connector Line (hidden on last) */}
                    {idx < 4 && (
                      <motion.div
                        className="hidden lg:block absolute bottom-1/2 -right-6 w-12 h-1 bg-gradient-to-r from-[#9929ea]/40 to-transparent"
                        animate={{ scaleX: [0, 1] }}
                        transition={{ delay: idx * 0.1 + 0.5, duration: 0.8 }}
                      />
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 17, repeat: Infinity }}
          className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium mb-4">
                Our Work
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Showcase of Our Projects</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Explore our recent projects showcasing expertise, innovation, and impact across various industries.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "E-Commerce AI Assistant", 
                client: "StyleVogue",
                category: "AI Agent",
                desc: "AI-powered shopping assistant using computer vision to recommend products based on user preferences.", 
                tags: ["OpenAI", "React", "Computer Vision"],
                gradient: "from-pink-500 to-rose-500",
                image: ecommerceImg,
                metrics: [
                  { label: "AOV Increase", value: "+35%" },
                  { label: "Accuracy", value: "94%" }
                ]
              },
              { 
                title: "Logistics Automation Pipeline", 
                client: "GlobalShip Inc.",
                category: "Workflow Automation",
                desc: "Automated order processing reducing manual data entry by 95%. Integrates Shopify, SAP, and shipping APIs.", 
                tags: ["n8n", "PostgreSQL", "SAP"],
                gradient: "from-blue-500 to-cyan-500",
                image: marketingImg,
                metrics: [
                  { label: "Time Saved", value: "2000h/yr" },
                  { label: "Error Rate", value: "-99.2%" }
                ]
              },
              { 
                title: "FinTech Dashboard", 
                client: "NovaFinance",
                category: "Web Development",
                desc: "Real-time financial analytics platform with predictive forecasting powered by machine learning.", 
                tags: ["Next.js", "FastAPI", "AWS"],
                gradient: "from-emerald-500 to-teal-500",
                image: fintechImg,
                metrics: [
                  { label: "Transactions/Day", value: "500K+" },
                  { label: "Latency", value: "<100ms" }
                ]
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md border border-white/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-overlay`}></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-900 border-white/60 backdrop-blur-sm font-medium text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-sm font-medium text-[#8629e4] mb-1">{project.client}</p>
                        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="h-5 w-5 text-[#8629e4]" />
                      </motion.div>
                    </div>

                    <p className="text-sm text-gray-700 mb-4 leading-relaxed flex-grow">
                      {project.desc}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-white/40 rounded-lg">
                      {project.metrics.map((metric, i) => (
                        <div key={i}>
                          <p className="text-xs text-gray-600 mb-0.5">{metric.label}</p>
                          <p className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#2DBFBA]">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-gradient-to-r from-[#9929ea]/10 to-[#5808fb]/10 border border-[#9929ea]/30 text-gray-700 hover:from-[#9929ea]/20 hover:to-[#5808fb]/20 transition-all text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link href="/portfolio">
              <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 17, repeat: Infinity }}
          className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium mb-4">
                Case Studies
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Real Results From Real Projects</h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Explore how we've helped businesses transform operations and achieve measurable growth with AI and automation.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "E-Commerce Platform with AI Recommendation Engine",
                result: "+45% Revenue",
                industry: "E-Commerce",
                link: "/case-study-1",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                title: "Healthcare Data Analytics System",
                result: "35% Better Outcomes",
                industry: "Healthcare",
                link: "/case-study-3",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                title: "Financial Services Automation Platform",
                result: "80% Automation",
                industry: "FinTech",
                link: "/case-study-2",
                gradient: "from-blue-500 to-cyan-500"
              }
            ].map((study, idx) => (
              <Link key={idx} href={study.link}>
                <motion.a
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group block cursor-pointer h-full"
                  data-testid={`homepage-case-study-${idx}`}
                >
                  <div className="h-full bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                    <div className={`h-1 w-16 bg-gradient-to-r ${study.gradient} rounded-full mb-4`}></div>
                    
                    <Badge className={`bg-gradient-to-r ${study.gradient} text-white border-0 w-fit mb-3`}>
                      {study.industry}
                    </Badge>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9929ea] group-hover:to-[#5808fb] transition-all line-clamp-2 flex-grow">
                      {study.title}
                    </h3>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-white/20">
                      <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">
                        {study.result}
                      </span>
                      <ArrowRight className="h-5 w-5 text-[#9929ea] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/case-studies">
              <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Blog Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 17, repeat: Infinity }}
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium mb-4">
                Latest Insights
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Industry Insights & Resources</h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Stay updated with our latest articles on AI, automation, and the future of technology.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "The Rise of Autonomous AI Agents in Business",
                excerpt: "How companies are moving beyond simple chatbots to fully autonomous agents that can execute complex tasks.",
                date: "Oct 24, 2023",
                category: "AI Trends",
                link: "/blog-post-1",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                title: "Building Your First AI Workflow: A Step-by-Step Guide",
                excerpt: "Learn how to create intelligent automation workflows without writing code. We walk through real examples.",
                date: "Nov 8, 2024",
                category: "Tutorial",
                link: "/blog-post-5",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                title: "The Future of E-Commerce: AI-Powered Personalization at Scale",
                excerpt: "Explore how AI recommendation engines are driving revenue growth and transforming online shopping.",
                date: "Oct 30, 2024",
                category: "AI Trends",
                link: "/blog-post-6",
                gradient: "from-red-500 to-pink-500"
              }
            ].map((post, idx) => (
              <Link key={idx} href={post.link}>
                <motion.a
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group block cursor-pointer h-full"
                  data-testid={`homepage-blog-card-${idx}`}
                >
                  <div className="h-full bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                    <div className={`h-1 w-16 bg-gradient-to-r ${post.gradient} rounded-full mb-4`}></div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={`bg-gradient-to-r ${post.gradient} text-white border-0 text-xs`}>{post.category}</Badge>
                      <span className="text-xs text-gray-600">{post.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9929ea] group-hover:to-[#5808fb] transition-all line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb] font-medium group-hover:translate-x-2 transition-transform text-sm">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </motion.a>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/blog">
              <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                Read All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <TechStack />

      {/* FAQ Section */}
      <AnimatedFAQ />
    </div>
  );
}
