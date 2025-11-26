import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
          <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
            About iScale Studio
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
              className="text-lg text-gray-700 leading-relaxed mb-8"
            >
              iScale Studio is a Philippines-based technology agency specializing in AI-powered web and mobile app development, workflow automation, AI agent development, and e-commerce solutions. We help businesses streamline operations, elevate customer experiences, and scale with efficiency.
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

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "250+", label: "Projects Delivered", icon: "📊" },
                { value: "50+", label: "Satisfied Clients", icon: "👥" },
                { value: "7+", label: "Years of Expertise", icon: "⭐" },
                { value: "5.0", label: "Ratings", icon: "🏆" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-white/95 to-white/60 backdrop-blur-xl border border-white/60 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group"
                  data-testid={`stat-card-${idx}`}
                >
                  {/* Gradient background accent */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9929ea]/5 to-[#2DBFBA]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                    <motion.p
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-[#9929ea] to-[#2DBFBA] bg-clip-text text-transparent mb-2"
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-sm sm:text-base text-gray-700 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 p-6 sm:p-8 bg-gradient-to-r from-[#9929ea]/15 to-[#2DBFBA]/15 border border-[#9929ea]/40 rounded-2xl backdrop-blur-md relative overflow-hidden group"
            >
              {/* Animated gradient background */}
              <motion.div
                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity"
              />
              <div className="relative z-10">
                <p className="text-center text-sm sm:text-base">
                  <span className="font-display font-bold text-gray-900">Trusted by Philippines' Leading Brands</span>
                  <br />
                  <span className="text-gray-700">Powering businesses with AI innovation and automation</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
