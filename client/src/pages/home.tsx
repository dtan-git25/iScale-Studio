import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Workflow, Database, Globe, Zap, Check, Calendar, MessageSquare, Briefcase, GitBranch, Rocket, MapPin, Lightbulb, TrendingUp, Handshake, Users, Shield, ChevronLeft, ChevronRight, Server, Cloud, Settings, Layers, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InteractiveHero } from "@/components/hero/interactive-hero";
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

// Tech Stack Component
function TechStack() {
  const technologies = [
    { name: "React", icon: <Code className="h-8 w-8" />, gradient: "from-blue-500 to-cyan-500" },
    { name: "Next.js", icon: <Layers className="h-8 w-8" />, gradient: "from-gray-700 to-gray-900" },
    { name: "Node.js", icon: <Server className="h-8 w-8" />, gradient: "from-green-500 to-emerald-500" },
    { name: "Python", icon: <Code className="h-8 w-8" />, gradient: "from-yellow-500 to-orange-500" },
    { name: "Supabase", icon: <Database className="h-8 w-8" />, gradient: "from-emerald-500 to-teal-500" },
    { name: "PostgreSQL", icon: <Database className="h-8 w-8" />, gradient: "from-blue-600 to-blue-400" },
    { name: "n8n", icon: <Workflow className="h-8 w-8" />, gradient: "from-orange-500 to-red-500" },
    { name: "Zapier", icon: <Zap className="h-8 w-8" />, gradient: "from-orange-400 to-amber-500" },
    { name: "OpenAI", icon: <Cpu className="h-8 w-8" />, gradient: "from-[#8629e4] to-[#5808fb]" },
    { name: "Claude", icon: <Cpu className="h-8 w-8" />, gradient: "from-[#bc09d7] to-[#8629e4]" },
    { name: "Google Gemini", icon: <Cloud className="h-8 w-8" />, gradient: "from-blue-500 to-purple-500" },
    { name: "LangChain", icon: <Settings className="h-8 w-8" />, gradient: "from-[#8629e4] to-[#2DBFBA]" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <motion.div
        animate={{ x: [0, -50, 50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-[#8629e4]/10 to-transparent rounded-full blur-3xl pointer-events-none"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Built With Industry-Leading Tools</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We leverage cutting-edge technologies and platforms to deliver powerful, scalable solutions
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, delay: idx * 0.1, repeat: Infinity }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/40 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center gap-3">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, delay: idx * 0.15, repeat: Infinity }}
                  >
                    {tech.icon}
                  </motion.div>
                  <p className="text-sm font-semibold text-gray-900">{tech.name}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
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
                <Link href="/contact">
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

          {/* Trusted by leading companies */}
          <div className="flex justify-center mt-16">
            <div className="w-full">
              <p className="text-center text-xs text-gray-700 mb-8 uppercase tracking-wide">Trusted by leading companies</p>
              <div className="flex justify-center items-center gap-12 flex-wrap">
                {["Boosterio", "Atomic SEO", "Voley", "IBM Media", "GreenHost"].map((client, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className="flex items-center justify-center"
                  >
                    <span className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">{client}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Hero Section */}
        <InteractiveHero />
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Showcase of Our Projects</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Explore our recent projects showcasing expertise, innovation, and impact across various industries.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              },
              { 
                title: "Customer Support Bot", 
                client: "TechFlow",
                category: "AI Agent",
                desc: "Tier-1 support automation resolving 70% of tickets instantly using RAG on knowledge base.", 
                tags: ["LangChain", "Pinecone", "GPT-4"],
                gradient: "from-purple-500 to-indigo-500",
                image: chatbotImg,
                metrics: [
                  { label: "Instant Resolution", value: "70%" },
                  { label: "CSAT Gain", value: "+42%" }
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

      {/* Reviews Section */}
      <Reviews />

      {/* Technologies Section */}
      <TechStack />

      {/* FAQ Section */}
      <AnimatedFAQ />
    </div>
  );
}
