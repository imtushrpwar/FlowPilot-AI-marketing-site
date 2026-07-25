// src/components/TrustedCompanies.jsx
import Container from "./Container";

const companies = ["NovaTech", "BluePeak", "CloudCore", "Meridian", "Fernwell", "Arclight"];

function TrustedCompanies() {
  return (
    <section className="py-16 border-y border-line bg-white" aria-label="Trusted by">
      <Container>
        <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-ash mb-10">
          Trusted by operations teams at
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6 list-none">
          {companies.map((company) => (
            <li
              key={company}
              className="font-display text-xl text-ink/40 hover:text-ink transition-colors"
            >
              {company}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default TrustedCompanies;