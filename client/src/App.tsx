import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CoDaveChat } from "@/components/chat/codave-chat";
import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "wouter";

const Home = lazy(() => import("@/pages/home"));
const Services = lazy(() => import("@/pages/services"));
const AIWebDevelopment = lazy(() => import("@/pages/services/ai-web-development"));
const AIAppDevelopment = lazy(() => import("@/pages/services/ai-app-development"));
const WorkflowAutomation = lazy(() => import("@/pages/services/workflow-automation"));
const AIAgents = lazy(() => import("@/pages/services/ai-agents"));
const EcommerceSolutions = lazy(() => import("@/pages/services/ecommerce-solutions"));
const AIMLDevelopment = lazy(() => import("@/pages/services/ai-ml-development"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const About = lazy(() => import("@/pages/about"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogPost1 = lazy(() => import("@/pages/blog-post-1"));
const BlogPost2 = lazy(() => import("@/pages/blog-post-2"));
const BlogPost3 = lazy(() => import("@/pages/blog-post-3"));
const BlogPost4 = lazy(() => import("@/pages/blog-post-4"));
const BlogPost5 = lazy(() => import("@/pages/blog-post-5"));
const BlogPost6 = lazy(() => import("@/pages/blog-post-6"));
const BlogPost7 = lazy(() => import("@/pages/blog-post-7"));
const BlogPost8 = lazy(() => import("@/pages/blog-post-8"));
const BlogPost9 = lazy(() => import("@/pages/blog-post-9"));
const BlogPost10 = lazy(() => import("@/pages/blog-post-10"));
const BlogPost11 = lazy(() => import("@/pages/blog-post-11"));
const BlogPost12 = lazy(() => import("@/pages/blog-post-12"));
const CaseStudies = lazy(() => import("@/pages/case-studies"));
const CaseStudy1 = lazy(() => import("@/pages/case-study-1"));
const CaseStudy2 = lazy(() => import("@/pages/case-study-2"));
const CaseStudy3 = lazy(() => import("@/pages/case-study-3"));
const CaseStudy4 = lazy(() => import("@/pages/case-study-4"));
const CaseStudy5 = lazy(() => import("@/pages/case-study-5"));
const CaseStudy6 = lazy(() => import("@/pages/case-study-6"));
const AISalesAgent = lazy(() => import("@/pages/ai-sales-agent"));
const AISupportAgent = lazy(() => import("@/pages/ai-support-agent"));
const AIMarketingAgent = lazy(() => import("@/pages/ai-marketing-agent"));
const AIAdminAgent = lazy(() => import("@/pages/ai-admin-agent"));
const AIResearchAgent = lazy(() => import("@/pages/ai-research-agent"));
const AIContentAgent = lazy(() => import("@/pages/ai-content-agent"));
const Booking = lazy(() => import("@/pages/booking"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-[#9929ea] border-t-transparent rounded-full" />
    </div>
  );
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/services/ai-web-development" component={AIWebDevelopment} />
            <Route path="/services/ai-app-development" component={AIAppDevelopment} />
            <Route path="/services/workflow-automation" component={WorkflowAutomation} />
            <Route path="/services/ai-agents" component={AIAgents} />
            <Route path="/services/ecommerce-solutions" component={EcommerceSolutions} />
            <Route path="/services/ai-ml-development" component={AIMLDevelopment} />
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
            <Route path="/ai-sales-agent" component={AISalesAgent} />
            <Route path="/ai-support-agent" component={AISupportAgent} />
            <Route path="/ai-marketing-agent" component={AIMarketingAgent} />
            <Route path="/ai-admin-agent" component={AIAdminAgent} />
            <Route path="/ai-research-agent" component={AIResearchAgent} />
            <Route path="/ai-content-agent" component={AIContentAgent} />
            <Route path="/booking" component={Booking} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-of-service" component={TermsOfService} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
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
