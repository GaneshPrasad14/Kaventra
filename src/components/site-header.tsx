import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/supply-chain", label: "Supply Chain" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? "glass shadow-[0_1px_0_0_var(--line)]" : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="flex flex-col leading-tight">
              <span className="font-display text-2xl font-bold tracking-wide text-foreground">
                KAVENTRA
              </span>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-turmeric">
                GLOBAL TRADERS
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground after:scale-x-100" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="relative text-sm font-medium transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-turmeric after:transition-transform hover:after:scale-x-100"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-ink-2 hover:gap-2 md:inline-flex"
            >
              Get Quote
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border lg:hidden">
            <div className="container-x flex flex-col gap-1 py-4">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
