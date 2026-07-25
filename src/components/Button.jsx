// src/components/Button.jsx
import { Link } from "react-router-dom";

function Button({ children, variant = "primary", className = "", to, href, ...props }) {
  const styles = {
    primary:
      "bg-indigo-600 text-paper border border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700",
    secondary:
      "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink/[0.03]",
    inverse:
      "bg-paper text-ink border border-paper hover:bg-paper/90",
  };

  const classes = `group inline-flex items-center gap-2 px-6 py-3 rounded-md font-mono text-sm uppercase tracking-wide transition-colors duration-200 ${styles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <span
        className="transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        →
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

export default Button;