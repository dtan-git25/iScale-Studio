import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Brain, Zap, Cpu } from "lucide-react";

const FloatingCard = ({ delay, icon: Icon, text, className }: any) => {
  const [y, setY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`absolute ${className}`}
      style={{ transform: `translateY(${y}px)` }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, delay, repeat: Infinity }}
        className="p-4 rounded-xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/20 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="text-[#9929ea]">
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-sm font-mono text-gray-700">{text}</span>
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

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#9929ea]/20 to-[#5808fb]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#2DBFBA]/20 to-[#8629e4]/20 rounded-full blur-3xl"
      />

      {/* Floating interactive cards */}
      <FloatingCard
        delay={0}
        icon={Code2}
        text="Custom Apps"
        className="top-20 left-10 md:left-20"
      />
      <FloatingCard
        delay={0.2}
        icon={Brain}
        text="AI-Powered"
        className="top-32 right-10 md:right-20"
      />
      <FloatingCard
        delay={0.4}
        icon={Zap}
        text="Fast & Scalable"
        className="bottom-24 left-1/4"
      />
      <FloatingCard
        delay={0.6}
        icon={Cpu}
        text="Smart Automation"
        className="bottom-20 right-1/4 md:right-1/3"
      />

      {/* Center interactive element */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative z-10"
      >
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#9929ea] to-[#5808fb] shadow-2xl shadow-[#9929ea]/40 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, linear: true }}
          >
            <Cpu className="h-12 w-12 text-white" />
          </motion.div>
        </div>
      </motion.div>

      {/* Animated code snippets */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 max-w-md w-full"
      >
        <div className="p-4 rounded-lg bg-gray-900/60 backdrop-blur border border-white/10 font-mono text-xs text-green-400">
          <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
            <div>&gt; Building intelligent solutions...</div>
            <div>&gt; AI + App Development = ✨</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
