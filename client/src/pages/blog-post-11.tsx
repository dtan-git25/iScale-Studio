import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { SEOHead, createArticleSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

const pageSchema = [
  createArticleSchema(
    "Serverless Architecture: When and Why to Go Serverless",
    "Making the right architectural choice between serverless and traditional infrastructure.",
    "2024-11-12",
    "https://iscalestudio.com/blog-post-11",
    "Cloud Infrastructure"
  ),
  createBreadcrumbSchema([
    { name: "Home", url: "https://iscalestudio.com" },
    { name: "Blog", url: "https://iscalestudio.com/blog" },
    { name: "Serverless Architecture: When and Why to Go Serverless", url: "https://iscalestudio.com/blog-post-11" }
  ])
];

export default function BlogPost11() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <SEOHead
        title="Serverless Architecture: When and Why to Go Serverless | iScale Studio Blog"
        description="Making the right architectural choice between serverless and traditional infrastructure."
        canonical="https://iscalestudio.com/blog-post-11"
        type="article"
        schema={pageSchema}
        article={{
          publishedTime: "2024-11-12",
          author: "iScale Studio",
          section: "Cloud Infrastructure"
        }}
      />
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
              <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0">Cloud Infrastructure</Badge>
              <span className="text-sm text-gray-700">Nov 12, 2024</span>
              <span className="text-sm text-gray-700">•</span>
              <span className="text-sm text-gray-700">10 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Serverless Architecture: When and Why to Go Serverless</h1>
            <p className="text-base sm:text-lg text-gray-700">Making the right architectural choice between serverless and traditional infrastructure.</p>
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
              Serverless computing abstracts away infrastructure management, allowing developers to focus on code. Services like AWS Lambda, Google Cloud Functions, and Azure Functions handle scaling, patching, and operations automatically. But serverless isn't a one-size-fits-all solution.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">When Serverless Shines</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Serverless excels for event-driven workloads with variable traffic patterns. API backends that handle bursty requests, image processing pipelines, scheduled jobs, and real-time data processing are ideal use cases. You pay only for compute time used, not for idle capacity.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">When to Stick with Traditional</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Applications with consistent, high traffic often have lower costs on traditional infrastructure. Complex stateful applications, legacy systems, and workloads requiring specific runtime environments may not be serverless-ready. Cold start latency can be problematic for latency-sensitive applications.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Hybrid Approaches</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              The future isn't binary. Many organizations adopt hybrid architectures, using serverless for APIs and event processing while maintaining traditional infrastructure for steady-state workloads. This approach optimizes cost while maintaining reliability.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              The right choice depends on your specific workload patterns, organizational maturity, and business requirements. Evaluate carefully before committing to either architecture.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
