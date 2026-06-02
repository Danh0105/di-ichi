// src/app/page/activities/awards-pickleball-mv-teachers/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  Trophy,
  Dumbbell,
  Users,
  Music,
  BookOpenCheck,
  UserPen,
  Sparkles,
} from "lucide-react";

import A1 from "./statics/r61.png";
import A2 from "./statics/r62.png";
import A3 from "./statics/r63.png";
import A4 from "./statics/r64.png";
import A5 from "./statics/r65.png";
import A6 from "./statics/r66.png";
import A7 from "./statics/r67.png";
import A8 from "./statics/r68.png";
import A9 from "./statics/r69.png";
import A10 from "./statics/r70.png";

const highlights = [
  {
    icon: Trophy,
    title: "Vinh danh thành tích",
    desc: "Ghi nhận những cá nhân, tập thể xuất sắc trong các hoạt động chào mừng 20/11.",
  },
  {
    icon: Dumbbell,
    title: "Tinh thần thể thao",
    desc: "Lan tỏa sự nhiệt huyết, gắn kết và tinh thần đồng đội qua giải Pickleball.",
  },
  {
    icon: Music,
    title: "Tri ân thầy cô",
    desc: "Tôn vinh nghề giáo thông qua MV, hình ảnh và những câu chuyện ý nghĩa.",
  },
];

