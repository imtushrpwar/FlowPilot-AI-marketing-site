// src/seo/ServiceSchema.jsx
function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Workflow Automation Software",
    provider: {
      "@type": "Organization",
      name: "FlowPilot AI",
      url: "https://flowpilot-ai.vercel.app",
    },
    areaServed: "Worldwide",
    description:
      "FlowPilot AI automates repetitive business operations with AI-powered workflows, real-time analytics, and enterprise-grade security.",
    offers: {
      "@type": "Offer",
      url: "https://flowpilot-ai.vercel.app/pricing",
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