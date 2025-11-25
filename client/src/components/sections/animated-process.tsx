import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AnimatedProcess() {
  const steps = [
    { 
      num: "01", 
      title: "Discovery & Consultation",
      color: "from-[#9929ea] to-[#8629e4]",
      lightColor: "#9929ea",
      desc: "Understanding your needs, goals, and technical environment.",
      position: "top"
    },
    { 
      num: "02", 
      title: "Strategy & Planning", 
      color: "from-[#7c4dca] to-[#6a2fb8]",
      lightColor: "#7c4dca",
      desc: "Crafting the perfect solution approach for your business.",
      position: "bottom"
    },
    { 
      num: "03", 
      title: "Design", 
      color: "from-[#5808fb] to-[#4a07eb]",
      lightColor: "#5808fb",
      desc: "Create solution architecture, design, and technical specifications.",
      position: "top"
    },
    { 
      num: "04", 
      title: "Development", 
      color: "from-[#2DBFBA] to-[#229f96]",
      lightColor: "#2DBFBA",
      desc: "Building your AI-powered solution with best practices.",
      position: "bottom"
    },
    { 
      num: "05", 
      title: "Testing & Launch", 
      color: "from-[#1a8a82] to-[#0f5450]",
      lightColor: "#1a8a82",
      desc: "Ensuring excellence in every detail and going live.",
      position: "top"
    }
  ];

  const colors = ["#9929ea", "#7c4dca", "#5808fb", "#2DBFBA", "#1a8a82"];

  return (
    <div className="relative py-20">
      {/* Animated background */}
      <motion.div
        animate={{ x: [0, 40, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -bottom-32 left-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10">
        {/* Title and Progress Bar */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            Our Development Process
          </motion.h2>

          {/* Animated Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex gap-1 justify-center items-center h-1.5"
            style={{ originX: 0.5 }}
          >
            {colors.map((color, idx) => (
              <motion.div
                key={idx}
                className="flex-1 h-full rounded-full"
                style={{ backgroundColor: color }}
                animate={{ scaleY: [1, 1.5, 1] }}
                transition={{ duration: 2, delay: idx * 0.2, repeat: Infinity }}
              />
            ))}
          </motion.div>
        </div>

        {/* Main Flow Container */}
        <div className="max-w-6xl mx-auto px-4">
          {/* Top descriptions */}
          <div className="mb-24 space-y-0">
            {steps.filter(s => s.position === "top").map((step, idx) => {
              const topIndex = steps.findIndex(s => s === step);
              const xPercent = (topIndex / (steps.length - 1)) * 100;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ marginLeft: `${xPercent}%`, marginBottom: "80px" }}
                  className="w-48 group"
                >
                  <motion.div
                    className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md border border-white/40 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div 
                      className="text-sm font-bold mb-2 uppercase tracking-widest"
                      style={{ color: step.lightColor }}
                    >
                      {step.title}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Main Flow Line and Circles */}
          <div className="relative h-32 mb-24">
            {/* Connecting line */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.path
                d={`M 0 50 Q 250 30, 500 50 T 1000 50`}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
            </motion.svg>

            {/* Circles */}
            <div className="absolute top-0 w-full h-full flex justify-between items-center px-0">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Animated circle */}
                  <motion.div
                    className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-display font-bold text-3xl shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, delay: idx * 0.15, repeat: Infinity }}
                  >
                    {/* Inner circle */}
                    <motion.div
                      className="absolute inset-2 border-3 border-white/30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">{step.num}</span>
                  </motion.div>

                  {/* Step label under circle */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.2 }}
                    className="text-xs font-semibold text-gray-600 mt-3 text-center w-24"
                  >
                    {step.title}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom descriptions */}
          <div className="space-y-0">
            {steps.filter(s => s.position === "bottom").map((step, idx) => {
              const bottomIndex = steps.findIndex(s => s === step);
              const xPercent = (bottomIndex / (steps.length - 1)) * 100;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 2) * 0.1 }}
                  style={{ marginLeft: `${xPercent}%`, marginTop: "80px" }}
                  className="w-48 group"
                >
                  <motion.div
                    className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md border border-white/40 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ y: 5 }}
                  >
                    <div 
                      className="text-sm font-bold mb-2 uppercase tracking-widest"
                      style={{ color: step.lightColor }}
                    >
                      {step.title}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-32"
        >
          <p className="text-muted-foreground mb-4">Ready to get started with your project?</p>
          <motion.button
            whileHover={{ gap: "12px" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9929ea] to-[#5808fb] hover:from-[#8629e4] hover:to-[#4a07eb] text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Project <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
