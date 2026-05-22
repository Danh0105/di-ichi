// src/app/about/page.tsx

import Image from "next/image";
import {
  ArrowRight,
  Award,
  Brain,
  GraduationCap,
  HeartHandshake,
  Rocket,
  Sparkles,
  Users2,
} from "lucide-react";

const stats = [
  {
    number: "10+",
    label: "Năm kinh nghiệm",
  },
  {
    number: "5000+",
    label: "Học sinh",
  },
  {
    number: "50+",
    label: "Giáo viên",
  },
  {
    number: "100+",
    label: "Hoạt động STEM",
  },
];

const values = [
  {
    icon: Brain,
    title: "Tư duy sáng tạo",
    desc: "Khuyến khích trẻ khám phá, sáng tạo và phát triển tư duy logic.",
  },
  {
    icon: Rocket,
    title: "Công nghệ hiện đại",
    desc: "Ứng dụng STEM và Robotics giúp trẻ tiếp cận công nghệ sớm.",
  },
  {
    icon: HeartHandshake,
    title: "Tận tâm giáo dục",
    desc: "Lấy học sinh làm trung tâm trong mọi hoạt động giảng dạy.",
  },
];

const teachers = [1, 2, 3];

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc] overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1800&auto=format&fit=crop"
            alt="Hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 backdrop-blur">
              <Sparkles className="text-yellow-400" size={18} />

              <span className="text-yellow-300 text-sm font-semibold tracking-wide">
                GIÁO DỤC THẾ HỆ TƯƠNG LAI
              </span>
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black text-white leading-[1.1]">
              Kiến tạo
              <span className="block text-yellow-400">tương lai trẻ em</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/75 leading-9 max-w-2xl">
              DI-ICHI là trung tâm giáo dục kỹ năng sống, STEM và Robotics giúp
              trẻ phát triển tư duy, sáng tạo và bản lĩnh trong thời đại số.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="h-14 px-8 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold transition flex items-center gap-2">
                Khám phá khóa học
                <ArrowRight size={18} />
              </button>

              <button className="h-14 px-8 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition font-semibold">
                Liên hệ tư vấn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-14 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] p-8 shadow-2xl border border-slate-100"
              >
                <h3 className="text-4xl font-black text-yellow-500">
                  {item.number}
                </h3>

                <p className="mt-3 text-slate-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-30" />

              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1400&auto=format&fit=crop"
                alt="Students"
                width={700}
                height={700}
                className="relative rounded-[40px] shadow-2xl object-cover"
              />

              <div className="absolute bottom-8 left-8 bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">
                    <Award className="text-yellow-500" size={30} />
                  </div>

                  <div>
                    <h4 className="text-3xl font-black text-slate-900">
                      4.9/5
                    </h4>

                    <p className="text-slate-500">Đánh giá phụ huynh</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-yellow-500 font-black tracking-[4px] uppercase">
                VỀ CHÚNG TÔI
              </p>

              <h2 className="mt-6 text-4xl lg:text-6xl font-black leading-tight text-slate-900">
                Môi trường học tập hiện đại dành cho trẻ em
              </h2>

              <p className="mt-8 text-slate-600 text-lg leading-9">
                DI-ICHI tập trung phát triển toàn diện kỹ năng mềm, tư duy sáng
                tạo và khả năng ứng dụng công nghệ thông qua các chương trình
                STEM, Robotics và kỹ năng sống thực tiễn.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  "Chương trình học thực tiễn",
                  "Đội ngũ giáo viên tận tâm",
                  "Không gian học tập hiện đại",
                  "Hoạt động ngoại khóa sáng tạo",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center">
                      <Sparkles className="text-yellow-500" size={20} />
                    </div>

                    <p className="text-lg font-semibold text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-yellow-500 font-black tracking-[4px] uppercase">
              GIÁ TRỊ CỐT LÕI
            </p>

            <h2 className="mt-6 text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
              Giá trị mà DI-ICHI mang lại
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-[#f8fafc] hover:bg-yellow-400 transition-all duration-300 rounded-[32px] p-10"
                >
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center">
                    <Icon className="text-yellow-500" size={38} />
                  </div>

                  <h3 className="mt-8 text-3xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-slate-600 leading-8 group-hover:text-slate-800">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-yellow-400 font-black tracking-[4px] uppercase">
              ĐỘI NGŨ
            </p>

            <h2 className="mt-6 text-4xl lg:text-6xl font-black text-white">
              Giáo viên tận tâm
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {teachers.map((item) => (
              <div
                key={item}
                className="group bg-white rounded-[32px] overflow-hidden"
              >
                <div className="overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1400&auto=format&fit=crop"
                    alt="Teacher"
                    width={500}
                    height={500}
                    className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">
                    <GraduationCap className="text-yellow-500" size={30} />
                  </div>

                  <h3 className="mt-6 text-3xl font-black text-slate-900">
                    Giáo viên STEM
                  </h3>

                  <p className="mt-4 text-slate-600 leading-8">
                    Đội ngũ giáo viên giàu kinh nghiệm và luôn đổi mới phương
                    pháp giảng dạy.
                  </p>

                  <button className="mt-8 h-12 px-6 rounded-xl bg-slate-900 text-white hover:bg-yellow-400 hover:text-black transition font-semibold">
                    Xem thêm
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-yellow-400">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="w-24 h-24 mx-auto rounded-[30px] bg-white flex items-center justify-center shadow-xl">
            <Users2 className="text-yellow-500" size={44} />
          </div>

          <h2 className="mt-8 text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            Đồng hành cùng trẻ trên hành trình phát triển
          </h2>

          <p className="mt-8 text-lg text-slate-700 leading-9">
            Hãy để DI-ICHI giúp trẻ phát triển kỹ năng, tư duy và sự tự tin
            trong tương lai.
          </p>

          <button className="mt-10 h-14 px-10 rounded-2xl bg-slate-900 text-white hover:bg-black transition font-bold">
            Đăng ký tư vấn
          </button>
        </div>
      </section>
    </div>
  );
}
