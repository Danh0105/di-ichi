// src/app/page/activities/cyber-security/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  ShieldCheck,
  Users,
  MessageCircle,
  BookOpenCheck,
  UserPen,
} from "lucide-react";

import R1 from "../statics/r1.png";
import R11 from "./statics/r11.png";
import R12 from "./statics/r12.png";
import R13 from "./statics/r13.png";
import R14 from "./statics/r14.png";
const highlights = [
  {
    icon: ShieldCheck,
    title: "Nhận diện nguy cơ",
    desc: "Giúp giáo viên hiểu rõ các rủi ro thường gặp trên môi trường số.",
  },
  {
    icon: BookOpenCheck,
    title: "Tình huống thực tế",
    desc: "Lồng ghép ví dụ gần gũi trong quá trình dạy học và quản lý dữ liệu.",
  },
  {
    icon: Users,
    title: "Thảo luận nhóm",
    desc: "Tăng cường trao đổi kinh nghiệm, cùng xây dựng môi trường số an toàn.",
  },
];

export default function CyberSecurityArticlePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={R1}
            alt="An toàn an ninh mạng"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-amber-400 transition">
              Trang chủ
            </Link>
            <ChevronRight size={16} />
            <Link
              href="/page/activities"
              className="hover:text-amber-400 transition"
            >
              Sự kiện hoạt động
            </Link>
            <ChevronRight size={16} />
            <span className="font-semibold text-white">
              An toàn – An ninh mạng
            </span>
          </div>

          <div className="mt-10 max-w-4xl">
            <span className="rounded-full border border-amber-400/30 bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
              ICHI SKILL EVENTS
            </span>

            <h1 className="mt-8 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Chuyên đề:
              <span className="block text-amber-400">
                An toàn – An ninh mạng dành cho giáo viên
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Trang bị kiến thức và kỹ năng bảo đảm an toàn trên không gian mạng
              cho đội ngũ nhà giáo trong bối cảnh chuyển đổi số.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* ARTICLE */}
          <article className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={R1}
                alt="Chuyên đề an toàn an ninh mạng"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur">
                  Sự kiện đào tạo
                </span>
                <h2 className="mt-5 text-2xl font-black uppercase leading-snug text-white md:text-4xl">
                  An toàn – An ninh mạng dành cho giáo viên
                </h2>
              </div>
            </div>

            <div className="p-7 md:p-10">
              <div className="mb-10 flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 font-semibold text-amber-700">
                  <CalendarDays size={17} />
                  Hoạt động ICHI
                </div>
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 font-semibold text-gray-700">
                  <UserPen size={17} />
                  Tác giả: Hoài Trang
                </div>
              </div>
              <div className="max-w-none text-gray-700">
                <p className="text-lg leading-9">
                  Trong bối cảnh chuyển đổi số ngày càng mạnh mẽ, việc trang bị
                  kiến thức và kỹ năng bảo đảm an toàn trên không gian mạng trở
                  thành yêu cầu thiết yếu đối với đội ngũ nhà giáo. Vừa qua,
                  ICHI tổ chức thành công chuyên đề “An toàn – An ninh mạng”,
                  thu hút sự tham gia nhiệt tình của quý thầy cô giáo.
                </p>

                {/* ẢNH 1 */}
                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={R11}
                    alt="Hoạt động chuyên đề"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Giáo viên tham gia chuyên đề An toàn – An ninh mạng.
                </p>

                <h2 className="mt-12 text-3xl font-black text-gray-900">
                  Hào Hứng Trong Từng Hoạt Động
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Không khí chương trình diễn ra sôi nổi với nhiều nội dung thực
                  tiễn, giúp giáo viên nhận diện các nguy cơ trên môi trường số,
                  nâng cao ý thức bảo vệ dữ liệu cá nhân và vận dụng hiệu quả
                  các giải pháp an toàn khi sử dụng công nghệ trong dạy học.
                </p>

                {/* ẢNH GRID */}
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={R12}
                      alt="Hoạt động nhóm"
                      className="h-full w-full object-cover hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={R13}
                      alt="Thảo luận"
                      className="h-full w-full object-cover hover:scale-105 transition duration-700"
                    />
                  </div>
                </div>

                <p className="mt-8 text-lg leading-9">
                  Thông qua các tình huống thực tế, hoạt động thảo luận nhóm và
                  chia sẻ kinh nghiệm, quý thầy cô đã có cơ hội trao đổi, học
                  hỏi và cùng nhau xây dựng môi trường giáo dục số an toàn, lành
                  mạnh.
                </p>

                <h2 className="mt-12 text-3xl font-black text-gray-900">
                  Cùng Nhau Xây Dựng Văn Hóa Số
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Chuyên đề không chỉ mang đến kiến thức chuyên môn mà còn góp
                  phần nâng cao trách nhiệm của mỗi giáo viên trong việc định
                  hướng, giáo dục học sinh trở thành những công dân số văn minh,
                  có kỹ năng tự bảo vệ bản thân trên không gian mạng.
                </p>

                {/* ẢNH FULL WIDTH */}
                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={R14}
                    alt="Văn hóa số"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Chung tay xây dựng môi trường giáo dục số an toàn và trách
                  nhiệm.
                </p>

                <p className="mt-8 text-lg leading-9">
                  Những chia sẻ tích cực, sự tương tác hào hứng và tinh thần học
                  tập nghiêm túc của quý thầy cô chính là động lực để ICHI tiếp
                  tục đổi mới, mang đến nhiều chương trình ý nghĩa và thiết thực
                  hơn trong thời gian tới.
                </p>
              </div>

              <div className="mt-12 rounded-[28px] bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <p className="text-xl font-black leading-8 text-amber-400">
                  💙 ICHI – Đồng hành cùng nhà trường trên hành trình xây dựng
                  công dân số an toàn, trách nhiệm và sáng tạo.
                </p>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-[28px] border border-gray-100 bg-white p-7 shadow-sm">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Điểm nổi bật
              </span>

              <h3 className="mt-3 text-2xl font-black text-gray-900">
                Nội dung chương trình
              </h3>

              <div className="mt-7 space-y-5">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h4 className="font-black text-gray-900">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[28px] bg-amber-500 p-7 text-gray-950 shadow-lg">
              <MessageCircle size={36} />
              <h3 className="mt-5 text-2xl font-black">
                Lan tỏa văn hóa số an toàn
              </h3>
              <p className="mt-4 text-sm font-medium leading-7">
                ICHI tiếp tục đồng hành cùng nhà trường trong các chương trình
                giáo dục kỹ năng số thiết thực, gần gũi và hiệu quả.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
