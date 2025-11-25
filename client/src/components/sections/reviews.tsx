import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Maria Santos",
      company: "TechStart Philippines",
      role: "CEO",
      image: "MS",
      rating: 5,
      text: "iScale Studio completely transformed how we handle customer support. Their AI chatbot reduced our response time by 70% while improving satisfaction scores. Exceptional team and delivery!"
    },
    {
      name: "James Chen",
      company: "Manila Logistics Co.",
      role: "Operations Director",
      image: "JC",
      rating: 5,
      text: "The workflow automation solution has saved us thousands of hours in manual data entry. The team's expertise in understanding our local business needs was invaluable. Highly recommended!"
    },
    {
      name: "Ana Reyes",
      company: "FinServe Solutions",
      role: "Product Lead",
      image: "AR",
      rating: 5,
      text: "Working with iScale Studio was a game-changer for our analytics platform. They delivered an ML-powered forecasting system that our clients absolutely love. Professional, reliable, and innovative."
    },
    {
      name: "Roberto Villar",
      company: "E-Commerce Plus",
      role: "Founder",
      image: "RV",
      rating: 5,
      text: "Their AI solutions helped us scale from 5 to 50 employees without proportional growth in support staff. The consultation process was thorough and they really understood our vision. Worth every peso!"
    },
    {
      name: "Sarah Lim",
      company: "Digital Marketing Hub",
      role: "Managing Director",
      image: "SL",
      rating: 5,
      text: "Best decision we made was partnering with iScale Studio. Their AI agents automated our campaign management while improving ROI by 40%. Support after launch has been outstanding."
    },
    {
      name: "Miguel Torres",
      company: "Manufacturing Pro",
      role: "Plant Manager",
      image: "MT",
      rating: 5,
      text: "We didn't think AI was applicable to our industry, but iScale proved us wrong. Their solution optimized our production scheduling and reduced downtime. Outstanding results!"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium mb-4">
              What Our Clients Say
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Trusted by businesses across the Philippines. See why companies choose iScale Studio for their AI and digital transformation needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
              className="group"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, delay: (idx % 3) * 0.15, repeat: Infinity }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <div className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md border border-white/40 p-8 rounded-2xl h-full shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 + i * 0.05 }}
                      >
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow italic">"{review.text}"</p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#9929ea]/30 to-transparent mb-6"></div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center text-white font-bold"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, delay: idx * 0.2, repeat: Infinity }}
                    >
                      {review.image}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                      <p className="text-xs text-gray-700">{review.role} at {review.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9929ea]/10 to-[#5808fb]/10 px-6 py-3 rounded-full border border-[#9929ea]/30">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9929ea] to-[#5808fb] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700 ml-2">Trusted by 40+ companies across the Philippines</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
