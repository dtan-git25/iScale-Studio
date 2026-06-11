import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import fintechImg from "@assets/optimized_images/fintech_dashboard_project.webp";
import ecommerceImg from "@assets/optimized_images/e-commerce_platform_project.webp";
import marketingImg from "@assets/optimized_images/marketing_automation_system.webp";
import chatbotImg from "@assets/optimized_images/ai_chatbot_application.webp";
import realEstateImg from "@assets/optimized_images/real_estate_mobile_app.webp";
import healthcareImg from "@assets/optimized_images/healthcare_management_system.webp";
import { SEOHead, createBreadcrumbSchema, createWebPageSchema } from "@/components/seo/seo-head";

export default function Portfolio() {
  const portfolioSchema = [
    createWebPageSchema(
      "Our Work | AI & Automation Project Portfolio | iScale Studio",
      "Explore iScale Studio's portfolio of successful AI and automation projects including e-commerce AI assistants, workflow automation, fintech dashboards, and more.",
      "https://www.iscalestudio.com/portfolio"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://www.iscalestudio.com" },
      { name: "Portfolio", url: "https://www.iscalestudio.com/portfolio" }
    ])
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce AI Assistant",
      client: "StyleVogue",
      category: "AI Agent",
      description: "A personalized shopping assistant that uses computer vision to recommend products based on user uploaded photos and style preferences.",
      details: "Reduced product discovery time by 60% and increased average order value by 35%.",
      tags: ["OpenAI", "React", "Python", "Computer Vision"],
      image: ecommerceImg,
      gradient: "from-pink-500 to-rose-500",
      metrics: [
        { label: "AOV Increase", value: "+35%" },
        { label: "Recommendation Accuracy", value: "94%" }
      ]
    },
    {
      id: 2,
      title: "Logistics Automation Pipeline",
      client: "GlobalShip Inc.",
      category: "Workflow Automation",
      description: "Automated order processing system reducing manual data entry by 95%. Integrates Shopify, SAP, and custom shipping APIs via n8n.",
      details: "Saved 2000+ hours annually and reduced order processing errors to near-zero.",
      tags: ["n8n", "PostgreSQL", "Node.js", "SAP"],
      image: marketingImg,
      gradient: "from-blue-500 to-cyan-500",
      metrics: [
        { label: "Time Saved", value: "2000h/yr" },
        { label: "Error Rate", value: "-99.2%" }
      ]
    },
    {
      id: 3,
      title: "FinTech Dashboard",
      client: "NovaFinance",
      category: "Web Development",
      description: "Real-time financial analytics platform with predictive forecasting powered by machine learning models.",
      details: "Processes 500K+ transactions daily with sub-100ms response times.",
      tags: ["Next.js", "D3.js", "FastAPI", "AWS"],
      image: fintechImg,
      gradient: "from-emerald-500 to-teal-500",
      metrics: [
        { label: "Daily Transactions", value: "500K+" },
        { label: "Latency", value: "<100ms" }
      ]
    },
    {
      id: 4,
      title: "Customer Support Bot",
      client: "TechFlow",
      category: "AI Agent",
      description: "Tier-1 support automation that resolves 70% of tickets instantly using RAG (Retrieval-Augmented Generation) on company knowledge base.",
      details: "Reduced support response time from 4 hours to instant, improving CSAT by 42%.",
      tags: ["LangChain", "Pinecone", "React", "GPT-4"],
      image: chatbotImg,
      gradient: "from-purple-500 to-indigo-500",
      metrics: [
        { label: "Instant Resolution", value: "70%" },
        { label: "CSAT Improvement", value: "+42%" }
      ]
    },
    {
      id: 5,
      title: "Real Estate Mobile Platform",
      client: "PropertyHub",
      category: "Web Development",
      description: "Full-stack mobile and web platform for property listings with AI-powered property matching and virtual tours.",
      details: "Increased property inquiries by 180% and reduced agent workload by 60%.",
      tags: ["React Native", "Node.js", "ML Matching", "Google Maps"],
      image: realEstateImg,
      gradient: "from-amber-500 to-orange-500",
      metrics: [
        { label: "Inquiries Increase", value: "+180%" },
        { label: "Time Saved", value: "60%" }
      ]
    },
    {
      id: 6,
      title: "Healthcare Patient Management",
      client: "MediCare Systems",
      category: "Web Development",
      description: "Comprehensive patient management system with appointment scheduling, medical records, and AI-powered health analytics.",
      details: "Improved appointment completion rate by 89% and reduced no-shows to 3%.",
      tags: ["React", "Python", "PostgreSQL", "HIPAA Compliant"],
      image: healthcareImg,
      gradient: "from-red-500 to-pink-500",
      metrics: [
        { label: "Appointment Completion", value: "+89%" },
        { label: "No-Show Rate", value: "3%" }
      ]
    }
  ];

  const categories = ["All", "Web Development", "AI Agent", "Workflow Automation"];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Our Work | AI & Automation Project Portfolio | iScale Studio"
        description="Explore iScale Studio's portfolio of successful AI and automation projects including e-commerce AI assistants, workflow automation, fintech dashboards, and more."
        canonical="https://www.iscalestudio.com/portfolio"
        schema={portfolioSchema}
      />
      {/* Hero Header */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-xs sm:text-sm font-medium">
              Our Work
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Selected Works
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-2">
              See how we've transformed businesses across industries with intelligent automation and AI-powered solutions. Real results from real clients.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Category Filter */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#9929ea] to-[#5808fb] text-white shadow-lg shadow-[#9929ea]/40"
                    : "bg-white/60 backdrop-blur-sm border border-white/40 text-gray-700 hover:bg-white/80"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-overlay`}></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-900 border-white/60 backdrop-blur-sm font-medium">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm font-medium text-[#8629e4] mb-1">{project.client}</p>
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button size="icon" variant="ghost" className="rounded-full hover:bg-gradient-to-br hover:from-[#9929ea]/20 hover:to-[#5808fb]/20">
                          <ArrowUpRight className="h-5 w-5 text-[#8629e4]" />
                        </Button>
                      </motion.div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/40 rounded-lg">
                      {project.metrics.map((metric, i) => (
                        <div key={i}>
                          <p className="text-xs text-gray-600 mb-1">{metric.label}</p>
                          <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#2DBFBA]">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
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

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-700 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Want to See More?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Every project is a partnership built on results. Let's discuss how we can create success stories like these for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/booking"
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                  Start Your Project <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-gray-300 hover:bg-gray-50">
                  Explore Services
                </Button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
