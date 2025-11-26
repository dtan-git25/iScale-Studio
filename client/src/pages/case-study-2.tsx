import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

export default function CaseStudy2() {
  return (
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
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 mb-4">FinTech</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Financial Services Automation Platform</h1>
            <p className="text-base sm:text-lg text-gray-700">Streamlined invoice processing and workflows, reducing manual work by 80%.</p>
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
                  <p className="text-sm text-gray-600 mb-1">Automation</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">80%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Processing Time</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">10 min</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Timeline</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">3 Months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Accuracy</p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">99.8%</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">The Challenge</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              A financial services company struggled with manual invoice processing. Their accounting team spent hours daily entering invoices, validating amounts, checking vendor information, and routing approvals. This manual process was error-prone, slow, and limited their ability to scale operations.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Our Solution</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              We built an intelligent invoice processing platform using OCR (Optical Character Recognition) and machine learning to automatically extract and validate invoice data. The system intelligently routes invoices for approval based on customizable rules, integrates with their ERP system, and provides real-time visibility into payment status.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>✓ Automated OCR-based invoice data extraction</li>
              <li>✓ Intelligent vendor and cost code matching</li>
              <li>✓ Rule-based approval workflow routing</li>
              <li>✓ Real-time fraud detection and anomaly alerts</li>
              <li>✓ Integration with accounting software and ERPs</li>
              <li>✓ Comprehensive audit trail and compliance reporting</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Results</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              The automation platform delivered remarkable improvements:
            </p>
            <ul className="space-y-2 text-base sm:text-lg text-gray-700">
              <li>• <strong>80% reduction</strong> in manual data entry work</li>
              <li>• <strong>Processing time</strong> reduced from hours to minutes</li>
              <li>• <strong>99.8% accuracy</strong> in invoice recognition</li>
              <li>• <strong>2-person team</strong> now handles volume previously requiring 10 people</li>
              <li>• <strong>Early payment discounts</strong> captured due to faster processing</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Technology Stack</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Backend: Node.js with n8n for workflow automation | Machine Learning: Python with TensorFlow for document classification | Document Processing: Tesseract OCR and computer vision | Database: PostgreSQL | Integration: REST APIs with major ERP systems
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">Impact</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              This project showcased how intelligent automation can transform back-office operations. By automating routine, error-prone tasks, we freed up the accounting team to focus on strategic financial analysis and decision-making rather than data entry.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
