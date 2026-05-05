export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-wide reveal">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/15 blur-[120px] rounded-full mix-blend-multiply animate-pulse duration-[7000ms]" />
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/50" />
              Who I Am
            </span>
              <div className="space-y-6 text-slate-500/90 leading-relaxed text-lg max-w-xl">
                <p>
                  I'm Kelvin Atsu Djayouri, a frontend architect based in Ghana. I specialize in building high-fidelity digital systems that exist at the intersection of performance and aesthetics.
                </p>
                <p>
                  My work is defined by technical precision and a refusal to accept the ordinary. I don't just build websites; I architect immersive digital landscapes that resonate with users.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-4xl font-bold text-slate-800 mb-1">03+</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">Years Exp</div>
                </div>
                <div className="w-px h-12 bg-slate-200/50" />
                <div>
                  <div className="text-4xl font-bold text-slate-800 mb-1">25+</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">Projects</div>
                </div>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-10 flex flex-col justify-between group">
              <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-center text-primary mb-12 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 transform group-hover:scale-110">
                <i className="fa-solid fa-code text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Clean Code</h3>
                <p className="text-sm text-slate-500/80">Writing maintainable, scalable, and performant code is my baseline.</p>
              </div>
            </div>

            <div className="glass-card p-10 flex flex-col justify-between group">
              <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-center text-accent mb-12 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 transform group-hover:scale-110">
                <i className="fa-solid fa-wand-magic-sparkles text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Modern UI</h3>
                <p className="text-sm text-slate-500/80">Creating interfaces that are not just usable, but visually stunning.</p>
              </div>
            </div>

            <div className="glass-card p-10 col-span-1 md:col-span-2 flex flex-col gap-6 group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Current Focus</span>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full border border-white/60 shadow-sm">
                  <span className="text-[10px] font-bold text-primary">LIVE</span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Advanced React & Immersive Motion Design</h3>
              <p className="text-slate-500/80 text-sm leading-relaxed">Pushing the boundaries of what's possible in the browser through optimized engineering and visionary design principles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


