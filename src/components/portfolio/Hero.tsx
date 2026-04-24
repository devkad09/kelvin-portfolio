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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute bottom-0 -right-20 w-[520px] h-[520px] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-primary-glow/15 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)/0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-narrow w-full">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium text-muted-foreground mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for freelance projects
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Hi, I'm <span className="gradient-text">Kelvin</span>
            <br />
            <span className="text-foreground">Frontend Developer</span>
          </h1>

          <div className="text-xl md:text-3xl font-display text-muted-foreground mb-8 h-12 flex items-center justify-center">
            <span>{text}</span>
            <span className="ml-1 inline-block w-[3px] h-7 md:h-9 bg-primary animate-blink" />
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            I design and build fast, accessible, and beautifully interactive web experiences using
            React, Tailwind CSS, and modern JavaScript — turning ambitious ideas into polished products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={() => go("projects")}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold glow-on-hover"
            >
              View My Work
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => go("contact")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-secondary/40 backdrop-blur-sm text-foreground font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              <i className="fa-regular fa-envelope" />
              Contact Me
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-6 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a href="https://github.com/devkad09" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors text-xl"><i className="fa-brands fa-github" /></a>
            <a href="https://www.linkedin.com/in/kaddev" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors text-xl"><i className="fa-brands fa-linkedin" /></a>
            <a href="mailto:deve.kad.tech@gmail.com" className="hover:text-primary transition-colors text-xl"><i className="fa-regular fa-envelope" /></a>
            <a href="tel:0592921133" className="hover:text-primary transition-colors text-xl"><i className="fa-solid fa-phone" /></a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float">
        <i className="fa-solid fa-chevron-down text-2xl" />
      </div>
    </section>
  );
};
