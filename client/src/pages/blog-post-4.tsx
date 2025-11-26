import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

export default function BlogPost4() {
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
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">Case Study</Badge>
              <span className="text-sm text-gray-700">Nov 15, 2024</span>
              <span className="text-sm text-gray-700">•</span>
              <span className="text-sm text-gray-700">7 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">From Manual to Intelligent: How AI Changed Customer Support</h1>
            <p className="text-base sm:text-lg text-gray-700">Discover how businesses are using AI agents to handle 70% of support tickets instantly, improving customer satisfaction and reducing costs.</p>
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
              Customer support has traditionally been one of the most labor-intensive operations in any business. A mid-sized company might have a support team of 50+ people handling the same types of questions repeatedly. With AI agents, companies are now handling 70% of support tickets instantly, without human intervention.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">The Challenge with Traditional Support</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Manual support has inherent limitations: long wait times, inconsistent responses, and high operational costs. Even with training, different support agents provide different quality of service. Customers often end up frustrated, and companies struggle with high employee turnover in these roles.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">The AI Agent Solution</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Modern AI support agents combine natural language processing, access to knowledge bases, and the ability to perform actions in business systems. When a customer submits a ticket, the AI agent can:
            </p>

            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed space-y-2">
              <li>Instantly understand the customer's issue</li>
              <li>Search the knowledge base for relevant information</li>
              <li>Check order history and account status</li>
              <li>Execute simple actions like password resets or refunds</li>
              <li>Route complex issues to human agents with full context</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Real Results</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Companies implementing AI agents report 60-70% reduction in support tickets requiring human intervention. More importantly, customer satisfaction often increases because responses are instantaneous and consistent. The human support team shifts from handling routine issues to managing complex problems and building customer relationships.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              This transformation doesn't mean fewer jobs—it means better jobs. Support teams are becoming more strategic, focusing on customer retention and satisfaction rather than ticket triage.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
