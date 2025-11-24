import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Workflow, Database, Globe, Zap, Check, Calendar, MessageSquare, Briefcase, GitBranch, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@assets/generated_images/abstract_ai_neural_network_background.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src={heroImage} alt="Abstract AI Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono">
                Build Faster, Scale Smarter
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                AI-Powered Software Solutions for <span className="text-cyan-400">Modern Business</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Custom AI-powered applications, intelligent workflow automation, and autonomous agents that transform how your business operates.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-full px-8 h-14 text-lg shadow-lg shadow-cyan-500/25">
                    Schedule Free Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-white/5">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Choose iScale Studio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We combine AI expertise, automation excellence, and software engineering to deliver transformative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10 text-cyan-400" />,
                title: "Fast Delivery",
                desc: "Rapid prototyping and deployment using proven frameworks and low-code platforms. Get to market in weeks, not months."
              },
              {
                icon: <Brain className="h-10 w-10 text-purple-400" />,
                title: "AI-First Approach",
                desc: "Every solution is designed with AI integration in mind. We build smart products that learn and improve over time."
              },
              {
                icon: <Target className="h-10 w-10 text-pink-400" />,
                title: "Results-Focused",
                desc: "We don't just build—we optimize. Our solutions are measured by business impact and ROI, not vanity metrics."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-xl"
              >
                <div className="bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Complete solutions to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-12 w-12 text-cyan-400" />,
                title: "AI-Powered App Development",
                desc: "Custom web and mobile applications with integrated AI capabilities. React, Next.js, Node.js, Python, and more.",
                cta: "Learn More"
              },
              {
                icon: <Workflow className="h-12 w-12 text-purple-400" />,
                title: "Workflow Automation",
                desc: "Eliminate manual tasks with intelligent automation. n8n, Make, Zapier, and enterprise integration platforms.",
                cta: "Explore Automation"
              },
              {
                icon: <Cpu className="h-12 w-12 text-pink-400" />,
                title: "AI Agent Development",
                desc: "Autonomous agents powered by OpenAI, Claude, and Google Gemini. Customer service, data processing, and more.",
                cta: "Build an Agent"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-xl group border border-white/5 hover:border-white/20 transition-colors"
              >
                <div className="bg-white/5 w-20 h-20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                <Link href="/services">
                  <a className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300">
                    {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A structured approach to deliver world-class solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery", desc: "Deep dive into your needs, goals, and technical environment. We analyze workflows and identify automation opportunities." },
              { num: "02", title: "Prototype", desc: "Rapid prototyping to validate solutions. We show you exactly what you'll get before full development." },
              { num: "03", title: "Build & Integrate", desc: "Full development and seamless integration with your existing systems. Continuous testing and optimization." },
              { num: "04", title: "Launch & Support", desc: "Go-live with support. We monitor, optimize, and provide ongoing maintenance and enhancements." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="glass-panel p-8 rounded-xl h-full">
                  <div className="text-5xl font-display font-bold text-cyan-400/20 mb-4">{step.num}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-cyan-400/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Case Studies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real results from real clients. See how we've transformed their business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "E-Commerce AI Assistant", client: "Retail Brand", metric: "70% reduction in support tickets", desc: "AI-powered shopping assistant using computer vision and LLMs." },
              { title: "Logistics Automation", client: "Global Shipping", metric: "95% less manual data entry", desc: "End-to-end automation of order processing and fulfillment." },
              { title: "FinTech Dashboard", client: "Investment Firm", metric: "3x faster analytics", desc: "Real-time financial analytics with ML-powered forecasting." }
            ].map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="glass-panel p-8 rounded-xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                  <p className="text-sm text-cyan-400 font-mono mb-2">CLIENT</p>
                  <p className="text-muted-foreground mb-1">{study.client}</p>
                  <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">{study.desc}</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm font-mono text-cyan-400">{study.metric}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Our Technology Stack</h2>
            <p className="text-muted-foreground">Built with industry-leading tools and frameworks</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["React", "Next.js", "Node.js", "Python", "Supabase", "PostgreSQL", "n8n", "Zapier", "OpenAI", "Claude", "Google Gemini", "LangChain"].map((tech) => (
              <div key={tech} className="glass-panel p-4 rounded-lg text-sm font-mono text-muted-foreground hover:text-cyan-400 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Quick answers to common questions about our services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "How long does a typical project take?", a: "Project timelines vary based on scope. Simple automations can be done in 2-4 weeks, while custom AI applications typically take 8-16 weeks. We'll provide a detailed timeline during the discovery phase." },
              { q: "What's your pricing model?", a: "We offer fixed-price projects, time & materials, and retainer models depending on your needs. We provide detailed quotes after understanding your requirements." },
              { q: "Do you work with existing systems?", a: "Yes! We excel at integrating with legacy systems. Whether you use Salesforce, SAP, or custom software, we can build automation and AI solutions that fit seamlessly." },
              { q: "Can you help with AI strategy?", a: "Absolutely. We offer AI consulting services to help identify opportunities in your business where AI and automation can have the most impact." },
              { q: "What support do you provide after launch?", a: "We offer ongoing support packages including monitoring, updates, optimization, and new feature development to keep your systems running smoothly." },
              { q: "How is data security handled?", a: "We follow industry best practices for data security. All solutions are built with GDPR, CCPA, and enterprise-grade security standards in mind." }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="glass-panel px-6 border border-white/10 rounded-lg">
                <AccordionTrigger className="font-bold text-lg hover:text-cyan-400 transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Schedule Appointment */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help your business. Book a free 15-minute consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <div className="flex items-center justify-center gap-3">
              <MessageSquare className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:hello@iscalestudio.com" className="font-mono text-cyan-400 hover:text-cyan-300">
                  hello@iscalestudio.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+639560623082" className="font-mono text-cyan-400 hover:text-cyan-300">
                  +63 956 0623 082
                </a>
              </div>
            </div>
          </div>

          <Link href="/contact">
            <Button size="lg" className="bg-white text-background hover:bg-white/90 rounded-full px-10 h-14 font-bold">
              Schedule Consultation <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Icon placeholders (you can replace with actual imports)
function Brain({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
    </svg>
  );
}

function Target({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
    </svg>
  );
}
