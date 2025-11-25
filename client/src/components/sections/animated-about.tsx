import { motion } from "framer-motion";
import { Building2, Users, Zap, TrendingUp, Sparkles, Lightbulb, Target, Award } from "lucide-react";

export function AnimatedAbout() {
  const highlights = [
    { icon: Building2, title: "5+ Years Experience", desc: "Established expertise in AI and automation solutions" },
    { icon: Users, title: "50+ Team Members", desc: "Expert developers, designers, and AI specialists" },
    { icon: Zap, title: "200+ Projects", desc: "Successfully delivered across diverse industries" },
    { icon: TrendingUp, title: "98% Satisfaction", desc: "Proven track record of client success and growth" }
  ];

  const values = [
    { icon: Lightbulb, title: "Innovation First", desc: "We leverage cutting-edge AI and automation technologies" },
    { icon: Target, title: "Results Driven", desc: "Every solution is built to deliver measurable business impact" },
    { icon: Award, title: "Quality Excellence", desc: "Highest standards in code, design, and customer service" }
  ];

  const services = [
    "App Development", "E-Commerce Solutions", "Web Development", "AI Automation",
    "Business Process Automation", "AI Agents", "API Integrations", "Workflow Design", "Custom Solutions", "White-label Services"
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-white/50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9929ea]/10 to-[#2DBFBA]/10 border border-[#9929ea]/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#9929ea]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#9929ea] to-[#2DBFBA] bg-clip-text text-transparent">About iScale Studio</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-3xl"
        >
          Philippines-based AI Development & Automation Agency
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 mb-16 max-w-3xl leading-relaxed"
        >
          Helping businesses streamline operations, elevate customer experiences, and scale with efficiency through AI-powered solutions and intelligent automation.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, delay: idx * 0.15, repeat: Infinity }}
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <div className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/30 p-8 rounded-2xl h-full shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <motion.div
                      className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-[#9929ea]/20 to-[#5808fb]/20 flex items-center justify-center group-hover:from-[#9929ea]/40 group-hover:to-[#5808fb]/40 transition-colors duration-300"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, delay: idx * 0.2, repeat: Infinity }}
                    >
                      <Icon className="h-7 w-7 text-[#9929ea] group-hover:scale-110 transition-transform" />
                    </motion.div>

                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#9929ea] transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>

                    {/* Animated bottom border */}
                    <motion.div
                      className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden"
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#9929ea] to-[#5808fb]"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.2, duration: 0.8 }}
                        style={{ originX: 0 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl lg:text-3xl font-bold mb-12 text-center"
          >
            Our Core Values
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, delay: idx * 0.2, repeat: Infinity }}
                    className="group h-full"
                  >
                    <div className="relative h-full bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/30 p-8 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Animated gradient background on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, #9929ea15, transparent)`
                        }}
                      />

                      <div className="relative z-10">
                        <motion.div
                          className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#9929ea]/20 to-[#5808fb]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, delay: idx * 0.3, repeat: Infinity }}
                        >
                          <Icon className="h-8 w-8 text-[#9929ea]" />
                        </motion.div>

                        <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed text-sm">{value.desc}</p>

                        {/* Accent line */}
                        <div className="h-1 w-12 bg-gradient-to-r from-[#9929ea] to-[#5808fb] rounded-full group-hover:w-full transition-all duration-300"></div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">What We Offer</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {services.map((service, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-[#9929ea]/8 via-[#5808fb]/8 to-[#2DBFBA]/8 border border-[#9929ea]/40 rounded-full text-sm font-medium text-gray-800 hover:border-[#9929ea]/80 hover:shadow-lg hover:shadow-[#9929ea]/20 transition-all duration-300 backdrop-blur-sm cursor-default"
              >
                {service}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
