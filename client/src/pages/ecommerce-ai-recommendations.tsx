import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { SEOHead, createWebPageSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function CaseStudy1() {
  const pageSchema = [
    createWebPageSchema(
      "E-Commerce Platform with AI Recommendation Engine | iScale Studio Case Study",
      "How we built an intelligent AI recommendation system that increased customer engagement by 150% and revenue by 45% for an e-commerce platform.",
      "https://iscalestudio.com/portfolio/ecommerce-ai-recommendations"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Case Studies", url: "https://iscalestudio.com/case-studies" },
      { name: "E-Commerce AI Recommendation Engine", url: "https://iscalestudio.com/portfolio/ecommerce-ai-recommendations" }
    ])
  ];

  return (
    <>
      <SEOHead
        title="E-Commerce Platform with AI Recommendation Engine | iScale Studio Case Study"
        description="How we built an intelligent AI recommendation system that increased customer engagement by 150% and revenue by 45% for an e-commerce platform."
        canonical="https://iscalestudio.com/portfolio/ecommerce-ai-recommendations"
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
            <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 mb-4">E-Commerce</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">E-Commerce Platform with AI Recommendation Engine</h1>
            <p className="text-base sm:text-lg text-gray-700">How we built an intelligent system that increased customer engagement by 150% and revenue by 45%.</p>
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
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <div className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-2xl p-8 mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Engagement</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">150%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Revenue Growth</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">45%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Timeline</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">4 Months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Users</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">50K+</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">The Challenge</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Our client, a mid-sized e-commerce retailer, faced increasing competition in a crowded marketplace. While they had solid products and steady traffic, customer engagement and average order value were plateauing. They needed a way to personalize the shopping experience at scale and convert browsers into buyers.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Our Solution</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              We designed and built a sophisticated AI recommendation engine powered by machine learning algorithms that analyze customer behavior, purchase history, browsing patterns, and product attributes. The system provides real-time personalized product recommendations across multiple touchpoints: homepage, product pages, shopping cart, and email campaigns.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              The recommendation engine uses collaborative filtering and content-based algorithms to surface products each customer is most likely to purchase. The system continuously learns from user interactions, improving accuracy over time.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>✓ Real-time personalization across all customer touchpoints</li>
              <li>✓ Collaborative and content-based recommendation algorithms</li>
              <li>✓ A/B testing framework to optimize recommendation strategies</li>
              <li>✓ Behavioral analytics and user segmentation</li>
              <li>✓ Integration with existing inventory and order systems</li>
              <li>✓ Admin dashboard for monitoring performance metrics</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Results</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Within 4 months of launch, the platform delivered exceptional results:
            </p>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>• <strong>150% increase</strong> in customer engagement (time on site, pages per session)</li>
              <li>• <strong>45% growth</strong> in total revenue</li>
              <li>• <strong>38% increase</strong> in average order value</li>
              <li>• <strong>25% higher</strong> customer retention rate</li>
              <li>• <strong>3.2x improvement</strong> in click-through rates on recommendations</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Technology Stack</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Backend: Python with scikit-learn and TensorFlow for ML models, FastAPI for REST API | Database: PostgreSQL for transactions, Redis for caching | Frontend: React for real-time recommendation display | Infrastructure: AWS for scalability and reliability
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Lessons Learned</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              This project demonstrated the power of personalization in e-commerce. By combining machine learning with deep understanding of customer psychology, we created an experience that customers loved and that drove measurable business impact. The key to success was starting with clear metrics and continuously optimizing based on data.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
