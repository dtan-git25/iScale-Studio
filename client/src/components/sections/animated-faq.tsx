import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Zap } from "lucide-react";

export function AnimatedFAQ() {
  const faqs = [
    { q: "How long does a typical project take?", a: "Project timelines vary based on scope. Simple automations can be done in 2-4 weeks, while custom AI applications typically take 8-16 weeks. We'll provide a detailed timeline during the discovery phase." },
    { q: "What's your pricing model?", a: "We offer fixed-price projects, time & materials, and retainer models depending on your needs. We provide detailed quotes after understanding your requirements." },
    { q: "Do you work with existing systems?", a: "Yes! We excel at integrating with legacy systems. Whether you use Salesforce, SAP, or custom software, we can build automation and AI solutions that fit seamlessly." },
    { q: "Can you help with AI strategy?", a: "Absolutely. We offer AI consulting services to help identify opportunities in your business where AI and automation can have the most impact." },
    { q: "What support do you provide after launch?", a: "We offer ongoing support packages including monitoring, updates, optimization, and new feature development to keep your systems running smoothly." },
    { q: "How is data security handled?", a: "We follow industry best practices for data security. All solutions are built with GDPR, CCPA, and enterprise-grade security standards in mind." }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -top-20 -left-32 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#9929ea]/20 to-[#5808fb]/20 flex items-center justify-center mb-6"
            >
              <HelpCircle className="h-8 w-8 text-[#9929ea]" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Frequently Asked<br />Questions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Trusted by industry leaders and enterprises across the Philippines and beyond. Get answers to common questions about our services, process, and support.
            </p>

            {/* Stats */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <Zap className="h-5 w-5 text-[#9929ea]" />
                <span className="text-sm text-gray-700">Quick responses to your questions</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <Zap className="h-5 w-5 text-[#9929ea]" />
                <span className="text-sm text-gray-700">Expert insights and guidance</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <Zap className="h-5 w-5 text-[#9929ea]" />
                <span className="text-sm text-gray-700">Real solutions for real businesses</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <AccordionItem
                    value={`item-${idx}`}
                    className="border border-white/30 rounded-xl overflow-hidden bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-md transition-all hover:border-[#9929ea]/50 hover:shadow-lg"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-gradient-to-r hover:from-[#9929ea]/5 hover:to-[#5808fb]/5 transition-all [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-[#9929ea]/10 [&[data-state=open]]:to-[#5808fb]/10">
                      <span className="text-left font-bold text-gray-900 text-base group-hover:text-[#9929ea] transition-colors">
                        {item.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-gradient-to-br from-white/50 to-white/30 border-t border-white/30 text-muted-foreground leading-relaxed">
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
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
