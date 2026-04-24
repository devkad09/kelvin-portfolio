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
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="reveal space-y-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass-card rounded-2xl p-5 flex items-center gap-4 glow-on-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform">
                  <i className={c.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground">Reach me at</div>
                  <div className="font-semibold truncate group-hover:text-primary transition-colors">{c.label}</div>
                </div>
                <i className="fa-solid fa-arrow-right text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          <form onSubmit={onSubmit} className="glass-card rounded-3xl p-6 md:p-8 reveal space-y-5">
            <div>
              <label className="text-sm font-medium mb-2 block">Your name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@example.com"
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold glow-on-hover disabled:opacity-60"
            >
              {sending ? (
                <>
                  <i className="fa-solid fa-spinner animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
