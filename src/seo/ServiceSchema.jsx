// src/seo/ServiceSchema.jsx
import { SITE } from "../config/site";


function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Workflow Automation Software",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: "Worldwide",
    description:
      "FlowPilot AI automates repetitive business operations with AI-powered workflows, real-time analytics, and enterprise-grade security.",
    offers: {
      "@type": "Offer",
      url: `${SITE.url}/pricing`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default ServiceSchema;