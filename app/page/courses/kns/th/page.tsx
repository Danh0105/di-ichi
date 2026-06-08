import Link from "next/link";
import { ArrowRight, Sparkles, BookOpenCheck } from "lucide-react";
import Image from "next/image";
import img1 from "./statics/12.jpg";
import img2 from "./statics/21.jpg";
import img3 from "./statics/29.jpg";
import img4 from "./statics/33.jpg";
import img5 from "./statics/34.jpg";
const programs = [
  {
    title: "Kỹ năng sống khối 1",
    description: "Làm quen bản thân và kỹ năng giao tiếp cơ bản",
    href: "/page/courses/kns/th/kns1",
    image: img1,
  },
  {
    title: "Kỹ năng sống khối 2",
    description: "Kỹ năng hợp tác và làm việc nhóm",
    href: "/page/courses/kns/th/kns2",
    image: img2,
  },
  {
    title: "Kỹ năng sống khối 3",
    description: "Quản lý cảm xúc và giải quyết vấn đề",
    href: "/page/courses/kns/th/kns3",
    image: img3,
  },
  {
    title: "Kỹ năng sống khối 4",
    description: "An toàn học đường và phòng chống bạo lực",
    href: "/page/courses/kns/th/kns4",
    image: img4,
  },
  {
    title: "Kỹ năng sống khối 5",
    description: "Kỹ năng tự tin, trách nhiệm và sẵn sàng chuyển cấp",
    href: "/page/courses/kns/th/kns5",
    image: img5,
  },
];

export default function KyNangSongPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf0]">
      <section className="relative px-6 py-20">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white/70 px-5 py-2 text-sm font-bold text-yellow-700 shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Chương trình phát triển kỹ năng cho học sinh
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Chương trình{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Kỹ năng sống
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Lựa chọn chương trình phù hợp theo từng cấp độ, giúp học sinh tự
              tin giao tiếp, hợp tác, quản lý cảm xúc và hình thành hành vi tích
              cực.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {programs.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[32px] border border-yellow-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-[0_30px_80px_rgba(234,179,8,0.22)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-xl font-black text-white shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm font-bold uppercase tracking-wider text-yellow-600">
                      Cấp độ {index + 1}
                    </p>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">
                      <BookOpenCheck size={22} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-base leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="font-bold text-slate-900">
                      Xem chi tiết
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition group-hover:translate-x-1 group-hover:bg-yellow-500">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
