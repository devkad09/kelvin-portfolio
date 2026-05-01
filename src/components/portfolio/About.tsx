export const About = () => {
  return (
    <section id="about" className="section-padding bg-white/[0.01]">
      <div className="container-narrow max-w-5xl mx-auto reveal px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-none">
              Crafting Digital <br />
              <span className="text-primary">Excellence</span>.
            </h2>
            <div className="space-y-6 text-muted-foreground/80 leading-relaxed text-lg font-light">
              <p>
                I'm Kelvin Atsu Djayouri, a frontend engineer dedicated to building the next generation of web interfaces. My approach blends technical precision with artistic vision.
              </p>
              <p>
                Based in Ghana, I specialize in architecting high-performance React applications that aren't just functional, but emotionally resonant. Every line of code is an opportunity to elevate the user experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 flex flex-col justify-center shadow-2xl">
              <span className="text-4xl font-bold text-primary mb-2">03+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground/50">Years Experience</span>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 flex flex-col justify-center shadow-2xl">
              <span className="text-4xl font-bold text-primary mb-2">20+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground/50">Projects Delivered</span>
            </div>
            <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 col-span-2 flex items-center justify-between shadow-2xl">
               <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground/50 block mb-1">Current Focus</span>
                  <span className="text-lg font-bold">React & Premium UI</span>
               </div>
               <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <i className="fa-solid fa-bolt text-primary" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
