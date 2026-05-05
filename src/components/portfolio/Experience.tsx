interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  desc: string;
}

const items: ExperienceItem[] = [
  {
    role: "Lead Frontend Architect",
    company: "KAD Tech Studio",
    period: "2025 — PRESENT",
    desc: "Orchestrating high-performance React architectures and premium design systems. Focused on building scalable, immersive digital products for high-growth startups.",
  },
  {
    role: "Frontend Engineer",
    company: "Formgrid.dev",
    period: "2026 — PRESENT",
    desc: "Defining technical documentation standards and building modular interface components for developer-centric tools.",
  },
  {
    role: "Digital Solutions Consultant",
    company: "Freelance / Independent",
    period: "2023 — 2025",
    desc: "Delivered 12+ mission-critical web applications with a focus on motion design and architectural precision. Built a reputation for uncompromising quality.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="container-wide reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/50" />
              Career
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-800">
              Professional <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Chronicle</span>
            </h2>
          </div>
        </div>

        <div className="relative space-y-6">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200/50 hidden md:block ml-[18px]" />

          {items.map((it, i) => (
            <div
              key={it.role}
              className="glass-card group relative overflow-hidden reveal"
              
            >
              {/* Soft glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Left soft accent line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_12px_hsla(250,80%,65%,0.5)]" />

              <div className="grid md:grid-cols-12 gap-8 p-8 md:p-10 items-center relative z-10">
                 <div className="md:col-span-3 flex flex-col gap-2">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest">{it.period}</span>
                    <div className="h-px w-8 bg-primary/20" />
                 </div>
                 
                 <div className="md:col-span-4">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 tracking-tight text-slate-800 group-hover:text-primary transition-colors duration-300">{it.role}</h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{it.company}</span>
                 </div>

                 <div className="md:col-span-5">
                    <p className="text-slate-500/90 text-sm leading-relaxed">{it.desc}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
