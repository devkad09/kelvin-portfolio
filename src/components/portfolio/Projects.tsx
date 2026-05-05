import { useState } from "react";

type Category = "All" | "React" | "Motion" | "Architecture";

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  categories: Category[];
  demo: string;
  repo: string;
  id: string;
}

const projects: ProjectItem[] = [
  {
    title: "McSteeze Lounge",
    description: "A high-fidelity luxury interface for a premier establishment, featuring motion-driven navigation and architectural layout patterns.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    categories: ["React", "Motion"] as Category[],
    demo: "https://mcsteeze-lounge.vercel.app",
    repo: "https://github.com/devkad09/mcsteeze-lounge",
    id: "01"
  },
  {
    title: "Kinetic UI Kit",
    description: "A modular design system focusing on fluid transitions and high-performance React components for enterprise applications.",
    tech: ["TypeScript", "React", "CSS3"],
    categories: ["Architecture", "React"] as Category[],
    demo: "#",
    repo: "https://github.com/devkad09",
    id: "02"
  },
  {
    title: "Pulse Landing Page",
    description: "An experimental exploration of glassmorphism and light-based UI patterns, optimized for modern high-refresh-rate displays.",
    tech: ["React", "Vite", "Framer"],
    categories: ["Motion", "React"] as Category[],
    demo: "https://pluse-landing.vercel.app",
    repo: "https://github.com/devkad09",
    id: "03"
  },
];

const filters: Category[] = ["All", "React", "Motion", "Architecture"];

export const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 reveal">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/50" />
              Selected Works
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-800">
              Curated <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Productions</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full border backdrop-blur-sm ${active === f
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white/40 border-white/60 text-slate-500/80 hover:text-slate-800 hover:border-primary/40 hover:bg-white/60"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((p, i) => (
            <div
              key={p.title}
              className="glass-card group relative overflow-hidden reveal flex flex-col"
              
            >
              {/* Soft glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Project ID */}
              <div className="absolute top-8 right-8 text-7xl font-black text-slate-800/[0.04] group-hover:text-primary/10 transition-colors duration-500 pointer-events-none select-none">
                 {p.id}
              </div>

              <div className="p-8 flex flex-col flex-1 min-h-[380px] relative z-10">
                <div className="flex flex-wrap items-center gap-2 mb-8">
                   {p.tech.map((t) => (
                     <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-primary bg-white/50 backdrop-blur-sm border border-white/80 shadow-sm px-3 py-1 rounded-full">
                        {t}
                     </span>
                   ))}
                </div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-800 group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                
                <p className="text-slate-500/90 text-sm mb-8 leading-relaxed flex-1">
                  {p.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-slate-200/50 pt-6">
                   <a 
                     href={p.demo} 
                     target="_blank" 
                     rel="noreferrer" 
                     className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-primary transition-colors"
                   >
                     View Live <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                   </a>
                   
                   <a href={p.repo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                      <i className="fa-brands fa-github text-lg" />
                   </a>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="glass-card p-8 flex flex-col items-center justify-center text-center gap-4 reveal border-white/60 bg-white/30 hover:bg-white/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/80 shadow-sm flex items-center justify-center text-2xl text-primary/60 mb-4">
              <i className="fa-solid fa-code-fork" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">More on GitHub</h3>
            <p className="text-sm text-slate-500/80">Explore more projects and open source work.</p>
            <a
              href="https://github.com/devkad09"
              target="_blank"
              rel="noreferrer"
              className="btn-nebula-outline px-6 py-2.5 text-sm mt-2 inline-block"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
