import { motion } from "framer-motion";
import { Globe, Workflow, Cpu, Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function AnimatedServices() {
  const services = [
    {
      icon: Globe,
      title: "AI Web & App Development",
      desc: "Custom web applications and mobile apps powered by artificial intelligence.",
      color: "#8629e4"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      desc: "Streamline business processes and eliminate manual tasks with intelligent automation."
    },
    {
      icon: Cpu,
      title: "AI Agents",
      desc: "Intelligent autonomous agents powered by advanced AI models for complex operations."
    }
  ];

  return (
    <div>
      {/* Animated background */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, delay: idx * 0.2, repeat: Infinity }}
                className="group h-full"
              >
                <div className="relative h-full bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/30 p-8 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}15, transparent)`
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#9929ea]/20 to-[#5808fb]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, delay: idx * 0.3, repeat: Infinity }}
                    >
                      <Icon className="h-8 w-8 text-[#9929ea]" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">{service.desc}</p>

                    <div className="mb-6 space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                          className="flex items-center gap-2"
                        >
                          <Check className="h-4 w-4 text-[#9929ea] shrink-0" />
                          <span className="text-xs text-gray-700">Feature included</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link href="/services">
                      <motion.a
                        className="inline-flex items-center text-sm font-medium text-[#9929ea] hover:text-[#8629e4] transition-colors group/link"
                        whileHover={{ x: 5 }}
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </motion.a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
