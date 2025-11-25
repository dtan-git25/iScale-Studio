import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import webDevImg from "@assets/generated_images/futuristic_web_development_concept.png";
import workflowImg from "@assets/generated_images/workflow_automation_concept.png";
import aiAgentImg from "@assets/generated_images/ai_agent_concept.png";

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
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-card/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                <div className={`inline-block px-3 py-1 rounded-full bg-${service.color}-500/10 border border-${service.color}-500/30 text-${service.color}-400 text-sm font-mono`}>
                  {service.subtitle}
                </div>
                <h2 className="text-4xl font-display font-bold">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
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
                
                <div className="pt-8">
                  <Link href="/contact">
                    <Button className={`bg-${service.color}-500 hover:bg-${service.color}-600 text-white border-0 px-8 h-12`}>
                      Get Started
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
            <h2 className="text-3xl font-display font-bold mb-6">Not sure what you need?</h2>
            <p className="text-muted-foreground mb-8">
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
