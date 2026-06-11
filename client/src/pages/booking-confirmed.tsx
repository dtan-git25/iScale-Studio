import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, Mail, Calendar, Video, FileText } from "lucide-react";
import { SEOHead, createWebPageSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function BookingConfirmed() {
  const pageSchema = [
    createWebPageSchema(
      "Booking Confirmed | iScale Studio",
      "Your consultation with iScale Studio has been successfully scheduled.",
      "https://www.iscalestudio.com/booking-confirmed"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://www.iscalestudio.com" },
      { name: "Book Consultation", url: "https://www.iscalestudio.com/booking" },
      { name: "Confirmed", url: "https://www.iscalestudio.com/booking-confirmed" }
    ])
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Booking Confirmed | iScale Studio"
        description="Your consultation with iScale Studio has been successfully scheduled."
        canonical="https://www.iscalestudio.com/booking-confirmed"
        schema={pageSchema}
      />

      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9929ea]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-8 lg:p-12 shadow-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="h-10 w-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4"
              data-testid="text-booking-confirmed-title"
            >
              Booking Confirmed!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-700 mb-8"
              data-testid="text-booking-confirmed-message"
            >
              Your consultation has been successfully scheduled. We've sent a calendar invite and Zoom link to your email.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-[#9929ea]/5 via-white to-[#2DBFBA]/10 rounded-xl p-6 mb-8"
            >
              <h2 className="font-bold text-gray-900 mb-4">What's Next?</h2>
              <ul className="text-left space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Check your email</span>
                    <p className="text-sm text-gray-600">Look for the calendar invite in your inbox</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Add to your calendar</span>
                    <p className="text-sm text-gray-600">Accept the invite to block the time</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                    <Video className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Join via Zoom</span>
                    <p className="text-sm text-gray-600">Use the Zoom link in the email to join</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#9929ea] to-[#5808fb] flex items-center justify-center">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Prepare your questions</span>
                    <p className="text-sm text-gray-600">Think about your project needs and goals</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/">
                <button
                  className="bg-gradient-to-r from-[#9929ea] to-[#5808fb] hover:from-[#8629e4] hover:to-[#4a07eb] text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
                  data-testid="button-return-home"
                >
                  Return to Home
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
