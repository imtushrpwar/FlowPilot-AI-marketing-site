// src/components/SectionTitle.jsx
function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  as: Tag = "h2",
}) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}>
      <div className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-600">
          {subtitle}
        </p>
      </div>

      <Tag className="font-display text-4xl md:text-[2.75rem] font-semibold text-ink mt-4 leading-[1.15]">
        {title}
      </Tag>

      {description && <p className="text-ash mt-5 leading-7">{description}</p>}
    </div>
  );
}

export default SectionTitle;