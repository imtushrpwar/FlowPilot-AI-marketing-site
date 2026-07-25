// src/pages/Pricing.jsx
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import PricingCard from "../components/PricingCard";
import SEO from "../seo/SEO";
import PricingSchema from "../seo/PricingSchema";

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "For small teams automating their first workflows.",
    features: [
      "Up to 5 workflows",
      "1,000 tasks / month",
      "Email support",
      "Core integrations",
    ],
    cta: "Start Free Trial",
    to: "/contact",
  },
  {
    name: "Growth",
    price: 79,
    description: "For growing teams that run on automation.",
    features: [
      "Unlimited workflows",
      "25,000 tasks / month",
      "Priority support",
      "Advanced analytics",
      "API access",
    ],
    cta: "Start Free Trial",
    to: "/contact",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced security needs.",
    features: [
      "Unlimited everything",
      "Dedicated success manager",
      "SSO & audit logs",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    to: "/contact",
  },
];

function Pricing() {
  return (
    <section className="py-28 bg-paper">
      <SEO
        title="Pricing | FlowPilot AI"
        description="Simple, transparent pricing for FlowPilot AI. Start free, upgrade as your automation needs grow."
        keywords="workflow automation pricing, AI automation plans, FlowPilot AI cost"
        url="https://flowpilot-ai.vercel.app/pricing"
      />
      <PricingSchema plans={plans} />

      <Container>
        <SectionTitle
          as="h1"
          subtitle="Pricing"
          title="Plans that scale with your workflows"
          description="Start free. Upgrade when your automation needs grow."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Pricing;