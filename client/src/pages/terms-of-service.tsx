import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content: "By accessing and using the iScale Studio website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on iScale Studio's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n\n• Modify or copy the materials\n• Use the materials for any commercial purpose or for any public display\n• Attempt to decompile or reverse engineer any software contained on the website\n• Remove any copyright or other proprietary notations from the materials\n• Transfer the materials to another person or 'mirror' the materials on any other server"
    },
    {
      title: "3. Disclaimer",
      content: "The materials on iScale Studio's website are provided on an 'as is' basis. iScale Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      title: "4. Limitations",
      content: "In no event shall iScale Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on iScale Studio's website, even if iScale Studio or an authorized representative has been notified orally or in writing of the possibility of such damage."
    },
    {
      title: "5. Accuracy of Materials",
      content: "The materials appearing on iScale Studio's website could include technical, typographical, or photographic errors. iScale Studio does not warrant that any of the materials on our website are accurate, complete, or current. iScale Studio may make changes to the materials contained on our website at any time without notice."
    },
    {
      title: "6. Links",
      content: "iScale Studio has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by iScale Studio of the site. Use of any such linked website is at the user's own risk."
    },
    {
      title: "7. Modifications",
      content: "iScale Studio may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
    },
    {
      title: "8. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of the Philippines, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
    },
    {
      title: "9. Service Delivery",
      content: "All services provided by iScale Studio are delivered on a best-effort basis. We commit to:\n\n• Delivering quality solutions aligned with agreed specifications\n• Providing professional and timely communication\n• Maintaining confidentiality of your business information\n• Following industry best practices and standards\n• Supporting your project through testing and deployment\n\nClient responsibilities include providing timely feedback, access to necessary systems, and accurate project requirements."
    },
    {
      title: "10. Payment Terms",
      content: "Payment terms are specified in individual project agreements. Invoices are typically due within 30 days of issuance. Late payments may incur interest charges as specified in the service agreement. We reserve the right to suspend services for non-payment."
    },
    {
      title: "11. Intellectual Property",
      content: "Unless otherwise specified in your service agreement, all custom code, designs, and deliverables created by iScale Studio for your project shall be owned by you upon receipt of full payment. iScale Studio retains the right to use general methodologies, frameworks, and non-proprietary knowledge for other projects."
    },
    {
      title: "12. Confidentiality",
      content: "Both parties agree to maintain strict confidentiality of proprietary information shared during the course of our engagement. This includes business processes, technical specifications, and any other sensitive information. This obligation survives for a period of 3 years after project completion."
    },
    {
      title: "13. Limitation of Liability",
      content: "In no event shall iScale Studio's liability exceed the total amount paid by the client for services in the preceding 12 months. iScale Studio shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from the use or inability to use our services."
    },
    {
      title: "14. Warranty Disclaimer",
      content: "While we strive for excellence, iScale Studio provides services on an 'as is' basis without warranties of any kind, either express or implied. We do not guarantee uninterrupted service, error-free delivery, or specific results."
    },
    {
      title: "15. Termination",
      content: "Either party may terminate an engagement by providing written notice as specified in the service agreement. Upon termination, the client remains responsible for payment of all services rendered to date. iScale Studio will provide reasonable support for knowledge transfer."
    },
    {
      title: "16. Contact Information",
      content: "For any questions regarding these Terms of Service, please contact:\n\niScale Studio\nCapas, Tarlac, Philippines 2315\nEmail: legal@iscalestudio.com\nPhone: +63 956 0623 082"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <motion.a
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-[#9929ea] hover:text-[#7a1fbf] transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </motion.a>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-display font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-700">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#9929ea]/8 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md border border-white/40 p-8 rounded-2xl shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#9929ea]">{section.title.split('.')[0]}</span>
                  <span className="text-gray-400 text-base font-normal">{section.title.substring(section.title.indexOf('.') + 1)}</span>
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: sections.length * 0.05 }}
            className="mt-16 p-8 bg-gradient-to-r from-[#9929ea]/10 to-[#2DBFBA]/10 border border-[#9929ea]/30 rounded-2xl text-center"
          >
            <p className="text-gray-700">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
