// src/components/layout/Header.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import LOGO1 from "@/app/static/LOGO1.png";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={LOGO1}
              alt="DI-ICHI Logo"
              width={52}
              height={52}
              className="object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-xl md:text-2xl font-extrabold text-yellow-500 tracking-wide">
                DI-ICHI
              </h1>

              <p className="text-[11px] md:text-xs text-gray-500">
                Chuyển đổi số
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center">
            <HeaderMenu mobile={false} />
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center bg-white shadow-sm active:scale-95 transition"
          >
            {open ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-2 border-t border-gray-100 bg-white">
          <HeaderMenu mobile onClickItem={() => setOpen(false)} />
        </div>
      </div>
    </header>
  );
}
