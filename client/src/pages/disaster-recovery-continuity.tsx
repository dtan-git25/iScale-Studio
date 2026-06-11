import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { SEOHead, createArticleSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

const pageSchema = [
  createArticleSchema(
    "Building Resilient Systems: Disaster Recovery and Business Continuity",
    "Essential strategies for ensuring your business stays operational when systems fail.",
    "2024-11-10",
    "https://www.iscalestudio.com/blog/disaster-recovery-continuity",
    "DevOps"
  ),
  createBreadcrumbSchema([
    { name: "Home", url: "https://www.iscalestudio.com" },
    { name: "Blog", url: "https://www.iscalestudio.com/blog" },
    { name: "Building Resilient Systems: Disaster Recovery and Business Continuity", url: "https://www.iscalestudio.com/blog/disaster-recovery-continuity" }
  ])
];

export default function BlogPost12() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <SEOHead
        title="Building Resilient Systems: Disaster Recovery and Business Continuity | iScale Studio Blog"
        description="Essential strategies for ensuring your business stays operational when systems fail."
        canonical="https://www.iscalestudio.com/blog/disaster-recovery-continuity"
        type="article"
        schema={pageSchema}
        article={{
          publishedTime: "2024-11-10",
          author: "iScale Studio",
          section: "DevOps"
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
              <Badge className="bg-gradient-to-r from-violet-600 to-purple-600 text-white border-0">DevOps</Badge>
              <span className="text-sm text-gray-700">Nov 10, 2024</span>
              <span className="text-sm text-gray-700">•</span>
              <span className="text-sm text-gray-700">11 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Building Resilient Systems: Disaster Recovery and Business Continuity</h1>
            <p className="text-base sm:text-lg text-gray-700">Essential strategies for ensuring your business stays operational when systems fail.</p>
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
              When systems fail, the question isn't if but when. Every minute of downtime costs money—in lost transactions, damaged reputation, and customer churn. Resilient systems are designed to handle failures gracefully and recover quickly.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Understanding Recovery Metrics</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Recovery Point Objective (RPO) defines how much data loss is acceptable—hourly backups mean up to an hour of work could be lost. Recovery Time Objective (RTO) defines acceptable downtime. Critical systems might require RTO of minutes and RPO of seconds, while non-critical systems can tolerate hours.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Redundancy and Failover</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Single points of failure are unacceptable in resilient systems. Implement redundancy across databases, application servers, and network infrastructure. Automated failover mechanisms detect failures and redirect traffic to healthy systems without manual intervention.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Testing and Validation</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Disaster recovery plans are only valuable if they work. Regular disaster recovery drills—at least quarterly—ensure your team knows what to do and your systems respond as expected. Include realistic scenarios and measure actual recovery times.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Organizations that invest in resilience aren't just protecting themselves from disaster—they're gaining competitive advantage through superior customer experience and brand reputation. Customers trust services that stay operational.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
