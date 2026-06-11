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
const WebDevelopment = lazy(() => import("@/pages/services/web-development"));
const CustomWebApplication = lazy(() => import("@/pages/services/custom-web-application"));
const MobileAppDevelopment = lazy(() => import("@/pages/services/mobile-app-development"));
const WorkflowAutomation = lazy(() => import("@/pages/services/workflow-automation"));
const AIAgents = lazy(() => import("@/pages/services/ai-agents"));
const EcommerceSolutions = lazy(() => import("@/pages/services/ecommerce-solutions"));
const Portfolio = lazy(() => import("@/pages/portfolio"));
const About = lazy(() => import("@/pages/about"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogAutonomousAIAgents = lazy(() => import("@/pages/autonomous-ai-agents-business"));
const BlogN8nOpenAI = lazy(() => import("@/pages/streamlining-operations-n8n-openai"));
const BlogVectorDatabase = lazy(() => import("@/pages/vector-database-rag-guide"));
const BlogAICustomerSupport = lazy(() => import("@/pages/ai-customer-support-automation"));
const BlogFirstAIWorkflow = lazy(() => import("@/pages/first-ai-workflow-guide"));
const BlogAIEcommerce = lazy(() => import("@/pages/ai-ecommerce-personalization"));
const BlogGenerativeAIROI = lazy(() => import("@/pages/generative-ai-roi"));
const BlogNodeKubernetes = lazy(() => import("@/pages/node-kubernetes-microservices"));
const BlogDataPrivacy = lazy(() => import("@/pages/ai-data-privacy-compliance"));
const BlogMLPredictive = lazy(() => import("@/pages/machine-learning-predictive-analytics"));
const BlogServerless = lazy(() => import("@/pages/serverless-architecture-guide"));
const BlogDisasterRecovery = lazy(() => import("@/pages/disaster-recovery-continuity"));
const CaseStudies = lazy(() => import("@/pages/case-studies"));
const CaseEcommerceAI = lazy(() => import("@/pages/ecommerce-ai-recommendations"));
const CaseFintechAutomation = lazy(() => import("@/pages/fintech-automation-platform"));
const CaseHealthcareAnalytics = lazy(() => import("@/pages/healthcare-analytics-system"));
const CaseRealEstateAI = lazy(() => import("@/pages/real-estate-ai-matching"));
const CaseMarketingAutomation = lazy(() => import("@/pages/marketing-automation-workflow"));
const CaseAICustomerSupport = lazy(() => import("@/pages/ai-customer-support-system"));
const AISalesAgent = lazy(() => import("@/pages/ai-sales-agent"));
const AISupportAgent = lazy(() => import("@/pages/ai-support-agent"));
const AIMarketingAgent = lazy(() => import("@/pages/ai-marketing-agent"));
const AIAdminAgent = lazy(() => import("@/pages/ai-admin-agent"));
const AIResearchAgent = lazy(() => import("@/pages/ai-research-agent"));
const AIContentAgent = lazy(() => import("@/pages/ai-content-agent"));
const Booking = lazy(() => import("@/pages/booking"));
const BookingConfirmed = lazy(() => import("@/pages/booking-confirmed"));
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
            <Route path="/services/web-development" component={WebDevelopment} />
            <Route path="/services/custom-web-application" component={CustomWebApplication} />
            <Route path="/services/mobile-app-development" component={MobileAppDevelopment} />
            <Route path="/services/workflow-automation" component={WorkflowAutomation} />
            <Route path="/services/ai-agents" component={AIAgents} />
            <Route path="/services/ecommerce-solutions" component={EcommerceSolutions} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/autonomous-ai-agents-business" component={BlogAutonomousAIAgents} />
            <Route path="/blog/streamlining-operations-n8n-openai" component={BlogN8nOpenAI} />
            <Route path="/blog/vector-database-rag-guide" component={BlogVectorDatabase} />
            <Route path="/blog/ai-customer-support-automation" component={BlogAICustomerSupport} />
            <Route path="/blog/first-ai-workflow-guide" component={BlogFirstAIWorkflow} />
            <Route path="/blog/ai-ecommerce-personalization" component={BlogAIEcommerce} />
            <Route path="/blog/generative-ai-roi" component={BlogGenerativeAIROI} />
            <Route path="/blog/node-kubernetes-microservices" component={BlogNodeKubernetes} />
            <Route path="/blog/ai-data-privacy-compliance" component={BlogDataPrivacy} />
            <Route path="/blog/machine-learning-predictive-analytics" component={BlogMLPredictive} />
            <Route path="/blog/serverless-architecture-guide" component={BlogServerless} />
            <Route path="/blog/disaster-recovery-continuity" component={BlogDisasterRecovery} />
            <Route path="/case-studies" component={CaseStudies} />
            <Route path="/portfolio/ecommerce-ai-recommendations" component={CaseEcommerceAI} />
            <Route path="/portfolio/fintech-automation-platform" component={CaseFintechAutomation} />
            <Route path="/portfolio/healthcare-analytics-system" component={CaseHealthcareAnalytics} />
            <Route path="/portfolio/real-estate-ai-matching" component={CaseRealEstateAI} />
            <Route path="/portfolio/marketing-automation-workflow" component={CaseMarketingAutomation} />
            <Route path="/portfolio/ai-customer-support-system" component={CaseAICustomerSupport} />
            <Route path="/ai-sales-agent" component={AISalesAgent} />
            <Route path="/ai-support-agent" component={AISupportAgent} />
            <Route path="/ai-marketing-agent" component={AIMarketingAgent} />
            <Route path="/ai-admin-agent" component={AIAdminAgent} />
            <Route path="/ai-research-agent" component={AIResearchAgent} />
            <Route path="/ai-content-agent" component={AIContentAgent} />
            <Route path="/booking" component={Booking} />
            <Route path="/booking-confirmed" component={BookingConfirmed} />
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
