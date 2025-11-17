import { Leaf, PhoneCall, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 grid place-items-center shadow-inner">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-emerald-900 font-semibold tracking-tight">Verdant Landscapes</p>
              <p className="text-emerald-700/70 text-xs">Eco‑minded outdoor design</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-emerald-900/80">
            <a href="#services" className="hover:text-emerald-900 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-emerald-900 transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-emerald-900 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-emerald-900 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 transition-colors shadow-lg shadow-emerald-600/20">
              <PhoneCall className="w-4 h-4" /> Get a quote
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <nav className="grid gap-2 text-emerald-900/90">
              <a href="#services" className="px-3 py-2 rounded-lg hover:bg-emerald-50">Services</a>
              <a href="#portfolio" className="px-3 py-2 rounded-lg hover:bg-emerald-50">Portfolio</a>
              <a href="#testimonials" className="px-3 py-2 rounded-lg hover:bg-emerald-50">Testimonials</a>
              <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-emerald-50">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
