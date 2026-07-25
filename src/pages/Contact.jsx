// src/pages/Contact.jsx
import { useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import SEO from "../seo/SEO";
import ContactSchema from "../seo/ContactSchema";

function Field({ label, name, value, onChange, type = "text" }) {
  const id = `contact-${name}`;

  return (
    <div>
      <label htmlFor={id} className="font-mono text-xs uppercase tracking-widest text-ash">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-3 text-ink focus:outline-none focus:border-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-600/30"
      />
    </div>
  );
}

const contactDetails = [
  { label: "Email", value: "hello@flowpilot-ai.example" },
  { label: "Response time", value: "Within one business day" },
  { label: "Support hours", value: "Mon–Fri, 9am–6pm EST" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-28 bg-paper">
      <SEO
        title="Contact | FlowPilot AI"
        description="Get in touch with the FlowPilot AI team. We reply within one business day."
        keywords="contact FlowPilot AI, workflow automation support, book a demo"
        url="https://flowpilot-ai.vercel.app/contact"
      />
      <ContactSchema />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: intro + details */}
          <div>
            <SectionTitle
              as="h1"
              align="left"
              subtitle="Contact"
              title="Talk to our team"
              description="Questions about FlowPilot AI? Send us a message and we'll get back within one business day."
            />

            <dl className="mt-12 space-y-6 border-t border-line pt-8">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt className="font-mono text-xs uppercase tracking-widest text-indigo-600">
                    {item.label}
                  </dt>
                  <dd className="text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-line rounded-xl p-8" aria-live="polite">
            {sent ? (
              <div className="text-center py-10">
                <p className="font-mono text-xs uppercase tracking-widest text-indigo-600">
                  Message sent
                </p>
                <p className="text-ink mt-3">
                  Thanks, {form.name.split(" ")[0] || "there"} — we'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Field label="Name" name="name" value={form.name} onChange={handleChange} />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />

                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-xs uppercase tracking-widest text-ash"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-3 text-ink focus:outline-none focus:border-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-600/30"
                  />
                </div>

                <Button type="submit" className="w-full justify-center">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;