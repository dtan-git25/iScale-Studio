import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  schema?: object | object[];
  article?: {
    publishedTime: string;
    author: string;
    section: string;
  };
}

export function SEOHead({
  title,
  description,
  canonical,
  type = "website",
  schema,
  article
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (property: string, content: string, isName = false) => {
      const selector = isName ? `meta[name="${property}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        if (isName) {
          element.setAttribute("name", property);
        } else {
          element.setAttribute("property", property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("description", description, true);
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:type", type);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);

    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }

    const articleMetaTags = ["article:published_time", "article:author", "article:section"];
    
    if (article) {
      updateMetaTag("article:published_time", article.publishedTime);
      updateMetaTag("article:author", article.author);
      updateMetaTag("article:section", article.section);
    } else {
      articleMetaTags.forEach(property => {
        const element = document.querySelector(`meta[property="${property}"]`);
        if (element) {
          element.remove();
        }
      });
    }

    if (schema) {
      const existingSchemas = document.querySelectorAll('script[data-seo-schema="true"]');
      existingSchemas.forEach(el => el.remove());

      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach(schemaItem => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-schema", "true");
        script.textContent = JSON.stringify(schemaItem);
        document.head.appendChild(script);
      });
    }

    return () => {
      const dynamicSchemas = document.querySelectorAll('script[data-seo-schema="true"]');
      dynamicSchemas.forEach(el => el.remove());
    };
  }, [title, description, canonical, type, schema, article]);

  return null;
}

export const siteConfig = {
  name: "iScale Studio",
  url: "https://iscalestudio.com",
  phone: "+63-956-0623-082",
  email: "hello@iscalestudio.com",
  address: {
    street: "Capas",
    city: "Tarlac",
    postalCode: "2315",
    country: "Philippines",
    countryCode: "PH"
  },
  social: {
    twitter: "@iscalestudio",
    facebook: "https://facebook.com/iscalestudio",
    linkedin: "https://linkedin.com/company/iscalestudio",
    instagram: "https://instagram.com/iscalestudio"
  }
};

export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://iscalestudio.com/#organization",
  "name": "iScale Studio",
  "image": "https://iscalestudio.com/logo.png",
  "url": "https://iscalestudio.com",
  "telephone": "+63-956-0623-082",
  "email": "hello@iscalestudio.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Capas",
    "addressLocality": "Tarlac",
    "postalCode": "2315",
    "addressCountry": "PH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 15.3264,
    "longitude": 120.5926
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "Philippines"
  },
  "sameAs": [
    "https://facebook.com/iscalestudio",
    "https://twitter.com/iscalestudio",
    "https://linkedin.com/company/iscalestudio",
    "https://instagram.com/iscalestudio"
  ]
});

export const createServiceSchema = (
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "Organization",
    "name": "iScale Studio",
    "url": "https://iscalestudio.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Philippines"
  },
  "url": serviceUrl,
  "description": serviceDescription
});

export const createArticleSchema = (
  headline: string,
  description: string,
  datePublished: string,
  url: string,
  section: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "datePublished": datePublished,
  "dateModified": datePublished,
  "url": url,
  "author": {
    "@type": "Organization",
    "name": "iScale Studio",
    "url": "https://iscalestudio.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "iScale Studio",
    "logo": {
      "@type": "ImageObject",
      "url": "https://iscalestudio.com/logo.png"
    }
  },
  "articleSection": section,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  }
});

export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const createWebPageSchema = (
  name: string,
  description: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": name,
  "description": description,
  "url": url,
  "isPartOf": {
    "@type": "WebSite",
    "name": "iScale Studio",
    "url": "https://iscalestudio.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "iScale Studio"
  }
});
