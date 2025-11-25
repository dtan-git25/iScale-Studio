import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Brain, Zap, Cpu } from "lucide-react";

const FloatingCard = ({ delay, icon: Icon, text, description }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, delay, repeat: Infinity }}
        className="p-6 rounded-xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer group"
      >
        <div className="flex items-start gap-4">
          <div className="text-[#9929ea] group-hover:scale-110 transition-transform">
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">{text}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function InteractiveHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: Code2,
      text: "Custom Applications",
      description: "Build scalable web and mobile apps tailored to your business needs"
    },
    {
      icon: Brain,
      text: "AI Intelligence",
      description: "Integrate cutting-edge AI models for smarter decision making"
    },
    {
      icon: Zap,
      text: "Fast Deployment",
      description: "Get your solutions to market quickly with our agile process"
    },
    {
      icon: Cpu,
      text: "Smart Automation",
      description: "Automate complex workflows and eliminate manual tasks"
    }
  ];

  return (
    <div className="relative w-full py-20">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#9929ea]/20 to-[#5808fb]/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#2DBFBA]/20 to-[#8629e4]/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, idx) => (
            <FloatingCard
              key={idx}
              delay={idx * 0.1}
              icon={feature.icon}
              text={feature.text}
              description={feature.description}
            />
          ))}
        </div>

        {/* Center interactive element */}
        <div className="flex justify-center">
          <motion.div
            animate={{ 
              scale: [1, 1.08, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#9929ea] to-[#5808fb] shadow-2xl shadow-[#9929ea]/40 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, linear: true }}
              >
                <Cpu className="h-14 w-14 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated code snippets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="p-4 rounded-lg bg-gray-900/60 backdrop-blur border border-white/10 font-mono text-xs text-green-400">
            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
              <div>&gt; Building intelligent solutions...</div>
              <div>&gt; AI + App Development = ✨</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
