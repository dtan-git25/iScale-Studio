import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { SEOHead, createWebPageSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function CaseStudy6() {
  const pageSchema = [
    createWebPageSchema(
      "AI-Powered Customer Support System | iScale Studio Case Study",
      "Intelligent chatbot handling 75% of support tickets automatically with 90% faster response times and 4.8/5 customer satisfaction.",
      "https://iscalestudio.com/portfolio/ai-customer-support-system"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Case Studies", url: "https://iscalestudio.com/case-studies" },
      { name: "AI-Powered Customer Support", url: "https://iscalestudio.com/portfolio/ai-customer-support-system" }
    ])
  ];

  return (
    <>
      <SEOHead
        title="AI-Powered Customer Support System | iScale Studio Case Study"
        description="Intelligent chatbot handling 75% of support tickets automatically with 90% faster response times and 4.8/5 customer satisfaction."
        canonical="https://iscalestudio.com/portfolio/ai-customer-support-system"
        schema={pageSchema}
      />
      <div className="min-h-screen pt-20 pb-12">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-[#9929ea] hover:text-[#7a1fbf] transition-colors mb-6 text-sm sm:text-base">
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 mb-4">Customer Service</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">AI-Powered Customer Support System</h1>
            <p className="text-base sm:text-lg text-gray-700">Intelligent chatbot handling 75% of support tickets automatically with 90% faster response times.</p>
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
            className="prose prose-lg max-w-none mb-12"
          >
            <div className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-2xl p-8 mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Automation Rate</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">75%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Response Time</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">90% ↓</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Timeline</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">2 Months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Satisfaction</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">4.8/5</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">The Challenge</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              A SaaS company experienced rapid growth but their customer support team was overwhelmed. Response times stretched to hours, customers were frustrated, and the support team spent all their time on routine questions rather than solving complex issues. They needed a way to scale support without proportionally scaling headcount.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Our Solution</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              We deployed an AI-powered chatbot system using OpenAI's language models, fine-tuned on their product knowledge and support history. The chatbot handles routine questions, provides instant answers, and escalates complex issues to human agents with full context. The system learns from each interaction to continuously improve accuracy.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>✓ Natural language understanding and response generation</li>
              <li>✓ Intelligent escalation to human agents</li>
              <li>✓ Product knowledge base integration</li>
              <li>✓ Multi-language support</li>
              <li>✓ Sentiment analysis and emotion detection</li>
              <li>✓ Analytics and continuous improvement dashboard</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Results</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              The AI support system transformed customer service operations:
            </p>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>• <strong>75% of tickets</strong> resolved automatically without human intervention</li>
              <li>• <strong>90% reduction</strong> in average response time (from 4 hours to 24 minutes)</li>
              <li>• <strong>4.8/5 satisfaction</strong> rating for AI-handled interactions</li>
              <li>• <strong>60% reduction</strong> in support costs</li>
              <li>• <strong>3x capacity increase</strong> with same team size</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Technology Stack</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              LLM: OpenAI GPT-4 for conversation | Backend: Node.js with Express | Knowledge Base: Vector embeddings with Pinecone for semantic search | Database: PostgreSQL for conversation history | Integrations: Slack, email, and ticketing systems | Frontend: React dashboard for agent handoff
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Impact</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              This project demonstrated how AI can enhance human work rather than replace it. Support agents now focus on complex, high-value interactions where their expertise matters most, while the AI handles routine queries efficiently. The result is happier customers and more engaged support team members.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
