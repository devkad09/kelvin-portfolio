export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow max-w-4xl mx-auto text-center reveal">
        <span className="text-primary font-mono text-sm uppercase tracking-widest">About Me</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
          A passionate developer who <span className="gradient-text">loves clean code</span>.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I'm Kelvin Atsu Djayouri, a frontend developer based in Ghana with a strong focus on
          building responsive, accessible, and high-performance web interfaces. I work with
          React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, and modern UI patterns to
          turn ideas and designs into polished digital experiences that feel fast, clean, and intuitive.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          In 2026, my current focus is sharpening my expertise in advanced React workflows,
          scalable component architecture, design systems, API integration, performance optimization,
          and frontend developer tooling. I'm especially interested in creating products that combine
          strong visual design with maintainable code and great user experience.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
          <div className="glass-card rounded-xl p-4">
            <div className="text-2xl font-display font-bold gradient-text">3+</div>
            <div className="text-xs text-muted-foreground mt-1">Years coding</div>
          </div>
          <div className="glass-card rounded-xl p-4">
            <div className="text-xs text-muted-foreground mb-1">Location</div>
            <div className="font-semibold">Ghana 🇬🇭</div>
          </div>
          <div className="glass-card rounded-xl p-4 col-span-2 sm:col-span-1">
            <div className="text-xs text-muted-foreground mb-1">Focus</div>
            <div className="font-semibold">React, TypeScript & UX</div>
          </div>
        </div>
      </div>
    </section>
  );
};
