// src/seo/PricingSchema.jsx
import { SITE } from "../config/site";

function PricingSchema({ plans }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "FlowPilot AI",
    description:
      "AI-powered workflow automation platform with plans for teams of every size.",
    brand: {
      "@type": "Brand",
      name: "FlowPilot AI",
    },
    offers: plans
      .filter((plan) => typeof plan.price === "number")
      .map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url:`${SITE.url}/pricing`,
      })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default PricingSchema;