import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, DollarSign, Zap, Lightbulb, Shield, Headphones } from "lucide-react";

export function AnimatedFAQ() {
  const faqs = [
    { 
      q: "How long does a typical project take?", 
      a: "Project timelines vary based on scope. Simple automations can be done in 2-4 weeks, while custom AI applications typically take 8-16 weeks. We'll provide a detailed timeline during the discovery phase.",
      icon: Clock,
      gradient: "from-blue-500 to-cyan-500",
      category: "Timeline"
    },
    { 
      q: "What's your pricing model?", 
      a: "We offer fixed-price projects, time & materials, and retainer models depending on your needs. We provide detailed quotes after understanding your requirements.",
      icon: DollarSign,
      gradient: "from-emerald-500 to-teal-500",
      category: "Pricing"
    },
    { 
      q: "Do you work with existing systems?", 
      a: "Yes! We excel at integrating with legacy systems. Whether you use Salesforce, SAP, or custom software, we can build automation and AI solutions that fit seamlessly.",
      icon: Zap,
      gradient: "from-orange-500 to-amber-500",
      category: "Integration"
    },
    { 
      q: "Can you help with AI strategy?", 
      a: "Absolutely. We offer AI consulting services to help identify opportunities in your business where AI and automation can have the most impact.",
      icon: Lightbulb,
      gradient: "from-yellow-500 to-orange-500",
      category: "Strategy"
    },
    { 
      q: "What support do you provide after launch?", 
      a: "We offer ongoing support packages including monitoring, updates, optimization, and new feature development to keep your systems running smoothly.",
      icon: Headphones,
      gradient: "from-pink-500 to-rose-500",
      category: "Support"
    },
    { 
      q: "How is data security handled?", 
      a: "We follow industry best practices for data security. All solutions are built with GDPR, CCPA, and enterprise-grade security standards in mind.",
      icon: Shield,
      gradient: "from-purple-500 to-indigo-500",
      category: "Security"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium mb-4">
              Have Questions?
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Get answers to common questions about our services, process, and support. Can't find what you're looking for? 
              <a href="/booking" className="text-[#8629e4] font-semibold hover:text-[#9929ea] transition-colors"> Schedule a consultation</a>
            </p>
          </motion.div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group h-full"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Accordion type="single" collapsible className="h-full">
                    <AccordionItem
                      value={`faq-${idx}`}
                      className="border-0 h-full"
                    >
                      <div className="bg-gradient-to-br from-white/95 to-white/40 backdrop-blur-xl border border-white/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group-hover:border-[#8629e4]/40">
                        {/* Card Header */}
                        <div className="p-6">
                          <AccordionTrigger className="px-0 py-0 hover:no-underline focus:outline-none group/trigger">
                            <h3 className="text-left font-bold text-gray-900 text-base leading-snug group-hover/trigger:text-transparent group-hover/trigger:bg-clip-text group-hover/trigger:bg-gradient-to-r group-hover/trigger:from-[#9929ea] group-hover/trigger:to-[#5808fb] transition-all">
                              {item.q}
                            </h3>
                          </AccordionTrigger>
                        </div>

                        {/* Divider */}
                        <div className="px-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                        {/* Answer */}
                        <AccordionContent className="px-6 py-4 text-sm text-gray-700 leading-relaxed flex-grow bg-white/30 border-0">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {item.a}
                          </motion.div>
                        </AccordionContent>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