export default function AwardsPickleballPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={A1}
            alt="Lễ trao giải Pickleball ICHI"
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
              Lễ trao giải Pickleball
            </span>
          </div>

          <div className="mt-10 max-w-4xl">
            <span className="rounded-full border border-amber-400/30 bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
              ICHI SKILL EVENTS
            </span>

            <h1 className="mt-8 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Khoảnh khắc vinh quang tại lễ trao giải
              <span className="block text-amber-400">
                Pickleball – MV “ICHI Gieo Hạt” – “Thầy Cô Trong Trái Tim Em”
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Lan tỏa tinh thần thể thao, sáng tạo và lòng tri ân sâu sắc nhân
              dịp kỷ niệm Ngày Nhà giáo Việt Nam.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <article className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={A1}
                alt="Khoảnh khắc vinh quang lễ trao giải"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur">
                  Chào mừng 20/11
                </span>

                <h2 className="mt-5 text-2xl font-black uppercase leading-snug text-white md:text-4xl">
                  Lễ trao giải Pickleball – MV ICHI Gieo Hạt – Thầy Cô Trong
                  Trái Tim Em
                </h2>
              </div>
            </div>

            <div className="p-7 md:p-10">
              <div className="mb-10 flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 font-semibold text-amber-700">
                  <CalendarDays size={17} />
                  20/11/2025
                </div>

                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 font-semibold text-gray-700">
                  <UserPen size={17} />
                  Tác giả: Hoài Trang
                </div>
              </div>

              <div className="max-w-none text-gray-700">
                <p className="text-lg leading-9">
                  🏆 Hòa trong không khí chào mừng kỷ niệm 43 năm Ngày Nhà giáo
                  Việt Nam 20/11/1982 – 20/11/2025, Công ty ICHI đã tổ chức
                  thành công Lễ trao giải Pickleball, cuộc thi văn nghệ MV “ICHI
                  Gieo Hạt” và cuộc thi ảnh trực tuyến “Thầy Cô Trong Trái Tim
                  Em”.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Chương trình không chỉ là dịp để tôn vinh những cá nhân, tập
                  thể xuất sắc mà còn là nơi lan tỏa tinh thần đoàn kết, sáng
                  tạo và lòng tri ân sâu sắc đối với nghề giáo.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={A2}
                    alt="Không khí lễ trao giải Pickleball"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Chương trình lan tỏa tinh thần đoàn kết, sáng tạo và tri ân
                  nghề giáo.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Thăng Hoa Cùng Tinh Thần Thể Thao
                </h2>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {[A2, A3, A4].map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-[24px]">
                      <Image
                        src={img}
                        alt=""
                        className="h-[260px] w-full object-cover transition duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-lg leading-9">
                  Giải đấu Pickleball đã diễn ra trong không khí sôi nổi với
                  những trận tranh tài hấp dẫn, những pha bóng đẹp mắt và tinh
                  thần thi đấu đầy nhiệt huyết của các vận động viên.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Thông qua giải đấu, các thành viên không chỉ có cơ hội rèn
                  luyện sức khỏe mà còn tăng cường sự gắn kết, giao lưu và xây
                  dựng tinh thần đồng đội, tạo nên những giá trị tích cực trong
                  môi trường làm việc và cuộc sống.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={A3}
                      alt="Giải đấu Pickleball ICHI"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={A4}
                      alt="Vận động viên thi đấu Pickleball"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="my-12 rounded-r-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
                  <p className="text-xl font-semibold leading-8 text-slate-800">
                    Mỗi giải thưởng là sự ghi nhận cho tinh thần nỗ lực, nhiệt
                    huyết và sự cống hiến của các cá nhân, tập thể.
                  </p>
                </div>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Tôn Vinh Những Nhà Vô Địch Xuất Sắc
                </h2>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src={A5}
                      alt=""
                      className="w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[28px]">
                    <Image
                      src={A6}
                      alt=""
                      className="w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                <p className="mt-6 text-lg leading-9">
                  Lễ trao giải là khoảnh khắc vinh danh những cá nhân và tập thể
                  đã đạt thành tích nổi bật ở các nội dung thi đấu Pickleball
                  gồm Đơn Nam, Đơn Nữ và Đôi Nam – Nữ.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Mỗi giải thưởng là sự ghi nhận xứng đáng cho những nỗ lực,
                  tinh thần quyết tâm và sự cống hiến hết mình của các vận động
                  viên trong suốt hành trình thi đấu.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Lan Tỏa Giá Trị Qua Những Tác Phẩm Ý Nghĩa
                </h2>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={A7}
                      alt=""
                      className="h-[420px] w-full object-cover"
                    />
                  </div>

                  <div className="md:col-span-2 overflow-hidden rounded-[24px]">
                    <Image
                      src={A8}
                      alt=""
                      className="h-[420px] w-full object-cover"
                    />
                  </div>
                </div>
                <p className="mt-6 text-lg leading-9">
                  Bên cạnh hoạt động thể thao, cuộc thi văn nghệ MV “ICHI Gieo
                  Hạt” và cuộc thi ảnh trực tuyến “Thầy Cô Trong Trái Tim Em” đã
                  mang đến nhiều cảm xúc đặc biệt.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Những tiết mục văn nghệ sáng tạo, những hình ảnh chân thực và
                  những câu chuyện đầy ý nghĩa đã góp phần lan tỏa thông điệp
                  tri ân thầy cô, tôn vinh những người đang ngày ngày gieo mầm
                  tri thức cho thế hệ tương lai.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={A5}
                    alt="Trao giải và vinh danh các tập thể xuất sắc"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Những tác phẩm ý nghĩa góp phần lan tỏa thông điệp tri ân thầy
                  cô.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Kết Nối – Tri Ân – Phát Triển
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Chương trình là dịp để các thành viên ICHI, quý đối tác, quý
                  khách mời và quý thầy cô cùng gặp gỡ, giao lưu và chia sẻ
                  những khoảnh khắc đáng nhớ.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Tinh thần đoàn kết, nhiệt huyết và sự đồng hành của tất cả mọi
                  người đã góp phần tạo nên thành công trọn vẹn cho chuỗi hoạt
                  động ý nghĩa lần này.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Cùng nhau tiếp tục gieo những hạt giống yêu thương, sáng tạo
                  và thành công trên hành trình phía trước.
                </p>
              </div>

              <div className="mt-12 rounded-[28px] bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <p className="text-xl font-black leading-8 text-amber-400">
                  ICHI – Kết nối tinh thần thể thao, lan tỏa sáng tạo và tri ân
                  những người gieo mầm tri thức.
                </p>
              </div>
            </div>
          </article>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[A9, A10, A1].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-[24px]">
                <Image
                  src={img}
                  alt=""
                  className="h-[280px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <aside className="space-y-6">
            <div className="rounded-[28px] border border-gray-100 bg-white p-7 shadow-sm">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Điểm nổi bật
              </span>

              <h3 className="mt-3 text-2xl font-black text-gray-900">
                Dấu ấn chương trình
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
              <Sparkles size={36} />
              <h3 className="mt-5 text-2xl font-black">Tri ân nghề giáo</h3>
              <p className="mt-4 text-sm font-medium leading-7">
                Chuỗi hoạt động góp phần lan tỏa lòng biết ơn, tinh thần đoàn
                kết và niềm tự hào đối với những người đang gieo mầm tri thức.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
