import { motion } from "framer-motion";
import { Link } from "wouter";
import { CalendlyBooking } from "@/components/sections/calendly-booking";

export default function BookingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-gray-300 text-[#8629e4] text-sm font-medium">
              Schedule a Call
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Book Your Consultation</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Schedule a personalized 30-minute consultation with our AI solutions architect to discuss your transformation needs and explore how we can help your business scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <CalendlyBooking />
    </div>
  );
}
