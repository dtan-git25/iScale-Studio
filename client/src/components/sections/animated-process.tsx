import { motion } from "framer-motion";

export function AnimatedProcess() {
  const steps = [
    { 
      num: "01", 
      title: "Discovery & Consultation",
      color: "from-[#9929ea] to-[#8629e4]",
      lightColor: "#9929ea",
      desc: "Understanding your needs, goals, and technical environment.",
    },
    { 
      num: "02", 
      title: "Strategy & Planning", 
      color: "from-[#7c4dca] to-[#6a2fb8]",
      lightColor: "#7c4dca",
      desc: "Crafting the perfect solution approach for your business.",
    },
    { 
      num: "03", 
      title: "Design", 
      color: "from-[#5808fb] to-[#4a07eb]",
      lightColor: "#5808fb",
      desc: "Create solution architecture, design, and technical specifications.",
    },
    { 
      num: "04", 
      title: "Development", 
      color: "from-[#2DBFBA] to-[#229f96]",
      lightColor: "#2DBFBA",
      desc: "Building your AI-powered solution with best practices.",
    },
    { 
      num: "05", 
      title: "Testing & Launch", 
      color: "from-[#1a8a82] to-[#0f5450]",
      lightColor: "#1a8a82",
      desc: "Ensuring excellence in every detail and going live.",
    }
  ];

  const colors = ["#9929ea", "#7c4dca", "#5808fb", "#2DBFBA", "#1a8a82"];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      <motion.div
        animate={{ x: [0, 40, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -bottom-32 left-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A structured approach to deliver world-class solutions.
            </p>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex gap-1 justify-center h-2 mb-32"
          style={{ originX: 0.5 }}
        >
          {colors.map((color, idx) => (
            <motion.div
              key={idx}
              className="flex-1 h-full rounded-full"
              style={{ backgroundColor: color }}
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{ duration: 2, delay: idx * 0.2, repeat: Infinity }}
            />
          ))}
        </motion.div>

        {/* Main Flow - Center aligned with better spacing */}
        <div className="relative mx-auto" style={{ maxWidth: "1200px" }}>
          {/* Top boxes - Larger spacing */}
          <div className="mb-40 flex justify-between px-4">
            {/* Box 1 - Left */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="w-40"
            >
              <motion.div
                className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: colors[0] }}>
                  {steps[0].title}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{steps[0].desc}</p>
              </motion.div>
            </motion.div>

            {/* Box 2 - Center-Left */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-40"
            >
              <motion.div
                className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: colors[1] }}>
                  {steps[1].title}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{steps[1].desc}</p>
              </motion.div>
            </motion.div>

            {/* Box 3 - Center */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-40"
            >
              <motion.div
                className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: colors[2] }}>
                  {steps[2].title}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{steps[2].desc}</p>
              </motion.div>
            </motion.div>

            {/* Box 4 - Center-Right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-40"
            >
              <motion.div
                className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: colors[3] }}>
                  {steps[3].title}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{steps[3].desc}</p>
              </motion.div>
            </motion.div>

            {/* Box 5 - Right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-40"
            >
              <motion.div
                className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: colors[4] }}>
                  {steps[4].title}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{steps[4].desc}</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Circle Row - Proper spacing */}
          <div className="flex justify-between items-center px-0 mb-0 relative z-20">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="flex flex-col items-center group cursor-pointer flex-1"
              >
                <motion.div
                  className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, delay: idx * 0.15, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-2 border-2 border-white/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10">{step.num}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
