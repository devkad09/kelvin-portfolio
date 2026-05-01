import { useState } from "react";

type Category = "All" | "React" | "CSS" | "JS";

const projects = [
 
  {
    title: "McSteeze Lounge & Pub",
    description: "A luxury landing page for a premier lounge in Ghana, featuring a sophisticated dark/gold aesthetic, interactive menu, and smooth animations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    categories: ["React"] as Category[],
    demo: "https://mcsteeze-lounge.vercel.app",
    repo: "https://github.com/devkad09",
  },
  {
    title: "Pure CSS Landing Page",
    description: "A bold, animated landing page built with zero JavaScript — pure CSS animations, grid layouts, and custom properties.",
    tech: ["HTML5", "CSS3", "Animations"],
    categories: ["CSS"] as Category[],
    demo: "https://pluse-landing.vercel.app",
    repo: "https://github.com/devkad09",
  },
];

const filters: Category[] = ["All", "React", "CSS"];

export const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-20 reveal">
          <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">Works</span>
          <h2 className="mt-6 tracking-tighter px-4">
            Curated <span className="gradient-text">Manifesto</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20 reveal px-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 border ${active === f
                ? "bg-white text-black border-white shadow-glow"
                : "bg-white/5 border-white/10 text-white/40 hover:text-white hover:border-white/30"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4">
          {visible.map((p, i) => (
            <a
              key={p.title}
              href={p.demo === "#" ? "https://github.com/devkad09" : p.demo}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col glass-card rounded-[3rem] overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] reveal no-underline cursor-pointer"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="aspect-[4/3] bg-white/[0.02] relative overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center group-hover:scale-125 transition-transform duration-700">
                      <i className="fa-solid fa-arrow-right -rotate-45 text-2xl text-white group-hover:text-primary transition-colors" />
                   </div>
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col relative pointer-events-none">
                <div className="absolute top-0 right-10 -translate-y-1/2 flex gap-2">
                   {p.tech.slice(0, 2).map((t) => (
                     <span key={t} className="px-4 py-1 rounded-full bg-white text-black text-[9px] font-black uppercase tracking-widest shadow-2xl">
                        {t}
                     </span>
                   ))}
                </div>

                <h3 className="text-3xl font-black mb-4 tracking-tighter group-hover:text-primary transition-colors text-white">
                  {p.title}
                </h3>
                
                <p className="text-muted-foreground/50 text-sm mb-10 leading-relaxed font-medium">
                  {p.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-primary transition-colors">
                    Explore <i className="fa-solid fa-plus ml-2" />
                   </div>
                   
                   <div className="flex gap-4 opacity-20 group-hover:opacity-100 transition-opacity pointer-events-auto">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(p.repo, '_blank');
                        }}
                        className="text-white hover:text-primary transition-colors"
                      >
                         <i className="fa-brands fa-github text-xl" />
                      </button>
                   </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
