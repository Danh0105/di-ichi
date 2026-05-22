// src/components/layout/Header.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

import LOGO1 from "@/app/static/LOGO1.png";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
      {/* TOP BAR */}
      <div className="hidden lg:block border-b border-slate-100 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6 text-slate-600">
            <span>🎓 Hệ thống giáo dục chuẩn Nhật Bản</span>
            <span>📍 Môi trường học tập hiện đại</span>
          </div>

          <div className="flex items-center gap-5 text-slate-500">
            <span>Hotline: 0900 000 000</span>
            <span>Email: support@di-ichi.vn</span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="h-[82px] flex items-center justify-between gap-5">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-400/20 blur-2xl rounded-full" />

              <div className="relative group">
                {/* Glow background */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-400 via-amber-300 to-orange-500 blur-md opacity-70 group-hover:opacity-100 transition duration-300" />

                {/* Main logo container */}
                <div className="relative w-[150px] h-[70px] rounded-3xl bg-white border border-orange-100 flex items-center justify-center shadow-[0_12px_35px_rgba(251,146,60,0.35)] backdrop-blur-xl overflow-hidden">
                  {/* Decorative gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />

                  {/* Inner circle */}
                  <div className="absolute w-[150px] h-[70px] rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-inner" />

                  {/* Logo */}
                  <Image
                    src={LOGO1}
                    alt="DI-ICHI"
                    width={140}
                    height={70}
                    priority
                    className="relative z-10 object-contain drop-shadow-[0_4px_10px_rgba(255,255,255,0.45)]"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <nav className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-full px-3 py-2 shadow-sm">
              <HeaderMenu mobile={false} />
            </nav>
          </div>

          {/* RIGHT ACTION */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="h-11 px-5 rounded-full border border-orange-200 text-orange-600 font-semibold hover:bg-orange-50 transition">
              Tư vấn
            </button>

            <button className="h-11 px-6 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-200 transition">
              Đăng ký học
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md active:scale-95 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-100 bg-white">
          {/* MOBILE INFO */}
          <div className="px-4 pt-5">
            <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 p-5 text-white shadow-lg">
              <p className="text-sm opacity-90 mb-1">
                Hệ thống giáo dục chuẩn Nhật
              </p>

              <h3 className="text-xl font-bold">
                Đồng hành cùng học sinh phát triển toàn diện
              </h3>

              <button className="mt-4 h-11 px-5 rounded-2xl bg-white text-orange-600 font-semibold">
                Nhận tư vấn miễn phí
              </button>
            </div>
          </div>

          {/* MOBILE NAV */}
          <div className="p-4">
            <div className="rounded-3xl border border-orange-100 bg-orange-50/40 p-4 shadow-sm">
              <HeaderMenu mobile onClickItem={() => setOpen(false)} />
            </div>

            {/* EXTRA */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-100 p-4 bg-slate-50">
                <p className="text-2xl font-bold text-orange-500">10+</p>
                <p className="text-sm text-slate-600 mt-1">Năm kinh nghiệm</p>
              </div>

              <div className="rounded-2xl border border-slate-100 p-4 bg-slate-50">
                <p className="text-2xl font-bold text-orange-500">5000+</p>
                <p className="text-sm text-slate-600 mt-1">
                  Học viên đồng hành
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
