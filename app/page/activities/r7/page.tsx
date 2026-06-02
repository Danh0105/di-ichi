// src/app/page/activities/stem-kindergarten/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  Bot,
  Cpu,
  Palette,
  Users,
  BookOpenCheck,
  UserPen,
  Sparkles,
} from "lucide-react";

import S1 from "./statics/r71.png";
import S2 from "./statics/r72.png";
import S3 from "./statics/r73.png";
import S4 from "./statics/r74.png";
import S5 from "./statics/r75.png";
import S6 from "./statics/r76.png";

const highlights = [
  {
    icon: Cpu,
    title: "Khám phá STEM",
    desc: "Giúp trẻ tiếp cận khoa học qua các hoạt động gần gũi, sinh động.",
  },
  {
    icon: Bot,
    title: "Robot Rio",
    desc: "Mang đến trải nghiệm công nghệ mới mẻ, vui nhộn và hấp dẫn.",
  },
  {
    icon: Palette,
    title: "Sáng tạo thực hành",
    desc: "Rèn luyện sự khéo léo, tư duy sáng tạo và khả năng làm việc nhóm.",
  },
];

export default function StemKindergartenPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={S1}
            alt="Ngày hội STEM tại trường mầm non"
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
                Khơi dậy niềm đam mê khám phá tại trường mầm non
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Một sân chơi khoa học đầy màu sắc, sáng tạo và bổ ích, giúp các em
              nhỏ tiếp cận STEM qua trải nghiệm gần gũi, vui nhộn và giàu cảm
              hứng.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <article className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={S1}
                alt="Ngày hội STEM mầm non"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur">
                  STEM mầm non
                </span>

                <h2 className="mt-5 text-2xl font-black uppercase leading-snug text-white md:text-4xl">
                  Ngày hội STEM – Khơi dậy niềm đam mê khám phá
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
                  Vừa qua, Công ty ICHI đã phối hợp cùng Ban Giám hiệu Trường tổ
                  chức thành công Ngày hội STEM với nhiều hoạt động trải nghiệm
                  thú vị, mang đến cho các em nhỏ một sân chơi khoa học đầy màu
                  sắc, sáng tạo và bổ ích.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={S2}
                    alt="Không khí ngày hội STEM"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Ngày hội STEM mang đến sân chơi khoa học đầy màu sắc cho các
                  em nhỏ.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Khám Phá Thế Giới STEM Đầy Màu Sắc
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Ngay từ những giờ đầu của chương trình, không khí tại sân
                  trường đã trở nên sôi động với sự tham gia hào hứng của các em
                  học sinh, quý phụ huynh và tập thể giáo viên nhà trường.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Thông qua các hoạt động trải nghiệm STEM, các em được tiếp cận
                  với những kiến thức khoa học đơn giản, gần gũi và phù hợp với
                  lứa tuổi. Mỗi hoạt động đều được thiết kế theo hướng vừa học
                  vừa chơi, giúp các em phát triển khả năng quan sát, khám phá
                  và tư duy sáng tạo.
                </p>

                <div className="my-12 rounded-r-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
                  <p className="text-xl font-semibold leading-8 text-slate-800">
                    STEM trở nên gần gũi hơn khi trẻ được chạm, thử, chơi và tự
                    mình khám phá thế giới xung quanh.
                  </p>
                </div>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Hào Hứng Trải Nghiệm Công Nghệ Robot
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Một trong những điểm nhấn đặc biệt của ngày hội chính là sự
                  xuất hiện của robot Rio thông minh. Những màn tương tác vui
                  nhộn và hấp dẫn từ robot đã thu hút sự chú ý của các em nhỏ,
                  mang đến những trải nghiệm mới mẻ về thế giới công nghệ.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Thông qua hoạt động này, các em có cơ hội bước đầu làm quen
                  với khoa học công nghệ hiện đại, từ đó khơi dậy niềm yêu thích
                  học hỏi và khám phá những điều mới lạ xung quanh.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={S3}
                      alt="Trẻ trải nghiệm robot Rio"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={S4}
                      alt="Hoạt động tương tác với robot"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Thỏa Sức Sáng Tạo Cùng Các Gian Hàng STEM
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Bên cạnh các hoạt động công nghệ, các gian hàng STEM thực hành
                  cũng nhận được sự hưởng ứng tích cực từ các em học sinh. Tại
                  đây, các em được trực tiếp tham gia tạo ra những sản phẩm nhỏ
                  xinh bằng chính đôi tay của mình.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Những trải nghiệm thực tế không chỉ giúp các em rèn luyện sự
                  khéo léo mà còn góp phần phát triển kỹ năng tư duy, làm việc
                  nhóm và khả năng giải quyết vấn đề ngay từ lứa tuổi mầm non.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={S5}
                    alt="Gian hàng STEM thực hành"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Các gian hàng thực hành giúp trẻ thỏa sức sáng tạo bằng đôi
                  tay của mình.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Lan Tỏa Niềm Vui Cùng Gấu ICHI
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Ngày hội càng thêm sôi động với sự xuất hiện của Gấu ICHI đáng
                  yêu. Những trò chơi hoạt náo, những điệu nhảy vui nhộn cùng
                  các hoạt động giao lưu đã mang đến bầu không khí ngập tràn
                  tiếng cười, giúp các em có thêm nhiều khoảnh khắc đáng nhớ bên
                  thầy cô và bạn bè.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={S6}
                    alt="Gấu ICHI giao lưu cùng học sinh"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Gấu ICHI mang đến không khí vui tươi, gần gũi và nhiều tiếng
                  cười.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Ươm Mầm Đam Mê Khoa Học Từ Những Bước Đầu Tiên
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Ngày hội STEM không chỉ là một hoạt động trải nghiệm mà còn là
                  cơ hội để các em nhỏ tiếp cận khoa học công nghệ theo cách gần
                  gũi và sinh động nhất. Thông qua những hoạt động thực hành và
                  khám phá, các em được nuôi dưỡng niềm yêu thích học tập, khả
                  năng sáng tạo và sự tự tin trong quá trình phát triển.
                </p>
              </div>

              <div className="mt-12 rounded-[28px] bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <p className="text-xl font-black leading-8 text-amber-400">
                  💙 Những nụ cười rạng rỡ và sự hào hứng của các em chính là
                  động lực để ICHI tiếp tục mang đến nhiều chương trình STEM ý
                  nghĩa cho trẻ em Việt Nam.
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
              <h3 className="mt-5 text-2xl font-black">Ươm mầm sáng tạo</h3>
              <p className="mt-4 text-sm font-medium leading-7">
                ICHI đồng hành cùng nhà trường mang đến môi trường học tập hiện
                đại, sáng tạo và đầy cảm hứng cho trẻ em Việt Nam.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
