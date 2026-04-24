const socials = [
  { icon: "fa-brands fa-github", href: "https://github.com/devkad09" },
  { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/kaddev" },
  { icon: "fa-regular fa-envelope", href: "mailto:deve.kad.tech@gmail.com" },
  { icon: "fa-solid fa-phone", href: "tel:0592921133" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-12">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-foreground font-semibold">Kelvin Atsu Djayouri</span>. Crafted with{" "}
          <i className="fa-solid fa-heart text-primary mx-1" /> and lots of coffee.
        </div>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
