import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead, createServiceSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function AISupportAgent() {
  const pageSchema = [
    createServiceSchema(
      "AI Support Agent",
      "Provide instant 24/7 customer support with intelligent troubleshooting, automatic ticket resolution, and seamless human escalation. Reduce response times by 90%.",
      "https://www.iscalestudio.com/ai-support-agent"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://www.iscalestudio.com" },
      { name: "Services", url: "https://www.iscalestudio.com/services" },
      { name: "AI Agents", url: "https://www.iscalestudio.com/services/ai-agents" },
      { name: "AI Support Agent", url: "https://www.iscalestudio.com/ai-support-agent" }
    ])
  ];

  return (
    <>
      <SEOHead
        title="AI Support Agent | 24/7 Customer Service Automation | iScale Studio"
        description="Provide instant 24/7 customer support with intelligent troubleshooting, automatic ticket resolution, and seamless human escalation. Reduce response times by 90%."
        canonical="https://www.iscalestudio.com/ai-support-agent"
        schema={pageSchema}
      />
      <div className="min-h-screen pt-20 pb-12">
      <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-[#9929ea] hover:text-[#7a1fbf] transition-colors mb-6 text-sm sm:text-base">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-5xl mb-4">🎧</div>
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 mb-4">AI Support Agent</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">24/7 Customer Support with AI Support Agent</h1>
            <p className="text-base sm:text-lg text-gray-700">Provide instant support to customers round-the-clock with intelligent troubleshooting and instant resolutions for common issues.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 relative overflow-hidden">
        <motion.div animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How AI Support Agent Works</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The AI Support Agent handles customer inquiries instantly, troubleshoots common issues, and escalates complex problems to human agents with full context. It learns from support tickets and continuously improves its resolution rate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Key Capabilities</h2>
              <div className="space-y-3">
                {[
                  "Instant response to customer inquiries",
                  "Intelligent troubleshooting and problem diagnosis",
                  "Knowledge base integration and search",
                  "Smart escalation to human agents",
                  "Multi-language support",
                  "Ticket creation and tracking",
                  "Customer satisfaction monitoring",
                  "Support analytics and performance metrics"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#9929ea] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Business Impact</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/50 backdrop-blur-xl border border-white/40 rounded-2xl p-6">
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">75%</p>
                  <p className="text-sm text-gray-600">Auto-resolved tickets</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">90%</p>
                  <p className="text-sm text-gray-600">Faster response</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">4.8/5</p>
                  <p className="text-sm text-gray-600">Customer rating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">60%</p>
                  <p className="text-sm text-gray-600">Cost reduction</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• SaaS companies handling high support volume</li>
                <li>• E-commerce platforms managing customer questions</li>
                <li>• Service companies providing technical support</li>
                <li>• Enterprises requiring 24/7 customer support</li>
                <li>• Global teams needing multi-language support</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
