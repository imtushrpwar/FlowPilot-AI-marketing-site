import { motion } from "framer-motion";

function FeatureCard({ feature }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-xl border border-line p-8 hover:border-indigo-600/30 hover:shadow-xl hover:shadow-ink/[0.04] transition-shadow"
    >
      <span className="inline-block font-mono text-[11px] tracking-widest text-indigo-600 border border-indigo-600/30 rounded-full px-3 py-1">
        {feature.code}
      </span>

      <h3 className="font-display text-xl font-semibold text-ink mt-6">
        {feature.title}
      </h3>

      <p className="text-ash leading-7 mt-3">{feature.description}</p>
    </motion.article>
  );
}

export default FeatureCard;
