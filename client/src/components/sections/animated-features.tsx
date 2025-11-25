import { motion } from "framer-motion";
import { Lightbulb, MapPin, Handshake, GitBranch, TrendingUp, Shield } from "lucide-react";

export function AnimatedFeatures() {
  const features = [
    { icon: Lightbulb, title: "AI Expertise", desc: "Specialized knowledge in AI integration and implementation with proven track record." },
    { icon: MapPin, title: "Philippine Market Knowledge", desc: "Deep understanding of local business needs, challenges, and opportunities." },
    { icon: Handshake, title: "Consultation-First Approach", desc: "Personalized solutions tailored to your specific business requirements." },
    { icon: GitBranch, title: "End-to-End Solutions", desc: "From concept and prototyping to deployment and ongoing support." },
    { icon: TrendingUp, title: "Proven Results", desc: "Track record of successful implementations delivering measurable ROI." },
    { icon: Shield, title: "Ongoing Support", desc: "Continued partnership after project delivery with ongoing optimization." }
  ];

  return (
    <div className="relative">
      {/* Animated background */}
      <motion.div
        animate={{ x: [0, 40, -40, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute -bottom-32 right-0 w-96 h-96 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
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
                  {/* Icon background with animation */}
                  <motion.div
                    className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-[#9929ea]/20 to-[#5808fb]/20 flex items-center justify-center group-hover:from-[#9929ea]/40 group-hover:to-[#5808fb]/40 transition-colors duration-300"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, delay: idx * 0.2, repeat: Infinity }}
                  >
                    <Icon className="h-7 w-7 text-[#9929ea] group-hover:scale-110 transition-transform" />
                  </motion.div>

                  <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-[#9929ea] transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-gray-600 transition-colors">{feature.desc}</p>

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
    </div>
  );
}
