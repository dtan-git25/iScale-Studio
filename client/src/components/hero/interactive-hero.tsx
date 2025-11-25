import { motion } from "framer-motion";
import { Code2, Workflow, Cpu, ShoppingCart } from "lucide-react";

const FloatingCard = ({ delay, icon: Icon, text, description }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, delay, repeat: Infinity }}
        className="p-6 rounded-xl bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
      >
        <div className="flex items-start gap-4">
          <div className="text-[#9929ea] group-hover:scale-110 transition-transform flex-shrink-0">
            <Icon className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-gray-900 mb-1 text-sm">{text}</h3>
            <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function InteractiveHero() {
  const features = [
    {
      icon: Code2,
      text: "AI Web & App Development",
      description: "Custom AI-powered web and mobile applications"
    },
    {
      icon: Workflow,
      text: "Workflow Automation",
      description: "Intelligent process automation solutions"
    },
    {
      icon: Cpu,
      text: "AI Agent Development",
      description: "Deploy autonomous AI agents"
    },
    {
      icon: ShoppingCart,
      text: "E-commerce Solutions",
      description: "AI-enhanced online store platforms"
    }
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-transparent via-[#9929ea]/5 to-transparent py-16">
      {/* Subtle animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-20 -right-32 w-64 h-64 bg-gradient-to-br from-[#9929ea]/15 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-20 -left-32 w-64 h-64 bg-gradient-to-br from-[#2DBFBA]/15 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
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

        {/* Client Logos */}
        <div className="flex justify-center mb-12">
          <div className="w-full">
            <p className="text-center text-xs text-gray-600 mb-8 uppercase tracking-wide">Trusted by leading companies</p>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {["Boosterio", "Atomic SEO", "Voley", "IBM Media", "GreenHost"].map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="flex items-center justify-center"
                >
                  <span className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">{client}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
