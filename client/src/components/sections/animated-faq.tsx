import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, DollarSign, Zap, Lightbulb, HeartHandshake, Shield } from "lucide-react";

export function AnimatedFAQ() {
  const faqs = [
    { q: "How long does a typical project take?", a: "Project timelines vary based on scope. Simple automations can be done in 2-4 weeks, while custom AI applications typically take 8-16 weeks. We'll provide a detailed timeline during the discovery phase.", icon: Clock, color: "from-blue-500 to-cyan-500", bgColor: "from-blue-500/10 to-cyan-500/10" },
    { q: "What's your pricing model?", a: "We offer fixed-price projects, time & materials, and retainer models depending on your needs. We provide detailed quotes after understanding your requirements.", icon: DollarSign, color: "from-emerald-500 to-teal-500", bgColor: "from-emerald-500/10 to-teal-500/10" },
    { q: "Do you work with existing systems?", a: "Yes! We excel at integrating with legacy systems. Whether you use Salesforce, SAP, or custom software, we can build automation and AI solutions that fit seamlessly.", icon: Zap, color: "from-orange-500 to-amber-500", bgColor: "from-orange-500/10 to-amber-500/10" },
    { q: "Can you help with AI strategy?", a: "Absolutely. We offer AI consulting services to help identify opportunities in your business where AI and automation can have the most impact.", icon: Lightbulb, color: "from-purple-500 to-pink-500", bgColor: "from-purple-500/10 to-pink-500/10" },
    { q: "What support do you provide after launch?", a: "We offer ongoing support packages including monitoring, updates, optimization, and new feature development to keep your systems running smoothly.", icon: HeartHandshake, color: "from-rose-500 to-red-500", bgColor: "from-rose-500/10 to-red-500/10" },
    { q: "How is data security handled?", a: "We follow industry best practices for data security. All solutions are built with GDPR, CCPA, and enterprise-grade security standards in mind.", icon: Shield, color: "from-indigo-500 to-purple-500", bgColor: "from-indigo-500/10 to-purple-500/10" }
  ];

  const column1 = faqs.slice(0, 3);
  const column2 = faqs.slice(3, 6);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium mb-4">
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Common Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our services, process, and support.
            </p>
          </motion.div>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {column1.map((item, idx) => {
                const Icon = item.icon;
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
                      whileHover={{ scale: 1.02 }}
                      className="h-full"
                    >
                      <AccordionItem
                        value={`left-${idx}`}
                        className="border border-white/40 rounded-2xl overflow-hidden bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md transition-all hover:border-[#9929ea]/60 hover:shadow-lg"
                      >
                        <AccordionTrigger className={`px-6 py-4 hover:bg-gradient-to-r hover:${item.bgColor} transition-all [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:${item.bgColor}`}>
                          <div className="flex items-center gap-3 text-left">
                            <motion.div
                              className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${item.color} text-white`}
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <Icon className="h-5 w-5" />
                            </motion.div>
                            <span className="font-bold text-gray-900 text-base">
                              {item.q}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 bg-white/50 border-t border-white/30 text-muted-foreground leading-relaxed">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {item.a}
                          </motion.div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  </motion.div>
                );
              })}
            </Accordion>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {column2.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx + 3) * 0.1 }}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="h-full"
                    >
                      <AccordionItem
                        value={`right-${idx}`}
                        className="border border-white/40 rounded-2xl overflow-hidden bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md transition-all hover:border-[#9929ea]/60 hover:shadow-lg"
                      >
                        <AccordionTrigger className={`px-6 py-4 hover:bg-gradient-to-r hover:${item.bgColor} transition-all [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:${item.bgColor}`}>
                          <div className="flex items-center gap-3 text-left">
                            <motion.div
                              className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${item.color} text-white`}
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <Icon className="h-5 w-5" />
                            </motion.div>
                            <span className="font-bold text-gray-900 text-base">
                              {item.q}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 bg-white/50 border-t border-white/30 text-muted-foreground leading-relaxed">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {item.a}
                          </motion.div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  </motion.div>
                );
              })}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
