import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

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
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 17, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-[#9929ea] uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our services, process, and support. Can't find what you're looking for? <a href="/contact" className="text-[#8629e4] font-semibold hover:underline">Contact us</a>.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
              >
                <AccordionItem
                  value={`item-${idx}`}
                  className="border border-white/40 rounded-2xl overflow-hidden bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md transition-all hover:border-white/60 hover:shadow-lg data-[state=open]:border-[#9929ea]/40 data-[state=open]:shadow-lg data-[state=open]:shadow-[#9929ea]/10"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group [&[data-state=open]>svg]:rotate-180">
                    <span className="text-left font-bold text-gray-900 text-base group-hover:text-[#8629e4] transition-colors">
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-5 bg-gradient-to-br from-white/50 to-white/30 border-t border-white/30 text-muted-foreground leading-relaxed">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.a}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
