// src/app/page/activities/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { Home, MapPin, Phone, Mail, Globe, ChevronRight } from "lucide-react";
import R1 from "./statics/r1.png";
import R2 from "./statics/r2.png";
import R3 from "./statics/r3.png";
import R4 from "./statics/r4.png";
import R5 from "./statics/r5.png";
import R6 from "./statics/r6.png";
import R7 from "./statics/r7.png";
import R8 from "./statics/r8.png";
import R9 from "./statics/r9.png";
import { useState } from "react";
const events = [
  {
    title: "CHUYÊN ĐỀ: AN TOÀN – AN NINH MẠNG DÀNH CHO GIÁO VIÊN",
    image: R1,
    href: "/page/activities/r1",
  },

  {
    title: "CHUYÊN ĐỀ: GIÁ TRỊ CỦA LÒNG BIẾT ƠN",
    image: R2,
    href: "/page/activities/r2",
  },

  {
    title: "CHUYÊN ĐỀ GIÁO DỤC GIỚI TÍNH – HÀNH TRANG CHO TUỔI DẬY THÌ",
    image: R3,
    href: "/page/activities/r3",
  },

  {
    title: "CHUYÊN ĐỀ: XÂY DỰNG TÌNH BẠN ĐẸP – PHÒNG CHỐNG BẠO LỰC HỌC ĐƯỜNG",
    image: R4,
    href: "/page/activities/r4",
  },

  {
    title:
      'ICHI SKILL ĐỒNG HÀNH CÙNG NGÀY HỘI "CHUYỂN ĐỘNG SỐ GIÁO DỤC" NĂM 2026',
    image: R5,
    href: "/page/activities/r5",
  },

  {
    title: "CUỘC THI ONLINE 'THẦY CÔ TRONG TRÁI TIM EM'",
    image: R6,
    href: "/page/activities/r6",
  },

  {
    title: "NGÀY HỘI STEM – KHƠI DẬY NIỀM ĐAM MÊ KHÁM PHÁ TẠI TRƯỜNG MẦM NON",
    image: R7,
    href: "/page/activities/r7",
  },

  {
    title: "NGÀY HỘI STEM – KHƠI NGUỒN ĐAM MÊ SÁNG TẠO",
    image: R8,
    href: "/page/activities/r8",
  },
  {
    title: " TRANG BỊ KỸ NĂNG PHÒNG TRÁNH ĐUỐI NƯỚC CHO HỌC SINH ",
    image: R9,
    href: "/page/activities/r9",
  },
];

const ITEMS_PER_PAGE = 8;
export default function EventsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);

  const currentEvents = events.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* TOP BAR */}

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
          {currentEvents.map((item, index) => (
            <Link href={item.href} key={index} className="group">
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
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="
    px-5 h-12 rounded-2xl border
    text-black
    disabled:opacity-50
  "
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-12 h-12 rounded-2xl font-semibold transition ${
                currentPage === i + 1
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-black hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="
    px-5 h-12 rounded-2xl border
    text-black
    disabled:opacity-50
  "
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
