import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function AnimatedFAQ() {
  const faqs = [
    { q: "How long does a typical project take?", a: "Project timelines vary based on scope. Simple automations can be done in 2-4 weeks, while custom AI applications typically take 8-16 weeks. We'll provide a detailed timeline during the discovery phase." },
    { q: "What's your pricing model?", a: "We offer fixed-price projects, time & materials, and retainer models depending on your needs. We provide detailed quotes after understanding your requirements." },
    { q: "Do you work with existing systems?", a: "Yes! We excel at integrating with legacy systems. Whether you use Salesforce, SAP, or custom software, we can build automation and AI solutions that fit seamlessly." },
    { q: "Can you help with AI strategy?", a: "Absolutely. We offer AI consulting services to help identify opportunities in your business where AI and automation can have the most impact." },
    { q: "What support do you provide after launch?", a: "We offer ongoing support packages including monitoring, updates, optimization, and new feature development to keep your systems running smoothly." },
    { q: "How is data security handled?", a: "We follow industry best practices for data security. All solutions are built with GDPR, CCPA, and enterprise-grade security standards in mind." }
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
                const colors = [
                  { border: "border-l-4 border-l-[#8629e4]", bg: "from-[#8629e4]/5", accent: "from-[#8629e4]" },
                  { border: "border-l-4 border-l-[#2DBFBA]", bg: "from-[#2DBFBA]/5", accent: "from-[#2DBFBA]" },
                  { border: "border-l-4 border-l-[#5808fb]", bg: "from-[#5808fb]/5", accent: "from-[#5808fb]" }
                ];
                const color = colors[idx];
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
                        className={`${color.border} border border-white/40 rounded-2xl overflow-hidden bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md transition-all hover:border-[#9929ea]/60 hover:shadow-lg`}
                      >
                        <AccordionTrigger className={`px-6 py-4 bg-gradient-to-r ${color.bg} to-transparent hover:bg-gradient-to-r hover:from-[#9929ea]/10 hover:to-[#5808fb]/10 transition-all [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-[#9929ea]/15 [&[data-state=open]]:to-[#5808fb]/15`}>
                          <span className="text-left font-bold text-gray-900 text-base">
                            {item.q}
                          </span>
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
                const colors = [
                  { border: "border-l-4 border-l-[#bc09d7]", bg: "from-[#bc09d7]/5", accent: "from-[#bc09d7]" },
                  { border: "border-l-4 border-l-[#9929ea]", bg: "from-[#9929ea]/5", accent: "from-[#9929ea]" },
                  { border: "border-l-4 border-l-[#2DBFBA]", bg: "from-[#2DBFBA]/5", accent: "from-[#2DBFBA]" }
                ];
                const color = colors[idx];
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
                        className={`${color.border} border border-white/40 rounded-2xl overflow-hidden bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md transition-all hover:border-[#9929ea]/60 hover:shadow-lg`}
                      >
                        <AccordionTrigger className={`px-6 py-4 bg-gradient-to-r ${color.bg} to-transparent hover:bg-gradient-to-r hover:from-[#9929ea]/10 hover:to-[#5808fb]/10 transition-all [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-[#9929ea]/15 [&[data-state=open]]:to-[#5808fb]/15`}>
                          <span className="text-left font-bold text-gray-900 text-base">
                            {item.q}
                          </span>
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
