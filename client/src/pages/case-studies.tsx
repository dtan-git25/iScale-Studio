import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead, createBreadcrumbSchema, createWebPageSchema } from "@/components/seo/seo-head";

export default function CaseStudies() {
  const pageSchema = [
    createWebPageSchema(
      "Case Studies | AI & Automation Success Stories | iScale Studio",
      "Real results from real clients. Explore how iScale Studio's AI solutions transformed businesses across e-commerce, fintech, healthcare, and more.",
      "https://iscalestudio.com/case-studies"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Case Studies", url: "https://iscalestudio.com/case-studies" }
    ])
  ];
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform with AI Recommendation Engine",
      excerpt: "How we built an intelligent recommendation system that increased customer engagement by 150% and revenue by 45%.",
      industry: "E-Commerce",
      result: "+45% Revenue",
      timeline: "4 months",
      gradient: "from-pink-500 to-rose-500",
      link: "/case-study-1",
      metrics: {
        engagement: "150%",
        revenue: "45%",
        users: "50K+"
      }
    },
    {
      id: 2,
      title: "Financial Services Automation Platform",
      excerpt: "Streamlined invoice processing and financial workflows, reducing manual work by 80% and processing time from hours to minutes.",
      industry: "FinTech",
      result: "80% Automation",
      timeline: "3 months",
      gradient: "from-blue-500 to-cyan-500",
      link: "/case-study-2",
      metrics: {
        timeSaved: "80%",
        processing: "10 min",
        accuracy: "99.8%"
      }
    },
    {
      id: 3,
      title: "Healthcare Data Analytics System",
      excerpt: "Implemented predictive analytics platform that identifies patient risks and improves treatment outcomes by 35%.",
      industry: "Healthcare",
      result: "35% Better Outcomes",
      timeline: "5 months",
      gradient: "from-emerald-500 to-teal-500",
      link: "/case-study-3",
      metrics: {
        outcomes: "35%",
        prediction: "92%",
        patients: "100K+"
      }
    },
    {
      id: 4,
      title: "Real Estate Platform with AI Matching",
      excerpt: "Built intelligent property matching system connecting buyers and sellers with 40% improvement in match quality.",
      industry: "Real Estate",
      result: "40% Better Matches",
      timeline: "4 months",
      gradient: "from-amber-500 to-orange-500",
      link: "/case-study-4",
      metrics: {
        matches: "40%",
        conversion: "3.5x",
        listings: "25K+"
      }
    },
    {
      id: 5,
      title: "Marketing Automation Workflow",
      excerpt: "Created sophisticated automation workflows that reduced campaign setup time by 60% and improved conversion rates by 28%.",
      industry: "Marketing",
      result: "28% More Conversions",
      timeline: "6 weeks",
      gradient: "from-violet-500 to-purple-500",
      link: "/case-study-5",
      metrics: {
        setupTime: "60%",
        conversions: "28%",
        campaigns: "500+"
      }
    },
    {
      id: 6,
      title: "AI-Powered Customer Support System",
      excerpt: "Deployed intelligent chatbot handling 75% of support tickets automatically, improving response time by 90% and customer satisfaction.",
      industry: "Customer Service",
      result: "75% Automation",
      timeline: "2 months",
      gradient: "from-red-500 to-pink-500",
      link: "/case-study-6",
      metrics: {
        tickets: "75%",
        responseTime: "90%",
        satisfaction: "4.8/5"
      }
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      <SEOHead
        title="Case Studies | AI & Automation Success Stories | iScale Studio"
        description="Real results from real clients. Explore how iScale Studio's AI solutions transformed businesses across e-commerce, fintech, healthcare, and more."
        canonical="https://iscalestudio.com/case-studies"
        schema={pageSchema}
      />
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              Case Studies
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">Real Results, Real Impact</h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              Discover how we've helped businesses transform operations and achieve measurable growth with AI and automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <Link key={study.id} href={study.link} className="group block cursor-pointer h-full" data-testid={`case-study-card-${study.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="h-full bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                    {/* Header with gradient bar */}
                    <div className={`h-1 w-24 bg-gradient-to-r ${study.gradient} rounded-full mb-6`}></div>

                    {/* Industry Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className={`bg-gradient-to-r ${study.gradient} text-white border-0`}>
                        {study.industry}
                      </Badge>
                      <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb]">
                        {study.result}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9929ea] group-hover:to-[#5808fb] transition-all">
                      {study.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                      {study.excerpt}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/40 rounded-lg">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-xs text-gray-600 capitalize mb-1">{key}</p>
                          <p className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#2DBFBA]">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <span className="text-sm text-gray-600">Timeline: {study.timeline}</span>
                      <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb] font-medium group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="h-5 w-5 text-[#9929ea]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
