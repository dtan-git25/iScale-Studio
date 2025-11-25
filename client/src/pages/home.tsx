import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Workflow, Database, Globe, Zap, Check, Calendar, MessageSquare, Briefcase, GitBranch, Rocket, MapPin, Lightbulb, TrendingUp, Handshake, Users, Shield, ChevronLeft, ChevronRight, Server, Cloud, Settings, Layers } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InteractiveHero } from "@/components/hero/interactive-hero";
import { AnimatedServices } from "@/components/sections/animated-services";
import { AnimatedProcess } from "@/components/sections/animated-process";
import { AnimatedFeatures } from "@/components/sections/animated-features";
import { CalendlyBooking } from "@/components/sections/calendly-booking";
import { Reviews } from "@/components/sections/reviews";
import heroImage from "@assets/generated_images/abstract_ai_neural_network_background.png";
import servicesImage from "@assets/generated_images/abstract_ai_neural_network_visualization.png";
import processImage from "@assets/generated_images/digital_workflow_automation_process.png";
import featuresImage from "@assets/generated_images/tech_expertise_collaboration_network.png";
import portfolioImage from "@assets/generated_images/ai_machine_learning_data_flow.png";

// Tech Carousel Component
function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const technologies = [
    { name: "React", icon: <Code className="h-10 w-10" />, color: "text-blue-400" },
    { name: "Next.js", icon: <Layers className="h-10 w-10" />, color: "text-white" },
    { name: "Node.js", icon: <Server className="h-10 w-10" />, color: "text-green-400" },
    { name: "Python", icon: <Code className="h-10 w-10" />, color: "text-yellow-400" },
    { name: "Supabase", icon: <Database className="h-10 w-10" />, color: "text-emerald-400" },
    { name: "PostgreSQL", icon: <Database className="h-10 w-10" />, color: "text-blue-500" },
    { name: "n8n", icon: <Workflow className="h-10 w-10" />, color: "text-orange-400" },
    { name: "Zapier", icon: <Zap className="h-10 w-10" />, color: "text-orange-500" },
    { name: "OpenAI", icon: <Cpu className="h-10 w-10" />, color: "[#8629e4]" },
    { name: "Claude", icon: <Cpu className="h-10 w-10" />, color: "[#bc09d7]" },
    { name: "Google Gemini", icon: <Cloud className="h-10 w-10" />, color: "text-blue-600" },
    { name: "LangChain", icon: <Settings className="h-10 w-10" />, color: "[#8629e4]" }
  ];

  const itemsPerView = 6;
  const maxIndex = Math.max(0, technologies.length - itemsPerView);

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  };

  const visibleTechs = technologies.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">Our Technology Stack</h2>
          <p className="text-muted-foreground">Built with industry-leading tools and frameworks</p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="flex items-center justify-between gap-6">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="flex-shrink-0 p-3 rounded-lg bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition-all [#8629e4] hover:scale-110"
              aria-label="Previous technologies"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Tech Items */}
            <div className="flex-1 overflow-hidden">
              <div className="flex gap-4 justify-center">
                {visibleTechs.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex-1 min-w-0"
                  >
                    <div className="glass-panel p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all hover:bg-gray-100 h-full flex flex-col items-center justify-center gap-4 group cursor-pointer">
                      <div className={`${tech.color} transition-transform group-hover:scale-125`}>
                        {tech.icon}
                      </div>
                      <p className="text-sm font-mono text-gray-600 text-center group-hover:[#8629e4] transition-colors truncate w-full">
                        {tech.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="flex-shrink-0 p-3 rounded-lg bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition-all [#8629e4] hover:scale-110"
              aria-label="Next technologies"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-cyan-600 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-0 lg:pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={heroImage} alt="Abstract AI Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#8629e4]/10 border border-[#8629e4]/30 text-[#8629e4] text-sm font-mono">
                AI-Powered Digital Solutions
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-4">
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#2DBFBA]">AI-Powered</span> Digital Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Custom AI-powered applications, intelligent workflow automation, and autonomous agents designed for Philippine businesses to scale faster and operate smarter.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-gray-300 hover:bg-gray-50">
                    View Our Solutions
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interactive Hero Section */}
        <InteractiveHero />
      </section>

      {/* Services Overview - Primary Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src={servicesImage} alt="Services background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Complete digital transformation solutions tailored for your business.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <AnimatedServices />
          </div>

          {/* Old grid removed - keeping for reference */}
          <div className="hidden grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-xl group border border-gray-200 hover:border-gray-300 transition-colors h-full">
                <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 [#8629e4]" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">AI Web & App Development</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  Custom web applications and mobile apps powered by artificial intelligence. Build intelligent, scalable solutions that automate decisions and personalize user experiences.
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#8629e4] shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">AI-powered features and integrations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#8629e4] shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Custom web applications</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#8629e4] shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Mobile-responsive design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#8629e4] shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Scalable architecture</span>
                  </div>
                </div>
                <Link href="/services">
                  <a className="inline-flex items-center text-sm font-medium [#8629e4] hover:[#8629e4]">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="glass-panel p-8 rounded-xl group border border-gray-200 hover:border-gray-300 transition-colors h-full">
                <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Workflow className="h-10 w-10 [#8629e4]" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">Workflow Automation</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  Streamline business processes and eliminate manual tasks with intelligent automation solutions.
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#8629e4] shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Process optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#8629e4] shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Integration solutions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#8629e4] shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Time & cost savings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#8629e4] shrink-0 mt-0.5" />
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

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-panel p-8 rounded-xl group border border-gray-200 hover:border-gray-300 transition-colors h-full">
                <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="h-10 w-10 [#bc09d7]" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">AI Agents</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  Intelligent autonomous agents powered by advanced AI models to handle complex business operations.
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#bc09d7] shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Customer service automation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#bc09d7] shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Smart assistants</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#bc09d7] shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">24/7 availability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 [#bc09d7] shrink-0 mt-0.5" />
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
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
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
                <Button variant="outline" className="border-[#8629e4] [#8629e4] hover:bg-[#8629e4]/5">
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
                  <div className="text-3xl font-bold [#8629e4] mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Successful Projects</p>
                </div>
                <div className="glass-panel p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold [#8629e4] mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="glass-panel p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold [#bc09d7] mb-2">8+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="glass-panel p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">40+</div>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Expanded */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src={featuresImage} alt="Features background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Partner With iScale Studio?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Here's what sets us apart in the market.
              </p>
            </motion.div>
          </div>

          <AnimatedFeatures />

          <div className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="glass-panel p-8 rounded-xl group hover:border-gray-300 transition-colors border border-gray-200"
              >
                <div className="[#8629e4] mb-4 group-hover:scale-110 transition-transform">
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
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src={processImage} alt="Process background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A structured approach to deliver world-class solutions.
              </p>
            </motion.div>
          </div>

          <AnimatedProcess />

          <div className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                  <div className="text-4xl font-display font-bold [#8629e4]/20 mb-3">{step.num}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img src={portfolioImage} alt="Portfolio background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <div className="glass-panel p-8 rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors h-full">
                  <p className="text-xs [#8629e4] font-mono mb-3 uppercase tracking-widest">INDUSTRY: {study.industry}</p>
                  <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">{study.desc}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-mono [#8629e4]">{study.metric}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-[#8629e4] [#8629e4] hover:bg-[#8629e4]/5">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Technologies Section */}
      <TechCarousel />

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-12 rounded-2xl border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 flex flex-col justify-center"
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Frequently Asked<br />Question</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Trusted by industry leaders and enterprises across the Philippines and beyond. Get answers to common questions about our services, process, and support.
                </p>
              </motion.div>

              {/* Right Column - Accordion */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    { q: "How long does a typical project take?", a: "Project timelines vary based on scope. Simple automations can be done in 2-4 weeks, while custom AI applications typically take 8-16 weeks. We'll provide a detailed timeline during the discovery phase." },
                    { q: "What's your pricing model?", a: "We offer fixed-price projects, time & materials, and retainer models depending on your needs. We provide detailed quotes after understanding your requirements." },
                    { q: "Do you work with existing systems?", a: "Yes! We excel at integrating with legacy systems. Whether you use Salesforce, SAP, or custom software, we can build automation and AI solutions that fit seamlessly." },
                    { q: "Can you help with AI strategy?", a: "Absolutely. We offer AI consulting services to help identify opportunities in your business where AI and automation can have the most impact." },
                    { q: "What support do you provide after launch?", a: "We offer ongoing support packages including monitoring, updates, optimization, and new feature development to keep your systems running smoothly." },
                    { q: "How is data security handled?", a: "We follow industry best practices for data security. All solutions are built with GDPR, CCPA, and enterprise-grade security standards in mind." }
                  ].map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border border-white/10 rounded-lg overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-colors [&[data-state=open]]:bg-gray-100">
                        <span className="text-left font-medium text-gray-900 text-base">{item.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <CalendlyBooking />
    </div>
  );
}
