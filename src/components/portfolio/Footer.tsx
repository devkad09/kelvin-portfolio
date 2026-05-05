interface SocialItem {
  icon: string;
  href: string;
  label: string;
}

const socials: SocialItem[] = [
  { icon: "fa-brands fa-github", href: "https://github.com/devkad09", label: "GitHub" },
  { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/kaddev", label: "LinkedIn" },
  { icon: "fa-regular fa-envelope", href: "mailto:deve.kad.tech@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />

      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start mb-16 relative z-10">
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-gradient-to-br from-primary/80 to-accent/80 rounded-xl flex items-center justify-center text-white font-bold shadow-sm">
                 K
               </div>
               <span className="font-bold text-2xl tracking-tight text-slate-800">
                  Kelvin<span className="text-primary">.</span>
               </span>
             </div>
             <p className="text-slate-500/90 text-sm leading-relaxed max-w-xs">
                Architecting the future of the web through high-performance engineering and visionary design.
             </p>
          </div>

          <div className="flex flex-col gap-6">
             <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Location</span>
             <div className="flex flex-col gap-2">
                <span className="text-base font-bold text-slate-800">Accra, Ghana</span>
                <span className="text-sm text-slate-500/80">GMT +0:00</span>
             </div>
          </div>

          <div className="flex flex-col gap-6 items-start md:items-end">
             <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Find Me</span>
             <div className="flex items-center gap-4">
               {socials.map((s) => (
                 <a
                   key={s.label}
                   href={s.href}
                   target={s.href.startsWith("http") ? "_blank" : undefined}
                   rel="noreferrer"
                   aria-label={s.label}
                   className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/40 transition-all duration-300 hover:bg-white shadow-sm hover:scale-110"
                 >
                   <i className={`${s.icon} text-sm`} />
                 </a>
               ))}
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
           <span className="text-xs font-medium text-slate-500/80">
              © {new Date().getFullYear()} KAD. All rights reserved.
           </span>
           <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">KAD</span>
              <span className="text-slate-300">·</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">V.3.0.0</span>
           </div>
        </div>
      </div>
    </footer>
  );
};
