import { motion } from "framer-motion";
import { Code2, Zap, Rocket, Cpu } from "lucide-react";

export function HeroServices() {
  const services = [
    {
      icon: Code2,
      title: "AI Web & App Development",
      desc: "Build scalable web and mobile apps",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Workflow Automation",
      desc: "Integrate cutting-edge AI models",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "AI Agent Development",
      desc: "Get to market quickly",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "E-commerce Solutions",
      desc: "Eliminate manual tasks",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="h-full"
                >
                  <div className="border border-gray-200 rounded-2xl p-6 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                    <motion.div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, delay: idx * 0.2, repeat: Infinity }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{service.title}</h3>
                      <p className="text-xs text-gray-700">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
