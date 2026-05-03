import { cn } from "@/lib/utils";

const skills = [
  {
    name: "React Architecture",
    level: 95,
    icon: "fa-brands fa-react",
    color: "from-blue-400 to-cyan-400",
    span: "col-span-2 row-span-2", // large square
    iconSize: "text-5xl",
  },
  {
    name: "TypeScript / JS",
    level: 92,
    icon: "fa-brands fa-square-js",
    color: "from-yellow-400 to-orange-400",
    span: "col-span-1 row-span-1", // small
    iconSize: "text-3xl",
  },
  {
    name: "CSS & Motion",
    level: 95,
    icon: "fa-solid fa-wind",
    color: "from-pink-400 to-purple-400",
    span: "col-span-1 row-span-1", // small
    iconSize: "text-3xl",
  },
  {
    name: "Next.js",
    level: 90,
    icon: "fa-solid fa-bolt",
    color: "from-slate-200 to-gray-400",
    span: "col-span-2 row-span-1", // wide strip
    iconSize: "text-3xl",
  },
  {
    name: "Figma & Interface Design",
    level: 88,
    icon: "fa-brands fa-figma",
    color: "from-purple-400 to-pink-400",
    span: "col-span-1 row-span-2", // tall
    iconSize: "text-4xl",
  },
  {
    name: "Node & Cloud",
    level: 85,
    icon: "fa-brands fa-node-js",
    color: "from-green-400 to-emerald-400",
    span: "col-span-1 row-span-1", // small
    iconSize: "text-3xl",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 reveal">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-primary" />
              Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Technological <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Arsenal
              </span>
            </h2>
          </div>
          <p className="text-white/40 text-base max-w-sm">
            A curated stack built for performance, scalability, and stunning user experiences.
          </p>
        </div>

        {/* Bento Grid — fixed 4-column base */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-4">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className={cn(
                "glass-card p-6 group flex flex-col justify-between reveal overflow-hidden relative",
                s.span
              )}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {/* Gradient glow on hover */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br",
                s.color
              )} />

              {/* Icon */}
              <div className={cn(
                "bg-gradient-to-br bg-clip-text text-transparent w-fit",
                s.color,
                s.iconSize
              )}>
                <i className={s.icon} />
              </div>

              {/* Label + bar */}
              <div>
                <h3 className="text-base md:text-lg font-bold mb-3 leading-tight">{s.name}</h3>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-1000", s.color)}
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                  <span className={cn("text-[10px] font-bold bg-gradient-to-r bg-clip-text text-transparent", s.color)}>
                    {s.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Always Learning card */}
          <div
            className="glass-card col-span-1 row-span-1 flex flex-col items-center justify-center gap-3 text-center reveal"
            style={{ transitionDelay: "480ms" }}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <i className="fa-solid fa-plus text-primary text-lg" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
              Always<br />Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
