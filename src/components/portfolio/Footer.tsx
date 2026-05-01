const socials = [
  { icon: "fa-brands fa-github", href: "https://github.com/devkad09" },
  { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/kaddev" },
  { icon: "fa-regular fa-envelope", href: "mailto:deve.kad.tech@gmail.com" },
  { icon: "fa-solid fa-phone", href: "tel:0592921133" },
];

export const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-12 bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
           <div className="font-bold text-xl tracking-tighter">
              <span className="text-primary">KELVIN</span>
              <span className="text-white/20">.ENG</span>
           </div>
           <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/40 font-bold">
              EST. 2024 — ACCRA, GHANA
           </div>
        </div>

        <div className="text-xs text-muted-foreground/40 text-center md:text-right font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Kelvin Atsu Djayouri. <br />
          All Rights Reserved.
        </div>

        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-muted-foreground/30 hover:text-primary transition-all duration-500 hover:scale-125"
            >
              <i className={`${s.icon} text-xl`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
