// src/app/page/activities/gratitude/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  HeartHandshake,
  Users,
  MessageCircleHeart,
  BookOpenCheck,
  UserPen,
  Sparkles,
} from "lucide-react";

import G1 from "./statics/r21.png";
import G2 from "./statics/r22.png";
import G3 from "./statics/r23.png";
import G4 from "./statics/r24.png";
import G5 from "./statics/r25.png";

const highlights = [
  {
    icon: HeartHandshake,
    title: "Biết ơn gia đình",
    desc: "Giúp học sinh cảm nhận sâu sắc tình yêu thương và sự hy sinh của cha mẹ.",
  },
  {
    icon: MessageCircleHeart,
    title: "Bày tỏ cảm xúc",
    desc: "Khuyến khích các em nói lời cảm ơn, lời xin lỗi bằng sự chân thành.",
  },
  {
    icon: Sparkles,
    title: "Gieo giá trị sống",
    desc: "Bồi dưỡng lòng yêu thương, trách nhiệm và nhân cách tích cực.",
  },
];

export default function GratitudeArticlePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={G1}
            alt="Chuyên đề giá trị của lòng biết ơn"
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
              Giá trị của lòng biết ơn
            </span>
          </div>

          <div className="mt-10 max-w-4xl">
            <span className="rounded-full border border-amber-400/30 bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
              ICHI SKILL EVENTS
            </span>

            <h1 className="mt-8 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Chuyên đề:
              <span className="block text-amber-400">
                Giá trị của lòng biết ơn
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Hành trình giúp học sinh cảm nhận tình yêu thương của gia đình,
              biết trân trọng những điều bình dị và thể hiện lòng biết ơn bằng
              hành động mỗi ngày.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <article className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={G1}
                alt="Chuyên đề giá trị của lòng biết ơn"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur">
                  Kỹ năng sống
                </span>

                <h2 className="mt-5 text-2xl font-black uppercase leading-snug text-white md:text-4xl">
                  Giá trị của lòng biết ơn
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
                  Vừa qua, nhà trường đã phối hợp cùng ICHI tổ chức thành công
                  chuyên đề “Giá trị của lòng biết ơn”, mang đến nhiều cảm xúc
                  lắng đọng và những bài học ý nghĩa cho các em học sinh, quý
                  phụ huynh và quý thầy cô giáo.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Chuyên đề không chỉ là một buổi học kỹ năng sống mà còn là
                  hành trình giúp các em nhìn lại bản thân, cảm nhận sâu sắc hơn
                  tình yêu thương của gia đình và những người luôn âm thầm đồng
                  hành trên chặng đường trưởng thành.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={G2}
                    alt="Học sinh tham gia chuyên đề lòng biết ơn"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Chuyên đề mang đến nhiều cảm xúc lắng đọng cho học sinh.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Chạm Đến Những Cảm Xúc Chân Thành
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Thông qua những câu chuyện giàu cảm xúc về tình cảm gia đình,
                  các em học sinh đã có cơ hội lắng nghe, suy ngẫm và nhìn nhận
                  lại những hành động, lời nói của mình đối với cha mẹ, ông bà
                  và thầy cô.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Nhiều ánh mắt xúc động, nhiều giọt nước mắt đã rơi khi các em
                  nhận ra những hy sinh thầm lặng, sự yêu thương vô điều kiện mà
                  gia đình luôn dành cho mình.
                </p>

                <div className="my-12 rounded-r-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
                  <p className="text-xl font-semibold leading-8 text-slate-800">
                    Lòng biết ơn không chỉ là lời nói mà còn cần được thể hiện
                    bằng hành động mỗi ngày.
                  </p>
                </div>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Thấu Hiểu Tình Yêu Thương Của Gia Đình
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Chuyên đề đã giúp các em cảm nhận sâu sắc hơn về tình yêu
                  thương, sự bao dung và những hy sinh âm thầm của cha mẹ. Từ
                  những điều bình dị trong cuộc sống hằng ngày đến những sự quan
                  tâm lặng lẽ, tất cả đều là minh chứng cho tình yêu vô bờ mà
                  gia đình dành cho con cái.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={G3}
                      alt="Hoạt động chia sẻ về gia đình"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={G4}
                      alt="Khoảnh khắc xúc động trong chương trình"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <p className="mt-8 text-lg leading-9">
                  Qua đó, các em được khuyến khích biết trân trọng những điều
                  mình đang có, sống có trách nhiệm hơn với bản thân và những
                  người xung quanh.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Học Cách Thể Hiện Lòng Biết Ơn
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Không chỉ dừng lại ở việc cảm nhận, chương trình còn giúp học
                  sinh hiểu rằng lòng biết ơn cần được thể hiện bằng những việc
                  làm cụ thể như biết vâng lời cha mẹ, kính trọng thầy cô, yêu
                  thương ông bà và giúp đỡ bạn bè.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Những bài học ý nghĩa này góp phần hình thành ở các em những
                  giá trị sống tích cực, biết yêu thương, sẻ chia và sống có
                  trách nhiệm hơn trong cuộc sống.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Khoảnh Khắc Yêu Thương Được Lan Tỏa
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Một trong những khoảnh khắc xúc động nhất của chương trình là
                  khi các em mạnh dạn bước lên sân khấu để bày tỏ tình cảm với
                  ông bà, cha mẹ và thầy cô. Những cái ôm thật chặt, những lời
                  cảm ơn, lời xin lỗi chân thành đã khiến không khí chương trình
                  trở nên lắng đọng và đầy cảm xúc.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={G5}
                    alt="Khoảnh khắc yêu thương được lan tỏa"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Những cái ôm, lời cảm ơn và lời xin lỗi chân thành được trao
                  đi.
                </p>

                <p className="mt-8 text-lg leading-9">
                  Đó không chỉ là những giây phút đáng nhớ mà còn là những bài
                  học sâu sắc về tình yêu thương, sự trân trọng và lòng biết ơn
                  trong cuộc sống.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Gieo Mầm Những Giá Trị Tốt Đẹp
                </h2>

                <p className="mt-6 text-lg leading-9">
                  ICHI tin rằng giáo dục kỹ năng sống không chỉ giúp học sinh
                  phát triển năng lực mà còn góp phần bồi dưỡng tâm hồn, nhân
                  cách và những giá trị sống tích cực.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Mỗi lời cảm ơn được nói ra, mỗi hành động yêu thương được trao
                  đi hôm nay sẽ trở thành những hạt giống tốt đẹp, giúp các em
                  trưởng thành hơn trên hành trình phía trước.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Hy vọng rằng những cảm xúc và bài học từ chuyên đề sẽ tiếp tục
                  được lan tỏa, giúp mỗi học sinh biết yêu thương nhiều hơn,
                  sống trách nhiệm hơn và luôn trân trọng những người đã yêu
                  thương mình.
                </p>
              </div>

              <div className="mt-12 rounded-[28px] bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <p className="text-xl font-black leading-8 text-amber-400">
                  “Lòng biết ơn là ký ức của trái tim” – Hãy để yêu thương được
                  bắt đầu từ những điều giản dị nhất.
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
              <h3 className="mt-5 text-2xl font-black">
                Nuôi dưỡng lòng biết ơn
              </h3>
              <p className="mt-4 text-sm font-medium leading-7">
                ICHI đồng hành cùng nhà trường trong việc giáo dục kỹ năng sống,
                bồi dưỡng tâm hồn và lan tỏa những giá trị nhân văn đến học
                sinh.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
