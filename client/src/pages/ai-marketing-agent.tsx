import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AIMarketingAgent() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <motion.a initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 text-[#9929ea] hover:text-[#7a1fbf] transition-colors mb-6 text-sm sm:text-base">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </motion.a>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-5xl mb-4">📢</div>
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 mb-4">AI Marketing Agent</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Optimize Marketing with AI Marketing Agent</h1>
            <p className="text-base sm:text-lg text-gray-700">Manage campaigns, analyze trends, and optimize strategies with data-driven insights and intelligent automation.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 relative overflow-hidden">
        <motion.div animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How AI Marketing Agent Works</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The AI Marketing Agent manages your entire marketing stack - planning campaigns, analyzing performance data, optimizing messaging, and recommending strategies. It continuously tests approaches and learns what resonates with your audience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Key Capabilities</h2>
              <div className="space-y-3">
                {[
                  "Campaign planning and strategy optimization",
                  "A/B testing automation across channels",
                  "Real-time performance analytics and reporting",
                  "Audience segmentation and targeting",
                  "Content optimization recommendations",
                  "Budget allocation and ROI optimization",
                  "Competitor analysis and trend monitoring",
                  "Multi-channel campaign coordination"
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
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">28%</p>
                  <p className="text-sm text-gray-600">Higher conversions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">40%</p>
                  <p className="text-sm text-gray-600">Better ROI</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">5x</p>
                  <p className="text-sm text-gray-600">Faster optimization</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">50%</p>
                  <p className="text-sm text-gray-600">Time savings</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Digital marketing agencies managing multiple clients</li>
                <li>• E-commerce brands scaling ad campaigns</li>
                <li>• B2B companies optimizing lead generation</li>
                <li>• Product teams improving user acquisition</li>
                <li>• Enterprise marketers managing complex campaigns</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
