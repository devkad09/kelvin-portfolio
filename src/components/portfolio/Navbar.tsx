import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavLink {
  id: string;
  label: string;
}

const links: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Works" },
  { id: "experience", label: "History" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 150;
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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div className={cn(
        "container-wide flex items-center justify-between px-6 md:px-12 mx-auto transition-all duration-500",
        scrolled ? "max-w-5xl bg-white/60 backdrop-blur-2xl border border-white/80 rounded-full py-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)]" : "max-w-7xl"
      )}>
        <button onClick={() => go("home")} className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-all duration-500 shadow-sm">
            K
          </div>
          <span className="text-slate-800 font-bold tracking-tight text-xl">
            Kelvin<span className="text-primary">.</span>
          </span>
        </button>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {links.map((l) => (
              <li key={l.id}>
                <button 
                  onClick={() => go(l.id)} 
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:text-primary hover:bg-white/40",
                    active === l.id ? "text-primary bg-white shadow-sm border border-white/80" : "text-slate-600 border border-transparent"
                  )}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
           <button 
             onClick={() => go("contact")} 
             className="hidden md:flex btn-nebula py-2.5 px-6 text-sm"
           >
             Hire Me
           </button>

           <button
             aria-label="Toggle menu"
             className="lg:hidden text-slate-800 w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-white/60 backdrop-blur-md border border-white/80 rounded-full"
             onClick={() => setOpen((o) => !o)}
           >
             <span className={cn("h-0.5 bg-slate-800 transition-all duration-300 rounded-full", open ? "w-6 rotate-45 translate-y-2" : "w-6")} />
             <span className={cn("h-0.5 bg-slate-800 transition-all duration-300 rounded-full", open ? "opacity-0" : "w-6")} />
             <span className={cn("h-0.5 bg-slate-800 transition-all duration-300 rounded-full", open ? "w-6 -rotate-45 -translate-y-2" : "w-6")} />
           </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[-1] bg-white/90 backdrop-blur-3xl transition-all duration-500 flex items-center justify-center",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={cn(
                  "text-3xl font-bold tracking-tight transition-all duration-300",
                  active === l.id ? "text-primary scale-110" : "text-slate-500 hover:text-slate-800"
                )}
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


