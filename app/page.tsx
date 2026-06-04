// src/app/page.tsx

"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { baloo } from "./lib/fonts";
import { useEffect, useState } from "react";
import slide1 from "./static/slide1.png";
import slide2 from "./static/slide1.png";
import slide3 from "./static/slide3.png";
import slide4 from "./static/slide4.png";
import slide5 from "./static/slide5.png";
import about from "./static/about.png";
import { X } from "lucide-react";
const heroImages = [slide1, slide2, slide3, slide4, slide5];
const courses = [
  {
    title: "Kỹ năng sống",
    short:
      "Giúp trẻ phát triển toàn diện về tư duy, cảm xúc và kỹ năng xã hội.",
    desc: "Chương trình Kỹ năng sống giúp học sinh hình thành sự tự tin, khả năng giao tiếp, làm việc nhóm, xử lý tình huống và phát triển nhân cách tích cực trong học tập cũng như cuộc sống.",
    image: "/image-courses/ky-nang-song.jpg",
  },
  {
    title: "STEM",
    short: "Khơi dậy đam mê khoa học, công nghệ và sáng tạo.",
    desc: "Chương trình STEM giúp học sinh tiếp cận khoa học, công nghệ, kỹ thuật và toán học thông qua các hoạt động thực hành, dự án sáng tạo và giải quyết vấn đề thực tế.",
    image: "/image-courses/stem.jpg",
  },
  {
    title: "Công dân số",
    short: "Sử dụng công nghệ an toàn, hiệu quả và có trách nhiệm.",
    desc: "Chương trình Công dân số trang bị cho học sinh kỹ năng sử dụng thiết bị công nghệ, bảo vệ bản thân trên môi trường mạng, nhận diện rủi ro số và ứng xử văn minh trên internet.",
    image: "/image-courses/cong-dan-so.jpg",
  },
  {
    title: "AI",
    short: "Tiếp cận công nghệ trí tuệ nhân tạo hiện đại.",
    desc: "Chương trình AI giúp học sinh làm quen với trí tuệ nhân tạo, tư duy công nghệ, ứng dụng chuyển đổi số và phát triển khả năng sáng tạo trong kỷ nguyên số.",
    image: "/image-courses/ai.jpg",
  },
  {
    title: "Tiếng Anh",
    short: "Phát triển ngôn ngữ và hội nhập quốc tế.",
    desc: "Chương trình Tiếng Anh giúp học sinh phát triển kỹ năng nghe, nói, đọc, viết thông qua phương pháp học sinh động, thực tiễn và phù hợp với lứa tuổi.",
    image: "/image-courses/tieng-anh.jpg",
  },
  {
    title: "Tin học ICDL",
    short: "Chuẩn tin học quốc tế, giá trị toàn cầu.",
    desc: "Chương trình Tin học ICDL trang bị kiến thức và kỹ năng tin học chuẩn quốc tế, giúp học sinh sử dụng máy tính, phần mềm văn phòng và công nghệ số một cách chuyên nghiệp.",
    image: "/image-courses/icdl.jpg",
  },
];
const activities = [
  "/image-courses/r81.png",
  "/image-courses/r25.png",
  "/image-courses/r45.png",
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
const reasons = [
  {
    title: "Đội ngũ giáo viên chất lượng",
    desc: "Đội ngũ giáo viên giàu kinh nghiệm và tâm huyết.",
  },
  {
    title: "Môi trường học tập hiện đại",
    desc: "Tạo điều kiện học tập tốt nhất với trang thiết bị tiên tiến.",
  },
  {
    title: "Giáo trình thực tiễn",
    desc: "Giúp trẻ phát triển kỹ năng và tư duy thực tế.",
  },
  {
    title: "Hoạt động ngoại khóa đa dạng",
    desc: "Mở rộng trải nghiệm và khám phá thế giới xung quanh.",
  },
  {
    title: "Cá nhân hóa lộ trình phát triển",
    desc: "Chương trình được thiết kế phù hợp với từng năng lực của học sinh.",
  },
];
export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

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

            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-8">
              Khám phá các chương trình giáo dục hiện đại giúp học sinh phát
              triển toàn diện về kỹ năng, tư duy và công nghệ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {courses.map((course, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => setSelectedCourse(course)}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
            group text-left bg-white rounded-[32px] overflow-hidden
            border border-slate-100 hover:shadow-2xl
            transition duration-300
          "
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={500}
                    height={350}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-3xl font-black text-white">
                      {course.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-slate-600 leading-8">{course.short}</p>

                  <div className="mt-6 inline-flex items-center text-yellow-500 font-black group-hover:translate-x-1 transition">
                    Xem chi tiết →
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="
          relative bg-white rounded-[32px] overflow-hidden
          max-w-4xl w-full shadow-2xl
        "
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="
            absolute top-5 right-5 z-10
            w-11 h-11 rounded-full bg-white/90
            flex items-center justify-center
            shadow-lg hover:bg-slate-100 transition
          "
              >
                <X size={22} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-full">
                  <Image
                    src={selectedCourse.image}
                    alt={selectedCourse.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-yellow-500 font-black uppercase tracking-[3px]">
                    Chi tiết chương trình
                  </p>

                  <h3 className="mt-4 text-4xl font-black text-slate-900">
                    {selectedCourse.title}
                  </h3>

                  <p className="mt-6 text-slate-600 leading-8 text-lg">
                    {selectedCourse.desc}
                  </p>

                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="
                mt-8 px-7 py-4 rounded-2xl
                bg-yellow-400 text-slate-900
                font-black hover:bg-yellow-300 transition
              "
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WHY */}
      <motion.section
        className="relative overflow-hidden py-24 bg-[#081225]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="relative max-w-[1500px] mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-yellow-400 font-black uppercase tracking-[6px]">
              Lý do lựa chọn
            </p>

            <h2 className="text-5xl lg:text-7xl font-black mt-6 text-white drop-shadow-lg">
              Vì sao chọn DI-ICHI
            </h2>

            <p className="mt-8 text-xl lg:text-2xl text-white/90 leading-relaxed font-serif">
              ICHI tự hào là đơn vị tiên phong trong lĩnh vực giáo dục hiện đại,
              mang đến cho trẻ em môi trường học tập sáng tạo, thực tiễn và phát
              triển toàn diện. Với phương châm “Học để phát triển tương lai”
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-8">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
          min-h-[350px]
          bg-white
          rounded-[32px]
          p-7
          shadow-[0_25px_60px_rgba(0,0,0,0.28)]
          flex flex-col items-center text-center
          border border-white/60
        "
              >
                <div
                  className="
            w-20 h-20
            rounded-3xl
            bg-yellow-100
            flex items-center justify-center
            text-4xl
            shadow-inner
          "
                >
                  ⭐
                </div>

                <h3 className="mt-8 text-[26px] font-black leading-tight text-black">
                  {item.title}
                </h3>

                <p className="mt-8 text-lg text-black leading-9">{item.desc}</p>
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
