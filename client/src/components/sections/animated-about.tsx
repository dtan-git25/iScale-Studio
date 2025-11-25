import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export function AnimatedAbout() {
  const highlights = [
    "Custom AI-powered web and mobile apps",
    "Intelligent workflow automation",
    "Autonomous AI agents",
    "E-commerce solutions",
    "Business process optimization"
  ];

  const achievements = [
    { year: "2019", milestone: "Founded iScale Studio" },
    { year: "2021", milestone: "Expanded AI & Automation focus" },
    { year: "2023", milestone: "50+ team members, 200+ projects" },
    { year: "2024", milestone: "Leading AI agency in PH" }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/8 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-[#2DBFBA]/8 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9929ea]/10 to-[#2DBFBA]/10 border border-[#9929ea]/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#9929ea]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#9929ea] to-[#2DBFBA] bg-clip-text text-transparent">About iScale Studio</span>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              <span className="text-gray-900">Empowering Philippine Businesses with</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#2DBFBA]">
                AI Innovation
              </span>
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700 leading-relaxed mb-8 font-light"
            >
              Since 2019, iScale Studio has been transforming businesses across the Philippines through cutting-edge AI development, intelligent automation, and custom software solutions. We believe technology should work harder, so your business can grow smarter.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#9929ea] shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/booking">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#9929ea] to-[#5808fb] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#9929ea]/40 transition-all"
                >
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </motion.a>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#9929ea] via-[#5808fb] to-[#2DBFBA]"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {achievements.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="relative pl-24"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, delay: idx * 0.2, repeat: Infinity }}
                      className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center border-4 border-white shadow-lg"
                    >
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md border border-white/60 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <p className="text-sm font-bold text-[#9929ea] mb-1">{item.year}</p>
                      <p className="text-lg font-bold text-gray-900">{item.milestone}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-12 p-6 bg-gradient-to-r from-[#9929ea]/10 to-[#2DBFBA]/10 border border-[#9929ea]/30 rounded-2xl backdrop-blur-sm"
            >
              <p className="text-sm text-gray-700 text-center">
                <span className="font-semibold text-gray-900">98% Client Satisfaction</span> — Trusted by over 50+ happy clients
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
