import Container from "./Container";
import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import features from "../data/features";

function Features() {
  return (
    <section className="py-28 bg-paper">
      <Container>
        <SectionTitle
          subtitle="Platform"
          title="Every module your operations team needs"
          description="FlowPilot AI combines automation, analytics, security, and collaboration into one connected platform."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
