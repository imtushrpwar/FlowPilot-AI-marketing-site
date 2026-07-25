import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          <span className="font-display text-xl font-semibold text-ink tracking-tight">
            FlowPilot <span className="text-indigo-600">AI</span>
          </span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-9 font-mono text-xs uppercase tracking-widest">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `pb-1 border-b transition-colors ${
                    isActive
                      ? "text-ink border-indigo-600"
                      : "text-ash border-transparent hover:text-ink hover:border-ink/30"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/pricing"
          className="hidden md:inline-flex font-mono text-xs uppercase tracking-widest px-5 py-2.5 rounded-md bg-ink text-paper hover:bg-indigo-600 transition-colors"
        >
          Start Trial
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
