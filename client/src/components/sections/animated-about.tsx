import { motion } from "framer-motion";
import { Building2, Users, Zap, TrendingUp, Sparkles } from "lucide-react";

export function AnimatedAbout() {
  const stats = [
    { icon: Building2, value: "5+", label: "Years in Business" },
    { icon: Users, value: "50+", label: "Expert Team Members" },
    { icon: Zap, value: "200+", label: "Projects Delivered" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" }
  ];

  const services = [
    "App Development", "E-Commerce Solutions", "Web Development", "AI Automation",
    "Business Process Automation", "AI Agents", "API Integrations", "Workflow Design", "Custom Solutions", "White-label Services"
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-white/50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/12 to-[#2DBFBA]/8 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-[#2DBFBA]/12 to-[#9929ea]/8 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9929ea]/10 to-[#2DBFBA]/10 border border-[#9929ea]/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#9929ea]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#9929ea] to-[#2DBFBA] bg-clip-text text-transparent">About iScale Studio</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-8"
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Philippines-based AI Development
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#2DBFBA]">
                & Automation Agency
              </span>
            </motion.h2>

            {/* Description Paragraphs */}
            <div className="space-y-6 mb-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed font-light"
              >
                iScale Studio is a Philippines-based technology agency specializing in <span className="font-semibold text-gray-900">AI-powered web and mobile app development</span>, workflow automation, AI agent development, and e-commerce solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed font-light"
              >
                We help businesses <span className="font-semibold text-gray-900">streamline operations, elevate customer experiences, and scale with efficiency</span>. From intelligent apps that automate tasks to AI agents that handle customer engagement.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed font-light"
              >
                Our goal is simple: <span className="font-semibold text-gray-900">empower companies with future-ready technology</span> that makes everyday operations faster, smarter, and more efficient.
              </motion.p>
            </div>

            {/* Service Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
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
            </motion.div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                  className="group h-full"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, delay: idx * 0.2, repeat: Infinity }}
                    whileHover={{ y: -12 }}
                    className="h-full"
                  >
                    <div className="h-full bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative group">
                      {/* Gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#9929ea]/5 to-[#2DBFBA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      />

                      {/* Border glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          border: "1px solid transparent",
                          backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #9929ea, #2DBFBA)",
                          backgroundOrigin: "border-box",
                          backgroundClip: "padding-box, border-box"
                        }}
                      />

                      <div className="relative z-10">
                        {/* Icon Container */}
                        <motion.div
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9929ea]/20 to-[#5808fb]/20 flex items-center justify-center mx-auto mb-4 group-hover:from-[#9929ea]/40 group-hover:to-[#5808fb]/40 transition-all duration-300"
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 4, delay: idx * 0.2, repeat: Infinity }}
                          whileHover={{ scale: 1.15 }}
                        >
                          <Icon className="h-6 w-6 text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#2DBFBA]" />
                        </motion.div>

                        {/* Value */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-[#9929ea] to-[#2DBFBA] bg-clip-text text-transparent mb-2 text-center"
                        >
                          {stat.value}
                        </motion.div>

                        {/* Label */}
                        <p className="text-sm lg:text-base font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
