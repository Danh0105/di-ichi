import Image from "next/image";
import Link from "next/link";
import imgPrimary from "./statics/11.jpg";
import imgSecondary from "./statics/40.jpg";

const groups = [
  {
    title: "Khối Tiểu học",
    description: "Chương trình kỹ năng sống dành cho học sinh lớp 1 đến lớp 5.",
    image: imgPrimary,
    href: "/page/courses/kns/th",
  },
  {
    title: "Khối Trung học cơ sở",
    description: "Chương trình kỹ năng sống dành cho học sinh lớp 6 đến lớp 9.",
    image: imgSecondary,
    href: "/page/courses/kns/thcs",
  },
];

export default function KyNangSongPage() {
  return (
    <main className="min-h-screen bg-[#fffaf0]">
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-black text-slate-900">
            Chương trình Kỹ năng sống
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Giúp học sinh phát triển toàn diện về kỹ năng giao tiếp, tự lập, ứng
            xử, bảo vệ bản thân và thích nghi với cuộc sống hiện đại.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {groups.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-[36px] bg-white shadow-xl transition hover:-translate-y-2"
            >
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain object-center transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-8 text-white">
                  <h2 className="text-4xl font-black">{item.title}</h2>

                  <p className="mt-3 text-white/90">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
