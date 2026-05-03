import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const taglines = [
  "Architecting Digital Worlds",
  "High-Performance Engineering",
  "Visionary UI/UX Design",
  "Turning Code into Art",
];

export const Hero = () => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = taglines[idx];
    const speed = del ? 30 : 60;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 2000);
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
      {/* Background Elements — static blurs, no animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent/10 blur-[140px] rounded-full" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container-wide w-full px-6 md:px-12 relative z-10 text-center">
        <div className="flex flex-col items-center mb-8 reveal">
           <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Available for projects
           </span>
        </div>

        <div className="relative mb-8">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter reveal mb-4 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent"
          >
            Creative <br /> Developer
          </h1>
        </div>

        <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: "200ms" }}>
           <div className="text-xl md:text-3xl font-medium text-white/60 mb-12 min-h-[1.2em]">
              {text}<span className="inline-block w-0.5 h-[1em] bg-primary ml-1 opacity-70" />
           </div>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => go("projects")}
                className="btn-nebula w-full sm:w-auto"
              >
                View Works
              </button>
              
              <button
                onClick={() => go("contact")}
                className="btn-nebula-outline w-full sm:w-auto"
              >
                Let's Talk
              </button>
           </div>
        </div>
      </div>

      {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 reveal" style={{ transitionDelay: "200ms" }}>
         <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
         <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Scroll</span>
      </div>
    </section>
  );
};


