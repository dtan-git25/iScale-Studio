import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import aiAgentImg from "@assets/generated_images/ai_agent_concept.png";
import { SEOHead, createServiceSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function AIAgentsPage() {
  const pageSchema = [
    createServiceSchema(
      "AI Agent Development",
      "Autonomous AI agents for customer service, document processing, and multi-step business logic using GPT, LLMs, and custom chatbots.",
      "https://iscalestudio.com/services/ai-agents"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Services", url: "https://iscalestudio.com/services" },
      { name: "AI Agent Development", url: "https://iscalestudio.com/services/ai-agents" }
    ])
  ];

  const features = [
    "Custom GPT & LLM Integration",
    "Customer Service Chatbots",
    "Document Processing Agents",
    "Multi-Agent Systems",
    "Business Intelligence Assistants"
  ];

  const benefits = [
    "24/7 customer support without additional staff",
    "Process documents and data at scale instantly",
    "Handle complex multi-step business logic autonomously",
    "Improve response times and customer satisfaction",
    "Reduce support costs by up to 70%"
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="AI Agent Development | Chatbots & Autonomous Agents Philippines | iScale Studio"
        description="Deploy autonomous AI agents for 24/7 customer support, document processing, and complex business logic. Reduce support costs by up to 70%."
        canonical="https://iscalestudio.com/services/ai-agents"
        schema={pageSchema}
      />
      {/* Header */}
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
              AI Agent Development
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Deploy Your Digital Workforce</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Deploy autonomous AI agents capable of handling complex customer inquiries, processing documents, and executing multi-step business logic without human intervention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={aiAgentImg} alt="AI Agents" className="rounded-xl shadow-lg" />
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
                We build intelligent agents powered by the latest large language models, capable of reasoning, decision-making, and executing complex tasks autonomously.
              </p>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-pink-400 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-12 mb-20"
          >
            <h2 className="text-4xl font-bold mb-12">Why Choose Our AI Agent Services?</h2>
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

          {/* AI Agent Types Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-4">Our AI Agent Solutions</h2>
            <p className="text-lg text-gray-700 mb-12">Explore our specialized AI agents designed for specific business functions:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "💼",
                  title: "AI Sales Agent",
                  description: "Automate lead qualification, follow-ups, and deal management. Close deals faster with intelligent sales conversations",
                  features: ["Lead Qualification", "Deal Tracking", "Sales Analytics"],
                  link: "/ai-sales-agent"
                },
                {
                  icon: "🎧",
                  title: "AI Support Agent",
                  description: "Provide 24/7 customer support with intelligent troubleshooting and instant resolutions for common issues",
                  features: ["Ticketing", "Problem Solving", "Escalation"],
                  link: "/ai-support-agent"
                },
                {
                  icon: "📢",
                  title: "AI Marketing Agent",
                  description: "Manage campaigns, analyze trends, and optimize marketing strategies with data-driven insights and automation",
                  features: ["Campaign Management", "A/B Testing", "Analytics"],
                  link: "/ai-marketing-agent"
                },
                {
                  icon: "⚡",
                  title: "AI Admin Agent",
                  description: "Handle administrative tasks, data management, and process optimization to free up your team's time",
                  features: ["Task Automation", "Data Management", "Reporting"],
                  link: "/ai-admin-agent"
                },
                {
                  icon: "🔬",
                  title: "AI Research Agent",
                  description: "Conduct market research, analyze competitors, and discover business opportunities with intelligent research",
                  features: ["Market Analysis", "Competitor Intel", "Insights"],
                  link: "/ai-research-agent"
                },
                {
                  icon: "✍️",
                  title: "AI Content Agent",
                  description: "Generate high-quality content, manage publications, and optimize messaging across all channels",
                  features: ["Content Generation", "Publishing", "SEO Optimization"],
                  link: "/ai-content-agent"
                }
              ].map((item, idx) => (
                <Link key={idx} href={item.link}>
                  <motion.a
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group block cursor-pointer h-full"
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
                  </motion.a>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl font-bold">Ready to Deploy Your AI Agents?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Let's discuss how intelligent agents can transform your customer service and operations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
