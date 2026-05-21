import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.04_250)] text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="TG Recruiting logo" width={240} height={72} loading="lazy" className="h-16 w-auto" />
            <span className="sr-only">TG Recruiting</span>
          </Link>
          <p className="text-sm text-white/60 leading-relaxed">
            A trusted transportation driver network and communication support platform serving partners across the United States.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /><span>office@tgrecruiting.com</span></li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><span>(307) 357-3262</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>30 N Gould St Ste R, Sheridan, WY 82801</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} TG Recruiting. All rights reserved.</p>
          <p>SMS consent is not shared with third parties or affiliates for marketing purposes.</p>
        </div>
      </div>
    </footer>
  );
}