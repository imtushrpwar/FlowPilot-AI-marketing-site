// src/components/PricingCard.jsx
import Button from "./Button";

function PricingCard({ plan }) {
  const isFeatured = Boolean(plan.featured);

  return (
    <div
      className={`relative rounded-xl border p-8 flex flex-col ${
        isFeatured
          ? "border-indigo-600 bg-ink text-paper"
          : "border-line bg-white text-ink"
      }`}
    >
      {isFeatured && (
        <span className="absolute -top-3 left-8 font-mono text-[11px] uppercase tracking-widest bg-indigo-600 text-paper px-3 py-1 rounded-full">
          Most popular
        </span>
      )}

      <h2
        className={`font-mono text-xs uppercase tracking-widest ${
          isFeatured ? "text-white/50" : "text-ash"
        }`}
      >
        {plan.name}
      </h2>

      <p className="mt-4 flex items-baseline gap-1">
        <span
          className="font-display text-4xl font-semibold"
          aria-label={
            typeof plan.price === "number"
              ? `${plan.price} US dollars per month`
              : plan.price
          }
        >
          {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
        </span>
        {typeof plan.price === "number" && (
          <span className={isFeatured ? "text-white/50" : "text-ash"} aria-hidden="true">
            /month
          </span>
        )}
      </p>

      <p className={`mt-3 text-sm ${isFeatured ? "text-white/60" : "text-ash"}`}>
        {plan.description}
      </p>

      <ul className="mt-8 space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span
              className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${
                isFeatured ? "bg-indigo-400" : "bg-indigo-600"
              }`}
              aria-hidden="true"
            />
            <span className={isFeatured ? "text-white/80" : "text-ink/80"}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          to={plan.to}
          variant={isFeatured ? "inverse" : "secondary"}
          className="w-full justify-center"
        >
          {plan.cta}
        </Button>
      </div>
    </div>
  );
}

export default PricingCard;