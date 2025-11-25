import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Workflow, Database, Globe, Zap, Check, Calendar, MessageSquare, Briefcase, GitBranch, Rocket, MapPin, Lightbulb, TrendingUp, Handshake, Users, Shield } from "lucide-react";
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
                AI-Powered Digital Solutions
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                Transform Your Business with <span className="text-cyan-400">AI-Powered</span> Digital Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Custom AI-powered applications, intelligent workflow automation, and autonomous agents designed for Philippine businesses to scale faster and operate smarter.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-full px-8 h-14 text-lg shadow-lg shadow-cyan-500/25">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-white/5">
                    View Our Solutions
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview - Primary Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Complete digital transformation solutions tailored for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 - Primary */}
            <motion.div
              className="lg:col-span-1 lg:row-span-1 order-first lg:order-first"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-10 rounded-xl group border border-cyan-400/30 hover:border-cyan-400/60 transition-colors h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 mb-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">PRIMARY SERVICE</div>
                  <div className="bg-white/5 w-20 h-20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">AI Web & App Development</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Custom web applications and mobile apps powered by artificial intelligence. Build intelligent, scalable solutions that automate decisions and personalize user experiences.
                  </p>
                  <div className="mb-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">AI-powered features and integrations</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Custom web applications</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Mobile-responsive design</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Scalable architecture</span>
                    </div>
                  </div>
                  <Link href="/services">
                    <a className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Card 2 & 3 */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="glass-panel p-8 rounded-xl group border border-white/5 hover:border-white/20 transition-colors h-full">
                  <div className="bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Workflow className="h-10 w-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">Workflow Automation</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    Streamline business processes and eliminate manual tasks with intelligent automation solutions.
                  </p>
                  <div className="mb-6 space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">Process optimization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">Integration solutions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">Time & cost savings</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">Custom workflow design</span>
                    </div>
                  </div>
                  <Link href="/services">
                    <a className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="glass-panel p-8 rounded-xl group border border-white/5 hover:border-white/20 transition-colors h-full">
                  <div className="bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="h-10 w-10 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">AI Agents</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    Intelligent autonomous agents powered by advanced AI models to handle complex business operations.
                  </p>
                  <div className="mb-6 space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">Customer service automation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">Smart assistants</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">24/7 availability</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">Custom AI personalities</span>
                    </div>
                  </div>
                  <Link href="/services">
                    <a className="inline-flex items-center text-sm font-medium text-pink-400 hover:text-pink-300">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">About iScale Studio</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded to bridge the gap between Philippine businesses and cutting-edge AI technology, iScale Studio specializes in delivering transformative digital solutions that help companies compete globally.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We understand the unique challenges faced by Philippine SMBs and enterprises. That's why we've built a team of experts dedicated to making AI-powered solutions accessible, affordable, and impactful for businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our mission is simple: empower businesses to scale faster and operate smarter through intelligent automation and custom software solutions.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="glass-panel p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Successful Projects</p>
                </div>
                <div className="glass-panel p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="glass-panel p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">8+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="glass-panel p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">40+</div>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Expanded */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Partner With iScale Studio?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Here's what sets us apart in the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Lightbulb className="h-8 w-8" />, title: "AI Expertise", desc: "Specialized knowledge in AI integration and implementation with proven track record." },
              { icon: <MapPin className="h-8 w-8" />, title: "Philippine Market Knowledge", desc: "Deep understanding of local business needs, challenges, and opportunities." },
              { icon: <Handshake className="h-8 w-8" />, title: "Consultation-First Approach", desc: "Personalized solutions tailored to your specific business requirements." },
              { icon: <GitBranch className="h-8 w-8" />, title: "End-to-End Solutions", desc: "From concept and prototyping to deployment and ongoing support." },
              { icon: <TrendingUp className="h-8 w-8" />, title: "Proven Results", desc: "Track record of successful implementations delivering measurable ROI." },
              { icon: <Shield className="h-8 w-8" />, title: "Ongoing Support", desc: "Continued partnership after project delivery with ongoing optimization." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-panel p-8 rounded-xl group hover:border-white/20 transition-colors border border-white/5"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Discovery & Consultation", desc: "Understanding your needs, goals, and technical environment." },
              { num: "02", title: "Strategy & Planning", desc: "Crafting the perfect solution approach for your business." },
              { num: "03", title: "Development", desc: "Building your AI-powered solution with best practices." },
              { num: "04", title: "Testing & Refinement", desc: "Ensuring excellence in every detail." },
              { num: "05", title: "Launch & Support", desc: "Going live and ongoing optimization." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="glass-panel p-6 rounded-xl h-full">
                  <div className="text-4xl font-display font-bold text-cyan-400/20 mb-3">{step.num}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Recent projects showcasing our expertise and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "E-Commerce AI Assistant", industry: "Retail", desc: "AI-powered shopping assistant using computer vision and LLMs.", metric: "70% reduction in support tickets" },
              { title: "Logistics Automation", industry: "Logistics", desc: "End-to-end automation of order processing and fulfillment.", metric: "95% less manual data entry" },
              { title: "FinTech Dashboard", industry: "Finance", desc: "Real-time financial analytics with ML-powered forecasting.", metric: "3x faster analytics" }
            ].map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="glass-panel p-8 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors h-full">
                  <p className="text-xs text-cyan-400 font-mono mb-3 uppercase tracking-widest">INDUSTRY: {study.industry}</p>
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
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation to discuss your digital transformation needs. We'll respond within 24 hours.
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
              Schedule Your Consultation <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
