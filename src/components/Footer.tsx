import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="mt-24 bg-zinc-900 text-zinc-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-blue-500" aria-hidden />
            <span className="text-base font-semibold">RCMP UniFa</span>
          </div>
          <p className="text-sm text-zinc-300">
            UniKL Financial Aid System — supporting student success through accessible funding.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-300">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#applications" className="hover:text-white">Applications</a></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-300">Contact</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>UniKL RCMP, Ipoh, Perak</li>
            <li>+60 5-123 4567</li>
            <li>swf@unikl.edu.my</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-300">Office Hours</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>Mon - Fri: 9:00 AM - 5:00 PM</li>
            <li>Sat - Sun: Closed</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/20">FB</a>
            <a href="#" aria-label="X" className="rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/20">X</a>
            <a href="#" aria-label="Instagram" className="rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/20">IG</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-zinc-400 sm:px-6 lg:px-8">
          © 2024 UniKL RCMP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}




