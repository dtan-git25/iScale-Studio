import { BookingWidget } from "@/components/sections/booking-widget";
import { SEOHead, createBreadcrumbSchema, createWebPageSchema } from "@/components/seo/seo-head";

export default function BookingPage() {
  const bookingSchema = [
    createWebPageSchema(
      "Book a Free AI Consultation | iScale Studio Philippines",
      "Schedule a free 30-minute consultation with our AI solutions architects. Discuss your business automation and AI development needs with iScale Studio.",
      "https://www.iscalestudio.com/booking"
    ),
    createBreadcrumbSchema([
      { name: "Home", url: "https://www.iscalestudio.com" },
      { name: "Book Consultation", url: "https://www.iscalestudio.com/booking" }
    ])
  ];

  return (
    <div className="min-h-screen pt-28">
      <SEOHead
        title="Book a Free AI Consultation | iScale Studio Philippines"
        description="Schedule a free 30-minute consultation with our AI solutions architects. Discuss your business automation and AI development needs with iScale Studio."
        canonical="https://www.iscalestudio.com/booking"
        schema={bookingSchema}
      />
      {/* Booking Section */}
      <BookingWidget />
    </div>
  );
}
