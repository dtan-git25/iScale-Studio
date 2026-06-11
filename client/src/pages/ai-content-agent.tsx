import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead, createServiceSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function AIContentAgent() {
  const pageSchema = [
    createServiceSchema(
      "AI Content Agent",
      "Scale content production with AI-powered creation and optimization. Generate blog posts, social media content, and marketing copy with brand voice consistency.",
      "https://www.iscalestudio.com/ai-content-agent"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://www.iscalestudio.com" },
      { name: "Services", url: "https://www.iscalestudio.com/services" },
      { name: "AI Agents", url: "https://www.iscalestudio.com/services/ai-agents" },
      { name: "AI Content Agent", url: "https://www.iscalestudio.com/ai-content-agent" }
    ])
  ];

  return (
    <>
      <SEOHead
        title="AI Content Agent | Automated Content Creation | iScale Studio"
        description="Scale content production with AI-powered creation and optimization. Generate blog posts, social media content, and marketing copy with brand voice consistency."
        canonical="https://www.iscalestudio.com/ai-content-agent"
        schema={pageSchema}
      />
      <div className="min-h-screen pt-20 pb-12">
      <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-[#9929ea] hover:text-[#7a1fbf] transition-colors mb-6 text-sm sm:text-base">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-5xl mb-4">✍️</div>
            <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 mb-4">AI Content Agent</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Scale Content Production with AI Content Agent</h1>
            <p className="text-base sm:text-lg text-gray-700">Generate high-quality content at scale, optimize messaging, and publish across channels with intelligent content creation and management.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 relative overflow-hidden">
        <motion.div animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How AI Content Agent Works</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The AI Content Agent generates blog posts, social media content, email campaigns, and product descriptions. It understands your brand voice, optimizes for SEO, maintains consistency, and publishes content across all channels automatically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Key Capabilities</h2>
              <div className="space-y-3">
                {[
                  "Blog post and article generation",
                  "Social media content creation and scheduling",
                  "Email campaign copywriting and optimization",
                  "Product description and marketing copy",
                  "SEO optimization and keyword integration",
                  "Brand voice consistency and style guide adherence",
                  "Multi-language content generation",
                  "Content calendar planning and management"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#9929ea] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Business Impact</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/50 backdrop-blur-xl border border-white/40 rounded-2xl p-6">
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">10x</p>
                  <p className="text-sm text-gray-600">Content output</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">70%</p>
                  <p className="text-sm text-gray-600">Time reduction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">30%</p>
                  <p className="text-sm text-gray-600">More engagement</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">24/7</p>
                  <p className="text-sm text-gray-600">Content creation</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Marketing teams scaling content production</li>
                <li>• E-commerce sites managing product descriptions</li>
                <li>• Content creators producing multiple pieces daily</li>
                <li>• Social media managers handling multi-channel posting</li>
                <li>• SEO-focused businesses producing blog content at scale</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
