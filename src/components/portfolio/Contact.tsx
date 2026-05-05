import { useState } from "react";
import { toast } from "sonner";

interface ContactInfo {
  icon: string;
  label: string;
  href: string;
}

const contacts: ContactInfo[] = [
  { icon: "fa-regular fa-envelope", label: "deve.kad.tech@gmail.com", href: "mailto:deve.kad.tech@gmail.com" },
  { icon: "fa-solid fa-phone", label: "+233 592 921 133", href: "tel:0592921133" },
  { icon: "fa-brands fa-linkedin", label: "linkedin.com/in/kaddev", href: "https://www.linkedin.com/in/kaddev" },
  { icon: "fa-brands fa-github", label: "github.com/devkad09", href: "https://github.com/devkad09" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields before sending.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! I'll get back to you soon.");
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-[160px] rounded-full pointer-events-none mix-blend-multiply" />

      <div className="container-wide reveal">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/50" />
              Get in Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-10 text-slate-800">
              Let's Build <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-slate-500/90 text-base leading-relaxed mb-12 max-w-md">
              Available for freelance projects, collaborations, and exciting opportunities. Reach out through any channel.
            </p>
            
            <div className="space-y-4">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between p-5 bg-white/40 backdrop-blur-md border border-white/60 shadow-sm rounded-2xl hover:border-primary/40 hover:bg-white/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <i className={c.icon} />
                    </div>
                    <span className="text-sm font-bold text-slate-600 group-hover:text-slate-800 transition-colors">{c.label}</span>
                  </div>
                  <i className="fa-solid fa-arrow-right -rotate-45 text-slate-400 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-10 md:p-12 relative overflow-hidden rounded-3xl border-white/60">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-70" />
            
            <h3 className="text-xl font-bold mb-8 text-slate-800">Send a Message</h3>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2 relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block ml-1">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full bg-white/50 backdrop-blur-sm border border-white/80 focus:bg-white focus:border-primary/40 rounded-xl py-3.5 px-4 outline-none transition-all duration-300 text-sm placeholder:text-slate-400 text-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                />
              </div>

              <div className="space-y-2 relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block ml-1">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-white/50 backdrop-blur-sm border border-white/80 focus:bg-white focus:border-primary/40 rounded-xl py-3.5 px-4 outline-none transition-all duration-300 text-sm placeholder:text-slate-400 text-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                />
              </div>
              
              <div className="space-y-2 relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block ml-1">Your Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/50 backdrop-blur-sm border border-white/80 focus:bg-white focus:border-primary/40 rounded-xl py-3.5 px-4 outline-none transition-all duration-300 text-sm placeholder:text-slate-400 text-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.02)] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-nebula w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {sending ? (
                  <>
                    <i className="fa-solid fa-spinner animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fa-solid fa-paper-plane" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
