const socials = [
  { icon: "fa-brands fa-github", href: "https://github.com/devkad09", label: "GitHub" },
  { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/kaddev", label: "LinkedIn" },
  { icon: "fa-regular fa-envelope", href: "mailto:deve.kad.tech@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start mb-16">
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-primary-foreground font-bold">
                 K
               </div>
               <span className="font-bold text-2xl tracking-tight">
                  Kelvin<span className="text-primary">.</span>
               </span>
             </div>
             <p className="text-white/30 text-sm leading-relaxed max-w-xs">
                Architecting the future of the web through high-performance engineering and visionary design.
             </p>
          </div>

          <div className="flex flex-col gap-6">
             <span className="text-xs font-bold uppercase tracking-widest text-white/20">Location</span>
             <div className="flex flex-col gap-2">
                <span className="text-base font-bold">Accra, Ghana</span>
                <span className="text-sm text-white/40">GMT +0:00</span>
             </div>
          </div>

          <div className="flex flex-col gap-6 items-start md:items-end">
             <span className="text-xs font-bold uppercase tracking-widest text-white/20">Find Me</span>
             <div className="flex items-center gap-4">
               {socials.map((s) => (
                 <a
                   key={s.label}
                   href={s.href}
                   target={s.href.startsWith("http") ? "_blank" : undefined}
                   rel="noreferrer"
                   aria-label={s.label}
                   className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:bg-primary/10"
                 >
                   <i className={`${s.icon} text-sm`} />
                 </a>
               ))}
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <span className="text-xs font-medium text-white/20">
              © {new Date().getFullYear()} KAD. All rights reserved.
           </span>
           <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-white/10 uppercase tracking-widest">KAD</span>
              <span className="text-white/10">·</span>
              <span className="text-xs font-bold text-white/10 uppercase tracking-widest">V.3.0.0</span>
           </div>
        </div>
      </div>
    </footer>
  );
};
