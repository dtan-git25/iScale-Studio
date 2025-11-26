import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AIAdminAgent() {
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
            <div className="text-5xl mb-4">⚡</div>
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 mb-4">AI Admin Agent</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Streamline Administration with AI Admin Agent</h1>
            <p className="text-base sm:text-lg text-gray-700">Handle administrative tasks, manage data, and optimize processes to free up your team's time for strategic work.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 relative overflow-hidden">
        <motion.div animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How AI Admin Agent Works</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The AI Admin Agent automates repetitive administrative work - managing schedules, processing documents, organizing data, and handling routine inquiries. It integrates with your existing systems and learns your processes to work more efficiently.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Key Capabilities</h2>
              <div className="space-y-3">
                {[
                  "Schedule management and meeting coordination",
                  "Document processing and organization",
                  "Data entry and management automation",
                  "Email and inbox management",
                  "Report generation and compilation",
                  "Expense tracking and processing",
                  "Task assignment and tracking",
                  "Administrative workflow optimization"
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
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">80%</p>
                  <p className="text-sm text-gray-600">Tasks automated</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">20 hrs</p>
                  <p className="text-sm text-gray-600">Saved per week</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">99%</p>
                  <p className="text-sm text-gray-600">Error reduction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">$50K</p>
                  <p className="text-sm text-gray-600">Annual savings</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Executive offices managing schedules and communications</li>
                <li>• HR departments handling administrative tasks</li>
                <li>• Finance teams processing expenses and documents</li>
                <li>• Operations teams coordinating logistics</li>
                <li>• Enterprises automating routine administrative work</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#9929ea]/15 to-[#2DBFBA]/15 border border-[#9929ea]/40 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to eliminate administrative burden?</h3>
              <p className="text-gray-700 mb-6">Let's deploy an AI Admin Agent that handles routine tasks so your team can focus on what matters.</p>
              <Link href="/booking">
                <Button className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
