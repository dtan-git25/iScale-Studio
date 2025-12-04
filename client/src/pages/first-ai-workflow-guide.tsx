import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { SEOHead, createArticleSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

const pageSchema = [
  createArticleSchema(
    "Building Your First AI Workflow: A Step-by-Step Guide",
    "Learn how to create intelligent automation workflows without writing code. We walk through real examples using popular no-code platforms.",
    "2024-11-08",
    "https://iscalestudio.com/blog/first-ai-workflow-guide",
    "Tutorial"
  ),
  createBreadcrumbSchema([
    { name: "Home", url: "https://iscalestudio.com" },
    { name: "Blog", url: "https://iscalestudio.com/blog" },
    { name: "Building Your First AI Workflow: A Step-by-Step Guide", url: "https://iscalestudio.com/blog/first-ai-workflow-guide" }
  ])
];

export default function BlogPost5() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <SEOHead
        title="Building Your First AI Workflow: A Step-by-Step Guide | iScale Studio Blog"
        description="Learn how to create intelligent automation workflows without writing code. We walk through real examples using popular no-code platforms."
        canonical="https://iscalestudio.com/blog/first-ai-workflow-guide"
        type="article"
        schema={pageSchema}
        article={{
          publishedTime: "2024-11-08",
          author: "iScale Studio",
          section: "Tutorial"
        }}
      />
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#9929ea] hover:text-[#7a1fbf] transition-colors mb-6 text-sm sm:text-base">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">Tutorial</Badge>
              <span className="text-sm text-gray-700">Nov 8, 2024</span>
              <span className="text-sm text-gray-700">•</span>
              <span className="text-sm text-gray-700">10 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Building Your First AI Workflow: A Step-by-Step Guide</h1>
            <p className="text-base sm:text-lg text-gray-700">Learn how to create intelligent automation workflows without writing code. We walk through real examples using popular no-code platforms.</p>
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
              You don't need to be a programmer to build powerful automation workflows. Modern no-code platforms have democratized workflow automation, making it accessible to anyone. In this guide, we'll build a practical AI workflow together.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">What is an AI Workflow?</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              An AI workflow is a series of automated steps that accomplish a business goal, often involving data gathering, AI processing, and action execution. Unlike simple automations that just move data, AI workflows add intelligence—they analyze, decide, and act based on the analysis.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Example: Lead Scoring Workflow</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Let's build a workflow that automatically scores incoming leads and sends personalized outreach. Here's how it works:
            </p>

            <ol className="list-decimal list-inside text-base sm:text-lg leading-relaxed space-y-2">
              <li>A new lead signs up via your website form</li>
              <li>Workflow captures their information and company details</li>
              <li>AI analyzes the lead fit based on your ideal customer profile</li>
              <li>If score is high, create a task for sales to reach out</li>
              <li>If score is low, add to nurture email sequence</li>
            </ol>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Getting Started</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Choose a no-code platform like Zapier, Make, or n8n. Start small with a simple two-step workflow. As you become comfortable, gradually add complexity. The key is to automate high-volume, repetitive tasks that have clear logic.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              AI workflows are powerful because they scale infinitely. Whether you process 10 leads or 10,000, the workflow handles them consistently, freeing your team to focus on strategy and complex decision-making.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
