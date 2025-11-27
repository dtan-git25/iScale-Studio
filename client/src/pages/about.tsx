import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Lightbulb, Zap, Target, Users, Award, Brain, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import teamImg from "@assets/optimized_images/professional_team_collaboration.webp";
import workspaceImg from "@assets/optimized_images/modern_ai_workspace_environment.webp";
import { SEOHead, createBreadcrumbSchema, createWebPageSchema } from "@/components/seo/seo-head";

export default function About() {
  const aboutSchema = [
    createWebPageSchema(
      "About iScale Studio | AI Development Company Philippines",
      "Learn about iScale Studio, a Philippines-based AI development agency helping businesses transform through AI-powered solutions, workflow automation, and intelligent agents.",
      "https://iscalestudio.com/about"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "About", url: "https://iscalestudio.com/about" }
    ])
  ];
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      desc: "We stay ahead of the curve, constantly exploring emerging technologies to deliver cutting-edge solutions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Execution Excellence",
      desc: "We deliver. Fast, reliable, and scalable solutions that directly impact your bottom line.",
      color: "from-[#9929ea] to-[#5808fb]"
    },
    {
      icon: Users,
      title: "Partnership Mindset",
      desc: "Your success is our success. We're invested in your long-term growth and transformation.",
      color: "from-[#2DBFBA] to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      desc: "Every solution is designed to deliver quantifiable results and ROI.",
      color: "from-orange-500 to-pink-500"
    }
  ];

  const steps = [
    { icon: Lightbulb, title: "01. Analyze", desc: "We deep-dive into your current processes to identify bottlenecks and opportunities for automation.", color: "from-cyan-500 to-blue-500" },
    { icon: Target, title: "02. Architect", desc: "We design a custom solution using the best tools for the job—whether that's custom code or low-code platforms.", color: "from-purple-500 to-pink-500" },
    { icon: Zap, title: "03. Automate", desc: "We build, test, and deploy your solution, ensuring seamless integration with your existing stack.", color: "from-orange-500 to-red-500" },
    { icon: Users, title: "04. Accelerate", desc: "With manual work removed, your team focuses on high-value tasks, accelerating growth.", color: "from-emerald-500 to-teal-500" }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Team Members" },
    { number: "4+", label: "Years of Expertise" }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="About iScale Studio | AI Development Company Philippines"
        description="Learn about iScale Studio, a Philippines-based AI development agency helping businesses transform through AI-powered solutions, workflow automation, and intelligent agents."
        canonical="https://iscalestudio.com/about"
        schema={aboutSchema}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              About iScale Studio
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">We Build AI-Powered Solutions</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A next-generation software development agency obsessed with efficiency and innovation. We believe that the future of business lies in the intelligent combination of human creativity and artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={teamImg} alt="iScale Studio Team" className="rounded-2xl shadow-2xl border border-white/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Who We Are</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  iScale Studio is a next-generation software development agency obsessed with efficiency. Founded on the belief that businesses of all sizes deserve access to enterprise-grade automation and AI technology.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We've helped dozens of Philippine businesses reclaim thousands of hours, reduce operational costs, and scale without the growing pains. Our team combines deep technical expertise with a genuine passion for solving real-world problems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                  <Rocket className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To democratize enterprise-grade automation and AI technology for businesses of all sizes. We help you reclaim your time, reduce operational costs, and scale without the growing pains.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-[#2DBFBA] to-teal-500 flex items-center justify-center">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where intelligent automation is the standard, not the exception. Where every business—regardless of size or resources—can harness the power of AI to achieve extraordinary growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                These values guide every decision we make and every project we undertake.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Our proven methodology ensures successful delivery every single time.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, delay: idx * 0.1, repeat: Infinity }}
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#2DBFBA] mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section with Image */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:order-2"
            >
              <h2 className="text-4xl font-bold text-gray-900">Our Culture</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're a team of creative problem-solvers who thrive on challenges. We believe in continuous learning, open communication, and celebrating wins together.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Working with us means joining a community of talented professionals who are passionate about leveraging technology to create meaningful impact. We value collaboration, innovation, and a healthy work-life balance.
              </p>
              <div className="pt-4">
                <Link href="/booking">
                  <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                    Join Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-1"
            >
              <img src={workspaceImg} alt="iScale Studio Workspace" className="rounded-2xl shadow-2xl border border-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2DBFBA]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss your AI transformation needs and how we can help you scale efficiently.
            </p>
            <Link href="/booking">
              <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
