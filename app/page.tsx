// src/app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { baloo } from "./lib/fonts";
import { useEffect, useState } from "react";
import slide1 from "./static/slide1.png";
import slide2 from "./static/slide1.png";
import slide3 from "./static/slide3.png";
import slide4 from "./static/slide4.png";
import slide5 from "./static/slide5.png";
import about from "./static/about.png";

const heroImages = [slide1, slide2, slide3, slide4, slide5];
const courses = [
  {
    title: "STEM Mầm Non",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Kỹ Năng Sống",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Kỹ Năng Công Dân Số",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "STEM Tiểu Học",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
  },
];

const activities = [
  "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {/* HERO */}
      <motion.section
        className="relative overflow-hidden pb-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* HERO */}
        <div className="relative h-[700px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <Image
                src={image}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                className={`
        object-cover
        scale-105
        transition-all
        duration-[2000ms]
        absolute
        inset-0
        ${currentSlide === index ? "opacity-100" : "opacity-0"}
      `}
              />
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          {/* Glow */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-500/20 blur-[180px]" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              {/* Badge */}
              <div className="mt-2 inline-flex items-center px-5 py-2 rounded-full bg-yellow-400 text-black font-bold text-sm shadow-lg">
                CÔNG TY TNHH CHUYỂN ĐỔI SỐ ICHI
              </div>

              {/* Title */}
              <h1
                className={`
          ${baloo.className}
          mt-6
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-extrabold
          leading-[1.05]
          text-white
        `}
              >
                ĐỒNG HÀNH CHUYỂN ĐỔI
                <span className="block text-yellow-400">
                  DẪN LỐI THÀNH CÔNG
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 text-lg md:text-xl text-white/80 leading-9 max-w-2xl">
                ICHI cung cấp chương trình học và giải pháp giáo dục ứng dụng
                công nghệ hiện đại, giúp nhà trường, giáo viên và học sinh thích
                nghi, phát triển và bứt phá trong kỷ nguyên số.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  className="
            bg-yellow-400
            hover:bg-yellow-300
            text-black
            px-8
            py-4
            rounded-2xl
            font-bold
            shadow-xl
            transition-all
            hover:scale-105
          "
                >
                  KHÁM PHÁ NGAY
                </button>

                <button
                  className="
            border
            border-white/30
            bg-white/10
            backdrop-blur-md
            text-white
            px-8
            py-4
            rounded-2xl
            font-bold
            transition-all
            hover:bg-white
            hover:text-black
            hover:scale-105
          "
                >
                  Xem khóa học
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="-mt-20 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🚀",
                title: "Giải pháp toàn diện",
                desc: "Hệ sinh thái giáo dục và công nghệ phục vụ chuyển đổi số toàn diện cho nhà trường.",
              },
              {
                icon: "🎓",
                title: "Đào tạo chất lượng",
                desc: "Chương trình học hiện đại, thực tiễn và chuẩn hóa theo xu hướng giáo dục mới.",
              },
              {
                icon: "🤝",
                title: "Đồng hành phát triển",
                desc: "Kết nối nhà trường, phụ huynh và học sinh để phát triển bền vững.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
          group
          bg-white
          rounded-[32px]
          p-8
          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          hover:-translate-y-3
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]
          transition-all
          duration-300
        "
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="mt-5 text-2xl font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-8">{item.desc}</p>

                <div className="mt-6 w-12 h-1 rounded-full bg-yellow-400 group-hover:w-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        className="py-28 bg-slate-50"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-500 font-black uppercase tracking-[4px]">
              Giới thiệu
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-5 leading-tight text-slate-900">
              Trung tâm giáo dục kỹ năng &
              <span className="block text-yellow-500">STEM cho trẻ em</span>
            </h2>

            <p className="mt-8 text-slate-600 leading-9 text-lg">
              - ICHI có tên đầy đủ là Công ty TNHH chuyển đổi số ICHI, Công ty
              chuyên về lĩnh vực giáo dục kỹ năng sống- Stem- CDS- AI- Tiếng Anh
            </p>
            <p className="mt-2 text-slate-600 leading-9 text-lg">
              - Tin học dành cho học sinh từ cấp học mầm non đến THPT. - ICHI
              mang đến môi trường học tập hiện đại, sáng tạo giúp trẻ phát triển
              toàn diện về tư duy, kỹ năng mềm và công nghệ.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <motion.div
                whileHover={{ y: -5 }}
                className="
    bg-white
    border
    border-slate-100
    rounded-3xl
    p-8
    shadow-sm
    hover:shadow-xl
    transition-all
  "
              >
                <div className="text-6xl font-black text-yellow-500">Nhiều</div>

                <p className="mt-3 text-lg font-semibold text-slate-800">
                  Năm kinh nghiệm
                </p>

                <p className="mt-2 text-slate-500">
                  Đồng hành cùng giáo dục và chuyển đổi số
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="
    bg-white
    border
    border-slate-100
    rounded-3xl
    p-8
    shadow-sm
    hover:shadow-xl
    transition-all
  "
              >
                <div className="text-6xl font-black text-blue-500">100K+</div>

                <p className="mt-3 text-lg font-semibold text-slate-800">
                  Học viên
                </p>

                <p className="mt-2 text-slate-500">
                  Đã tham gia các chương trình đào tạo
                </p>
              </motion.div>
            </div>

            <button className="mt-10 bg-slate-900 hover:bg-black text-white transition px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105">
              Xem thêm
            </button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={about}
              alt="Students"
              width={700}
              height={500}
              className="rounded-[40px] shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* COURSES */}
      <motion.section
        className="py-28 bg-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-yellow-500 font-black uppercase tracking-[4px]">
              Chương trình đào tạo
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-5 text-slate-900">
              Các khóa học nổi bật
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:shadow-2xl transition duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={500}
                    height={350}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900">
                    {course.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-8">
                    Chương trình giáo dục hiện đại dành cho trẻ em phát triển
                    toàn diện.
                  </p>

                  <button className="mt-6 text-yellow-500 font-bold hover:translate-x-1 transition">
                    Xem chi tiết →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WHY */}
      <motion.section
        className="py-28 bg-slate-900"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-yellow-400 font-black uppercase tracking-[4px]">
              Lý do lựa chọn
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-5 text-white">
              Vì sao chọn DI-ICHI
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {[
              "Đội ngũ giáo viên chất lượng",
              "Môi trường học tập hiện đại",
              "Giáo trình STEM thực tiễn",
              "Hoạt động ngoại khóa đa dạng",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="bg-white rounded-[30px] p-8 shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-3xl">
                  ⭐
                </div>

                <h3 className="mt-6 text-2xl font-black leading-tight text-slate-900">
                  {item}
                </h3>

                <p className="mt-4 text-slate-600 leading-8">
                  Giúp trẻ phát triển kỹ năng và tư duy thực tế.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ACTIVITIES */}
      <motion.section
        className="py-28 bg-slate-50"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-yellow-500 font-black uppercase tracking-[4px]">
              Hoạt động
            </p>

            <h2 className="text-4xl lg:text-6xl font-black mt-5">
              Hoạt động khóa học
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {activities.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="overflow-hidden rounded-[35px] shadow-xl"
              >
                <Image
                  src={image}
                  alt="Activity"
                  width={500}
                  height={450}
                  className="w-full h-[420px] object-cover hover:scale-110 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
