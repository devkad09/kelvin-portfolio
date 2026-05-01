import { useState } from "react";
import { toast } from "sonner";

const contacts = [
  { icon: "fa-regular fa-envelope", label: "deve.kad.tech@gmail.com", href: "mailto:deve.kad.tech@gmail.com" },
  { icon: "fa-solid fa-phone", label: "0592 921 133", href: "tel:0592921133" },
  { icon: "fa-brands fa-linkedin", label: "linkedin.com/in/kaddev", href: "https://www.linkedin.com/in/kaddev" },
  { icon: "fa-brands fa-github", label: "github.com/devkad09", href: "https://github.com/devkad09" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! I'll get back to you soon.");
    }, 900);
  };

  return (
    <section id="contact" className="section-padding bg-white/[0.02]">
      <div className="container-narrow">
        <div className="text-center mb-20 reveal">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">Connect</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tighter">
            Let's Start a <span className="text-primary">Conversation</span>
          </h2>
          <p className="text-muted-foreground/60 mt-6 max-w-xl mx-auto font-light text-lg">
            Elevating digital experiences, one message at a time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="reveal space-y-6">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group relative flex items-center gap-6 p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 transition-all duration-500 hover:bg-white/[0.05] hover:border-primary/30 shadow-2xl overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl transition-transform group-hover:scale-110 shadow-inner">
                  <i className={c.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/40 mb-1">Direct Link</div>
                  <div className="text-lg font-bold truncate group-hover:text-primary transition-colors">{c.label}</div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
                   <i className="fa-solid fa-arrow-right text-primary" />
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={onSubmit} className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] reveal space-y-8 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/50 ml-1">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter full name"
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/20 text-lg font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/50 ml-1">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@email.com"
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/20 text-lg font-medium"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/50 ml-1">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Share your vision..."
                className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/20 text-lg font-medium resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-primary text-primary-foreground font-bold uppercase tracking-[0.2em] text-xs transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_50px_-10px_rgba(255,184,0,0.3)] disabled:opacity-50 overflow-hidden"
            >
              <span className="relative z-10">{sending ? "Transmitting..." : "Send Message"}</span>
              {!sending && <i className="fa-solid fa-paper-plane relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
