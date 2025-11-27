import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { SEOHead, createWebPageSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function CaseStudy4() {
  const pageSchema = [
    createWebPageSchema(
      "Real Estate Platform with AI Matching | iScale Studio Case Study",
      "Intelligent property matching connecting buyers and sellers with 40% better matches and 3.5x higher conversion rates.",
      "https://iscalestudio.com/case-study-4"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Case Studies", url: "https://iscalestudio.com/case-studies" },
      { name: "Real Estate AI Matching", url: "https://iscalestudio.com/case-study-4" }
    ])
  ];

  return (
    <>
      <SEOHead
        title="Real Estate Platform with AI Matching | iScale Studio Case Study"
        description="Intelligent property matching connecting buyers and sellers with 40% better matches and 3.5x higher conversion rates."
        canonical="https://iscalestudio.com/case-study-4"
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
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 mb-4">Real Estate</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Real Estate Platform with AI Matching</h1>
            <p className="text-base sm:text-lg text-gray-700">Intelligent property matching connecting buyers and sellers with 40% better matches.</p>
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
                  <p className="text-sm text-gray-600 mb-1">Match Quality</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">40%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">3.5x</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Timeline</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">4 Months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Listings</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">25K+</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">The Challenge</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              A real estate platform connected thousands of buyers and sellers monthly, but the matching process was largely manual. Agents spent hours searching listings to find suitable properties for clients, and many transactions fell through because of poor initial matches that didn't meet buyer needs or expectations.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Our Solution</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              We developed an intelligent matching algorithm that considers dozens of factors: property features, location preferences, budget constraints, lifestyle priorities, neighborhood characteristics, and market trends. The system learns from user interactions to continuously improve match quality.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>✓ Multi-factor property matching algorithm</li>
              <li>✓ Neighborhood and lifestyle recommendations</li>
              <li>✓ Investment potential analysis</li>
              <li>✓ Market trend integration</li>
              <li>✓ Automated buyer-agent matching</li>
              <li>✓ Performance analytics dashboard</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Results</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              The matching platform transformed the agent experience and dramatically improved outcomes:
            </p>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>• <strong>40% improvement</strong> in match quality</li>
              <li>• <strong>3.5x increase</strong> in conversion rates</li>
              <li>• <strong>50% reduction</strong> in agent search time</li>
              <li>• <strong>28% fewer</strong> transaction failures</li>
              <li>• <strong>$2.4M additional</strong> commission revenue in first year</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Technology Stack</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Matching Engine: Python with scikit-learn and custom ML algorithms | Data Processing: Real estate market data integration | Backend: Node.js with PostgreSQL | Geospatial: PostGIS for location-based queries | Frontend: React with interactive property visualization
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Impact</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              This project showed how AI can dramatically improve a crucial workflow. Better matches mean happier clients, more successful transactions, and agents who spend less time on administrative work and more time building relationships.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
