import { motion } from "framer-motion";
import { Users, Workflow, Zap, Plug, Brain, Headphones, ArrowLeftRight } from "lucide-react";

export function ComprehensiveSolutions() {
  const solutions = [
    {
      icon: Users,
      badge: "Partnership",
      title: "AI Automation Delivery Partner",
      desc: "We offer white-label AI automation services, allowing agencies to present our team as their own.",
      features: [
        "White-label solutions",
        "Expert team extension",
        "Scalable delivery",
        "Full project management"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Workflow,
      badge: "Popular",
      title: "Business Process Automation",
      desc: "Streamline operations with powerful automation platforms to eliminate repetitive tasks.",
      features: [
        "Process optimization",
        "Workflow design",
        "Task automation",
        "Efficiency improvement"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      badge: "AI Powered",
      title: "AI Agents",
      desc: "Create dynamic AI agents that drive engagement, nurture leads, and boost conversions automatically.",
      features: [
        "Lead nurturing",
        "Customer engagement",
        "Automated responses",
        "Conversion optimization"
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Plug,
      badge: "Integration",
      title: "API Integrations",
      desc: "Connect your business tools with custom API for seamless data flow and unified operations.",
      features: [
        "Custom integrations",
        "Data synchronization",
        "System connectivity",
        "Real-time updates"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      badge: "Advanced",
      title: "AI Automation",
      desc: "Leverage AI to automate decision-making, data analysis, and predictive insights for your business.",
      features: [
        "Decision automation",
        "Data analysis",
        "Predictive insights",
        "Machine learning"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Headphones,
      badge: "Staffing",
      title: "AI Staff Solutions",
      desc: "Get expert AI-powered staff solutions tailored for your business needs.",
      features: [
        "Virtual assistants",
        "AI support staff",
        "Custom training",
        "24/7 availability"
      ],
      color: "from-red-500 to-rose-500"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-[#9929ea] uppercase tracking-widest mb-4">Our Solutions</p>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight">
              Comprehensive AI & Automation Solutions For Modern Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From white-label partnerships to custom AI automation, we deliver intelligent solutions that streamline operations and drive growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <div className="border border-gray-200 rounded-2xl p-8 h-full bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col">
                    {/* Badge and Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
                        {solution.badge}
                      </span>
                      <motion.div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center`}
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, delay: idx * 0.2, repeat: Infinity }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {solution.desc}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 + i * 0.05 }}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-[#9929ea] mt-1">•</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Learn More ArrowLeftRight */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-black text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? We create tailored automation strategies for unique business needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-300 text-gray-900 font-semibold py-2.5 px-8 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
          >
            Discuss Custom Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
