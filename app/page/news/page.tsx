// src/app/news/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import n1 from "./statics/1.jpg";
import n2 from "./statics/2.jpg";
import n3 from "./statics/3.jpg";
import n4 from "./statics/4.jpg";
import n5 from "./statics/5.jpg";
import n6 from "./statics/6.jpg";
import n7 from "./statics/7.jpg";
import n8 from "./statics/8.jpg";
import n9 from "./statics/9.jpg";
import n10 from "./statics/10.jpg";
import n11 from "./statics/11.jpg";
import n12 from "./statics/12.jpg";
import n13 from "./statics/13.jpg";
const news = [
  {
    title: "GIÁO DỤC KỸ NĂNG SỐNG – BẢN CHẤT, CÁC MÔ HÌNH VÀ PHƯƠNG PHÁP",
    image: n1,
    href: "/page/news/n1",
  },

  {
    title:
      "[CHIẾN SĨ NHÍ XUẤT QUÂN] – TRẢI NGHIỆM QUÂN NGŨ TẠI TRUNG ĐOÀN 174 TÂY NINH ",
    image: n2,
    href: "/page/news/n2",
  },

  {
    title: "ICHI VINH DỰ ĐÓN TIẾP LÃNH ĐẠO ĐẾN THĂM VÀ CHÚC TẾT",
    image: n3,
    href: "/page/news/n3",
  },

  {
    title: "ICHI vinh dự đồng hành cùng EDTECH VIETNAM 2026     ",
    image: n4,
    href: "/page/news/n4",
  },

  {
    title:
      "Học kì quân đội - TRƯỞNG THÀNH HƠN TỪ NHỮNG ĐIỀU GIẢN DỊ MỖI NGÀY...",
    image: n5,
    href: "/page/news/n5",
  },

  {
    title: "ICHI – LAN TỎA TRI THỨC, KẾT NỐI TƯƠNG LAI TẠI TÂY NINH ",
    image: n6,
    href: "/page/news/n6",
  },

  {
    title:
      "KỶ NIỆM 136 NĂM NGÀY SINH  CHỦ TỊCH HỒ CHÍ MINH VĨ ĐẠI (19/5/1890 - 19/5/2026)  ",
    image: n7,
    href: "/page/news/n7",
  },

  {
    title: "LAN TỎA GIÁ TRỊ – CHUNG TAY BẢO VỆ TRẺ EM",
    image: n8,
    href: "/page/news/n8",
  },
  {
    title: "ICHI & UEF: MỞ RỘNG HÀNH TRÌNH “ĐÀO TẠO GẮN KẾT VỚI DOANH NGHIỆP”",
    image: n9,
    href: "/page/news/n9",
  },
  {
    title: 'ICHI TẠI NGÀY HỘI "CHUYỂN ĐỘNG SỐ GIÁO DỤC" PHƯỜNG TÂN HÒA 2026! ”',
    image: n10,
    href: "/page/news/n10",
  },

  {
    title:
      "Chào mừng 3 sự kiện trọng đại của đất nước, Ngày Giỗ Tổ Hùng Vương Mùng 10 Tháng 3, Ngày Giải phóng miền Nam thống nhất đất nước (30/4) và Ngày Quốc tế Lao động (1/5)    ”",
    image: n11,
    href: "/page/news/n11",
  },
  {
    title: "Cuộc Thi: Thầy Cô Trong Trái Tim Em - Mùa 4    ”",
    image: n12,
    href: "/page/news/n12",
  },
  {
    title:
      "ICHI ĐỒNG HÀNH CÙNG TUẦN LỄ KHOA HỌC CÔNG NGHỆ ĐỔI MỚI SÁNG TẠO & CHUYỂN ĐỔI SỐ TỈNH TÂY NINH 2026",
    image: n13,
    href: "/page/news/n13",
  },
];
const ITEMS_PER_PAGE = 8;
export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);

  const currentNews = news.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1600&auto=format&fit=crop"
            alt="hero"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-amber-400 transition">
              Trang chủ
            </Link>

            <ChevronRight size={16} />

            <span className="text-white font-semibold">
              Thông Báo - Tin Tức
            </span>
          </div>

          {/* TITLE */}
          <div className="mt-10 max-w-3xl">
            <span className="bg-amber-500/20 border border-amber-400/30 text-amber-300 px-5 py-2 rounded-full text-sm font-semibold">
              NEWS & ANNOUNCEMENTS
            </span>

            <h1 className="text-5xl md:text-7xl font-black uppercase text-white leading-tight mt-8">
              THÔNG BÁO
              <span className="block text-amber-400">TIN TỨC</span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-8">
              Cập nhật nhanh chóng các thông báo, hoạt động và tin tức mới nhất
              từ hệ thống giáo dục ICHI SKILL.
            </p>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
              Tin tức nổi bật
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
              Danh sách bài viết
            </h2>
          </div>

          <button className="hidden md:flex px-6 h-12 items-center rounded-2xl bg-gray-900 text-white hover:bg-amber-500 hover:text-black transition-all font-semibold">
            Xem tất cả
          </button>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentNews.map((item, index) => (
            <Link href={item.href} key={index} className="group">
              <div className="bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <div className="relative h-[250px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-4 py-2 rounded-full">
                      Tin tức
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
        <div className="flex flex-wrap items-center justify-center gap-3 mt-20">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-5 h-12 rounded-2xl border text-black disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-12 h-12 rounded-2xl font-semibold transition ${
                currentPage === i + 1
                  ? "bg-amber-400 text-black"
                  : "bg-white border border-gray-200 text-black hover:bg-amber-50"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-5 h-12 rounded-2xl border text-black disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
