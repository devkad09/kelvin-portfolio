import { useState } from "react";
import { toast } from "sonner";

const contacts = [
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-wide reveal">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-primary" />
              Get in Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-10">
              Let's Build <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-12 max-w-md">
              Available for freelance projects, collaborations, and exciting opportunities. Reach out through any channel.
            </p>
            
            <div className="space-y-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between p-5 glass-card rounded-2xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <i className={c.icon} />
                    </div>
                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{c.label}</span>
                  </div>
                  <i className="fa-solid fa-arrow-right -rotate-45 text-white/20 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-10 md:p-12 relative overflow-hidden rounded-3xl">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
            
            <h3 className="text-xl font-bold mb-8">Send a Message</h3>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/30 block">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full bg-white/5 border border-white/10 focus:border-primary/60 rounded-xl py-3.5 px-4 outline-none transition-all text-sm placeholder:text-white/20 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/30 block">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 focus:border-primary/60 rounded-xl py-3.5 px-4 outline-none transition-all text-sm placeholder:text-white/20 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/30 block">Your Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 focus:border-primary/60 rounded-xl py-3.5 px-4 outline-none transition-all text-sm placeholder:text-white/20 text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-nebula w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <i className="fa-solid fa-spinner" />
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
