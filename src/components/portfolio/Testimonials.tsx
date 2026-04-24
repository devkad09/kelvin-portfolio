import { useEffect, useState } from "react";

const items = [
  {
    quote:
      "Kelvin took our rough Figma drafts and turned them into a polished, blazing-fast web app. His eye for detail and clean code made the whole project a breeze.",
    name: "Ama Owusu",
    role: "Founder, Brightline Studio",
  },
  {
    quote:
      "Working with Kelvin was effortless. He communicates clearly, ships on time, and genuinely cares about getting the small details right.",
    name: "Daniel Mensah",
    role: "Product Manager, FinTrack",
  },
  {
    quote:
      "One of the most reliable frontend developers I've collaborated with. Kelvin elevated our design system and the team learned a lot from him.",
    name: "Sarah Lin",
    role: "Senior Designer, Pixel Labs",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Kind <span className="gradient-text">Words</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto reveal">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
            <i className="fa-solid fa-quote-left text-5xl text-primary/40 mb-6" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-display min-h-[120px] transition-opacity duration-500">
              {items[i].quote}
            </p>
            <div className="mt-8">
              <div className="font-semibold">{items[i].name}</div>
              <div className="text-sm text-muted-foreground">{items[i].role}</div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Show testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
