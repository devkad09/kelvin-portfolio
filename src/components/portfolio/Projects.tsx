import { useState } from "react";

type Category = "All" | "React" | "CSS" | "JS";

const projects = [
  {
    title: "Insight Analytics Dashboard",
    description: "A real-time analytics dashboard with charts, filters, and dark mode. Built for a SaaS startup tracking customer engagement.",
    tech: ["React", "TypeScript", "Tailwind", "Recharts"],
    categories: ["React"] as Category[],
    demo: "#",
    repo: "#",
  },
  {
    title: "Lumen E-Commerce Store",
    description: "A modern e-commerce storefront with cart, checkout, and product filtering. Focus on smooth animations and responsive layout.",
    tech: ["React", "Stripe", "Tailwind", "Framer Motion"],
    categories: ["React"] as Category[],
    demo: "#",
    repo: "#",
  },
  {
    title: "Stratus Weather App",
    description: "A glassmorphism weather app fetching live forecast data from a REST API, with geolocation and 7-day predictions.",
    tech: ["JavaScript", "REST API", "CSS3"],
    categories: ["JS"] as Category[],
    demo: "#",
    repo: "#",
  },
  {
    title: "Pure CSS Landing Page",
    description: "A bold, animated landing page built with zero JavaScript — pure CSS animations, grid layouts, and custom properties.",
    tech: ["HTML5", "CSS3", "Animations"],
    categories: ["CSS"] as Category[],
    demo: "#",
    repo: "#",
  },
];

const filters: Category[] = ["All", "React", "JS", "CSS"];

export const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A handful of projects that showcase my approach to building modern web interfaces.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                active === f
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                  : "bg-secondary/50 border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {visible.map((p, i) => (
            <article
              key={p.title}
              className="group glass-card rounded-3xl overflow-hidden reveal glow-on-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary border border-border text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold glow-on-hover"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-foreground text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
                  >
                    <i className="fa-brands fa-github" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
