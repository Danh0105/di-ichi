// src/app/page/activities/friendship/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  HeartHandshake,
  ShieldCheck,
  Users,
  MessageCircleHeart,
  BookOpenCheck,
  UserPen,
  Sparkles,
} from "lucide-react";

import F1 from "./statics/r41.png";
import F2 from "./statics/r42.png";
import F3 from "./statics/r43.png";
import F4 from "./statics/r44.png";
import F5 from "./statics/r45.png";

const highlights = [
  {
    icon: HeartHandshake,
    title: "Tình bạn đẹp",
    desc: "Giúp học sinh hiểu giá trị của sự sẻ chia, thấu hiểu và đồng hành.",
  },
  {
    icon: ShieldCheck,
    title: "Phòng chống bạo lực",
    desc: "Nhận diện các hành vi tiêu cực và biết cách ứng xử an toàn, văn minh.",
  },
  {
    icon: Users,
    title: "Kỹ năng ứng xử",
    desc: "Rèn luyện lắng nghe, kiểm soát cảm xúc và giải quyết mâu thuẫn hòa bình.",
  },
];

export default function FriendshipArticlePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={F1}
            alt="Xây dựng tình bạn đẹp"
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
            <span className="font-semibold text-white">Tình bạn đẹp</span>
          </div>

          <div className="mt-10 max-w-4xl">
            <span className="rounded-full border border-amber-400/30 bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
              ICHI SKILL EVENTS
            </span>

            <h1 className="mt-8 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Chuyên đề:
              <span className="block text-amber-400">
                Xây dựng tình bạn đẹp – Phòng chống bạo lực học đường
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Góp phần xây dựng môi trường học đường an toàn, thân thiện và hạnh
              phúc thông qua những giá trị tích cực trong tình bạn và ứng xử văn
              minh.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <article className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={F1}
                alt="Chuyên đề xây dựng tình bạn đẹp"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur">
                  Kỹ năng sống
                </span>

                <h2 className="mt-5 text-2xl font-black uppercase leading-snug text-white md:text-4xl">
                  Xây dựng tình bạn đẹp – Phòng chống bạo lực học đường
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
                  Với mong muốn xây dựng môi trường học đường an toàn, thân
                  thiện và hạnh phúc, ICHI đã tổ chức chuyên đề “Xây dựng tình
                  bạn đẹp – Phòng chống bạo lực học đường”, mang đến cho các em
                  học sinh những kiến thức và kỹ năng thiết thực trong việc xây
                  dựng các mối quan hệ tích cực và ứng xử văn minh trong trường
                  học.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Mỗi lời nói tử tế, mỗi hành động sẻ chia đều góp phần tạo nên
                  một môi trường học tập tích cực, nơi các em được tôn trọng,
                  yêu thương và phát triển toàn diện.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={F2}
                    alt="Học sinh tham gia chuyên đề tình bạn đẹp"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Chuyên đề giúp học sinh lan tỏa tinh thần sẻ chia và tôn
                  trọng.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Khám Phá Giá Trị Của Tình Bạn Đẹp
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Thông qua chuyên đề, các em học sinh được tìm hiểu về ý nghĩa
                  của tình bạn chân thành, biết trân trọng những người bạn bên
                  cạnh mình và hiểu rằng tình bạn không chỉ là cùng học tập, vui
                  chơi mà còn là sự đồng hành, giúp đỡ và động viên nhau cùng
                  tiến bộ.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Những câu chuyện thực tế và hoạt động trải nghiệm đã giúp các
                  em nhận ra giá trị của sự sẻ chia, lòng thấu hiểu và tinh thần
                  đoàn kết trong cuộc sống học đường.
                </p>

                <div className="my-12 rounded-r-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
                  <p className="text-xl font-semibold leading-8 text-slate-800">
                    Mỗi lời nói tử tế đều có thể trở thành một món quà giúp bạn
                    bè cảm thấy được tôn trọng và yêu thương.
                  </p>
                </div>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Nhận Diện Và Phòng Chống Bạo Lực Học Đường
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Bạo lực học đường không chỉ là những hành vi xô xát hay gây
                  tổn thương về thể chất mà còn có thể bắt nguồn từ những lời
                  nói thiếu tôn trọng, sự trêu chọc hay cô lập bạn bè.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Thông qua các tình huống thực tế, học sinh được hướng dẫn cách
                  nhận diện những biểu hiện của bạo lực học đường, hiểu rõ hậu
                  quả của các hành vi tiêu cực và nâng cao ý thức xây dựng môi
                  trường học tập an toàn, văn minh.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={F3}
                      alt="Hoạt động nhóm phòng chống bạo lực học đường"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={F4}
                      alt="Học sinh thảo luận tình huống"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Trang Bị Những Kỹ Năng Thiết Thực
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Chuyên đề giúp các em rèn luyện nhiều kỹ năng quan trọng như
                  lắng nghe tích cực, kiểm soát cảm xúc, giải quyết mâu thuẫn
                  một cách hòa bình và biết tìm kiếm sự hỗ trợ từ thầy cô, gia
                  đình khi gặp khó khăn.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Những kỹ năng này không chỉ hữu ích trong môi trường học đường
                  mà còn là hành trang cần thiết cho sự phát triển của các em
                  trong tương lai.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Học Tập Thông Qua Trải Nghiệm
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Không khí chương trình trở nên sôi nổi với các trò chơi, hoạt
                  động nhóm và phần thảo luận tương tác. Các em được trực tiếp
                  tham gia xử lý tình huống, bày tỏ quan điểm và thực hành những
                  kỹ năng vừa được học.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Thông qua phương pháp học tập trải nghiệm, những thông điệp ý
                  nghĩa về tình bạn và ứng xử văn minh được truyền tải một cách
                  gần gũi, dễ hiểu và dễ ghi nhớ.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={F5}
                    alt="Hoạt động trải nghiệm xây dựng tình bạn đẹp"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Hoạt động trải nghiệm giúp thông điệp về tình bạn đẹp trở nên
                  gần gũi hơn.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Chung Tay Xây Dựng Trường Học Hạnh Phúc
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Mỗi học sinh đều có thể trở thành một nhân tố tích cực góp
                  phần xây dựng môi trường học đường an toàn và thân thiện. Khi
                  biết tôn trọng, lắng nghe và hỗ trợ lẫn nhau, các em sẽ cùng
                  nhau tạo nên những lớp học đoàn kết, nơi không có chỗ cho bạo
                  lực và sự tổn thương.
                </p>

                <p className="mt-6 text-lg leading-9">
                  ICHI tin rằng những giá trị tốt đẹp được gieo hôm nay sẽ trở
                  thành nền tảng để các em phát triển nhân cách, kỹ năng và tinh
                  thần trách nhiệm trong tương lai.
                </p>
              </div>

              <div className="mt-12 rounded-[28px] bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <p className="text-xl font-black leading-8 text-amber-400">
                  ✨ Hãy cùng lan tỏa thông điệp: "Tình bạn đẹp – Môi trường học
                  đường an toàn" để mỗi ngày đến trường thực sự là một ngày vui.
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
              <h3 className="mt-5 text-2xl font-black">Trường học hạnh phúc</h3>
              <p className="mt-4 text-sm font-medium leading-7">
                ICHI đồng hành cùng nhà trường xây dựng môi trường học đường an
                toàn, thân thiện, nơi mỗi học sinh được yêu thương và tôn trọng.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
