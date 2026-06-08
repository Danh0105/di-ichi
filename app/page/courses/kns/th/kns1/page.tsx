import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Users,
} from "lucide-react";
import img1 from "./statics/16.jpg";
import img2 from "./statics/17.jpg";
import img3 from "./statics/18.jpg";
import img4 from "./statics/19.jpg";
import img5 from "./statics/20.jpg";
import img6 from "./statics/13.jpg";
import img7 from "./statics/14.jpg";
import img8 from "./statics/15.jpg";
import Image from "next/image";
const lessons = [
  {
    title: "Em Hòa Nhập Môi Trường Mới",
    href: "/page/courses/kns/th/kns1/ls1",
    image: img6,
    description:
      "Giúp học sinh tự tin, chủ động tìm hiểu, làm quen và thích nghi với môi trường mới.",
    goals: [
      "Tự tin, chủ động làm quen môi trường mới",
      "Biết một số hành động để thích nghi",
    ],
  },
  {
    title: "Tự Làm Lấy Việc Của Mình",
    href: "/page/courses/kns/th/kns1/ls2",
    image: img7,
    description:
      "Rèn luyện khả năng tự phục vụ bản thân, tự lập từ những hành động nhỏ mỗi ngày.",
    goals: [
      "Biết gấp gọn quần áo, tất và đồ dùng cá nhân",
      "Biết tự đánh răng, rửa mặt, thay quần áo",
      "Biết sắp xếp sách vở và chuẩn bị cặp sách",
    ],
  },
  {
    title: "Lời Chào Của Em",
    href: "/page/courses/kns/th/kns1/ls3",
    image: img8,
    description:
      "Rèn luyện thói quen chào hỏi lễ phép và biết ứng dụng lời chào trong cuộc sống.",
    goals: [
      "Biết chào hỏi khi gặp mọi người",
      "Thể hiện sự lễ phép trong giao tiếp",
      "Ứng dụng lời chào phù hợp trong thực tế",
    ],
  },
];

export default function kns1() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf0]">
      <section className="relative px-6 py-20">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/courses/ky-nang-song"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white px-5 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-yellow-400 hover:text-yellow-600"
          >
            <ArrowLeft size={16} />
            Quay lại chương trình
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white/80 px-5 py-2 text-sm font-bold text-yellow-700 shadow-sm backdrop-blur">
                <Sparkles size={16} />
                Kỹ năng sống khối 1
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Kỹ năng sống 1:{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Em tự tin mỗi ngày
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Chương trình giúp học sinh lớp 1 hình thành các kỹ năng nền tảng
                như hòa nhập môi trường mới, tự phục vụ bản thân, giao tiếp lễ
                phép, giữ gìn vệ sinh, bảo vệ bản thân và ứng xử an toàn trong
                cuộc sống.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white p-5 shadow-lg shadow-yellow-500/10">
                  <Clock className="mb-3 text-yellow-500" />
                  <p className="text-2xl font-black text-slate-900">35</p>
                  <p className="text-sm text-slate-500">tiết học</p>
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-lg shadow-yellow-500/10">
                  <BookOpenCheck className="mb-3 text-yellow-500" />
                  <p className="text-2xl font-black text-slate-900">1</p>
                  <p className="text-sm text-slate-500">tiết / tuần</p>
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-lg shadow-yellow-500/10">
                  <Users className="mb-3 text-yellow-500" />
                  <p className="text-2xl font-black text-slate-900">Lớp 1</p>
                  <p className="text-sm text-slate-500">đối tượng học sinh</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[40px] bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-yellow-400" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-orange-400" />

              <div className="relative rounded-[32px] bg-gradient-to-br from-yellow-400 to-orange-500 p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-wider text-white/80">
                  Mục tiêu chương trình
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  Giúp các em tự tin, thân thiện và biết yêu thương
                </h2>

                <p className="mt-5 leading-7 text-white/90">
                  Những tiết học kết hợp bài giảng điện tử, hoạt động thực hành
                  và tình huống gần gũi giúp học sinh dễ hiểu, dễ nhớ và biết
                  vận dụng vào cuộc sống hằng ngày.
                </p>
              </div>
            </div>
          </div>
          <section className="mt-20">
            <div className="mb-8 text-center">
              <p className="font-bold text-yellow-600">Hình ảnh hoạt động</p>

              <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
                Khoảnh khắc học tập của các em
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-slate-500">
                Các tiết học được tổ chức sinh động thông qua trò chơi, hoạt
                động trải nghiệm, thảo luận nhóm và thực hành tình huống thực
                tế.
              </p>
            </div>

            <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3">
              <div className="row-span-2 overflow-hidden rounded-[32px]">
                <Image
                  src={img1}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[32px]">
                <Image
                  src={img2}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[32px]">
                <Image
                  src={img3}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[32px]">
                <Image
                  src={img4}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[32px]">
                <Image
                  src={img5}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>
          <section className="mt-20">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="font-bold text-yellow-600">Nội dung tiêu biểu</p>
                <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
                  Các bài học trong Kỹ năng sống 1
                </h2>
              </div>

              <p className="max-w-xl text-slate-500">
                Mỗi bài học tập trung vào một kỹ năng cụ thể, giúp học sinh rèn
                luyện qua hoạt động, trò chơi và tình huống thực tế.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {lessons.map((lesson, index) => (
                <Link
                  key={lesson.title}
                  href={lesson.href}
                  className="group overflow-hidden rounded-[32px] border
             border-yellow-100 bg-white
             shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all
             duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={lesson.image}
                      alt={lesson.title}
                      fill
                      className="object-contain object-center transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-xl font-black text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-black text-slate-900">
                      {lesson.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-500">
                      {lesson.description}
                    </p>

                    {/* goals */}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
