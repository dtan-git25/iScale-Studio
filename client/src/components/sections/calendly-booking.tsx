import { motion } from "framer-motion";
import { Calendar, Clock, User, CheckCircle2 } from "lucide-react";

export function CalendlyBooking() {
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const dates = [
    { day: "Mon", date: "Dec 2" },
    { day: "Tue", date: "Dec 3" },
    { day: "Wed", date: "Dec 4" },
    { day: "Thu", date: "Dec 5" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Schedule Your Consultation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a personalized 30-minute call with our solutions architect to discuss your AI transformation needs.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">What to Expect</h3>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">30 Minutes</h4>
                    <p className="text-sm text-muted-foreground">Quick call to understand your needs</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Solutions Architect</h4>
                    <p className="text-sm text-muted-foreground">Expert guidance tailored to you</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">No Obligation</h4>
                    <p className="text-sm text-muted-foreground">Explore possibilities risk-free</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Booking */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Select a Time</h3>

              {/* Dates */}
              <div className="mb-8">
                <p className="text-sm font-medium text-gray-700 mb-3">Pick a date</p>
                <div className="grid grid-cols-4 gap-2">
                  {dates.map((d, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        idx === 1
                          ? "border-[#9929ea] bg-gradient-to-br from-[#9929ea]/20 to-[#5808fb]/20"
                          : "border-gray-200 hover:border-[#9929ea]"
                      }`}
                    >
                      <div className="text-xs font-medium text-gray-600">{d.day}</div>
                      <div className="text-sm font-bold text-gray-900">{d.date}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Times */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">Pick a time</p>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.05) + 0.2 }}
                      className={`py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all hover:border-[#9929ea] ${
                        idx === 2
                          ? "border-[#9929ea] bg-gradient-to-br from-[#9929ea] to-[#5808fb] text-white"
                          : "border-gray-200 text-gray-700"
                      }`}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Book Button */}
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="w-full mt-8 bg-gradient-to-r from-[#9929ea] to-[#5808fb] hover:from-[#8629e4] hover:to-[#4a07eb] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Confirm Booking
              </motion.button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                We'll send you a calendar invite and Zoom link
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
