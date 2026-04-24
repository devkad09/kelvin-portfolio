import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(links[i].id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-card" : "bg-transparent"
        }`}
    >
      <nav className="container-narrow flex items-center justify-between h-16 px-6 md:px-12">
        <button onClick={() => go("home")} className="font-display font-bold text-lg tracking-tight">
          <span className="gradient-text">Kelvin</span>
          <span className="text-foreground">.dev</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => go(l.id)} className={`nav-link ${active === l.id ? "active" : ""}`}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => go("contact")} className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold glow-on-hover">
          Hire Me <i className="fa-solid fa-arrow-right text-xs" />
        </button>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-foreground text-xl"
          onClick={() => setOpen((o) => !o)}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[480px] border-t border-border bg-background/95 backdrop-blur-xl" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col p-6 gap-4">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`w-full text-left py-2 nav-link ${active === l.id ? "active" : ""}`}
              >
                {l.label}
              </button>
            </li>
          ))}
          <button onClick={() => go("contact")} className="mt-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold">
            Hire Me
          </button>
        </ul>
      </div>
    </header>
  );
};
