const items = [
  {
    school: "Accra Technical University",
    degree: "BSc in Information Technology",
    period: "2022 — 2026",
    desc: "Studying core computer science fundamentals, web technologies, databases, and software engineering principles while building real-world projects on the side.",
    icon: "fa-solid fa-graduation-cap",
  },
];

export const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Education</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {items.map((it) => (
            <div key={it.school} className="glass-card rounded-2xl p-6 md:p-8 reveal glow-on-hover flex gap-5">
              <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-primary/20 border border-primary/30 flex items-center justify-center text-primary text-2xl">
                <i className={it.icon} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono text-primary">{it.period}</span>
                <h3 className="text-xl font-display font-bold mt-1">{it.degree}</h3>
                <div className="text-muted-foreground text-sm mb-3">{it.school}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
