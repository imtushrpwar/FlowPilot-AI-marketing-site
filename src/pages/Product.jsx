// src/pages/Product.jsx
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import SEO from "../seo/SEO";
import ServiceSchema from "../seo/ServiceSchema";
import { SITE } from "../config/site";

const steps = [
  {
    code: "01",
    title: "Connect your tools",
    description:
      "Link the apps your team already uses in a few clicks, no engineering required.",
  },
  {
    code: "02",
    title: "Design the workflow",
    description:
      "Map out triggers, conditions, and actions on a visual canvas.",
  },
  {
    code: "03",
    title: "Let it run",
    description:
      "FlowPilot AI executes the workflow and learns from every run.",
  },
];

function Product() {
  return (
    <>
      <SEO
        title="Product | FlowPilot AI"
        description="See how FlowPilot AI automates invoice processing, onboarding, and approvals with AI-powered workflows."
        keywords="workflow automation product, AI operations software, business process automation"
        url={`${SITE.url}/product`}
      />
      <ServiceSchema />

      <section className="py-28 bg-paper">
        <Container>
          <SectionTitle
            as="h1"
            subtitle="Product"
            title="One platform, every workflow"
            description="From invoice approvals to customer onboarding, FlowPilot AI automates the operational work slowing your team down."
          />
        </Container>
      </section>

      <section className="py-20 bg-white border-y border-line" aria-labelledby="how-it-works-heading">
        <Container>
          <h2 id="how-it-works-heading" className="sr-only">
            How FlowPilot AI works
          </h2>

          <ol className="grid md:grid-cols-3 gap-10 list-none">
            {steps.map((step) => (
              <li key={step.code}>
                <span className="font-mono text-xs text-indigo-600 tracking-widest" aria-hidden="true">
                  {step.code}
                </span>
                <h3 className="font-display text-xl font-semibold text-ink mt-3">
                  {step.title}
                </h3>
                <p className="text-ash leading-7 mt-3">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-28 bg-paper text-center" aria-label="Call to action">
        <Container>
          <Button to="/pricing">Start Free Trial</Button>
        </Container>
      </section>
    </>
  );
}

export default Product;