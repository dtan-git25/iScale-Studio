import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

export default function BlogPost7() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <motion.a
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-[#9929ea] hover:text-[#7a1fbf] transition-colors mb-6 text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </motion.a>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">AI Trends</Badge>
              <span className="text-sm text-gray-700">Nov 20, 2024</span>
              <span className="text-sm text-gray-700">•</span>
              <span className="text-sm text-gray-700">9 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Generative AI in Business: From Hype to ROI</h1>
            <p className="text-base sm:text-lg text-gray-700">Understanding how to measure and maximize return on investment from generative AI initiatives.</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/8 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-700 space-y-6"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Generative AI has captured the business world's imagination, but many organizations struggle to convert enthusiasm into measurable business results. The path from pilot projects to sustainable ROI requires strategic planning and disciplined execution.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Beyond the Hype</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              While generative AI can automate content creation, accelerate code development, and improve customer interactions, success requires more than simply implementing the technology. Companies need clear metrics, realistic timelines, and organizational readiness.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Measuring Real Value</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Effective ROI measurement goes beyond cost savings. Consider productivity gains, quality improvements, revenue expansion opportunities, and risk mitigation. A 20% productivity boost in your customer support team translates directly to bottom-line impact.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Implementation Strategy</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Start with high-impact, measurable use cases. Pilot programs should be designed to prove value quickly while building internal expertise. Focus on areas where ROI is demonstrable within 3-6 months rather than aspirational long-term initiatives.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Organizations that combine generative AI with process optimization and employee training see the fastest returns. The technology alone isn't enough—successful implementations require orchestrated change across people, processes, and tools.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
