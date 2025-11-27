import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead, createServiceSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function AIResearchAgent() {
  const pageSchema = [
    createServiceSchema(
      "AI Research Agent",
      "Conduct intelligent market research, competitor analysis, and trend identification with AI-powered data synthesis. Get 10x more data coverage with real-time insights.",
      "https://iscalestudio.com/ai-research-agent"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Services", url: "https://iscalestudio.com/services" },
      { name: "AI Agents", url: "https://iscalestudio.com/services/ai-agents" },
      { name: "AI Research Agent", url: "https://iscalestudio.com/ai-research-agent" }
    ])
  ];

  return (
    <>
      <SEOHead
        title="AI Research Agent | Automated Data Research | iScale Studio"
        description="Conduct intelligent market research, competitor analysis, and trend identification with AI-powered data synthesis. Get 10x more data coverage with real-time insights."
        canonical="https://iscalestudio.com/ai-research-agent"
        schema={pageSchema}
      />
      <div className="min-h-screen pt-20 pb-12">
      <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <motion.a initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 text-[#9929ea] hover:text-[#7a1fbf] transition-colors mb-6 text-sm sm:text-base">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </motion.a>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-5xl mb-4">🔬</div>
            <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 mb-4">AI Research Agent</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Intelligent Research with AI Research Agent</h1>
            <p className="text-base sm:text-lg text-gray-700">Conduct market research, analyze competitors, and discover business opportunities with intelligent research automation.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 relative overflow-hidden">
        <motion.div animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How AI Research Agent Works</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The AI Research Agent gathers market data, analyzes competitor strategies, identifies industry trends, and uncovers business opportunities. It synthesizes complex information into actionable insights for strategic decision-making.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Key Capabilities</h2>
              <div className="space-y-3">
                {[
                  "Market research and trend analysis",
                  "Competitor intelligence and benchmarking",
                  "Industry analysis and insights",
                  "Customer feedback analysis",
                  "Opportunity identification",
                  "Data aggregation from multiple sources",
                  "Report generation and visualization",
                  "Strategic recommendation synthesis"
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
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">10x</p>
                  <p className="text-sm text-gray-600">More data coverage</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">70%</p>
                  <p className="text-sm text-gray-600">Time reduction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">15</p>
                  <p className="text-sm text-gray-600">Reports per day</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">Real-time</p>
                  <p className="text-sm text-gray-600">Insights updated</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Product teams researching market opportunities</li>
                <li>• Strategic planning and competitive analysis</li>
                <li>• Venture capital and investment research</li>
                <li>• Market entry planning for new regions</li>
                <li>• Business development and partnership identification</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
