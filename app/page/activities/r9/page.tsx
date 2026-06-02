// src/app/page/activities/drowning-prevention/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  ShieldCheck,
  LifeBuoy,
  HeartPulse,
  Users,
  BookOpenCheck,
  UserPen,
  Sparkles,
} from "lucide-react";

import P1 from "./statics/r91.png";
import P2 from "./statics/r92.png";
import P3 from "./statics/r93.png";
import P4 from "./statics/r94.png";
import P5 from "./statics/r95.png";
import P6 from "./statics/r96.png";

const highlights = [
  {
    icon: LifeBuoy,
    title: "Mặc áo phao đúng cách",
    desc: "Giúp học sinh biết cách sử dụng áo phao an toàn khi tham gia hoạt động dưới nước.",
  },
  {
    icon: HeartPulse,
    title: "Sơ cứu khẩn cấp",
    desc: "Thực hành hô hấp nhân tạo và sơ cứu người bị đuối nước trong tình huống nguy hiểm.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo vệ bản thân",
    desc: "Trang bị nhận thức và kỹ năng xử lý khi gặp nguy cơ đuối nước.",
  },
];

export default function DrowningPreventionPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={P1}
            alt="Kỹ năng phòng tránh đuối nước cho học sinh"
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
              Phòng tránh đuối nước
            </span>
          </div>

          <div className="mt-10 max-w-4xl">
            <span className="rounded-full border border-amber-400/30 bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
              ICHI SKILL EVENTS
            </span>

            <h1 className="mt-8 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Trang bị kỹ năng
              <span className="block text-amber-400">
                Phòng tránh đuối nước cho học sinh
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Chương trình giúp học sinh nâng cao nhận thức, thực hành kỹ năng
              sơ cứu và biết cách bảo vệ bản thân trước nguy cơ đuối nước trong
              dịp hè.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <article className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={P1}
                alt="Trang bị kỹ năng phòng tránh đuối nước"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur">
                  Kỹ năng sống
                </span>

                <h2 className="mt-5 text-2xl font-black uppercase leading-snug text-white md:text-4xl">
                  Kỹ năng phòng tránh đuối nước cho học sinh
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
                  Nhằm nâng cao nhận thức và kỹ năng bảo vệ bản thân trước những
                  nguy cơ đuối nước trong dịp hè, ICHI đã phối hợp và tổ chức
                  chương trình tuyên truyền và thực hành kỹ năng phòng tránh
                  đuối nước dành cho các em học sinh trên địa bàn tỉnh Tây Ninh.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={P2}
                    alt="Học sinh tham gia chương trình phòng tránh đuối nước"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Chương trình giúp học sinh nâng cao nhận thức về an toàn dưới
                  nước.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Học Đi Đôi Với Hành
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Không chỉ được tiếp cận những kiến thức cơ bản về phòng tránh
                  đuối nước, các em học sinh còn được trực tiếp tham gia thực
                  hành các kỹ năng quan trọng như hô hấp nhân tạo, sơ cứu người
                  bị đuối nước và mặc áo phao đúng cách.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Thông qua các hoạt động trải nghiệm thực tế, các em hiểu rõ
                  hơn về cách xử lý tình huống khẩn cấp cũng như biết cách bảo
                  vệ bản thân khi tham gia các hoạt động vui chơi dưới nước.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src={P3}
                      alt="Thực hành hô hấp nhân tạo"
                      className="h-[340px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src={P4}
                      alt="Thực hành mặc áo phao đúng cách"
                      className="h-[340px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Học sinh trực tiếp thực hành các kỹ năng sơ cứu và sử dụng áo
                  phao an toàn.
                </p>

                <div className="my-12 rounded-r-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
                  <p className="text-xl font-semibold leading-8 text-slate-800">
                    Mỗi kỹ năng được học hôm nay chính là một cơ hội để bảo vệ
                    sự sống ngày mai.
                  </p>
                </div>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Sôi Nổi Trong Từng Hoạt Động
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Không khí chương trình trở nên hào hứng hơn khi các em được
                  trực tiếp thao tác trên mô hình, tham gia trả lời câu hỏi và
                  thực hành dưới sự hướng dẫn của báo cáo viên.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Sự chủ động, tích cực và tinh thần học hỏi của các em đã góp
                  phần tạo nên một buổi học ý nghĩa, giúp những kiến thức an
                  toàn trở nên dễ nhớ và gần gũi hơn.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src={P5}
                      alt="Học sinh trả lời câu hỏi trong chương trình"
                      className="h-[340px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src={P6}
                      alt="Hoạt động thực hành phòng tránh đuối nước"
                      className="h-[340px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Các hoạt động tương tác giúp kiến thức an toàn trở nên gần gũi
                  và dễ ghi nhớ hơn.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Lan Tỏa Giá Trị Kỹ Năng Sống
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Mỗi kỹ năng được trang bị không chỉ giúp các em bảo vệ bản
                  thân mà còn có thể hỗ trợ người khác trong những tình huống
                  nguy hiểm. Đây cũng là mục tiêu mà ICHI luôn hướng đến trong
                  các chương trình giáo dục kỹ năng sống dành cho học sinh.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Việc trang bị kỹ năng phòng tránh đuối nước từ sớm sẽ góp phần
                  xây dựng môi trường học tập và sinh hoạt an toàn hơn cho trẻ
                  em, đặc biệt trong thời gian nghỉ hè.
                </p>
              </div>

              <div className="mt-12 rounded-[28px] bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <p className="text-xl font-black leading-8 text-amber-400">
                  “Mỗi kỹ năng được học hôm nay chính là một cơ hội để bảo vệ sự
                  sống ngày mai”.
                </p>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-gray-100 bg-white p-7 shadow-sm">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Điểm nổi bật
              </span>

              <h3 className="mt-3 text-2xl font-black text-gray-900">
                Kỹ năng được trang bị
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
              <BookOpenCheck size={36} />

              <h3 className="mt-5 text-2xl font-black">An toàn mùa hè</h3>

              <p className="mt-4 text-sm font-medium leading-7">
                ICHI đồng hành cùng nhà trường trong việc trang bị kỹ năng sống,
                giúp học sinh biết tự bảo vệ bản thân và hỗ trợ người khác khi
                cần thiết.
              </p>
            </div>

            <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-7">
              <Sparkles size={34} className="text-amber-600" />

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Thông điệp
              </h3>

              <p className="mt-4 text-sm font-semibold leading-7 text-gray-700">
                Chủ động học kỹ năng an toàn là cách tốt nhất để bảo vệ bản thân
                trong những tình huống nguy hiểm.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
