import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-ink text-white/60 py-14">
      <Container className="text-center">
        <div className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" aria-hidden="true" />          <p className="font-display text-lg font-semibold text-paper">
            FlowPilot AI
          </p>
        </div>

        <p className="mt-3 text-sm">AI workflow automation platform</p>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 font-mono text-xs uppercase tracking-widest text-indigo-400 hover:text-indigo-300 border-b border-indigo-400/40 pb-0.5"
        >
          Built for Digital Heroes Training Task
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
