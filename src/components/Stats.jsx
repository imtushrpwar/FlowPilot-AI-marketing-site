import Container from "./Container";

const stats = [
  { id: 1, number: "10K+", label: "Businesses automated" },
  { id: 2, number: "99.9%", label: "Platform uptime" },
  { id: 3, number: "80%", label: "Less manual work" },
  { id: 4, number: "24/7", label: "Customer support" },
];

function Stats() {
  return (
    <section className="py-24 bg-ink text-paper">
      <Container>
        <h2 className="sr-only">Platform statistics</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {stats.map((item) => (
            <div key={item.id} className="text-center border-l border-white/10 first:border-l-0">
              <p className="font-mono text-4xl md:text-5xl font-medium text-amber-400">
                {item.number}
              </p>
              <p className="mt-3 text-white/50 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;
