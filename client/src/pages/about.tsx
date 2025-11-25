import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Lightbulb, Zap, Target, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-20 bg-gradient-to-b from-violet-900/20 to-purple-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">About iScale Studio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a next-generation software development agency obsessed with efficiency and innovation.
          </p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-2xl mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">We are iScale Studio.</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              iScale Studio is a next-generation software development agency obsessed with efficiency. We believe that the future of business lies in the intelligent combination of human creativity and artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-2xl mb-12"
          >
            <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To democratize enterprise-grade automation and AI technology for businesses of all sizes. We help you reclaim your time, reduce operational costs, and scale without the growing pains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-display text-white mb-8">How We Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Lightbulb, title: "01. Analyze", desc: "We deep-dive into your current processes to identify bottlenecks and opportunities for automation.", color: "from-cyan-500 to-blue-500" },
                { icon: Target, title: "02. Architect", desc: "We design a custom solution using the best tools for the job—whether that's custom code or low-code platforms.", color: "from-purple-500 to-pink-500" },
                { icon: Zap, title: "03. Automate", desc: "We build, test, and deploy your solution, ensuring seamless integration with your existing stack.", color: "from-orange-500 to-red-500" },
                { icon: Users, title: "04. Accelerate", desc: "With manual work removed, your team focuses on high-value tasks, accelerating growth.", color: "from-emerald-500 to-teal-500" }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, delay: idx * 0.1, repeat: Infinity }}
                    whileHover={{ y: -8 }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white/5 to-transparent border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-6">Ready to meet the team?</h2>
            <Link href="/contact">
              <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
