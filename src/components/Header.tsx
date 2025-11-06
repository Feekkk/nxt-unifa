"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="#" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-blue-600" aria-hidden />
            <span className="text-base font-semibold tracking-tight text-zinc-900">
              RCMP UniFa
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-medium text-zinc-700 hover:text-blue-700">
            Home
          </a>
          <a href="#about" className="text-sm font-medium text-zinc-700 hover:text-blue-700">
            About SWF
          </a>
          <a href="#applications" className="text-sm font-medium text-zinc-700 hover:text-blue-700">
            Applications
          </a>
          <a href="#contact" className="text-sm font-medium text-zinc-700 hover:text-blue-700">
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
          >
            Login
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8">
            <a href="#home" className="rounded-md px-2 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#about" className="rounded-md px-2 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100" onClick={() => setIsOpen(false)}>
              About SWF
            </a>
            <a href="#applications" className="rounded-md px-2 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100" onClick={() => setIsOpen(false)}>
              Applications
            </a>
            <a href="#contact" className="rounded-md px-2 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <Link
              href="/login"
              className="mt-2 inline-flex items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}




