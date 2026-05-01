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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "py-4" : "py-10"}`}
    >
      <nav className={`container-narrow flex items-center justify-between px-8 md:px-16 transition-all duration-700 ${scrolled ? "h-20 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-full shadow-2xl" : "h-20 bg-transparent"}`}>
        <button onClick={() => go("home")} className="group flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-black transform transition-transform group-hover:rotate-[360deg] duration-1000">K</div>
          <span className="text-white font-black tracking-[-0.05em] text-xl hidden sm:block">KELVIN.ATSU</span>
        </button>

        <ul className="hidden lg:flex items-center gap-12">
          {links.map((l) => (
            <li key={l.id}>
              <button onClick={() => go(l.id)} className={`nav-link ${active === l.id ? "text-primary" : ""}`}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
           <button onClick={() => go("contact")} className="hidden md:flex items-center gap-3 px-8 py-3 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary transition-all duration-500 hover:scale-105 active:scale-95">
             Direct <i className="fa-solid fa-paper-plane" />
           </button>

           <button
             aria-label="Toggle menu"
             className="lg:hidden text-white text-2xl"
             onClick={() => setOpen((o) => !o)}
           >
             <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars-staggered"}`} />
           </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-700 ${open ? "max-h-screen bg-black/95 backdrop-blur-3xl" : "max-h-0"}`}
      >
        <ul className="flex flex-col items-center justify-center min-h-[60vh] gap-8 p-12">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`text-2xl font-black uppercase tracking-[0.2em] ${active === l.id ? "text-primary" : "text-white/40"}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
