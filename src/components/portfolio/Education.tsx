interface EducationItem {
  school: string;
  degree: string;
  period: string;
  desc: string;
}

const items: EducationItem[] = [
  {
    school: "Accra Technical University",
    degree: "BSc Information Technology",
    period: "2022 — 2026",
    desc: "Rigorous study of computational theory, distributed systems, and modern architectural patterns. Bridging the gap between theoretical computer science and high-fidelity interface engineering.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="container-wide reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/50" />
              Foundations
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-800">
              Academic <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pedigree</span>
            </h2>
          </div>
        </div>

        <div className="max-w-4xl relative z-10">
          {items.map((it, i) => (
            <div
              key={it.school}
              className="glass-card p-10 md:p-14 relative overflow-hidden reveal group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
              
            >
              {/* Soft glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Background Watermark */}
              <div className="absolute top-0 right-0 p-10 text-7xl text-slate-800/[0.04] font-black pointer-events-none select-none transition-transform duration-700 group-hover:scale-110">
                BSc
              </div>

              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-70" />

              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-primary text-xs font-bold uppercase tracking-widest mb-8">
                {it.period}
              </span>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-800 relative z-10">{it.degree}</h3>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                 <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsla(250,80%,65%,0.6)]" />
                 <span className="text-base font-bold uppercase tracking-wider text-slate-500/90">{it.school}</span>
              </div>
              
              <p className="text-slate-500/80 text-base leading-relaxed max-w-2xl relative z-10">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
