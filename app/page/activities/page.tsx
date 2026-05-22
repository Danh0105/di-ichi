// src/app/page/activities/page.tsx

import Image from "next/image";
import Link from "next/link";
import { Home, MapPin, Phone, Mail, Globe, ChevronRight } from "lucide-react";

const events = [
  {
    title: "YEP -2026 - ICHI SKILL – 5 YEARS - TOGETHER WE SHINE",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "THÔNG BÁO NGHỈ TẾT NGUYÊN ĐÁN XUÂN BÍNH NGỌ 2026",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "KẾT QUẢ CUỘC THI ONLINE 'THẦY CÔ TRONG TRÁI TIM EM'",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "MV ICHI GIEO HẠT - GIEO YÊU THƯƠNG",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "GIẢI ĐẤU PICKLE BALL ICHI SKILL 2025",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "CUỘC THI ONLINE 'THẦY CÔ TRONG TRÁI TIM EM'",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM 20-10",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "CHUYÊN ĐỀ KỸ NĂNG ỨNG XỬ VĂN MINH",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* TOP BAR */}
      <div className="bg-[#111827] text-white text-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between">
          <p className="text-gray-300">
            Chào Mừng Bạn Đến Với Website Của Chúng Tôi !
          </p>

          <div className="flex items-center gap-5 font-medium">
            <button className="hover:text-amber-400 transition">
              Đăng nhập
            </button>

            <button className="hover:text-amber-400 transition">Đăng ký</button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
            alt="hero"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-amber-400 transition">
              Trang chủ
            </Link>

            <ChevronRight size={16} />

            <span className="text-white font-semibold">Sự Kiện Hoạt Động</span>
          </div>

          <div className="mt-10 max-w-3xl">
            <span className="bg-amber-500/20 border border-amber-400/30 text-amber-300 px-5 py-2 rounded-full text-sm font-semibold">
              ICHI SKILL EVENTS
            </span>

            <h1 className="text-5xl md:text-7xl font-black uppercase text-white leading-tight mt-8">
              SỰ KIỆN
              <span className="block text-amber-400">HOẠT ĐỘNG</span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-8">
              Cập nhật các hoạt động nổi bật, chương trình đào tạo, workshop và
              sự kiện mới nhất từ ICHI SKILL.
            </p>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
              Hoạt động nổi bật
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
              Danh sách sự kiện
            </h2>
          </div>

          <button className="hidden md:flex px-6 h-12 items-center rounded-2xl bg-gray-900 text-white hover:bg-amber-500 hover:text-black transition-all font-semibold">
            Xem tất cả
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((item, index) => (
            <Link href="#" key={index} className="group">
              <div className="bg-white overflow-hidden rounded-[28px] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-4 py-2 rounded-full">
                      Sự kiện
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="font-black text-[17px] leading-7 uppercase line-clamp-2 text-gray-900 group-hover:text-amber-600 transition">
                    {item.title}
                  </h3>

                  <button className="mt-6 text-amber-600 hover:text-amber-700 font-bold text-sm uppercase transition">
                    Xem chi tiết →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-3 mt-20">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-12 h-12 rounded-2xl font-semibold transition-all duration-300 ${
                page === 1
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200"
              }`}
            >
              {page}
            </button>
          ))}

          <button className="px-6 h-12 rounded-2xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-semibold">
            Next
          </button>

          <button className="px-6 h-12 rounded-2xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-semibold">
            Last
          </button>
        </div>
      </section>
    </div>
  );
}
