import Container from "../ui/Container.jsx";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/how-to-use", label: "How to Use" },
  { to: "/roadmap", label: "Roadmap" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* Left: Logo/Brand */}
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded bg-white/80 aria-hidden"></span>
          <span className="text-white font-semibold">Brainwave</span>
        </a>
        {/* Center: Navigation links (hidden on small screens) */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-white/80">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition hover:text-white ${
                      isActive ? "text-white" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
