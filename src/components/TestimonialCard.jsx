function TestimonialCard({ item }) {
  return (
    <article className="bg-white rounded-xl border border-line p-8 flex flex-col h-full">
      <span className="font-display text-5xl text-indigo-600/20 leading-none">
        "
      </span>

      <p className="text-ink leading-7 -mt-4 flex-1">{item.review}</p>

      <div className="mt-8 pt-6 border-t border-line flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-ink">{item.name}</h3>
          <p className="text-ash text-sm">
            {item.role}, {item.company}
          </p>
        </div>
        <span className="font-mono text-xs text-amber-500 tracking-widest">
          5.0
        </span>
      </div>
    </article>
  );
}

export default TestimonialCard;
