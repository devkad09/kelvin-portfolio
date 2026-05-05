interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}

const items: TestimonialItem[] = [
  {
    quote:
      "Kelvin architected our interface from the ground up. His precision in React and motion design transformed our user engagement metrics entirely.",
    name: "Ama Owusu",
    role: "Founder, Brightline Studio",
    initials: "AO",
    color: "from-indigo-400 to-cyan-400",
  },
  {
    quote:
      "A visionary engineer. Kelvin doesn't just write code; he builds digital systems that feel alive. His attention to performance is unparalleled.",
    name: "Daniel Mensah",
    role: "Product Manager, FinTrack",
    initials: "DM",
    color: "from-pink-400 to-purple-400",
  },
  {
    quote:
      "One of the most technically proficient frontend architects I've collaborated with. He elevated our design system to a global standard.",
    name: "Sarah Lin",
    role: "Senior Designer, Pixel Labs",
    initials: "SL",
    color: "from-blue-400 to-indigo-400",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="container-wide reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/50" />
              Validation
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-800">
              Kind <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Signals</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.name}
              className="glass-card p-8 flex flex-col justify-between min-h-[320px] reveal group relative overflow-hidden"
              
            >
              {/* Soft glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className={`text-3xl mb-6 bg-gradient-to-r ${it.color} bg-clip-text text-transparent transition-transform duration-500 group-hover:scale-110 origin-left relative z-10`}>
                 <i className="fa-solid fa-quote-left" />
              </div>
              
              <p className="text-base text-slate-500/90 leading-relaxed mb-8 italic flex-1 relative z-10">
                "{it.quote}"
              </p>

              <div className="mt-auto flex items-center gap-4 border-t border-slate-200/50 pt-6 relative z-10">
                 <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${it.color} flex items-center justify-center text-xs font-black text-white shadow-sm`}>
                   {it.initials}
                 </div>
                 <div>
                    <div className="font-bold text-sm text-slate-800">{it.name}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{it.role}</div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
