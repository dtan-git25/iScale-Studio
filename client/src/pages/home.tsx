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
import { CalendlyBooking } from "@/components/sections/calendly-booking";
import { Reviews } from "@/components/sections/reviews";
import { AnimatedFAQ } from "@/components/sections/animated-faq";
import { AnimatedAbout } from "@/components/sections/animated-about";
import { HeroServices } from "@/components/sections/hero-services";
import heroImage from "@assets/generated_images/abstract_ai_neural_network_background.png";
import servicesImage from "@assets/generated_images/abstract_ai_neural_network_visualization.png";
import processImage from "@assets/generated_images/digital_workflow_automation_process.png";
import featuresImage from "@assets/generated_images/tech_expertise_collaboration_network.png";
import portfolioImage from "@assets/generated_images/ai_machine_learning_data_flow.png";

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
            <p className="text-sm font-semibold text-[#9929ea] uppercase tracking-widest mb-4">Technology Stack</p>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Built With Industry-Leading Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Abstract AI Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#8629e4]/10 border border-[#8629e4]/30 text-[#8629e4] text-sm font-mono">
                AI-Powered Digital Solutions
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-4">
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#2DBFBA]">AI-Powered</span> Digital Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
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
        </div>

        {/* Interactive Hero Section */}
        <InteractiveHero />
      </section>

      {/* Quick Services Below Hero */}
      <HeroServices />

      {/* About Section */}
      <AnimatedAbout />

      {/* Process Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A structured approach to deliver world-class solutions.
              </p>
            </motion.div>
          </div>

          <AnimatedProcess />

          <div className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Discovery & Consultation", desc: "Understanding your needs, goals, and technical environment." },
              { num: "02", title: "Strategy & Planning", desc: "Crafting the perfect solution approach for your business." },
              { num: "03", title: "Development", desc: "Building your AI-powered solution with best practices." },
              { num: "04", title: "Testing & Refinement", desc: "Ensuring excellence in every detail." },
              { num: "05", title: "Launch & Support", desc: "Going live and ongoing optimization." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="glass-panel p-6 rounded-xl h-full">
                  <div className="text-4xl font-display font-bold [#8629e4]/20 mb-3">{step.num}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Our Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Recent projects showcasing our expertise and impact.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "E-Commerce AI Assistant", 
                client: "StyleVogue",
                category: "AI Agent",
                desc: "AI-powered shopping assistant using computer vision to recommend products based on user preferences and uploaded photos.", 
                tags: ["OpenAI", "React", "Computer Vision"],
                color: "from-pink-500 to-rose-500"
              },
              { 
                title: "Logistics Automation Pipeline", 
                client: "GlobalShip Inc.",
                category: "Workflow Automation",
                desc: "Automated order processing system reducing manual data entry by 95%. Integrates Shopify, SAP, and custom shipping APIs.", 
                tags: ["n8n", "PostgreSQL", "SAP"],
                color: "from-blue-500 to-cyan-500"
              },
              { 
                title: "FinTech Dashboard", 
                client: "NovaFinance",
                category: "Web Development",
                desc: "Real-time financial analytics platform with predictive forecasting powered by machine learning models.", 
                tags: ["Next.js", "FastAPI", "AWS"],
                color: "from-emerald-500 to-teal-500"
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card hover:border-white/20 transition-colors"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="p-8 relative -mt-12">
                  <div className="bg-background border border-white/10 rounded-xl p-6 shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{project.client}</p>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
                          <ArrowUpRight className="h-5 w-5" />
                        </Button>
                      </motion.div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 border-white/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-[#8629e4] text-[#8629e4] hover:bg-[#8629e4]/5">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Technologies Section */}
      <TechStack />

      {/* FAQ Section */}
      <AnimatedFAQ />

      {/* Calendly Booking Section */}
      <CalendlyBooking />
    </div>
  );
}
