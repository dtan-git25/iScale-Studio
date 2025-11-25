import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import webDevImg from "@assets/generated_images/futuristic_web_development_concept.png";
import workflowImg from "@assets/generated_images/workflow_automation_concept.png";
import aiAgentImg from "@assets/generated_images/ai_agent_concept.png";
import ecommerceImg from "@assets/generated_images/e-commerce_platform_interface.png";

export default function Services() {
  const services = [
    {
      id: "ai-development",
      title: "AI Web & App Development",
      subtitle: "Build intelligent applications",
      description: "We create custom web and mobile applications infused with Artificial Intelligence. From predictive analytics to personalized user experiences, our apps do more than just function—they think.",
      features: [
        "Custom React & Node.js Applications",
        "AI-Powered E-commerce Solutions",
        "Progressive Web Apps (PWA)",
        "Native Mobile App Development",
        "Intelligent Search & Recommendation Systems"
      ],
      image: webDevImg,
      color: "cyan"
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      subtitle: "Eliminate manual tasks",
      description: "Stop wasting time on repetitive tasks. We design and implement enterprise-grade automation workflows that connect your favorite tools and run your business on autopilot.",
      features: [
        "Business Process Automation (n8n, Make)",
        "CRM & Marketing Automation",
        "Data Synchronization & ETL",
        "Custom API Integrations",
        "No-code/Low-code Solutions"
      ],
      image: workflowImg,
      color: "purple"
    },
    {
      id: "ai-agents",
      title: "AI Agent Development",
      subtitle: "Deploy digital workforce",
      description: "Deploy autonomous AI agents capable of handling complex customer inquiries, processing documents, and executing multi-step business logic without human intervention.",
      features: [
        "Custom GPT & LLM Integration",
        "Customer Service Chatbots",
        "Document Processing Agents",
        "Multi-Agent Systems",
        "Business Intelligence Assistants"
      ],
      image: aiAgentImg,
      color: "pink"
    },
    {
      id: "ecommerce-solutions",
      title: "E-commerce Solutions",
      subtitle: "Elevate your online store",
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
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              Services
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            End-to-end digital transformation services designed to help modern businesses scale efficiently.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
                  {service.subtitle}
                </div>
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 pt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/90">
                      <CheckCircle2 className={`h-5 w-5 text-${service.color}-400`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 flex gap-4">
                  <Link href={`/services/${service.id}`}>
                    <Button variant="outline" className="rounded-full px-8 h-12 text-base border-gray-300 hover:bg-gray-50">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video group">
                  <div className={`absolute inset-0 bg-${service.color}-500/20 mix-blend-overlay z-10`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Tech overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
                    <div className="flex gap-4">
                      {[1,2,3].map(dot => (
                        <div key={dot} className={`h-1 flex-1 rounded-full bg-${service.color}-500/50`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="py-20 bg-card border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Not sure what you need?</h2>
            <p className="text-gray-700 mb-8">
                Book a free 15-minute discovery call. We'll analyze your current setup and propose a custom automation roadmap.
            </p>
            <Link href="/contact">
                <Button className="btn-gradient">
                    Schedule Discovery Call <ArrowRight className="ml-2 h-4 w-4"/>
                </Button>
            </Link>
        </div>
      </section>
    </div>
  );
}
