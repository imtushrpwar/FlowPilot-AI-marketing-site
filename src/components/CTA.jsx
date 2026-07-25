import Button from "./Button";
import Container from "./Container";

function CTA() {
  return (
    <section className="py-28 bg-paper">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-ink px-10 py-16 md:py-20 text-center">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #F8F6F1 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-moss" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                Ready when you are
              </span>
            </div>

            <h2 className="mt-7 font-display text-4xl md:text-5xl font-semibold text-paper max-w-2xl mx-auto leading-tight">
              Transform how your business runs
            </h2>

            <p className="mt-5 text-white/60 max-w-lg mx-auto leading-7">
              Start automating workflows today and let your team focus on
              what matters most.
            </p>

            <div className="mt-10">
              <Button variant="inverse">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;
