import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { SEOHead, createWebPageSchema, createBreadcrumbSchema } from "@/components/seo/seo-head";

export default function PrivacyPolicy() {
  const pageSchema = [
    createWebPageSchema(
      "Privacy Policy | iScale Studio",
      "Learn how iScale Studio collects, uses, and protects your personal information. Our commitment to data privacy and security for our AI development services.",
      "https://iscalestudio.com/privacy-policy"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://iscalestudio.com" },
      { name: "Privacy Policy", url: "https://iscalestudio.com/privacy-policy" }
    ])
  ];
  const sections = [
    {
      title: "1. Introduction",
      content: "iScale Studio ('we', 'us', 'our', or 'Company') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, and interact with us."
    },
    {
      title: "2. Information We Collect",
      content: "We may collect information about you in a variety of ways. The information we may collect on the Site includes:\n\n• Personal Data: Name, email address, phone number, company information, project details\n• Technical Data: IP address, browser type, operating system, pages visited, time and date of visits\n• Communication Data: Messages, inquiries, feedback, and support requests\n• Payment Data: Billing information, transaction history (processed securely by third-party providers)"
    },
    {
      title: "3. How We Use Your Information",
      content: "We use the information we collect in the following ways:\n\n• To deliver and improve our AI development, automation, and software solutions\n• To communicate with you about projects, updates, and support\n• To process payments and send invoices\n• To analyze usage patterns and optimize our services\n• To comply with legal obligations\n• To prevent fraud and ensure security\n• To send marketing communications (with your consent)"
    },
    {
      title: "4. Disclosure of Your Information",
      content: "We may share your information in the following circumstances:\n\n• With service providers who assist us (hosting, payment processing, analytics)\n• With third-party partners for project delivery and integration\n• When required by law or to protect our legal rights\n• In connection with mergers, acquisitions, or asset sales\n• With your explicit consent"
    },
    {
      title: "5. Data Security",
      content: "We implement comprehensive security measures to protect your personal information, including:\n\n• SSL/TLS encryption for data in transit\n• Secure password practices and authentication\n• Regular security audits and penetration testing\n• Access controls and role-based permissions\n• Compliance with data protection regulations\n\nHowever, no method of transmission over the Internet is 100% secure."
    },
    {
      title: "6. Data Retention",
      content: "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. You may request deletion of your data at any time, subject to legal requirements for record retention."
    },
    {
      title: "7. Your Rights",
      content: "Depending on your location, you may have the following rights:\n\n• Right to access your personal information\n• Right to correct inaccurate information\n• Right to request deletion of your data\n• Right to opt-out of marketing communications\n• Right to data portability\n• Right to withdraw consent\n\nTo exercise these rights, please contact us at privacy@iscalestudio.com"
    },
    {
      title: "8. Cookies and Tracking Technologies",
      content: "Our website uses cookies and similar tracking technologies to enhance your experience. These allow us to remember your preferences, analyze site usage, and deliver personalized content. You can control cookie preferences through your browser settings."
    },
    {
      title: "9. Third-Party Links",
      content: "Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites before providing your information."
    },
    {
      title: "10. International Data Transfers",
      content: "If you are located outside the Philippines, your information may be transferred to, stored in, and processed in the Philippines and other countries. By using our services, you consent to such transfers."
    },
    {
      title: "11. Children's Privacy",
      content: "Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will delete it immediately."
    },
    {
      title: "12. Contact Us",
      content: "If you have questions about this Privacy Policy or our privacy practices, please contact us at:\n\niScale Studio\nCapas, Tarlac, Philippines 2315\nEmail: privacy@iscalestudio.com\nPhone: +63 956 0623 082"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <SEOHead
        title="Privacy Policy | iScale Studio"
        description="Learn how iScale Studio collects, uses, and protects your personal information. Our commitment to data privacy and security for our AI development services."
        canonical="https://iscalestudio.com/privacy-policy"
        schema={pageSchema}
      />
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-900/20 to-violet-900/10 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-[#9929ea] hover:text-[#7a1fbf] transition-colors mb-6 text-sm sm:text-base">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
            <p className="text-sm sm:text-base text-gray-700">Last updated: January 2025</p>
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
          <div className="space-y-6 sm:space-y-12">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-md border border-white/40 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg"
              >
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <span className="text-[#9929ea]">{section.title.split('.')[0]}</span>
                  <span className="text-gray-400 text-sm sm:text-base font-normal">{section.title.substring(section.title.indexOf('.') + 1)}</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
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
            className="mt-12 sm:mt-16 p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-[#9929ea]/10 to-[#2DBFBA]/10 border border-[#9929ea]/30 rounded-2xl text-center"
          >
            <p className="text-sm sm:text-base text-gray-700">
              If you have any questions or concerns about our Privacy Policy, please don't hesitate to contact us.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
