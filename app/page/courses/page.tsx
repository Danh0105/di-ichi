"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

import stem from "./statics/stem.jpg";
import kns from "./statics/kns.jpg";
import ai from "./statics/ai.jpg";
import en from "./statics/en.jpg";
import icdl from "./statics/icdl.jpg";
import cds from "./statics/cds.jpg";
import nk from "./statics/nk.jpg";
import lt from "./statics/lt.jpg";

const courses = [
  {
    title: "Giáo dục Kỹ năng sống",
    slug: "kns",
    category: "Kỹ năng",
    students: "1.2K+ học viên",
    image: kns,
  },
  {
    title: "STEM",
    slug: "stem",
    category: "STEM",
    students: "980+ học viên",
    image: stem,
  },
  {
    title: "Trí tuệ nhân tạo AI",
    slug: "ai",
    category: "Công nghệ",
    students: "760+ học viên",
    image: ai,
  },
  {
    title: "Tiếng Anh Di-Ichi",
    slug: "tieng-anh",
    category: "Ngoại ngữ",
    students: "500+ học viên",
    image: en,
  },
  {
    title: "Tin học ICDL",
    slug: "icdl",
    category: "Công nghệ",
    students: "840+ học viên",
    image: icdl,
  },
  {
    title: "Công dân số",
    slug: "cong-dan-so",
    category: "Kỹ năng",
    students: "430+ học viên",
    image: cds,
  },
  {
    title: "Chương trình ngoại khóa",
    slug: "ngoai-khoa",
    category: "Hoạt động",
    students: "300+ học viên",
    image: nk,
  },
  {
    title: "Khám phá thế giới lập trình",
    slug: "lap-trinh",
    category: "Workshop",
    students: "250+ học viên",
    image: lt,
  },
];

const categories = [
  "Tất cả",
  "STEM",
  "Kỹ năng",
  "Ngoại ngữ",
  "Công nghệ",
  "Hoạt động",
  "Workshop",
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [keyword, setKeyword] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchCategory =
        activeCategory === "Tất cả" || course.category === activeCategory;

      const matchKeyword = course.title
        .toLowerCase()
        .includes(keyword.toLowerCase());

      return matchCategory && matchKeyword;
    });
  }, [activeCategory, keyword]);

  return (
    <main className="min-h-screen bg-[#f6f7fb]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1800&auto=format&fit=crop"
            alt="courses"
            fill
            priority
            className="object-cover opacity-35"
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.25),transparent_35%),linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.68),rgba(0,0,0,0.35))]" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <div className="mb-8 flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="transition hover:text-yellow-400">
              Trang chủ
            </Link>
            <ChevronRight size={16} />
            <span className="text-yellow-400">Khóa học</span>
          </div>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-bold text-yellow-300 backdrop-blur">
              <Sparkles size={16} />
              Hệ thống đào tạo DI - ICHI
            </div>

            <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-7xl">
              Khám phá các
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                khóa học nổi bật
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Chương trình đào tạo hiện đại, giúp học viên phát triển tư duy, kỹ
              năng, ngoại ngữ và năng lực công nghệ trong thời đại số.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#course-list"
                className="inline-flex h-13 items-center gap-3 rounded-2xl bg-yellow-400 px-6 font-black text-black shadow-lg shadow-yellow-400/20 transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Xem khóa học
                <ArrowRight size={18} />
              </Link>

              <div className="inline-flex h-13 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-6 font-semibold text-white backdrop-blur">
                <Users size={18} />
                20+ chương trình đào tạo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6">
        <div className="rounded-[28px] border border-white/70 bg-white/90 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveCategory(item)}
                  className={`shrink-0 rounded-2xl px-5 py-3 text-sm font-bold transition ${
                    activeCategory === item
                      ? "bg-black text-white shadow-lg"
                      : "bg-slate-100 text-slate-600 hover:bg-yellow-100 hover:text-yellow-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-[340px]">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                type="text"
                placeholder="Tìm kiếm khóa học..."
                className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-5 text-slate-700 outline-none transition focus:border-yellow-400 focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COURSE GRID */}
      <section
        id="course-list"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6"
      >
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-yellow-600">
              <BookOpen size={17} />
              Danh mục đào tạo
            </div>

            <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
              Danh sách khóa học
            </h2>

            <p className="mt-3 text-slate-500">
              Hiển thị {filteredCourses.length} chương trình phù hợp
            </p>
          </div>

          <button className="hidden items-center gap-2 font-black text-yellow-600 transition-all hover:gap-4 md:flex">
            Xem tất cả
            <ArrowRight size={18} />
          </button>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {filteredCourses.map((course, index) => (
              <Link
                href={`/page/courses/${course.slug}`}
                key={index}
                className="group"
              >
                <article className="h-full overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/12">
                  <div className="relative h-[260px] overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black uppercase text-black shadow-lg">
                      {course.category}
                    </span>

                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                      <p className="rounded-full bg-white/15 px-3 py-1.5 text-sm font-bold text-white backdrop-blur">
                        {course.students}
                      </p>

                      <div className="flex size-11 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur transition group-hover:bg-yellow-400 group-hover:text-black">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="line-clamp-2 min-h-[64px] text-xl font-black uppercase leading-8 text-slate-950 transition group-hover:text-yellow-600">
                      {course.title}
                    </h3>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                      <span className="text-sm font-semibold text-slate-500">
                        Khóa học nổi bật
                      </span>

                      <span className="text-sm font-black text-yellow-600">
                        Chi tiết
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-lg font-bold text-slate-700">
              Không tìm thấy khóa học phù hợp
            </p>
            <p className="mt-2 text-slate-500">
              Hãy thử đổi từ khóa hoặc chọn danh mục khác.
            </p>
          </div>
        )}

        {/* PAGINATION UI */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-3">
          <button className="h-12 rounded-2xl border border-slate-200 bg-white px-5 font-bold text-slate-600 transition hover:border-black hover:bg-black hover:text-white">
            Prev
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`size-12 rounded-2xl font-bold transition ${
                page === 1
                  ? "scale-105 bg-black text-white shadow-lg"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-yellow-300 hover:bg-yellow-100 hover:text-yellow-700"
              }`}
            >
              {page}
            </button>
          ))}

          <button className="h-12 rounded-2xl border border-slate-200 bg-white px-6 font-bold text-slate-700 transition hover:border-black hover:bg-black hover:text-white">
            Next
          </button>
        </div>
      </section>
    </main>
  );
}
