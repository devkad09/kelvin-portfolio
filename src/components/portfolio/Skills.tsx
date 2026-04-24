const skills = [
  { name: "HTML5", level: 95, icon: "fa-brands fa-html5" },
  { name: "CSS3", level: 92, icon: "fa-brands fa-css3-alt" },
  { name: "TypeScript", level: 95, icon: "fa-brands fa-square-js" },
  { name: "JavaScript", level: 90, icon: "fa-brands fa-square-js" },
  { name: "React", level: 88, icon: "fa-brands fa-react" },
  { name: "Tailwind CSS", level: 93, icon: "fa-solid fa-wind" },
  { name: "Git / GitHub", level: 85, icon: "fa-brands fa-git-alt" },
  { name: "Figma", level: 80, icon: "fa-brands fa-figma" },
  { name: "REST APIs", level: 82, icon: "fa-solid fa-plug" },
  { name: "Responsive Design", level: 95, icon: "fa-solid fa-mobile-screen" },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My <span className="gradient-text">Tech Toolbox</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A blend of frontend technologies and tools I use to build delightful, production-ready experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="glass-card rounded-2xl p-6 reveal glow-on-hover"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xl">
                    <i className={s.icon} />
                  </div>
                  <span className="font-semibold">{s.name}</span>
                </div>
                <span className="text-sm font-mono text-primary">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-primary transition-[width] duration-1000 ease-out"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
