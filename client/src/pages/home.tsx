import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Workflow, Terminal, Database, Globe, Zap, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono">
                Innovate. Automate. Scale.
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                The Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Digital Intelligence
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                We build custom AI solutions, intelligent workflows, and cutting-edge software that helps businesses scale faster than ever before.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-full px-8 h-14 text-lg shadow-lg shadow-cyan-500/25">
                    Start Your Transformation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-white/5">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              {/* Decorative floating elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
              
              <div className="glass-panel p-8 rounded-2xl border border-white/10 relative">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <div className="h-32 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 p-4 flex flex-col justify-between">
                            <Cpu className="text-cyan-400 h-8 w-8" />
                            <div className="h-2 w-20 bg-white/10 rounded"></div>
                        </div>
                        <div className="h-48 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 p-4 flex flex-col justify-between">
                             <Workflow className="text-purple-400 h-8 w-8" />
                             <div className="space-y-2">
                                <div className="h-2 w-full bg-white/10 rounded"></div>
                                <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                             </div>
                        </div>
                    </div>
                    <div className="space-y-4 mt-8">
                         <div className="h-48 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 p-4 flex flex-col justify-between">
                             <Code className="text-green-400 h-8 w-8" />
                             <div className="space-y-2">
                                <div className="h-2 w-full bg-white/10 rounded"></div>
                                <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                                <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                             </div>
                        </div>
                        <div className="h-32 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 p-4 flex flex-col justify-between">
                             <Zap className="text-yellow-400 h-8 w-8" />
                             <div className="h-2 w-24 bg-white/10 rounded"></div>
                        </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-card/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We blend creativity with technical excellence to deliver solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-cyan-400" />,
                title: "AI Web & App Dev",
                desc: "Next-gen applications powered by artificial intelligence, built on modern stacks like React, Node.js, and Python.",
                link: "/services"
              },
              {
                icon: <Workflow className="h-10 w-10 text-purple-400" />,
                title: "Workflow Automation",
                desc: "Streamline operations with custom automations using n8n, Make.com, and enterprise-grade integration platforms.",
                link: "/services"
              },
              {
                icon: <Cpu className="h-10 w-10 text-pink-400" />,
                title: "AI Agent Development",
                desc: "Intelligent agents that handle customer support, data processing, and complex business logic autonomously.",
                link: "/services"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-xl group cursor-pointer"
              >
                <div className="bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <Link href={service.link}>
                  <a className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee (Simulated) */}
      <section className="py-20 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Powered by best-in-class technology</p>
        </div>
        <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-xl font-bold"><Code className="h-6 w-6"/> React</div>
             <div className="flex items-center gap-2 text-xl font-bold"><Terminal className="h-6 w-6"/> Node.js</div>
             <div className="flex items-center gap-2 text-xl font-bold"><Database className="h-6 w-6"/> Python</div>
             <div className="flex items-center gap-2 text-xl font-bold"><Zap className="h-6 w-6"/> OpenAI</div>
             <div className="flex items-center gap-2 text-xl font-bold"><Cpu className="h-6 w-6"/> Anthropic</div>
             <div className="flex items-center gap-2 text-xl font-bold"><Workflow className="h-6 w-6"/> n8n</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to Scale?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss how AI and automation can transform your business operations today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-background hover:bg-white/90 rounded-full px-10 h-16 text-xl font-bold">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
