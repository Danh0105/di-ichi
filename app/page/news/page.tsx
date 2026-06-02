// src/app/news/page.tsx

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import n1 from "./statics/1.jpg";
import n2 from "./statics/2.jpg";
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
    title: "CÙNG ICHI BƯỚC VÀO KỶ NGUYÊN GIÁO DỤC SỐ",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    href: "/page/news/r1",
  },

  {
    title: "CHUYÊN ĐỀ TÂM LÝ TUỔI DẬY THÌ",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
    href: "/page/news/r1",
  },

  {
    title: "GIẢI BÓNG ĐÁ TỨ HÙNG TRANH CÚP ICHI",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop",
    href: "/page/news/r1",
  },

  {
    title: "CÔNG BỐ KẾT QUẢ CUỘC THI VIDEO",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    href: "/page/news/r1",
  },

  {
    title: "TUYỂN SINH KHÓA LẬP TRÌNH SCRATCH",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    href: "/page/news/r1",
  },

  {
    title: "CUỘC THI VIDEO THẦY CÔ TRONG TRÁI TIM EM",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    href: "/page/news/r1",
  },
];

export default function NewsPage() {
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
          {news.map((item, index) => (
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
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
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
