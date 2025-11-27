import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import webDevImg from "@assets/generated_images/machine_learning_model_development_dashboard.png";

export default function AIMLDevelopmentPage() {
  const features = [
    "Predictive Analytics & Forecasting Models",
    "Computer Vision & Image Classification",
    "Natural Language Processing (NLP)",
    "Customer Churn & Risk Prediction",
    "Custom ML Model Training & Optimization",
    "Real-time Model Inference & Deployment"
  ];

  const benefits = [
    "Data-driven insights for better decision-making",
    "Automated pattern recognition from complex data",
    "Improved operational efficiency through predictions",
    "Competitive advantage with proprietary models",
    "Scalable ML infrastructure for enterprise needs",
    "Continuous model improvement and optimization"
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-[#8629e4] hover:text-[#9929ea] text-sm font-medium mb-4 block">
            ← Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              Custom AI/ML Model Development
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Build Proprietary Machine Learning Models</h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              We develop custom machine learning models tailored to your specific data and business needs. From predictive analytics to computer vision, our models unlock actionable insights from your data.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={webDevImg} alt="AI/ML Model Development" className="rounded-xl shadow-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">What We Deliver</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our ML development expertise covers the entire model lifecycle: data preparation, model design, training, validation, deployment, and ongoing optimization. We use state-of-the-art frameworks and techniques to build models that deliver measurable business impact.
              </p>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-12 mb-20"
          >
            <h2 className="text-4xl font-bold mb-12">Why Choose Our AI/ML Development?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-[#9929ea] to-[#5808fb]">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured ML Development Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12">Featured ML Development Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔮",
                  title: "Predictive Analytics",
                  description: "Forecast trends, predict customer behavior, and make data-driven decisions with custom ML models",
                  features: ["Forecasting", "Trend Analysis", "Risk Prediction"]
                },
                {
                  icon: "👁️",
                  title: "Computer Vision",
                  description: "Extract insights from images and video with advanced computer vision and image classification models",
                  features: ["Image Recognition", "Object Detection", "Quality Control"]
                },
                {
                  icon: "💬",
                  title: "Natural Language Processing",
                  description: "Understand and process text data with NLP models for sentiment analysis, classification, and extraction",
                  features: ["Sentiment Analysis", "Text Classification", "Entity Recognition"]
                },
                {
                  icon: "📊",
                  title: "Data Analysis & Insights",
                  description: "Discover patterns and relationships in your data with advanced analytics and clustering algorithms",
                  features: ["Pattern Recognition", "Clustering", "Anomaly Detection"]
                },
                {
                  icon: "⚙️",
                  title: "Model Optimization",
                  description: "Train, validate, and optimize models for accuracy, speed, and scalability in production environments",
                  features: ["Hyperparameter Tuning", "Performance Optimization", "Validation"]
                },
                {
                  icon: "🚀",
                  title: "Deployment & Monitoring",
                  description: "Deploy models at scale with real-time inference, monitoring, and continuous performance tracking",
                  features: ["Real-time Inference", "Model Monitoring", "Auto-scaling"]
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-yellow-500 transition-all">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <Badge key={i} className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 text-gray-700 hover:from-orange-500/20 hover:to-yellow-500/20 transition-all text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl font-bold">Ready to Build Custom ML Models?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Let's discuss your data challenges and create machine learning models that drive business results.
            </p>
            <Link href="/booking">
              <Button size="lg" className="btn-gradient border-0 rounded-full px-8 h-12 text-base shadow-lg shadow-[#9929ea]/40">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
