import { cn } from "@/lib/utils";

export const Hero = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Soft Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/15 blur-[160px] rounded-full mix-blend-multiply animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-accent/15 blur-[180px] rounded-full mix-blend-multiply animate-pulse duration-[10000ms]" />
      </div>

      <div className="container-wide w-full px-6 md:px-12 relative z-10 text-center reveal active">
        <div className="flex flex-col items-center mb-10">
           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-primary text-xs font-bold uppercase tracking-widest mb-4 transition-transform hover:scale-105 duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for projects
           </span>
        </div>

        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-6 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-400 bg-clip-text text-transparent leading-[1.1]">
            Frontend <br /> Architect
          </h1>
        </div>

        <div className="max-w-3xl mx-auto">
           <p className="text-xl md:text-2xl font-medium text-slate-500/80 mb-12 max-w-2xl mx-auto">
              Crafting high-performance digital experiences through fluid motion, soft glassmorphism, and modern react architectures.
           </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button onClick={() => go("projects")} className="btn-nebula w-full sm:w-auto px-10 py-4">
                View Projects
              </button>
              <button onClick={() => go("contact")} className="btn-nebula-outline w-full sm:w-auto px-10 py-4">
                Let's Talk
              </button>
           </div>
        </div>
      </div>

      {/* Soft Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-70">
         <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
         <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400/80">Scroll</span>
      </div>
    </section>
  );
};
