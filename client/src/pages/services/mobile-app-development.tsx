import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import mobileDevImg from "@assets/generated_images/ai_mobile_app_development_interface.png";
import { SEOHead, createServiceSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function MobileAppDevelopmentPage() {
  const pageSchema = [
    createServiceSchema(
      "Mobile App Development",
      "Native iOS and Android app development plus cross-platform React Native apps, from design through App Store and Google Play deployment.",
      "https://www.iscalestudio.com/services/mobile-app-development"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://www.iscalestudio.com" },
      { name: "Services", url: "https://www.iscalestudio.com/services" },
      { name: "Mobile App Development", url: "https://www.iscalestudio.com/services/mobile-app-development" }
    ])
  ];

  const features = [
    "Native iOS Apps (Swift & SwiftUI)",
    "Native Android Apps (Kotlin & Jetpack Compose)",
    "Cross-Platform Apps (React Native & Expo)",
    "App Store & Google Play Deployment",
    "Mobile UI/UX Design",
    "Ongoing Maintenance & Support"
  ];

  const benefits = [
    "Native performance and a platform-true look and feel",
    "One cross-platform codebase to reach iOS and Android faster",
    "Offline-first and push-notification-ready architectures",
    "Secure handling of user data and in-app authentication",
    "Smooth App Store and Google Play submission support",
    "Scalable foundations that grow with your user base"
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Mobile App Development | iOS, Android & React Native | iScale Studio"
        description="Native iOS (Swift) and Android (Kotlin) apps plus cross-platform React Native development. We design, build, and ship mobile apps to the App Store and Google Play."
        canonical="https://www.iscalestudio.com/services/mobile-app-development"
        schema={pageSchema}
      />
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-[#8629e4] hover:text-[#9929ea] text-sm font-medium mb-4 block">
            ← Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              Mobile App Development
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Build Powerful Mobile Apps</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              We design and build native iOS and Android apps, plus cross-platform apps with React Native — from first concept through App Store and Google Play launch. Fast, reliable, and built to scale.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={mobileDevImg} alt="Mobile App Development" className="rounded-xl shadow-lg" width="600" height="327" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">What We Deliver</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                From single-platform native apps to cross-platform builds that share one codebase, we deliver polished mobile experiences. We cover the full lifecycle — design, development, store submission, and post-launch support.
              </p>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-12 mb-20"
          >
            <h2 className="text-4xl font-bold mb-12">Why Choose Our Mobile App Development?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-[#9929ea] to-[#5808fb]">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured Mobile App Development Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12">Featured Mobile Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🍎",
                  title: "Native iOS",
                  description: "High-performance iPhone and iPad apps built with Swift and SwiftUI for a true Apple experience",
                  features: ["Swift", "SwiftUI", "App Store"]
                },
                {
                  icon: "🤖",
                  title: "Native Android",
                  description: "Modern Android apps built with Kotlin and Jetpack Compose, optimized across devices",
                  features: ["Kotlin", "Jetpack Compose", "Google Play"]
                },
                {
                  icon: "⚛️",
                  title: "Cross-Platform",
                  description: "Ship to iOS and Android from a single React Native codebase to move faster and spend less",
                  features: ["React Native", "Expo", "Single Codebase"]
                },
                {
                  icon: "🚀",
                  title: "Store Deployment",
                  description: "We handle App Store and Google Play submission, review, and ongoing release management",
                  features: ["App Store", "Google Play", "Releases"]
                },
                {
                  icon: "🎨",
                  title: "Mobile UI/UX",
                  description: "Intuitive, accessible mobile interfaces designed around how people actually use their phones",
                  features: ["Wireframes", "Prototypes", "Design Systems"]
                },
                {
                  icon: "🛠️",
                  title: "Maintenance & Support",
                  description: "Post-launch monitoring, OS-update compatibility, and continuous improvements over time",
                  features: ["Updates", "Monitoring", "Bug Fixes"]
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="text-5xl mb-4">{item.icon}</div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9929ea] group-hover:to-[#5808fb] transition-all">
                      {item.title}
                    </h3>

                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <Badge key={i} className="bg-gradient-to-r from-[#9929ea]/10 to-[#5808fb]/10 border border-[#9929ea]/30 text-gray-700 hover:from-[#9929ea]/20 hover:to-[#5808fb]/20 transition-all text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl font-bold">Ready to Launch Your Mobile App?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Let's talk about your idea and map the fastest path to a polished app on iOS and Android.
            </p>
            <Link href="/booking">
              <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
