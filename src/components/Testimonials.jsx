import Container from "./Container";
import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <SectionTitle
          subtitle="Testimonials"
          title="Loved by growing businesses"
          description="Thousands of companies rely on FlowPilot AI every day."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
