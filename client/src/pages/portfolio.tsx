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
      <section className="py-20 bg-card/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Selected Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped ambitious companies transform their operations with intelligent software.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card hover:border-white/20 transition-colors"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="p-8 relative -mt-12">
                  <div className="bg-background border border-white/10 rounded-xl p-6 shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{project.client}</p>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                      <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
                        <ArrowUpRight className="h-5 w-5" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 border-white/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
