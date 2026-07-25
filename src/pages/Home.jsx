import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import SEO from "../seo/SEO";
import Schema from "../seo/Schema";
import FAQ from "../components/FAQ";
import FAQSchema from "../seo/FAQSchema";
import { SITE } from "../config/site";

function Home() {
  return (
    <>
      <SEO
        title="FlowPilot AI | Automate Business Workflows"
        description="AI workflow automation software helping businesses save time and improve productivity."
        keywords="AI Automation, SaaS, Workflow Automation, CRM, Productivity"
        url={`${SITE.url}/`}
      />

      <Schema />
      <FAQSchema />
      <Hero />
      <TrustedCompanies />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;
