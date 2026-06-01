import {
  Award,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Được tham gia môi trường học tập an toàn, tích cực",
    description: [
      "Học sinh được học tập và trải nghiệm trong môi trường thân thiện, lành mạnh và phù hợp với độ tuổi.",
      "Các hoạt động được tổ chức dưới sự hướng dẫn của giáo viên.",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: HeartHandshake,
    title: "Được hỗ trợ và quan tâm trong suốt chương trình",
    description: [
      "Được theo dõi, hỗ trợ và hướng dẫn trong quá trình tham gia các chương trình giáo dục.",
      "Được lắng nghe ý kiến và hỗ trợ khi gặp khó khăn.",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: ShieldCheck,
    title: "Được đảm bảo quyền riêng tư và bảo mật thông tin",
    description: [
      "Thông tin cá nhân của học sinh được bảo mật theo chính sách của công ty.",
      "Hình ảnh và thông tin của học sinh chỉ được sử dụng đúng mục đích giáo dục và truyền thông phù hợp.",
    ],
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Award,
    title: "Được ghi nhận sự cố gắng và tiến bộ",
    description: [
      "Học sinh có cơ hội nhận giấy chứng nhận hoặc hình thức tuyên dương phù hợp sau khi hoàn thành chương trình.",
    ],
    color: "from-yellow-500 to-orange-500",
  },
];

export default function StudentBenefitsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07142B] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_40%)]" />

        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
            <Users size={52} className="text-yellow-400" />
          </div>

          <p className="mt-6 font-black uppercase tracking-[5px] text-yellow-400">
            Công ty TNHH Chuyển Đổi Số ICHI
          </p>

          <h1 className="mt-6 text-5xl lg:text-7xl font-black text-white">
            Quyền lợi của học sinh
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-white/80">
            Khi tham gia các khóa học và chương trình trải nghiệm do ICHI tổ
            chức, học sinh luôn được đảm bảo quyền lợi, sự an toàn và môi trường
            phát triển toàn diện.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-[32px]
                    border border-slate-100
                    p-8
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                  "
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`
                        h-16 w-16 shrink-0
                        rounded-2xl
                        bg-gradient-to-br
                        ${benefit.color}
                        flex items-center justify-center
                        text-white
                      `}
                    >
                      <Icon size={30} />
                    </div>

                    <div>
                      <p className="text-sm font-black uppercase tracking-[3px] text-yellow-500">
                        Quyền lợi {index + 1}
                      </p>

                      <h2 className="mt-2 text-2xl lg:text-3xl font-black text-slate-900">
                        {benefit.title}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {benefit.description.map((item, i) => (
                      <div
                        key={i}
                        className="
                          flex gap-4
                          rounded-2xl
                          bg-slate-50
                          p-5
                        "
                      >
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-yellow-400 shrink-0" />

                        <p className="leading-8 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="
              overflow-hidden
              rounded-[40px]
              bg-gradient-to-r
              from-[#07142B]
              to-[#10244d]
              p-10 lg:p-14
              text-white
              relative
            "
          >
            <div className="absolute right-0 top-0 h-72 w-72 bg-yellow-400/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col lg:flex-row gap-8 items-center">
              <div
                className="
                  h-24 w-24
                  rounded-3xl
                  bg-white/10
                  backdrop-blur
                  flex items-center justify-center
                  shrink-0
                "
              >
                <Sparkles size={52} className="text-yellow-400" />
              </div>

              <div>
                <p className="font-black uppercase tracking-[4px] text-yellow-400">
                  Cam kết từ ICHI
                </p>

                <h2 className="mt-3 text-4xl lg:text-5xl font-black">
                  Đồng hành cùng sự phát triển của học sinh
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/80">
                  CÔNG TY TNHH CHUYỂN ĐỔI SỐ ICHI luôn mong muốn mang đến cho
                  học sinh một môi trường học tập và trải nghiệm ý nghĩa, an
                  toàn và giàu giá trị phát triển.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
