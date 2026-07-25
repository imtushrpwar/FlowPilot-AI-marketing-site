// src/seo/ContactSchema.jsx
function ContactSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact FlowPilot AI",
    url: "https://flowpilot-ai.vercel.app/contact",
    about: {
      "@type": "Organization",
      name: "FlowPilot AI",
      url: "https://flowpilot-ai.vercel.app",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@flowpilot-ai.example",
        availableLanguage: "English",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default ContactSchema;