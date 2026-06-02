// src/app/page/activities/digital-education-day/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  Cpu,
  Bot,
  MonitorSmartphone,
  Users,
  BookOpenCheck,
  UserPen,
  Sparkles,
} from "lucide-react";

import D1 from "./statics/r51.png";
import D2 from "./statics/r52.png";
import D3 from "./statics/r53.png";
import D4 from "./statics/r54.png";
import D5 from "./statics/r55.png";

const highlights = [
  {
    icon: MonitorSmartphone,
    title: "Smart Canteen",
    desc: "Học sinh trải nghiệm mua hàng qua màn hình cảm ứng và thanh toán số.",
  },
  {
    icon: Bot,
    title: "STEM & AI",
    desc: "Khơi dậy niềm yêu thích khoa học, công nghệ và tư duy sáng tạo.",
  },
  {
    icon: Cpu,
    title: "Công dân số",
    desc: "Giúp học sinh làm quen với kỹ năng số trong thời đại chuyển đổi số.",
  },
];

export default function DigitalEducationDayPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={D1}
            alt="Ngày hội chuyển động số giáo dục"
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
              Chuyển động số Giáo dục
            </span>
          </div>

          <div className="mt-10 max-w-4xl">
            <span className="rounded-full border border-amber-400/30 bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
              ICHI SKILL EVENTS
            </span>

            <h1 className="mt-8 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              ICHI Skill đồng hành cùng ngày hội
              <span className="block text-amber-400">
                “Chuyển động số Giáo dục” năm 2026
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Không gian trải nghiệm công nghệ sôi động, giúp học sinh tiếp cận
              Smart Canteen, STEM, AI và những kỹ năng của công dân số tương
              lai.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <article className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={D1}
                alt="ICHI Skill chuyển động số giáo dục"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur">
                  Công nghệ giáo dục
                </span>

                <h2 className="mt-5 text-2xl font-black uppercase leading-snug text-white md:text-4xl">
                  Ngày hội “Chuyển động số Giáo dục” năm 2026
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
                  Vừa qua, ICHI vinh dự tổ chức chương trình “Ngày hội Vận hành
                  Công nghệ - Chuyển động số Giáo dục năm 2026”. Sự kiện đã thu
                  hút sự tham gia của các cấp lãnh đạo, quý thầy cô, quý phụ
                  huynh cùng đông đảo các em học sinh trên địa bàn, tạo nên một
                  không gian trải nghiệm công nghệ sôi động và đầy cảm hứng.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={D2}
                    alt="Không gian ngày hội chuyển động số giáo dục"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Ngày hội mang đến không gian trải nghiệm công nghệ hiện đại và
                  gần gũi với học sinh.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Trải Nghiệm Căn Tin Thông Minh – Smart Canteen
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Một trong những điểm nhấn nổi bật của ngày hội là mô hình “Căn
                  tin thông minh - Smart Canteen”. Tại đây, các em học sinh được
                  trực tiếp trải nghiệm quy trình mua hàng hiện đại thông qua
                  màn hình cảm ứng tương tác và hình thức thanh toán số.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Hoạt động không chỉ mang đến trải nghiệm mới lạ mà còn giúp
                  học sinh từng bước làm quen với các ứng dụng công nghệ trong
                  cuộc sống hằng ngày, hình thành tư duy và kỹ năng của công dân
                  số trong thời đại mới.
                </p>

                <div className="my-12 rounded-r-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
                  <p className="text-xl font-semibold leading-8 text-slate-800">
                    Công nghệ trở nên gần gũi hơn khi học sinh được trực tiếp
                    quan sát, trải nghiệm và ứng dụng vào đời sống hằng ngày.
                  </p>
                </div>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Khơi Dậy Đam Mê Khoa Học Cùng STEM Và AI
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Không gian STEM và Trí tuệ nhân tạo AI đã thu hút sự quan tâm
                  đặc biệt của các em học sinh. Những mô hình trực quan, robot
                  thông minh và các thiết bị công nghệ hiện đại đã mang đến cơ
                  hội khám phá thế giới khoa học theo cách sinh động và gần gũi.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={D3}
                      alt="Trải nghiệm STEM"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={D4}
                      alt="Trải nghiệm AI và robot"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <p className="mt-8 text-lg leading-9">
                  Đội ngũ ICHI luôn đồng hành, hướng dẫn và hỗ trợ các em trong
                  từng hoạt động trải nghiệm, góp phần khơi gợi niềm yêu thích
                  công nghệ, tư duy sáng tạo và tinh thần khám phá tri thức.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Kiến Tạo Thế Hệ Công Dân Số Tương Lai
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Mỗi trải nghiệm tại ngày hội không chỉ đơn thuần là hoạt động
                  khám phá công nghệ mà còn là cơ hội để học sinh tiếp cận với
                  những xu hướng giáo dục hiện đại, phát triển năng lực số và kỹ
                  năng thích ứng trong thời đại chuyển đổi số.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Những ánh mắt hào hứng, những nụ cười rạng rỡ của các em học
                  sinh chính là động lực để ICHI tiếp tục đổi mới, sáng tạo và
                  mang đến nhiều chương trình giáo dục ý nghĩa hơn nữa trong
                  tương lai.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={D5}
                    alt="Học sinh trải nghiệm công nghệ"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Những trải nghiệm công nghệ góp phần hình thành tư duy công
                  dân số cho học sinh.
                </p>

                <p className="mt-8 text-lg leading-9">
                  ICHI tự hào góp phần lan tỏa tinh thần chuyển đổi số trong
                  giáo dục, đồng hành cùng nhà trường và địa phương trên hành
                  trình kiến tạo thế hệ công dân số toàn diện, sáng tạo và bản
                  lĩnh.
                </p>
              </div>

              <div className="mt-12 rounded-[28px] bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <p className="text-xl font-black leading-8 text-amber-400">
                  ICHI Skill – Đồng hành cùng nhà trường trên hành trình chuyển
                  đổi số giáo dục và kiến tạo thế hệ công dân số tương lai.
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
                Trải nghiệm tại ngày hội
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
              <h3 className="mt-5 text-2xl font-black">
                Chuyển đổi số giáo dục
              </h3>
              <p className="mt-4 text-sm font-medium leading-7">
                ICHI đồng hành cùng nhà trường và địa phương trong việc ứng dụng
                công nghệ, phát triển kỹ năng số và lan tỏa tinh thần đổi mới
                sáng tạo trong giáo dục.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
