// src/app/page/activities/stem-creative/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  Cpu,
  Lightbulb,
  Users,
  BookOpenCheck,
  UserPen,
  Sparkles,
} from "lucide-react";

import ST1 from "./statics/r81.png";
import ST2 from "./statics/r82.png";
import ST3 from "./statics/r83.png";
import ST4 from "./statics/r84.png";
import ST5 from "./statics/r85.png";
import ST6 from "./statics/r86.png";
import ST7 from "./statics/r87.png";
import ST8 from "./statics/r88.png";

const highlights = [
  {
    icon: Cpu,
    title: "Khám phá STEM",
    desc: "Tiếp cận khoa học, công nghệ, kỹ thuật và toán học qua trải nghiệm.",
  },
  {
    icon: Lightbulb,
    title: "Tư duy sáng tạo",
    desc: "Khuyến khích học sinh tìm tòi, thử nghiệm và giải quyết vấn đề.",
  },
  {
    icon: Users,
    title: "Hợp tác nhóm",
    desc: "Rèn luyện kỹ năng giao tiếp và làm việc nhóm hiệu quả.",
  },
];

export default function StemCreativePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={ST1}
            alt="Ngày hội STEM khơi nguồn đam mê sáng tạo"
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

            <span className="font-semibold text-white">Ngày hội STEM</span>
          </div>

          <div className="mt-10 max-w-4xl">
            <span className="rounded-full border border-amber-400/30 bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
              ICHI SKILL EVENTS
            </span>

            <h1 className="mt-8 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Ngày hội STEM
              <span className="block text-amber-400">
                Khơi nguồn đam mê sáng tạo
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Không gian trải nghiệm khoa học, công nghệ, kỹ thuật và toán học
              giúp học sinh khám phá tri thức, phát triển tư duy sáng tạo và sẵn
              sàng thích ứng với tương lai.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <article className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={ST1}
                alt="Ngày hội STEM"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur">
                  STEM Education
                </span>

                <h2 className="mt-5 text-2xl font-black uppercase leading-snug text-white md:text-4xl">
                  Ngày hội STEM – Khơi nguồn đam mê sáng tạo
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
                  Vừa qua, Ngày hội STEM đã diễn ra trong không khí sôi nổi, hào
                  hứng với sự tham gia nhiệt tình của quý thầy cô và các em học
                  sinh.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Ngày hội không chỉ mang đến những hoạt động trải nghiệm thú vị
                  mà còn tạo cơ hội để học sinh được trực tiếp khám phá thế giới
                  khoa học, công nghệ, kỹ thuật và toán học thông qua các mô
                  hình thực hành, trò chơi sáng tạo và những thử thách hấp dẫn.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Khám Phá Tri Thức Qua Trải Nghiệm
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Tại ngày hội, các em học sinh được tự tay thực hiện các hoạt
                  động STEM, quan sát, tìm tòi và giải quyết vấn đề bằng tư duy
                  sáng tạo. Mỗi trải nghiệm đều mang đến những bài học bổ ích,
                  giúp các em thêm yêu thích việc học tập và khám phá thế giới
                  xung quanh.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src={ST2}
                      alt="Học sinh trải nghiệm STEM"
                      className="h-[340px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src={ST3}
                      alt="Hoạt động STEM sáng tạo"
                      className="h-[340px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Học sinh trực tiếp tham gia các hoạt động STEM và khám phá
                  khoa học qua trải nghiệm thực tế.
                </p>

                <div className="my-12 rounded-r-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
                  <p className="text-xl font-semibold leading-8 text-slate-800">
                    STEM giúp học sinh học thông qua trải nghiệm, khám phá và
                    sáng tạo thay vì chỉ tiếp nhận kiến thức một chiều.
                  </p>
                </div>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Lan Tỏa Tinh Thần Sáng Tạo
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Không khí ngày hội trở nên rộn ràng với những ý tưởng độc đáo,
                  những sản phẩm sáng tạo và tinh thần hợp tác tích cực của các
                  em học sinh. Đây không chỉ là sân chơi bổ ích mà còn là cơ hội
                  để các em phát triển tư duy, kỹ năng làm việc nhóm và khả năng
                  vận dụng kiến thức vào thực tiễn.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {[ST4, ST5, ST6].map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-[24px]">
                      <Image
                        src={img}
                        alt={`Hoạt động sáng tạo STEM ${index + 1}`}
                        className="h-[260px] w-full object-cover transition duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Những ý tưởng độc đáo và sản phẩm sáng tạo được hình thành từ
                  sự hợp tác và tư duy của học sinh.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Ươm Mầm Những Nhà Sáng Tạo Tương Lai
                </h2>

                <p className="mt-6 text-lg leading-9">
                  STEM không chỉ là khoa học và công nghệ mà còn là hành trình
                  khơi dậy niềm đam mê học hỏi, tinh thần khám phá và sự tự tin
                  trong mỗi học sinh. Những trải nghiệm hôm nay sẽ là nền tảng
                  để các em phát triển tư duy đổi mới và sẵn sàng thích ứng với
                  tương lai.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src={ST7}
                      alt="Ươm mầm nhà sáng tạo tương lai"
                      className="w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src={ST8}
                      alt="Học sinh khám phá STEM"
                      className="w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Những trải nghiệm STEM hôm nay là nền tảng cho các nhà sáng
                  tạo tương lai.
                </p>
              </div>

              <div className="mt-12 rounded-[28px] bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <p className="text-xl font-black leading-8 text-amber-400">
                  ICHI – Đồng hành cùng nhà trường trong hành trình khơi dậy đam
                  mê sáng tạo, nuôi dưỡng tư duy khoa học và phát triển thế hệ
                  học sinh tự tin trong tương lai.
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
                Giá trị chương trình
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

              <h3 className="mt-5 text-2xl font-black">Ươm mầm sáng tạo</h3>

              <p className="mt-4 text-sm font-medium leading-7">
                ICHI đồng hành cùng nhà trường mang đến môi trường học tập hiện
                đại, sáng tạo và giàu trải nghiệm cho học sinh Việt Nam.
              </p>
            </div>

            <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-7">
              <Sparkles size={34} className="text-amber-600" />

              <h3 className="mt-5 text-xl font-black text-gray-900">
                Thông điệp
              </h3>

              <p className="mt-4 text-sm font-semibold leading-7 text-gray-700">
                Khơi dậy đam mê khám phá hôm nay chính là gieo mầm cho những nhà
                sáng tạo tương lai.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
