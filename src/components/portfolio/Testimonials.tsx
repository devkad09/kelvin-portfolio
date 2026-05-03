const items = [
  {
    quote:
      "Kelvin architected our interface from the ground up. His precision in React and motion design transformed our user engagement metrics entirely.",
    name: "Ama Owusu",
    role: "Founder, Brightline Studio",
    initials: "AO",
    color: "from-cyan-400 to-blue-500",
  },
  {
    quote:
      "A visionary engineer. Kelvin doesn't just write code; he builds digital systems that feel alive. His attention to performance is unparalleled.",
    name: "Daniel Mensah",
    role: "Product Manager, FinTrack",
    initials: "DM",
    color: "from-purple-400 to-pink-500",
  },
  {
    quote:
      "One of the most technically proficient frontend architects I've collaborated with. He elevated our design system to a global standard.",
    name: "Sarah Lin",
    role: "Senior Designer, Pixel Labs",
    initials: "SL",
    color: "from-amber-400 to-orange-500",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="container-wide reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary" />
              Validation
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Kind <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Signals</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.name}
              className="glass-card p-8 flex flex-col justify-between min-h-[320px] reveal group"
              
            >
              <div className={`text-3xl mb-6 bg-gradient-to-r ${it.color} bg-clip-text text-transparent`}>
                 <i className="fa-solid fa-quote-left" />
              </div>
              
              <p className="text-base text-white/70 leading-relaxed mb-8 italic flex-1">
                "{it.quote}"
              </p>

              <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
                 <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${it.color} flex items-center justify-center text-xs font-black text-white`}>
                   {it.initials}
                 </div>
                 <div>
                    <div className="font-bold text-sm">{it.name}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{it.role}</div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
