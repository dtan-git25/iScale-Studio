import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import AIDevelopment from "@/pages/services/ai-development";
import WorkflowAutomation from "@/pages/services/workflow-automation";
import AIAgents from "@/pages/services/ai-agents";
import EcommerceSolutions from "@/pages/services/ecommerce-solutions";
import Portfolio from "@/pages/portfolio";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogPost1 from "@/pages/blog-post-1";
import BlogPost2 from "@/pages/blog-post-2";
import BlogPost3 from "@/pages/blog-post-3";
import BlogPost4 from "@/pages/blog-post-4";
import BlogPost5 from "@/pages/blog-post-5";
import BlogPost6 from "@/pages/blog-post-6";
import BlogPost7 from "@/pages/blog-post-7";
import BlogPost8 from "@/pages/blog-post-8";
import BlogPost9 from "@/pages/blog-post-9";
import BlogPost10 from "@/pages/blog-post-10";
import BlogPost11 from "@/pages/blog-post-11";
import BlogPost12 from "@/pages/blog-post-12";
import CaseStudies from "@/pages/case-studies";
import CaseStudy1 from "@/pages/case-study-1";
import CaseStudy2 from "@/pages/case-study-2";
import CaseStudy3 from "@/pages/case-study-3";
import CaseStudy4 from "@/pages/case-study-4";
import CaseStudy5 from "@/pages/case-study-5";
import CaseStudy6 from "@/pages/case-study-6";
import AIContentAgent from "@/pages/ai-content-agent";
import Booking from "@/pages/booking";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import { CoDaveChat } from "@/components/chat/codave-chat";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/ai-development" component={AIDevelopment} />
          <Route path="/services/workflow-automation" component={WorkflowAutomation} />
          <Route path="/services/ai-agents" component={AIAgents} />
          <Route path="/services/ecommerce-solutions" component={EcommerceSolutions} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog-post-1" component={BlogPost1} />
          <Route path="/blog-post-2" component={BlogPost2} />
          <Route path="/blog-post-3" component={BlogPost3} />
          <Route path="/blog-post-4" component={BlogPost4} />
          <Route path="/blog-post-5" component={BlogPost5} />
          <Route path="/blog-post-6" component={BlogPost6} />
          <Route path="/blog-post-7" component={BlogPost7} />
          <Route path="/blog-post-8" component={BlogPost8} />
          <Route path="/blog-post-9" component={BlogPost9} />
          <Route path="/blog-post-10" component={BlogPost10} />
          <Route path="/blog-post-11" component={BlogPost11} />
          <Route path="/blog-post-12" component={BlogPost12} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/case-study-1" component={CaseStudy1} />
          <Route path="/case-study-2" component={CaseStudy2} />
          <Route path="/case-study-3" component={CaseStudy3} />
          <Route path="/case-study-4" component={CaseStudy4} />
          <Route path="/case-study-5" component={CaseStudy5} />
          <Route path="/case-study-6" component={CaseStudy6} />
          <Route path="/ai-content-agent" component={AIContentAgent} />
          <Route path="/booking" component={Booking} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <CoDaveChat />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
