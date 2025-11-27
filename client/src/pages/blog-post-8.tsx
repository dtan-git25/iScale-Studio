import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { SEOHead, createArticleSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

const pageSchema = [
  createArticleSchema(
    "Building Scalable Microservices with Node.js and Kubernetes",
    "A comprehensive guide to containerizing and orchestrating Node.js applications for enterprise-scale deployment.",
    "2024-11-18",
    "https://iscalestudio.com/blog-post-8",
    "Tech Stack"
  ),
  createBreadcrumbSchema([
    { name: "Home", url: "https://iscalestudio.com" },
    { name: "Blog", url: "https://iscalestudio.com/blog" },
    { name: "Building Scalable Microservices with Node.js and Kubernetes", url: "https://iscalestudio.com/blog-post-8" }
  ])
];

export default function BlogPost8() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <SEOHead
        title="Building Scalable Microservices with Node.js and Kubernetes | iScale Studio Blog"
        description="A comprehensive guide to containerizing and orchestrating Node.js applications for enterprise-scale deployment."
        canonical="https://iscalestudio.com/blog-post-8"
        type="article"
        schema={pageSchema}
        article={{
          publishedTime: "2024-11-18",
          author: "iScale Studio",
          section: "Tech Stack"
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
              <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">Tech Stack</Badge>
              <span className="text-sm text-gray-700">Nov 18, 2024</span>
              <span className="text-sm text-gray-700">•</span>
              <span className="text-sm text-gray-700">11 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Building Scalable Microservices with Node.js and Kubernetes</h1>
            <p className="text-base sm:text-lg text-gray-700">A comprehensive guide to containerizing and orchestrating Node.js applications for enterprise-scale deployment.</p>
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
              As applications grow, monolithic architectures become difficult to maintain and scale. Microservices offer a solution, but the complexity of managing dozens or hundreds of services requires orchestration platforms like Kubernetes.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Microservices Architecture</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Breaking your application into microservices means each service handles a specific business capability, can be developed independently, and scales based on its own needs. This approach works particularly well with Node.js due to its lightweight nature and event-driven architecture.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Containerization with Docker</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Docker containers package your Node.js application with all its dependencies, ensuring consistency across development, testing, and production environments. Each microservice runs in its own container, isolated and independently manageable.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Kubernetes Orchestration</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Kubernetes automates container deployment, scaling, and management. It handles service discovery, load balancing, storage orchestration, and automatic rollouts/rollbacks. For production Node.js applications, Kubernetes provides the reliability and scalability enterprises require.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              The combination of microservices, Docker, and Kubernetes creates a powerful platform for building and maintaining large-scale applications that can scale elastically with demand while maintaining reliability.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
