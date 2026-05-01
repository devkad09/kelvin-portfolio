import { useEffect, useState } from "react";

const taglines = [
  "Crafting Digital Experiences",
  "Building Modern Web Apps",
  "Designing Pixel-Perfect UI",
  "Turning Ideas into Code",
];

export const Hero = () => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = taglines[idx];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1600);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setIdx((i) => (i + 1) % taglines.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] animate-blob" style={{ animationDelay: "5s" }} />
      </div>

      <div className="container-narrow w-full text-center px-6 relative z-10">
        <div className="inline-block mb-8 reveal">
           <span className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-primary backdrop-blur-3xl shadow-2xl">
              Future of Web
           </span>
        </div>

        <h1 
          className="font-black leading-[0.9] tracking-[-0.06em] uppercase mb-12 reveal px-4"
          style={{ fontSize: "clamp(4rem, 15vw, 15rem)" }}
        >
           <span className="gradient-text">Kelvin</span>
        </h1>

        <div className="max-w-4xl mx-auto reveal" style={{ transitionDelay: "200ms" }}>
           <div className="text-2xl md:text-5xl font-bold tracking-tighter text-white/40 mb-10 italic min-h-[1.5em] px-4">
              {text}<span className="inline-block w-1 h-8 md:h-12 bg-primary animate-pulse ml-2" />
           </div>

           <p className="text-base md:text-xl lg:text-2xl text-muted-foreground/60 leading-relaxed font-medium mb-12 max-w-2xl mx-auto px-6">
              Architecting immersive digital landscapes through high-performance engineering and visionary design.
           </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-6">
              <button
                onClick={() => go("projects")}
                className="group relative w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10">Enter Portfolio</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              
              <button
                onClick={() => go("contact")}
                className="group w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-3xl text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all shadow-2xl"
              >
                Initiate Contact
              </button>
           </div>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-4 text-[10px] font-black tracking-widest text-white/20 uppercase vertical-text">
         <span>Scroll to Explore</span>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-6 text-white/20">
         <a href="https://github.com/devkad09" className="hover:text-primary transition-colors"><i className="fa-brands fa-github text-2xl" /></a>
         <a href="https://linkedin.com" className="hover:text-primary transition-colors"><i className="fa-brands fa-linkedin text-2xl" /></a>
      </div>
    </section>
  );
};
