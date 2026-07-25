import { useState } from "react";
import faq from "../data/faq";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-28 bg-paper">
      <Container>
        <SectionTitle
          subtitle="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before you start."
        />

        <div className="mt-16 max-w-2xl mx-auto">
          {faq.map((item, index) => {
            const isOpen = open === index;

            return (
              <div key={index} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs text-ash">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-ink">{item.question}</span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={`shrink-0 h-6 w-6 rounded-full border border-line flex items-center justify-center text-ink transition-transform duration-300 ${isOpen ? "rotate-45 border-indigo-600 text-indigo-600" : ""
                      }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <p id={`faq-panel-${index}`} className="text-ash leading-7 pb-6 pl-9 -mt-2">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;
