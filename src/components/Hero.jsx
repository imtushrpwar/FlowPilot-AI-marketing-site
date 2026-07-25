// src/components/Hero.jsx
import { motion } from "framer-motion";
import Button from "./Button";
import Container from "./Container";

function ConsoleRow({ label, value, dot }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white/[0.04] border border-white/10 px-5 py-4">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
          {label}
        </p>
        <p className="text-white font-medium mt-1.5">{value}</p>
      </div>
      <span className={`h-2 w-2 rounded-full ${dot}`} aria-hidden="true" />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-paper relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #12141C1a 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <Container className="relative min-h-[92vh] flex items-center py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left — no scroll/fade animation: this is the LCP element, it must paint immediately */}
          <div>
            <div className="inline-flex items-center gap-2 border border-line bg-white rounded-full px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-moss motion-safe:animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-ash">
                System status: automating
              </span>
            </div>

            <h1 className="mt-8 font-display text-5xl lg:text-6xl font-semibold text-ink leading-[1.05]">
              Automate the
              <br />
              business you
              <br />
              <span className="italic text-indigo-600">already run.</span>
            </h1>

            <p className="mt-7 text-lg text-ash leading-8 max-w-md">
              FlowPilot AI turns repetitive operations into self-running
              workflows, so your team spends time on decisions, not data
              entry.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Button to="/pricing">Start Free Trial</Button>
              <Button to="/contact" variant="secondary">
                Book Demo
              </Button>
            </div>
          </div>

          {/* Right — motion is fine here, it's below-the-fold weight and not the LCP candidate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            role="img"
            aria-label="Illustration of the FlowPilot AI workflow console showing today's automation, AI status, and team productivity"
          >
            <div className="rounded-2xl bg-ink p-2 shadow-2xl shadow-ink/20">
              <div className="rounded-xl border border-white/10 p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                    Workflow console
                  </span>
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <ConsoleRow
                    label="Today's automation"
                    value="Invoice processing"
                    dot="bg-indigo-400"
                  />
                  <ConsoleRow
                    label="AI status"
                    value="184 tasks completed"
                    dot="bg-moss"
                  />
                  <ConsoleRow
                    label="Team productivity"
                    value="+78% this month"
                    dot="bg-amber-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;