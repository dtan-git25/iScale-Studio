import { motion } from "framer-motion";

export function AnimatedProcess() {
  const steps = [
    { num: "01", title: "Discovery & Consultation", desc: "Understanding your needs, goals, and technical environment." },
    { num: "02", title: "Strategy & Planning", desc: "Crafting the perfect solution approach for your business." },
    { num: "03", title: "Development", desc: "Building your AI-powered solution with best practices." },
    { num: "04", title: "Testing & Refinement", desc: "Ensuring excellence in every detail." },
    { num: "05", title: "Launch & Support", desc: "Going live and ongoing optimization." }
  ];

  return (
    <div className="relative">
      {/* Animated background orbs */}
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -top-20 -left-32 w-80 h-80 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="group"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, delay: idx * 0.2, repeat: Infinity }}
              className="h-full"
            >
              <div className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/30 p-6 rounded-xl h-full hover:border-white/50 transition-all duration-300 group hover:shadow-xl">
                {/* Animated number background */}
                <motion.div
                  className="text-6xl font-display font-bold bg-gradient-to-r from-[#9929ea]/15 to-[#5808fb]/15 bg-clip-text text-transparent mb-3 group-hover:from-[#9929ea]/25 group-hover:to-[#5808fb]/25 transition-all duration-300"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: idx * 0.3, repeat: Infinity }}
                >
                  {step.num}
                </motion.div>

                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#9929ea] transition-colors">{step.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-gray-600 transition-colors">{step.desc}</p>

                {/* Animated progress bar */}
                <motion.div
                  className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#9929ea] to-[#5808fb]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.3, duration: 1 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
