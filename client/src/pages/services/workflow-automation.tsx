import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import workflowImg from "@assets/optimized_images/workflow_automation_concept_small.webp";
import { SEOHead, createServiceSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function WorkflowAutomationPage() {
  const pageSchema = [
    createServiceSchema(
      "Workflow Automation",
      "Enterprise-grade business process automation using n8n, Make, Zapier with custom API integrations and no-code solutions.",
      "https://iscalestudio.com/services/workflow-automation"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Services", url: "https://iscalestudio.com/services" },
      { name: "Workflow Automation", url: "https://iscalestudio.com/services/workflow-automation" }
    ])
  ];

  const features = [
    "Business Process Automation (n8n, Make)",
    "CRM & Marketing Automation",
    "Data Synchronization & ETL",
    "Custom API Integrations",
    "No-code/Low-code Solutions"
  ];

  const benefits = [
    "Save 20-30 hours per week on manual tasks",
    "Eliminate human error and improve data accuracy",
    "Reduce operational costs significantly",
    "Scale operations without additional headcount",
    "Real-time data synchronization across platforms"
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Workflow Automation Services Philippines | n8n, Make, Zapier | iScale Studio"
        description="Eliminate manual tasks with enterprise-grade workflow automation. Save 20-30 hours weekly with n8n, Make, custom API integrations and no-code solutions."
        canonical="https://iscalestudio.com/services/workflow-automation"
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
              Workflow Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Eliminate Manual Tasks Forever</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Stop wasting time on repetitive tasks. We design and implement enterprise-grade automation workflows that connect your favorite tools and run your business on autopilot.
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
              <img src={workflowImg} alt="Workflow Automation" className="rounded-xl shadow-lg" width="600" height="327" />
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
                We automate your entire business workflow, connecting all your tools and systems to work together seamlessly. From data entry to complex multi-step processes, we handle it all.
              </p>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-400 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold mb-12">Why Choose Our Automation Services?</h2>
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

          {/* Featured Automation Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12">Featured Automation Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚙️",
                  title: "Process Automation",
                  description: "Automate repetitive tasks and manual workflows to boost productivity and reduce operational costs",
                  features: ["RPA", "Task Scheduling", "Batch Processing"]
                },
                {
                  icon: "🔗",
                  title: "Seamless Integration",
                  description: "Connect all your business tools and systems with intelligent automation bridges",
                  features: ["API Integration", "Data Sync", "Multi-System"]
                },
                {
                  icon: "📊",
                  title: "Data-Driven Workflows",
                  description: "Make intelligent decisions with real-time data processing and analytics-driven automation",
                  features: ["Real-time Processing", "Smart Routing", "Data Analytics"]
                },
                {
                  icon: "🤝",
                  title: "Collaborative Automation",
                  description: "Enable teams to work smarter with automated handoffs and intelligent task distribution",
                  features: ["Task Routing", "Team Collaboration", "Approval Workflows"]
                },
                {
                  icon: "📈",
                  title: "Business Intelligence",
                  description: "Gain visibility into your processes with detailed analytics, dashboards, and performance metrics",
                  features: ["Analytics", "Reporting", "Insights"]
                },
                {
                  icon: "🔐",
                  title: "Secure & Compliant",
                  description: "Maintain security and compliance with audit trails, access controls, and data protection",
                  features: ["Audit Logs", "Access Control", "Compliance"]
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl font-bold">Ready to Automate Your Business?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Let's discuss which workflows can be automated first to deliver the biggest impact.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
