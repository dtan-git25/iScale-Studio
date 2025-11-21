import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "The Rise of Autonomous AI Agents in Business",
      excerpt: "How companies are moving beyond simple chatbots to fully autonomous agents that can execute complex tasks.",
      date: "Oct 24, 2023",
      category: "AI Trends",
      readTime: "5 min read"
    },
    {
      title: "Streamlining Operations with n8n and OpenAI",
      excerpt: "A technical deep dive into building a custom invoice processing pipeline using low-code tools.",
      date: "Oct 12, 2023",
      category: "Tutorial",
      readTime: "12 min read"
    },
    {
      title: "Why Every Modern App Needs a Vector Database",
      excerpt: "Understanding RAG (Retrieval Augmented Generation) and how it powers context-aware AI applications.",
      date: "Sep 28, 2023",
      category: "Tech Stack",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold mb-6">Insights</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on AI, automation, and the future of software development.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer border-b border-white/5 pb-12 last:border-0">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">{post.category}</Badge>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{post.title}</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center text-cyan-400 font-medium group-hover:translate-x-2 transition-transform">
                Read Article <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
