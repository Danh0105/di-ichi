import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react";

import img1 from "./statics/13.jpg";

const goals = [
  "Tự tin, chủ động tìm hiểu và làm quen với môi trường mới",
  "Biết một số hành động để thích nghi với môi trường mới",
  "Mạnh dạn giao tiếp với thầy cô và bạn bè",
  "Biết giữ gìn vệ sinh, chuẩn bị đồ dùng học tập",
  "Hình thành thái độ thân thiện, vui vẻ và tự tin mỗi ngày",
];

const skills = [
  "Hòa nhập môi trường mới",
  "Diễn đạt điều tốt muốn nói",
  "Làm quen bạn mới",
  "Thể hiện là người bạn tốt",
  "Lễ phép trong gia đình",
  "Thể hiện tình yêu thương",
  "Vệ sinh cá nhân",
  "Tự chuẩn bị đồ dùng học tập",
  "Giữ gìn vệ sinh chung",
  "Bảo vệ cây xanh",
  "Ứng xử khi tiếp xúc với người lạ",
  "Ứng xử khi bị lạc",
  "Phòng tránh xâm hại tình dục",
];

export default function Kns1Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf0]">
      <section className="relative px-6 py-20">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/page/courses/kns/th"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white px-5 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-yellow-400 hover:text-yellow-600"
          >
            <ArrowLeft size={16} />
            Quay lại khối tiểu học
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white/80 px-5 py-2 text-sm font-bold text-yellow-700 shadow-sm backdrop-blur">
                <Sparkles size={16} />
                Kỹ năng sống khối 1
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Em Hòa Nhập{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Môi Trường Mới
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Cuộc sống đa dạng, không ngừng biến đổi và có nhiều thách thức
                buộc các em phải thích nghi. Kỹ năng sống được xem là chìa khóa
                quan trọng giúp các em tự tin hơn trong giao tiếp, thân thiện
                trong học tập và vui sống mỗi ngày bên gia đình thân yêu.
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

            <div className="relative overflow-hidden rounded-[40px] bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
              <div className="relative h-[584px] overflow-hidden rounded-[32px]">
                <Image
                  src={img1}
                  alt="Em Hòa Nhập Môi Trường Mới"
                  fill
                  priority
                  className="object-contrain object-center transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-0 p-8 text-white">
                  <p className="text-sm font-bold uppercase tracking-wider text-yellow-300">
                    Bài học tiêu biểu
                  </p>

                  <h2 className="mt-3 text-3xl font-black">
                    Tự tin làm quen, thích nghi và trưởng thành
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-20 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[36px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                <ShieldCheck size={28} />
              </div>

              <h2 className="text-3xl font-black text-slate-900">
                Nội dung chương trình
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Chương trình kỹ năng sống khối 1 của Ichi trang bị cho học sinh
                nhiều kỹ năng nền tảng, giúp các em hiểu hơn về bản thân, có sự
                tự tin, biết rèn luyện để hoàn thiện và phát triển bản thân.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-yellow-50 px-4 py-2 text-sm font-bold text-yellow-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[36px] bg-gradient-to-br from-yellow-400 to-orange-500 p-8 text-white shadow-[0_20px_60px_rgba(234,179,8,0.25)]">
              <p className="text-sm font-bold uppercase tracking-wider text-white/80">
                Mục tiêu bài học
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Hòa nhập môi trường mới
              </h2>

              <p className="mt-5 leading-8 text-white/90">
                Đây là một trong những bài học quan trọng trong chương trình
                giáo dục kỹ năng sống Ichi, giúp học sinh biết cách thích nghi,
                làm quen và tự tin hơn khi bước vào môi trường học tập mới.
              </p>

              <div className="mt-7 space-y-4">
                {goals.map((goal) => (
                  <div key={goal} className="flex gap-3">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-white"
                      size={20}
                    />
                    <span className="leading-7 text-white/95">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20 rounded-[40px] bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.1)] md:p-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-bold text-yellow-600">Thông điệp bài học</p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                “Tự tin hòa nhập hôm nay, vững vàng trưởng thành ngày mai.”
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Những tiết học kỹ năng sống kết hợp bài giảng điện tử mang đến
                cho các em những cảm xúc mới mẻ, kiến thức gần gũi và các hoạt
                động thực hành giúp các em biết vận dụng kỹ năng vào học tập
                cũng như cuộc sống hằng ngày.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
