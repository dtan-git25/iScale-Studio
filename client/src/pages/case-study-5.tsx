import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { SEOHead, createWebPageSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function CaseStudy5() {
  const pageSchema = [
    createWebPageSchema(
      "Marketing Automation Workflow | iScale Studio Case Study",
      "Campaign setup automation reducing setup time by 60% and improving conversions by 28% with intelligent workflow templates.",
      "https://iscalestudio.com/case-study-5"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Case Studies", url: "https://iscalestudio.com/case-studies" },
      { name: "Marketing Automation Workflow", url: "https://iscalestudio.com/case-study-5" }
    ])
  ];

  return (
    <>
      <SEOHead
        title="Marketing Automation Workflow | iScale Studio Case Study"
        description="Campaign setup automation reducing setup time by 60% and improving conversions by 28% with intelligent workflow templates."
        canonical="https://iscalestudio.com/case-study-5"
        schema={pageSchema}
      />
      <div className="min-h-screen pt-20 pb-12">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies">
            <motion.a
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-[#9929ea] hover:text-[#7a1fbf] transition-colors mb-6 text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </motion.a>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white border-0 mb-4">Marketing</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Marketing Automation Workflow</h1>
            <p className="text-base sm:text-lg text-gray-700">Campaign setup automation reducing setup time by 60% and improving conversions by 28%.</p>
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
                  <p className="text-sm text-gray-600 mb-1">Setup Time Saved</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">60%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Higher Conversions</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">28%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Timeline</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">6 Weeks</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Campaigns</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">500+</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">The Challenge</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              A marketing technology company helped their customers create sophisticated multi-channel campaigns, but each campaign required extensive manual setup and configuration. Marketing teams spent days building workflows that could have been set up in hours.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Our Solution</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              We built a comprehensive automation framework using n8n that provides campaign templates, intelligent defaults, and one-click setup for common scenarios. The system automatically configures email sequences, integrations, audience segmentation, and performance tracking based on campaign type and goals.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>✓ Pre-built campaign templates for common scenarios</li>
              <li>✓ Intelligent audience segmentation automation</li>
              <li>✓ Multi-channel orchestration (email, SMS, push, social)</li>
              <li>✓ Dynamic content personalization</li>
              <li>✓ A/B testing framework automation</li>
              <li>✓ Real-time performance dashboards</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Results</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              The automation platform delivered significant improvements in efficiency and effectiveness:
            </p>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>• <strong>60% reduction</strong> in campaign setup time</li>
              <li>• <strong>28% improvement</strong> in conversion rates</li>
              <li>• <strong>4x more campaigns</strong> launched per month per user</li>
              <li>• <strong>35% faster</strong> time-to-market for new campaigns</li>
              <li>• <strong>42% increase</strong> in customer satisfaction scores</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Technology Stack</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Workflow Engine: n8n for sophisticated automation | Backend: Node.js with Express | Database: PostgreSQL | Integrations: 50+ connectors with marketing tools | Frontend: React with drag-and-drop builder
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Impact</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              This project showed how intelligent automation can democratize sophisticated marketing capabilities. Marketing teams that previously required specialized knowledge could now launch complex campaigns quickly, freeing up time for strategy and creative work.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
