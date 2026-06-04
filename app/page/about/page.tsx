// src/app/about/page.tsx

import Image from "next/image";
import {
  ArrowRight,
  Award,
  Brain,
  GraduationCap,
  HeartHandshake,
  Rocket,
  School2,
  Sparkles,
  Users2,
} from "lucide-react";
import IMG1 from "./statics/IMG1.png";
const stats = [
  {
    number: "100+",
    label: "Trường học đồng hành",
  },
  {
    number: "10.000+",
    label: "Học sinh tham gia",
  },
  {
    number: "20+",
    label: "Chuyên gia & cố vấn",
  },
  {
    number: "50+",
    label: "Chương trình triển khai",
  },
];

const values = [
  {
    icon: Brain,
    title: "Trách nhiệm",
    desc: "Đồng hành cùng nhà trường, phụ huynh và học sinh trong mọi hoạt động giáo dục.",
  },
  {
    icon: Rocket,
    title: "Sáng tạo",
    desc: "Không ngừng đổi mới và ứng dụng công nghệ hiện đại vào giáo dục.",
  },
  {
    icon: HeartHandshake,
    title: "Khát vọng",
    desc: "Kiến tạo thế hệ công dân số năng động, tự tin và hội nhập toàn cầu.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc] overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* FLOATING BLOBS */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-3xl animate-floating" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl animate-floating" />

        {/* BG */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1800&auto=format&fit=crop"
            alt="Hero"
            fill
            priority
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-black/40" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 backdrop-blur animate-fly-up">
              <Sparkles className="text-yellow-400" size={18} />

              <span className="text-yellow-300 text-sm font-semibold tracking-wide">
                CHUYỂN ĐỔI SỐ GIÁO DỤC
              </span>
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black text-white leading-[1.1] animate-fly-left">
              Kiến tạo
              <span className="block text-yellow-400">
                công dân số tương lai
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/75 leading-9 max-w-2xl animate-fly-right">
              ICHI là đơn vị tiên phong trong đào tạo Kỹ năng sống, STEM, Công
              dân số, Trí tuệ nhân tạo (AI), Tiếng Anh và Tin học, đồng hành
              cùng nhà trường và học sinh trên hành trình chuyển đổi số giáo
              dục.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 animate-fly-up delay-400">
              <button className="group h-14 px-8 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold transition-all duration-300 flex items-center gap-2 hover:scale-105">
                Khám phá khóa học
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <button className="h-14 px-8 rounded-2xl border border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 font-semibold">
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
                className="bg-white rounded-[30px] p-8 shadow-2xl border border-slate-100 hover:-translate-y-4 hover:shadow-yellow-200/50 transition-all duration-500 animate-fly-up"
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
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:30px_30px]" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-300/20 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-600 font-bold tracking-wider uppercase">
              <Sparkles size={16} />
              Về ICHI
            </div>

            <h2 className="mt-8 text-5xl lg:text-7xl font-black leading-[1.05]">
              <span className="text-slate-900">Kiến tạo tương lai</span>

              <span className="block bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                giáo dục số Việt Nam
              </span>
            </h2>

            <p className="mt-8 text-lg lg:text-xl text-slate-600 leading-9 max-w-4xl mx-auto">
              Công ty TNHH Chuyển đổi số ICHI đồng hành cùng nhà trường, học
              sinh và phụ huynh trong hành trình chuyển đổi số giáo dục, phát
              triển năng lực công dân số và kiến tạo môi trường học tập hiện đại
              cho thế hệ tương lai.
            </p>
          </div>

          {/* IMAGE + STATS */}
          <div className="mt-24 grid lg:grid-cols-[1.4fr_0.8fr] gap-10 items-center">
            {/* IMAGE */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rotate-2 blur-sm opacity-40" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/50 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
                <Image
                  src={IMG1}
                  alt="ICHI Education"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover hover:scale-110 transition duration-1000"
                />
              </div>
            </div>

            {/* STATS */}
            <div className="space-y-6">
              <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-5xl font-black text-yellow-500">
                      200+
                    </h3>

                    <p className="mt-2 text-slate-500">Trường học hợp tác</p>
                  </div>

                  <School2 size={42} className="text-yellow-400" />
                </div>
              </div>

              <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-5xl font-black text-yellow-500">
                      200.000+
                    </h3>

                    <p className="mt-2 text-slate-500">Học sinh tham gia</p>
                  </div>

                  <GraduationCap size={42} className="text-yellow-400" />
                </div>
              </div>

              <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-5xl font-black text-yellow-500">5+</h3>

                    <p className="mt-2 text-slate-500">Năm kinh nghiệm</p>
                  </div>

                  <Rocket size={42} className="text-yellow-400" />
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="max-w-5xl mx-auto mt-24 text-center">
            <p className="text-slate-600 text-lg leading-9">
              ICHI là đơn vị tiên phong trong lĩnh vực Giáo dục Kỹ năng sống,
              STEM, Công dân số, Trí tuệ nhân tạo (AI), Tiếng Anh và Tin học.
              Chúng tôi không chỉ cung cấp các chương trình đào tạo chất lượng
              mà còn chuyển giao công nghệ, giải pháp và hệ sinh thái giáo dục
              số toàn diện cho các nhà trường trên cả nước.
            </p>
          </div>

          {/* SERVICES */}
          <div className="mt-20">
            <div className="text-center">
              <h3 className="text-4xl font-black text-slate-900">
                Lĩnh vực hoạt động
              </h3>

              <p className="mt-4 text-slate-500">
                Các chương trình đào tạo và giải pháp giáo dục nổi bật của ICHI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                "Giáo dục Kỹ năng sống",
                "STEM & Robotics",
                "Công dân số",
                "Trí tuệ nhân tạo AI",
                "Tiếng Anh",
                "Tin học",
                "Chuyển đổi số trường học",
                "Chuyển giao công nghệ giáo dục",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
              group
              bg-white
              rounded-[32px]
              p-8
              border
              border-slate-100
              shadow-lg
              hover:-translate-y-3
              hover:shadow-2xl
              transition-all
              duration-300
            "
                >
                  <div className="w-16 h-16 mx-auto rounded-3xl bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-500 transition-all">
                    <Sparkles
                      size={24}
                      className="text-yellow-500 group-hover:text-white"
                    />
                  </div>

                  <p className="mt-5 text-center font-semibold text-slate-700 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fly-up">
            <p className="text-yellow-500 font-black tracking-[4px] uppercase">
              GIÁ TRỊ CỐT LÕI
            </p>

            <h2 className="mt-6 text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
              Những giá trị tạo nên thương hiệu ICHI
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-8">
              ICHI luôn lấy con người làm trung tâm, không ngừng đổi mới và ứng
              dụng công nghệ nhằm mang đến những giá trị giáo dục bền vững cho
              học sinh, nhà trường và cộng đồng.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {[
              {
                icon: HeartHandshake,
                title: "Trách nhiệm",
                desc: "Cam kết đồng hành cùng học sinh, phụ huynh và nhà trường trong mọi hoạt động giáo dục.",
              },
              {
                icon: Brain,
                title: "Sáng tạo",
                desc: "Không ngừng nghiên cứu, đổi mới và ứng dụng công nghệ hiện đại vào giảng dạy.",
              },
              {
                icon: Rocket,
                title: "Khát vọng",
                desc: "Kiến tạo thế hệ công dân số năng động, bản lĩnh và sẵn sàng hội nhập toàn cầu.",
              },
              {
                icon: Award,
                title: "Phát triển",
                desc: "Hướng tới sự phát triển bền vững của học sinh, nhà trường và xã hội.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-[#f8fafc] hover:bg-yellow-400 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 rounded-[32px] p-10 animate-fly-up"
                >
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition">
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
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-yellow-400 font-black tracking-[4px] uppercase">
              ĐỘI NGŨ CHUYÊN GIA
            </p>

            <h2 className="mt-6 text-5xl lg:text-7xl font-black text-white">
              Chuyên gia & Cố vấn ICHI
            </h2>

            <p className="mt-8 text-slate-400 text-lg leading-9">
              Đội ngũ chuyên gia giàu kinh nghiệm trong các lĩnh vực giáo dục,
              STEM, Công dân số, Trí tuệ nhân tạo và y tế học đường.
            </p>
          </div>

          <div className="mt-20 grid lg:grid-cols-3 gap-8">
            {/* Featured Expert */}
            <div className="lg:col-span-2 relative overflow-hidden rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl p-10 group hover:border-yellow-400/30 transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-44 h-44 rounded-[32px] bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shrink-0">
                  <GraduationCap size={70} className="text-white" />
                </div>

                <div>
                  <span className="inline-flex px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold">
                    CHUYÊN GIA CHỦ CHỐT
                  </span>

                  <h3 className="mt-5 text-4xl font-black text-white">
                    Ông Trần Thanh Tiền
                  </h3>

                  <p className="mt-4 text-yellow-400 font-semibold">
                    Trưởng phòng chuyên môn
                  </p>

                  <p className="mt-6 text-slate-300 leading-8">
                    Chuyên gia Giáo dục Kỹ năng sống, Công dân số, STEM và Trí
                    tuệ nhân tạo (AI), trực tiếp tham gia nghiên cứu, phát triển
                    và triển khai các chương trình đào tạo của ICHI.
                  </p>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-6">
              {[
                {
                  name: "TS. Nguyễn Văn Hùng",
                  role: "Cố vấn chuyên môn cao cấp",
                },
                {
                  name: "ThS. Nguyễn Thị Anh Đào",
                  role: "Cố vấn chuyên môn",
                },
                {
                  name: "ThS. Nguyễn Thành Nhơn",
                  role: "Chuyên gia sức khỏe & y tế học đường",
                },
                {
                  name: "Ths. Vũ Thị Kim Chi",
                  role: "Phòng chuyên môn ICHI - Trưởng nhóm giáo viên các khu vực, chuyên viên đào tạo chương trình ICHI ",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
              group
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[28px]
              p-6
              hover:border-yellow-400/30
              hover:-translate-y-1
              transition-all
              duration-300
            "
                >
                  <div className="flex gap-5 items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shrink-0">
                      <GraduationCap size={28} className="text-white" />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white leading-tight">
                        {item.name}
                      </h4>

                      <p className="mt-2 text-slate-400 text-sm leading-6">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-28 bg-yellow-400 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl animate-floating" />

        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-orange-500/20 rounded-full blur-3xl animate-floating" />

        <div className="relative max-w-5xl mx-auto px-6 text-center animate-fly-up">
          <div className="w-24 h-24 mx-auto rounded-[30px] bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300">
            <Users2 className="text-yellow-500" size={44} />
          </div>

          <h2 className="mt-8 text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            Đồng hành cùng nhà trường trong chuyển đổi số giáo dục
          </h2>

          <p className="mt-8 text-lg text-slate-700 leading-9 max-w-3xl mx-auto">
            ICHI cam kết mang đến các chương trình đào tạo Kỹ năng sống, STEM,
            Công dân số, Trí tuệ nhân tạo (AI), Tiếng Anh và Tin học hiện đại,
            giúp học sinh phát triển toàn diện và sẵn sàng cho tương lai số.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button className="h-14 px-10 rounded-2xl bg-slate-900 text-white hover:bg-black hover:scale-105 transition-all duration-300 font-bold">
              Liên hệ hợp tác
            </button>

            <button className="h-14 px-10 rounded-2xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white hover:scale-105 transition-all duration-300 font-bold">
              Tìm hiểu chương trình
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
