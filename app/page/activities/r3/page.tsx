// src/app/page/activities/gender-education/page.tsx

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
  HeartHandshake,
  Sparkles,
} from "lucide-react";

import GT1 from "./statics/r31.png";
import GT2 from "./statics/r32.png";
import GT3 from "./statics/r33.png";

const highlights = [
  {
    icon: BookOpenCheck,
    title: "Hiểu đúng tuổi dậy thì",
    desc: "Giúp học sinh nhận thức đúng về những thay đổi thể chất, tâm lý và cảm xúc.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo vệ bản thân",
    desc: "Trang bị kỹ năng nhận biết tình huống không an toàn và biết tìm kiếm hỗ trợ.",
  },
  {
    icon: HeartHandshake,
    title: "Ứng xử lành mạnh",
    desc: "Xây dựng thái độ tôn trọng, văn minh trong mối quan hệ bạn bè học đường.",
  },
];

export default function GenderEducationArticlePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={GT1}
            alt="Chuyên đề giáo dục giới tính"
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
            <span className="font-semibold text-white">Giáo dục giới tính</span>
          </div>

          <div className="mt-10 max-w-4xl">
            <span className="rounded-full border border-amber-400/30 bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
              ICHI SKILL EVENTS
            </span>

            <h1 className="mt-8 text-4xl font-black uppercase leading-tight text-white md:text-6xl">
              Chuyên đề:
              <span className="block text-amber-400">
                Giáo dục giới tính – Hành trang cho tuổi dậy thì
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Trang bị cho học sinh kiến thức, kỹ năng và thái độ đúng đắn để tự
              tin, an toàn và sống tích cực trong giai đoạn trưởng thành.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <article className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={GT1}
                alt="Giáo dục giới tính tuổi dậy thì"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur">
                  Kỹ năng sống
                </span>

                <h2 className="mt-5 text-2xl font-black uppercase leading-snug text-white md:text-4xl">
                  Giáo dục giới tính – Hành trang cho tuổi dậy thì
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
                  Nhằm trang bị cho học sinh những kiến thức và kỹ năng cần
                  thiết trong giai đoạn trưởng thành, ICHI đã tổ chức chuyên đề
                  Giáo dục giới tính với nhiều nội dung thiết thực, gần gũi và
                  phù hợp với lứa tuổi học đường.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Thông qua chương trình, các em học sinh có cơ hội tìm hiểu,
                  chia sẻ và giải đáp những thắc mắc liên quan đến sự phát triển
                  tâm sinh lý, từ đó hình thành nhận thức đúng đắn và xây dựng
                  lối sống lành mạnh.
                </p>

                <div className="relative mt-10 overflow-hidden rounded-[28px]">
                  <Image
                    src={GT2}
                    alt="Học sinh tham gia chuyên đề giáo dục giới tính"
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-center text-sm italic text-gray-500">
                  Chuyên đề mang đến kiến thức thiết thực, gần gũi với lứa tuổi
                  học đường.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Hiểu Đúng Về Những Thay Đổi Tuổi Dậy Thì
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Tuổi dậy thì là giai đoạn có nhiều thay đổi về thể chất, tâm
                  lý và cảm xúc. Tại chuyên đề, các em được cung cấp những kiến
                  thức cơ bản về quá trình phát triển của cơ thể, giúp các em
                  hiểu rõ hơn về bản thân, tự tin đón nhận những thay đổi tự
                  nhiên trong quá trình trưởng thành.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Những nội dung được chia sẻ một cách khoa học, dễ hiểu đã giúp
                  học sinh tháo gỡ những băn khoăn, lo lắng thường gặp ở lứa
                  tuổi dậy thì.
                </p>

                <div className="my-12 rounded-r-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
                  <p className="text-xl font-semibold leading-8 text-slate-800">
                    Hiểu đúng về bản thân là bước đầu giúp học sinh tự tin, an
                    toàn và trưởng thành tích cực.
                  </p>
                </div>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Trang Bị Kỹ Năng Bảo Vệ Bản Thân
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Bên cạnh kiến thức về giới tính, chương trình còn tập trung
                  hướng dẫn học sinh nhận biết các tình huống không an toàn và
                  cách bảo vệ bản thân trước những nguy cơ có thể xảy ra trong
                  cuộc sống.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Thông qua các tình huống thực tế, các em được rèn luyện kỹ
                  năng ứng xử phù hợp, biết nói “không” với những hành vi xâm
                  hại và chủ động tìm kiếm sự hỗ trợ khi cần thiết.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[24px]">
                    <Image
                      src={GT3}
                      alt="Hoạt động thảo luận nhóm"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Xây Dựng Mối Quan Hệ Lành Mạnh Và Tôn Trọng
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Một trong những nội dung được học sinh quan tâm là kỹ năng
                  giao tiếp và ứng xử giữa nam và nữ trong môi trường học đường.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Chuyên đề giúp các em hiểu được giá trị của sự tôn trọng, biết
                  lắng nghe, thấu hiểu và cư xử văn minh với bạn bè, từ đó xây
                  dựng những mối quan hệ tích cực và lành mạnh.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Học Mà Chơi – Hiểu Mà Nhớ
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Không khí chương trình trở nên sôi nổi thông qua các trò chơi
                  tương tác, câu hỏi tình huống và hoạt động thảo luận nhóm. Sự
                  tham gia tích cực của các em đã tạo nên một buổi học gần gũi,
                  cởi mở và đầy ý nghĩa.
                </p>

                <p className="mt-6 text-lg leading-9">
                  Những kiến thức được truyền tải không chỉ dừng lại ở lý thuyết
                  mà còn giúp học sinh biết cách vận dụng vào thực tế cuộc sống
                  hằng ngày.
                </p>

                <h2 className="mt-12 text-3xl font-black uppercase text-gray-900">
                  Đồng Hành Cùng Học Sinh Trên Hành Trình Trưởng Thành
                </h2>

                <p className="mt-6 text-lg leading-9">
                  Giáo dục giới tính không chỉ là việc cung cấp kiến thức sinh
                  học mà còn góp phần hình thành nhân cách, trách nhiệm và sự tự
                  tin cho học sinh trong giai đoạn phát triển quan trọng của
                  cuộc đời.
                </p>

                <p className="mt-6 text-lg leading-9">
                  ICHI luôn hướng đến mục tiêu giúp học sinh “Hiểu đúng – Hành
                  xử đúng – Sống tích cực”, để mỗi em đều biết yêu thương, tôn
                  trọng và bảo vệ bản thân một cách đúng đắn.
                </p>
              </div>

              <div className="mt-12 rounded-[28px] bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
                <p className="text-xl font-black leading-8 text-amber-400">
                  ICHI – Đồng hành cùng nhà trường trong hành trình phát triển
                  toàn diện kỹ năng, nhân cách và giá trị sống cho học sinh Việt
                  Nam.
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
              <Users size={36} />
              <h3 className="mt-5 text-2xl font-black">
                Hành trang trưởng thành
              </h3>
              <p className="mt-4 text-sm font-medium leading-7">
                ICHI đồng hành cùng nhà trường giúp học sinh hiểu đúng, hành xử
                đúng và biết bảo vệ bản thân trong môi trường học đường.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
