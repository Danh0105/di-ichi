// src/components/layout/Footer.tsx

import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-yellow-400 text-black">
      {/* PATTERN BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20px_20px,#000_2px,transparent_2px)] bg-[length:40px_40px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-14">
          {/* CONTACT */}
          <div>
            <h3 className="text-3xl font-black uppercase">THÔNG TIN LIÊN HỆ</h3>

            <div className="w-16 h-1 bg-black rounded-full mt-4 mb-8" />

            <div className="space-y-6 text-lg leading-9">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-black text-yellow-400 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>

                <p>
                  231/1 Nguyễn Phúc Chu - Phường 15 - Quận Tân Bình - TP.HCM
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-black text-yellow-400 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>

                <p>0707 868 000 - 0789 636 979</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-black text-yellow-400 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>

                <p>contact@di-ichi.vn</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-black text-yellow-400 flex items-center justify-center shrink-0">
                  <Globe size={20} />
                </div>

                <p>www.di-ichi.vn</p>
              </div>
            </div>
          </div>

          {/* POLICY */}
          <div>
            <h3 className="text-3xl font-black uppercase">CHÍNH SÁCH</h3>

            <div className="w-16 h-1 bg-black rounded-full mt-4 mb-8" />

            <ul className="space-y-5 text-lg">
              {[
                "CHÍNH SÁCH THANH TOÁN",
                "CHÍNH SÁCH BẢO MẬT THÔNG TIN",
                "ĐĂNG KÝ HỌC VIÊN",
                "QUYỀN LỢI CỦA HỌC SINH",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 hover:translate-x-1 transition"
                >
                  <span className="text-black text-xl">▪</span>

                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-3xl font-black uppercase">MENU</h3>

            <div className="w-16 h-1 bg-black rounded-full mt-4 mb-8" />

            <ul className="space-y-5 text-lg">
              {[
                "Trang chủ",
                "Giới thiệu",
                "Các khóa học",
                "Hoạt động trải nghiệm",
                "Game kỹ năng sống",
                "Tin tức",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 hover:translate-x-1 transition"
                >
                  <span className="text-black text-xl">▪</span>

                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative border-t border-black/10 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-base md:text-lg font-medium">
          Copyright © 2026 <span className="font-black">DI-ICHI EDUCATION</span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
