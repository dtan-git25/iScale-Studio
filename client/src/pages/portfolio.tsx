import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce AI Assistant",
      client: "StyleVogue",
      category: "AI Agent",
      description: "A personalized shopping assistant that uses computer vision to recommend products based on user uploaded photos and style preferences.",
      tags: ["OpenAI", "React", "Python", "Computer Vision"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Logistics Automation Pipeline",
      client: "GlobalShip Inc.",
      category: "Workflow Automation",
      description: "Automated order processing system reducing manual data entry by 95%. Integrates Shopify, SAP, and custom shipping APIs via n8n.",
      tags: ["n8n", "PostgreSQL", "Node.js", "SAP"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "FinTech Dashboard",
      client: "NovaFinance",
      category: "Web Development",
      description: "Real-time financial analytics platform with predictive forecasting powered by machine learning models.",
      tags: ["Next.js", "D3.js", "FastAPI", "AWS"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Customer Support Bot",
      client: "TechFlow",
      category: "AI Agent",
      description: "Tier-1 support automation that resolves 70% of tickets instantly using RAG (Retrieval-Augmented Generation) on company knowledge base.",
      tags: ["LangChain", "Pinecone", "React", "GPT-4"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-emerald-900/20 to-teal-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              Portfolio
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Selected Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped ambitious companies transform their operations with intelligent software.
          </p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 17, repeat: Infinity }}
          className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, delay: idx * 0.15, repeat: Infinity }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full"
                >
                  <div className={`bg-gradient-to-br ${project.color} opacity-10 rounded-t-3xl h-40 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-b-3xl p-8 shadow-lg hover:shadow-2xl transition-all -mt-8 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-gray-700 mb-2">{project.client}</p>
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button size="icon" variant="ghost" className="rounded-full hover:bg-gradient-to-br hover:from-[#9929ea]/20 hover:to-[#5808fb]/20">
                          <ArrowUpRight className="h-5 w-5 text-[#8629e4]" />
                        </Button>
                      </motion.div>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} className="bg-gradient-to-r from-[#9929ea]/10 to-[#5808fb]/10 border border-[#9929ea]/30 text-gray-700 hover:from-[#9929ea]/20 hover:to-[#5808fb]/20 transition-all">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
