import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="TG Recruiting logo" width={240} height={72} className="h-14 md:h-16 w-auto" />
          <span className="sr-only">TG Recruiting</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-foreground hover:bg-accent"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
              activeProps={{
                className: scrolled
                  ? "px-4 py-2 rounded-lg text-sm font-semibold text-primary bg-accent"
                  : "px-4 py-2 rounded-lg text-sm font-semibold text-white bg-white/15",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center px-5 py-2.5 rounded-lg bg-primary-gradient text-primary-foreground text-sm font-semibold shadow-elegant hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-up">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground hover:bg-accent font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg bg-primary-gradient text-primary-foreground font-semibold text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}