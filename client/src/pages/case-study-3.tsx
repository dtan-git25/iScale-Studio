import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { SEOHead, createWebPageSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function CaseStudy3() {
  const pageSchema = [
    createWebPageSchema(
      "Healthcare Data Analytics System | iScale Studio Case Study",
      "Predictive analytics platform that improves treatment outcomes by 35% with 92% prediction accuracy for 100K+ patients.",
      "https://iscalestudio.com/case-study-3"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Case Studies", url: "https://iscalestudio.com/case-studies" },
      { name: "Healthcare Data Analytics", url: "https://iscalestudio.com/case-study-3" }
    ])
  ];

  return (
    <>
      <SEOHead
        title="Healthcare Data Analytics System | iScale Studio Case Study"
        description="Predictive analytics platform that improves treatment outcomes by 35% with 92% prediction accuracy for 100K+ patients."
        canonical="https://iscalestudio.com/case-study-3"
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
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 mb-4">Healthcare</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Healthcare Data Analytics System</h1>
            <p className="text-base sm:text-lg text-gray-700">Predictive analytics platform that improves treatment outcomes by 35%.</p>
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
                  <p className="text-sm text-gray-600 mb-1">Outcomes Improved</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">35%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Prediction Accuracy</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">92%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Timeline</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">5 Months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Patients</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">100K+</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">The Challenge</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              A hospital network with 100,000+ patients wanted to improve patient outcomes and reduce readmission rates. They had decades of electronic health records but lacked the analytical capability to identify high-risk patients early or predict which interventions would be most effective for different populations.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Our Solution</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              We built a comprehensive healthcare analytics platform that ingests data from their EHR systems and uses advanced machine learning to identify patients at risk of adverse outcomes. The system provides clinicians with personalized treatment recommendations, risk scores, and alerts for intervention opportunities.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>✓ Patient risk prediction models</li>
              <li>✓ Real-time clinical alerts and notifications</li>
              <li>✓ Treatment outcome recommendations</li>
              <li>✓ Readmission prevention strategies</li>
              <li>✓ HIPAA-compliant data handling</li>
              <li>✓ Clinician-friendly dashboard with evidence-based insights</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Results</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              The analytics platform significantly improved patient care and hospital operations:
            </p>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>• <strong>35% improvement</strong> in patient outcomes</li>
              <li>• <strong>28% reduction</strong> in hospital readmissions</li>
              <li>• <strong>92% accuracy</strong> in identifying high-risk patients</li>
              <li>• <strong>40% faster</strong> clinical decision-making</li>
              <li>• <strong>$8M annually</strong> saved in avoidable readmissions</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Technology Stack</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Data Pipeline: Apache Spark for processing large healthcare datasets | Machine Learning: Python with scikit-learn and XGBoost for predictive models | Backend: Node.js with Express | Database: PostgreSQL with encryption | Frontend: React with secure health data visualization | Compliance: HIPAA encryption and audit logging
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Impact</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              This project demonstrated how AI can drive meaningful improvements in healthcare. By providing clinicians with data-driven insights, we enabled earlier interventions, more targeted treatments, and ultimately saved lives while reducing costs.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
