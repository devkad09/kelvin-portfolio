const items = [
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
              <span className="w-8 h-px bg-primary" />
              Foundations
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Academic <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pedigree</span>
            </h2>
          </div>
        </div>

        <div className="max-w-4xl">
          {items.map((it, i) => (
            <div
              key={it.school}
              className="glass-card p-10 md:p-14 relative overflow-hidden reveal"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Background Watermark */}
              <div className="absolute top-0 right-0 p-10 text-7xl text-white/[0.02] font-black pointer-events-none select-none">
                BSc
              </div>

              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                {it.period}
              </span>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{it.degree}</h3>
              
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-2 h-2 rounded-full bg-primary" />
                 <span className="text-base font-bold uppercase tracking-wider text-white/50">{it.school}</span>
              </div>
              
              <p className="text-white/40 text-base leading-relaxed max-w-2xl">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
