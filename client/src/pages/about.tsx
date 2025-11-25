import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-card/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">About iScale Studio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a next-generation software development agency obsessed with efficiency and innovation.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-display font-bold mb-8">We are iScale Studio.</h2>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            iScale Studio is a next-generation software development agency obsessed with efficiency. We believe that the future of business lies in the intelligent combination of human creativity and artificial intelligence.
          </p>
          
          <h3 className="text-2xl font-bold text-white mt-12 mb-4">Our Mission</h3>
          <p className="text-muted-foreground">
            To democratize enterprise-grade automation and AI technology for businesses of all sizes. We help you reclaim your time, reduce operational costs, and scale without the growing pains.
          </p>
          
          <h3 className="text-2xl font-bold text-white mt-12 mb-4">How We Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mt-8 mb-12">
            <div className="glass-panel p-6 rounded-lg">
              <h4 className="text-lg font-bold text-cyan-400 mb-2">01. Analyze</h4>
              <p className="text-sm text-muted-foreground">We deep-dive into your current processes to identify bottlenecks and opportunities for automation.</p>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <h4 className="text-lg font-bold text-purple-400 mb-2">02. Architect</h4>
              <p className="text-sm text-muted-foreground">We design a custom solution using the best tools for the job—whether that's custom code or low-code platforms.</p>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <h4 className="text-lg font-bold text-pink-400 mb-2">03. Automate</h4>
              <p className="text-sm text-muted-foreground">We build, test, and deploy your solution, ensuring seamless integration with your existing stack.</p>
            </div>
            <div className="glass-panel p-6 rounded-lg">
              <h4 className="text-lg font-bold text-green-400 mb-2">04. Accelerate</h4>
              <p className="text-sm text-muted-foreground">With manual work removed, your team focuses on high-value tasks, accelerating growth.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-16 border-t border-white/10 text-center">
           <h2 className="text-3xl font-display font-bold mb-6">Ready to meet the team?</h2>
           <Link href="/contact">
             <Button size="lg" className="bg-white text-background hover:bg-white/90">
                Get in Touch
             </Button>
           </Link>
        </div>
      </div>
    </div>
  );
}
