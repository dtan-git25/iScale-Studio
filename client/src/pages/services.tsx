import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Target, Clock, Shield, Globe, Smartphone, Bot, ShoppingCart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import webDevImg from "@assets/generated_images/ai_web_development_modern_interface.png";
import appDevImg from "@assets/generated_images/ai_mobile_app_development_interface.png";
import workflowImg from "@assets/generated_images/workflow_automation_process_diagram.png";
import aiAgentImg from "@assets/generated_images/ai_agent_assistant_interface.png";
import ecommerceImg from "@assets/generated_images/e-commerce_platform_interface.png";
import mlDevImg from "@assets/generated_images/machine_learning_model_development_dashboard.png";
import { SEOHead, createBreadcrumbSchema, createWebPageSchema } from "@/components/seo/seo-head";

export default function Services() {
  const servicesSchema = [
    createWebPageSchema(
      "AI Development Services Philippines | Web, App & Automation Solutions",
      "Explore iScale Studio's AI development services: AI web & app development, workflow automation, AI agents, e-commerce solutions, and custom ML models for Philippine businesses.",
      "https://iscalestudio.com/services"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Services", url: "https://iscalestudio.com/services" }
    ])
  ];
  const services = [
    {
      id: "ai-web-development",
      title: "AI Web Development",
      subtitle: "Build intelligent web applications",
      shortDesc: "Custom web applications powered by cutting-edge AI technology.",
      description: "We create custom web applications infused with Artificial Intelligence. From predictive analytics dashboards to AI-powered recommendation engines, our web solutions combine modern design with intelligent functionality.",
      features: [
        "Custom React & Next.js Applications",
        "AI-Powered Dashboards & Analytics",
        "Progressive Web Apps (PWA)",
        "Real-time Data Visualization",
        "Intelligent Search & Recommendation Systems"
      ],
      image: webDevImg,
      icon: Globe,
      gradient: "from-cyan-500 to-blue-500",
      href: "/services/ai-web-development"
    },
    {
      id: "ai-app-development",
      title: "AI App Development",
      subtitle: "Build intelligent mobile apps",
      shortDesc: "Custom mobile apps powered by cutting-edge AI technology.",
      description: "We create custom mobile and desktop applications infused with Artificial Intelligence. From AI-powered assistants to intelligent data processing, our apps deliver powerful functionality right in your users' hands.",
      features: [
        "Native Mobile App Development",
        "Cross-Platform Applications",
        "AI-Powered Mobile Assistants",
        "Offline-First AI Processing",
        "Computer Vision & Image Recognition"
      ],
      image: appDevImg,
      icon: Smartphone,
      gradient: "from-blue-500 to-indigo-500",
      href: "/services/ai-app-development"
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      subtitle: "Eliminate manual tasks",
      shortDesc: "Enterprise-grade automation workflows that connect your tools and run on autopilot.",
      description: "Stop wasting time on repetitive tasks. We design and implement enterprise-grade automation workflows that connect your favorite tools and run your business on autopilot.",
      features: [
        "Business Process Automation (n8n, Make)",
        "CRM & Marketing Automation",
        "Data Synchronization & ETL",
        "Custom API Integrations",
        "No-code/Low-code Solutions"
      ],
      image: workflowImg,
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      href: "/services/workflow-automation"
    },
    {
      id: "ai-agents",
      title: "AI Agent Development",
      subtitle: "Deploy digital workforce",
      shortDesc: "Autonomous AI agents that handle complex inquiries and multi-step business logic.",
      description: "Deploy autonomous AI agents capable of handling complex customer inquiries, processing documents, and executing multi-step business logic without human intervention.",
      features: [
        "Custom GPT & LLM Integration",
        "Customer Service Chatbots",
        "Document Processing Agents",
        "Multi-Agent Systems",
        "Business Intelligence Assistants"
      ],
      image: aiAgentImg,
      icon: Bot,
      gradient: "from-pink-500 to-rose-500",
      href: "/services/ai-agents"
    },
    {
      id: "ecommerce-solutions",
      title: "E-commerce Solutions",
      subtitle: "Elevate your online store",
      shortDesc: "Powerful e-commerce platforms with integrated AI features to drive sales.",
      description: "Build powerful, scalable e-commerce platforms with integrated AI features. From product recommendations to intelligent inventory management, we create solutions that drive sales and enhance customer satisfaction.",
      features: [
        "Custom E-commerce Platform Development",
        "AI-Powered Product Recommendations",
        "Smart Inventory & Order Management",
        "Payment Gateway Integration",
        "AI Chatbots for Customer Support",
        "Analytics & Conversion Optimization"
      ],
      image: ecommerceImg,
      icon: ShoppingCart,
      gradient: "from-emerald-500 to-teal-500",
      href: "/services/ecommerce-solutions"
    },
    {
      id: "ai-ml-development",
      title: "Custom AI/ML Models",
      subtitle: "Build proprietary ML models",
      shortDesc: "Custom machine learning models tailored to your specific data and business needs.",
      description: "We develop custom machine learning models that unlock actionable insights from your data. From predictive analytics to computer vision, our models are built to solve your specific business challenges.",
      features: [
        "Predictive Analytics & Forecasting",
        "Computer Vision & Image Classification",
        "Natural Language Processing (NLP)",
        "Customer Churn & Risk Prediction",
        "Custom Model Training & Optimization",
        "Real-time Model Inference & Deployment"
      ],
      image: mlDevImg,
      icon: Brain,
      gradient: "from-orange-500 to-yellow-500",
      href: "/services/ai-ml-development"
    }
  ];

  const benefits = [
    { icon: Clock, title: "Save Time", desc: "Reduce manual work by up to 80%" },
    { icon: Zap, title: "Boost Efficiency", desc: "Streamline operations instantly" },
    { icon: Target, title: "Scale Faster", desc: "Grow without growing headcount" },
    { icon: Shield, title: "Enterprise-Grade", desc: "Secure and reliable solutions" }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="AI Development Services Philippines | Web, App & Automation Solutions"
        description="Explore iScale Studio's AI development services: AI web & app development, workflow automation, AI agents, e-commerce solutions, and custom ML models for Philippine businesses."
        canonical="https://iscalestudio.com/services"
        schema={servicesSchema}
      />
      {/* Hero Header */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              Our Services
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              End-to-End Digital Transformation
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From AI-powered applications to intelligent automation, we deliver solutions that transform how your business operates. Choose the perfect service for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Overview */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link href={service.href || `/services/${service.id}`}>
                  <a className="block h-full">
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col"
                    >
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-[#8629e4] font-medium mb-3">{service.subtitle}</p>
                      <p className="text-gray-700 mb-6 flex-grow">{service.shortDesc}</p>
                      
                      <div className="flex items-center text-[#8629e4] font-medium group-hover:translate-x-2 transition-transform">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </motion.div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We deliver solutions that directly impact your business growth and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-700 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-300">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></span>
                  <span className="text-[#8629e4] text-sm font-medium">{service.subtitle}</span>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>

                <div className="bg-gradient-to-r from-[#9929ea]/5 to-[#2DBFBA]/5 border border-[#9929ea]/20 rounded-2xl p-8">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#8629e4] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex gap-4">
                  <Link href={`/services/${service.id}`}>
                    <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-gray-300 hover:bg-gray-50">
                      Full Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/booking">
                    <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                      Book a Call
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-video group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 mix-blend-overlay z-10`}></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's schedule a free 15-minute discovery call. Our team will analyze your needs and recommend the perfect solution.
            </p>
            <Link href="/booking">
              <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                Schedule a Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
