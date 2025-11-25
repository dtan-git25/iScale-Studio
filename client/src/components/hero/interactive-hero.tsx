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

        {/* Client Logos Carousel */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-12 overflow-hidden bg-gradient-to-r from-white/0 via-white/40 to-white/0 py-8">
          <p className="text-center text-sm text-gray-600 mb-6">Trusted by leading companies</p>
          <motion.div
            className="flex gap-8 justify-start"
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[
              { name: "TechVision", color: "from-blue-500 to-blue-600" },
              { name: "DataFlow", color: "from-purple-500 to-purple-600" },
              { name: "CloudSync", color: "from-cyan-500 to-cyan-600" },
              { name: "AI Systems", color: "from-emerald-500 to-emerald-600" },
              { name: "InnovateLabs", color: "from-orange-500 to-orange-600" },
              { name: "Digital Hub", color: "from-pink-500 to-pink-600" },
              { name: "Future Corp", color: "from-indigo-500 to-indigo-600" },
              { name: "NextGen AI", color: "from-rose-500 to-rose-600" },
            ].map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-40 h-24 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`bg-gradient-to-br ${client.color} p-3 rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm text-center px-2">{client.name}</span>
                </div>
              </div>
            ))}
            {[
              { name: "TechVision", color: "from-blue-500 to-blue-600" },
              { name: "DataFlow", color: "from-purple-500 to-purple-600" },
              { name: "CloudSync", color: "from-cyan-500 to-cyan-600" },
              { name: "AI Systems", color: "from-emerald-500 to-emerald-600" },
            ].map((client, idx) => (
              <div
                key={`repeat-${idx}`}
                className="flex-shrink-0 w-40 h-24 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`bg-gradient-to-br ${client.color} p-3 rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm text-center px-2">{client.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
