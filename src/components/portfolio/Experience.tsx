const items = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    period: "2023 — Present",
    desc: "Partnering with startups and small businesses to design and build production-ready web apps using React, Tailwind, and modern tooling. Delivered 12+ projects with a focus on performance and accessibility.",
  },
  {
    role: "Frontend Developer",
    company: "KAD Tech Studio",
    period: "2025 - present",
    desc: "Built customer-facing dashboards and marketing sites. Owned the design system, set up CI workflows, and mentored two junior developers.",
  },
  {
    role: "Technical writer (Part-Time)",
    company: "Formgrid.dev",
    period: "2026—Present",
    desc: "Creating technical documentation and content for web development tools and resources.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          {items.map((it, i) => (
            <div
              key={it.role}
              className={`relative mb-12 reveal md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"}`}
            >
              {/* Dot */}
              <div className={`absolute top-2 w-4 h-4 rounded-full bg-primary shadow-glow ring-4 ring-background left-4 md:left-auto ${i % 2 === 0 ? "md:-right-2" : "md:-left-2"} -translate-x-1/2 md:translate-x-0`} />

              <div className="ml-10 md:ml-0 glass-card rounded-2xl p-6 glow-on-hover">
                <span className="text-xs font-mono text-primary">{it.period}</span>
                <h3 className="text-xl font-display font-bold mt-1">{it.role}</h3>
                <div className="text-muted-foreground text-sm mb-3">{it.company}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
