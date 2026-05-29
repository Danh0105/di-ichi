import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import LOGO1 from "@/app/static/LOGO1.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          {/* COMPANY */}
          <div>
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-400/20 blur-2xl rounded-full" />

                <div className="relative flex items-center gap-4 group">
                  {/* LOGO */}
                  <Link href="/" className="flex items-center shrink-0 group">
                    <div className="flex items-center gap-3">
                      {/* Logo */}
                      <Image
                        src={LOGO1}
                        alt="DI-ICHI"
                        width={120}
                        height={56}
                        priority
                        className="object-contain"
                      />

                      {/* Text */}
                      <div className="hidden xl:flex flex-col leading-tight">
                        <p className="text-[10px] font-semibold tracking-[3px] uppercase text-slate-500">
                          Chuyển đổi số ICHI
                        </p>

                        <span className="text-[10px] font-bold tracking-[2px] text-orange-500">
                          DIGITAL TRANSFORMATION
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Decorative blur */}
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-20 h-20 bg-orange-200/30 blur-3xl rounded-full opacity-70" />
                </div>
              </div>
            </Link>

            <p className="mt-8 text-slate-400 leading-8">
              ICHI đồng hành cùng nhà trường, học sinh và phụ huynh trong hành
              trình chuyển đổi số giáo dục, phát triển năng lực công dân số và
              kiến tạo môi trường học tập hiện đại.
            </p>

            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaYoutube, FaLinkedinIn].map((Icon, index) => (
                <div
                  key={index}
                  className="
                    w-12 h-12
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    flex items-center justify-center
                    hover:bg-yellow-500
                    transition-all
                    cursor-pointer
                  "
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-black text-yellow-400">LIÊN HỆ</h3>

            <div className="w-12 h-1 bg-yellow-400 rounded-full mt-3 mb-8" />

            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin size={20} className="text-yellow-400 shrink-0 mt-1" />

                <p className="text-slate-300 leading-7">
                  231/1 Nguyễn Phúc Chu, Phường 15, Quận Tân Bình, TP. Hồ Chí
                  Minh
                </p>
              </div>

              <div className="flex gap-4">
                <Phone size={20} className="text-yellow-400 shrink-0" />

                <p className="text-slate-300">0707 868 000</p>
              </div>

              <div className="flex gap-4">
                <Mail size={20} className="text-yellow-400 shrink-0" />

                <p className="text-slate-300">contact@di-ichi.vn</p>
              </div>

              <div className="flex gap-4">
                <Globe size={20} className="text-yellow-400 shrink-0" />

                <p className="text-slate-300">www.di-ichi.vn</p>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-xl font-black text-yellow-400">MENU</h3>

            <div className="w-12 h-1 bg-yellow-400 rounded-full mt-3 mb-8" />

            <ul className="space-y-4">
              {[
                "Trang chủ",
                "Giới thiệu",
                "Khóa học",
                "Hoạt động",
                "Tin tức",
                "Liên hệ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      text-slate-300
                      hover:text-yellow-400
                      transition
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* POLICY */}
          <div>
            <h3 className="text-xl font-black text-yellow-400">CHÍNH SÁCH</h3>

            <div className="w-12 h-1 bg-yellow-400 rounded-full mt-3 mb-8" />

            <ul className="space-y-4">
              {[
                "Chính sách thanh toán",
                "Chính sách bảo mật",
                "Điều khoản sử dụng",
                "Quyền lợi học sinh",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      text-slate-300
                      hover:text-yellow-400
                      transition
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">
            © 2026 ICHI EDUCATION. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Chuyển đổi số giáo dục • STEM • AI • Công dân số
          </p>
        </div>
      </div>
    </footer>
  );
}
