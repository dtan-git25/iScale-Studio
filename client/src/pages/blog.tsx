import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "The Rise of Autonomous AI Agents in Business",
      excerpt: "How companies are moving beyond simple chatbots to fully autonomous agents that can execute complex tasks.",
      date: "Oct 24, 2023",
      category: "AI Trends",
      readTime: "5 min read",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Streamlining Operations with n8n and OpenAI",
      excerpt: "A technical deep dive into building a custom invoice processing pipeline using low-code tools.",
      date: "Oct 12, 2023",
      category: "Tutorial",
      readTime: "12 min read",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Why Every Modern App Needs a Vector Database",
      excerpt: "Understanding RAG (Retrieval Augmented Generation) and how it powers context-aware AI applications.",
      date: "Sep 28, 2023",
      category: "Tech Stack",
      readTime: "8 min read",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-20 bg-gradient-to-b from-pink-900/20 to-rose-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              Blog
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Insights</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Thoughts on AI, automation, and the future of software development.
          </p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 17, repeat: Infinity }}
          className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {posts.map((post, idx) => (
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
                whileHover={{ y: -8, scale: 1.01 }}
                className="h-full"
              >
                <div className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className={`h-1 w-20 bg-gradient-to-r ${post.gradient} rounded-full mb-6`}></div>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-700 mb-4">
                    <Badge className={`bg-gradient-to-r ${post.gradient} text-white border-0`}>{post.category}</Badge>
                    <span className="text-gray-700">{post.date}</span>
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9929ea] group-hover:to-[#5808fb] transition-all">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#9929ea] to-[#5808fb] font-medium group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
