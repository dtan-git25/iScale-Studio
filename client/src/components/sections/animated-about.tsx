import { motion } from "framer-motion";
import { Building2, Users, Zap, TrendingUp } from "lucide-react";

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
    <section className="py-24 bg-white relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
            About iScale Studio
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 leading-tight">
              Philippines-based AI Development & Automation Agency Helping Businesses Scale Smarter
            </h2>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base text-muted-foreground leading-relaxed"
              >
                iScale Studio is a Philippines-based technology agency specializing in AI-powered web and mobile app development, workflow automation, AI agent development, and e-commerce solutions. We help businesses streamline operations, elevate customer experiences, and scale with efficiency.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base text-muted-foreground leading-relaxed"
              >
                From intelligent apps that automate tasks to AI agents that handle customer engagement, our solutions are built to reduce manual work, unlock productivity, and accelerate growth. We combine modern design, engineering, and automation to create systems that adapt and scale with your business.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base text-muted-foreground leading-relaxed"
              >
                Our goal is simple: empower companies with future-ready technology that makes everyday operations faster, smarter, and more efficient.
              </motion.p>
            </div>

            {/* Service Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {services.map((service, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-[#9929ea]/10 to-[#5808fb]/10 border border-[#9929ea]/30 rounded-full text-xs font-medium text-gray-700 hover:border-[#9929ea]/60 hover:bg-gradient-to-r hover:from-[#9929ea]/20 hover:to-[#5808fb]/20 transition-all"
                >
                  {service}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="group"
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.5, delay: idx * 0.15, repeat: Infinity }}
                    whileHover={{ y: -8 }}
                    className="h-full"
                  >
                    <div className="bg-gradient-to-br from-white to-white/60 backdrop-blur-md border border-white/40 p-4 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
                      <motion.div
                        className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9929ea]/20 to-[#5808fb]/20 flex items-center justify-center mx-auto mb-2 group-hover:from-[#9929ea]/40 group-hover:to-[#5808fb]/40 transition-colors"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, delay: idx * 0.2, repeat: Infinity }}
                      >
                        <Icon className="h-4 w-4 text-[#9929ea]" />
                      </motion.div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#9929ea] to-[#5808fb] bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
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
