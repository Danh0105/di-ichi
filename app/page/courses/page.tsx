// src/app/courses/page.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const courses = [
  {
    title: "KHÁM PHÁ THẾ GIỚI LẬP TRÌNH",
    category: "Công nghệ",
    students: "1.2K+ học viên",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "TRUNG TÂM ANH NGỮ DI - ICHI",
    category: "Ngoại ngữ",
    students: "980+ học viên",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "GIÁO DỤC STEM MẦM NON",
    category: "STEM",
    students: "760+ học viên",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "KỸ NĂNG CÔNG DÂN SỐ",
    category: "Kỹ năng",
    students: "500+ học viên",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "STEM TIỂU HỌC",
    category: "Giáo dục",
    students: "840+ học viên",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "KỸ NĂNG SỐNG THCS",
    category: "Kỹ năng",
    students: "430+ học viên",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "CHƯƠNG TRÌNH NGOẠI KHÓA",
    category: "Hoạt động",
    students: "300+ học viên",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "CHUYÊN ĐỀ",
    category: "Workshop",
    students: "250+ học viên",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop"
            alt="courses"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <Link href="/" className="hover:text-yellow-400 transition">
              Trang chủ
            </Link>

            <ChevronRight size={16} />

            <span className="text-yellow-400">Khóa học</span>
          </div>

          {/* TITLE */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur">
              Hệ thống đào tạo DI - ICHI
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              KHÁM PHÁ
              <span className="block text-yellow-400">
                CÁC KHÓA HỌC NỔI BẬT
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-8 max-w-2xl">
              Chương trình đào tạo hiện đại giúp học viên phát triển tư duy, kỹ
              năng và công nghệ trong thời đại số.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-[28px] shadow-xl border border-gray-100 p-5 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {["Tất cả", "STEM", "Kỹ năng", "Ngoại ngữ", "Công nghệ"].map(
              (item, index) => (
                <button
                  key={index}
                  className={`px-5 h-11 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                    index === 0
                      ? "bg-black text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-yellow-100 hover:text-yellow-700"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>

          <div className="w-full lg:w-[320px]">
            <input
              type="text"
              placeholder="Tìm kiếm khóa học..."
              className="w-full h-12 rounded-2xl border border-gray-200 bg-gray-50 px-5 text-gray-700 placeholder:text-gray-400 outline-none focus:border-yellow-400 focus:bg-white transition"
            />
          </div>
        </div>
      </section>

      {/* COURSE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              Danh sách khóa học
            </h2>

            <p className="text-gray-500 mt-3">
              Hơn 20+ chương trình đào tạo chất lượng cao
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 text-yellow-500 font-bold hover:gap-4 transition-all">
            Xem tất cả
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Link href="#" key={index} className="group">
              <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={600}
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black text-xs font-black px-4 py-2 rounded-full">
                      {course.category}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-white text-sm font-semibold">
                      {course.students}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="font-black text-xl leading-8 uppercase text-black group-hover:text-yellow-500 transition line-clamp-2 min-h-[64px]">
                    {course.title}
                  </h3>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Khóa học nổi bật
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition">
                      <ArrowRight size={18} className="text-black" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-20">
          {/* PREV */}
          <button className="px-5 h-12 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-semibold">
            Prev
          </button>

          {/* PAGE */}
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-12 h-12 rounded-2xl font-semibold transition-all duration-300 ${
                page === 1
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-yellow-100 hover:border-yellow-300 hover:text-yellow-700"
              }`}
            >
              {page}
            </button>
          ))}

          {/* NEXT */}
          <button className="px-6 h-12 rounded-2xl bg-white border border-gray-200 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-semibold">
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
