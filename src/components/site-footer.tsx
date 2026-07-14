import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <img src="/logo.png" alt="Kaventra Logo" className="h-12 w-auto object-contain" />
              <img src="/it.png" alt="LT" className="h-12 w-auto object-contain" />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-70">
              A Chennai-based agricultural export house bridging India's rich
              spice heritage with global markets — with rigorous quality
              control and complete traceability on every shipment.
            </p>
          </div>

          <div>
            <p className="eyebrow opacity-60">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link to="/products" className="opacity-80 hover:opacity-100">Products</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100">About Us</Link></li>
              <li><Link to="/supply-chain" className="opacity-80 hover:opacity-100">Supply Chain</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow opacity-60">Products</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/products/turmeric" className="opacity-80 hover:opacity-100">Turmeric</Link></li>
              <li><Link to="/products/black-pepper" className="opacity-80 hover:opacity-100">Black Pepper</Link></li>
              <li><Link to="/products/cardamom" className="opacity-80 hover:opacity-100">Green Cardamom</Link></li>
              <li><Link to="/products/red-chilli" className="opacity-80 hover:opacity-100">Red Chilli</Link></li>
              <li><Link to="/products/moringa" className="opacity-80 hover:opacity-100">Moringa</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow opacity-60">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 opacity-80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turmeric" />
                <span>Chennai, Tamil Nadu<br />India</span>
              </li>
              <li className="flex items-start gap-2.5 opacity-80">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-turmeric" />
                <span>+91 90031 70907</span>
              </li>
              <li className="flex items-start gap-2.5 opacity-80">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-turmeric" />
                <a href="mailto:ajinthsnowson@kaventraglobal.com" className="hover:opacity-100">
                  ajinthsnowson@kaventraglobal.com
                </a>
              </li>
              <li className="flex items-center gap-4 mt-4 opacity-80">
                <a href="https://www.linkedin.com/company/125004110/admin/page-posts/published/" target="_blank" rel="noreferrer" className="hover:text-turmeric hover:opacity-100">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/kaventra_global_traders?igsh=aHE0dGhiYzhub3Jj&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-turmeric hover:opacity-100">
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs opacity-60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kaventra Global Traders. All rights reserved.</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>APEDA Registered</span>
            <span>·</span>
            <span>Spices Board of India</span>
            <span>·</span>
            <span>FSSAI Licensed</span>
            <span>·</span>
            <span>MSME Registered</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
