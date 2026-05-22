import Image from "next/image";
import LOGO1 from "./static/LOGO1.png";

const introImages = [
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-800">
      {/* TOPBAR */}
      <div className="bg-yellow-400 text-sm py-2 px-4 flex justify-between items-center">
        <p>Chào mừng bạn đến với DI-ICHI</p>

        <div className="flex gap-4 font-semibold">
          <button>Đăng nhập</button>
          <button>Đăng ký</button>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={LOGO1}
              alt="DI-ICHI Logo"
              width={70}
              height={70}
              className="object-contain"
            />

            <div>
              <h1 className="text-3xl font-black text-yellow-500">DI-ICHI</h1>

              <p className="text-sm text-gray-500">
                Kỹ năng sống & STEM Education
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex gap-8 font-bold text-sm">
            <a href="#" className="hover:text-yellow-500 transition">
              Trang chủ
            </a>

            <a href="#" className="text-yellow-500">
              Giới thiệu
            </a>

            <a href="#" className="hover:text-yellow-500 transition">
              Khóa học
            </a>

            <a href="#" className="hover:text-yellow-500 transition">
              Hoạt động
            </a>

            <a href="#" className="hover:text-yellow-500 transition">
              Tin tức
            </a>

            <a href="#" className="hover:text-yellow-500 transition">
              Liên hệ
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-sm font-bold text-white">
            Giới thiệu
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-white mt-5">
            Về Trung Tâm DI-ICHI
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-white/90 text-lg leading-9">
            Trung tâm đào tạo kỹ năng sống, STEM và Robotics dành cho trẻ em,
            giúp học sinh phát triển toàn diện về tư duy, sáng tạo và kỹ năng
            công nghệ trong thời đại mới.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-500 font-black uppercase tracking-widest">
              Câu chuyện DI-ICHI
            </p>

            <h3 className="text-5xl font-black mt-4 leading-tight">
              Môi trường giáo dục hiện đại dành cho trẻ em
            </h3>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              DI-ICHI được thành lập với sứ mệnh mang đến môi trường học tập
              sáng tạo, hiện đại và truyền cảm hứng cho thế hệ trẻ.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-9">
              Chúng tôi tập trung phát triển kỹ năng sống, STEM, Robotics và tư
              duy sáng tạo giúp học sinh tự tin hội nhập trong thời đại công
              nghệ số.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-white shadow-lg rounded-3xl p-8">
                <h4 className="text-4xl font-black text-yellow-500">10+</h4>

                <p className="mt-3 text-gray-600 font-semibold">
                  Năm kinh nghiệm
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-3xl p-8">
                <h4 className="text-4xl font-black text-blue-500">5000+</h4>

                <p className="mt-3 text-gray-600 font-semibold">Học viên</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
              alt="Education"
              width={700}
              height={700}
              className="rounded-[40px] shadow-2xl object-cover h-[600px]"
            />

            <div className="absolute -bottom-10 -left-10 bg-yellow-400 text-white rounded-3xl p-8 shadow-2xl">
              <h4 className="text-4xl font-black">100%</h4>

              <p className="mt-2 font-semibold">Giáo trình thực hành thực tế</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-yellow-500 font-black uppercase tracking-widest">
              Tầm nhìn & Sứ mệnh
            </p>

            <h3 className="text-5xl font-black mt-4">
              Giá trị giáo dục bền vững
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-yellow-50 rounded-[35px] p-10">
              <div className="text-5xl">🎯</div>

              <h4 className="text-3xl font-black mt-6">Tầm nhìn</h4>

              <p className="mt-6 text-gray-600 leading-8 text-lg">
                Trở thành trung tâm giáo dục kỹ năng và STEM hàng đầu dành cho
                trẻ em tại Việt Nam.
              </p>
            </div>

            <div className="bg-blue-50 rounded-[35px] p-10">
              <div className="text-5xl">🚀</div>

              <h4 className="text-3xl font-black mt-6">Sứ mệnh</h4>

              <p className="mt-6 text-gray-600 leading-8 text-lg">
                Giúp học sinh phát triển toàn diện tư duy sáng tạo, kỹ năng mềm
                và khả năng công nghệ.
              </p>
            </div>

            <div className="bg-green-50 rounded-[35px] p-10">
              <div className="text-5xl">⭐</div>

              <h4 className="text-3xl font-black mt-6">Giá trị cốt lõi</h4>

              <p className="mt-6 text-gray-600 leading-8 text-lg">
                Sáng tạo - Trách nhiệm - Kỷ luật - Đồng hành cùng học sinh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-yellow-500 font-black uppercase tracking-widest">
              Hình ảnh hoạt động
            </p>

            <h3 className="text-5xl font-black mt-4">
              Hoạt động nổi bật tại DI-ICHI
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {introImages.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[35px] shadow-xl group"
              >
                <Image
                  src={item.image}
                  alt="Activity"
                  width={500}
                  height={500}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-yellow-500 font-black uppercase tracking-widest">
            Đội ngũ
          </p>

          <h3 className="text-5xl font-black mt-4">
            Đội ngũ giáo viên chất lượng
          </h3>

          <p className="mt-8 text-lg text-gray-600 leading-9">
            Đội ngũ giáo viên tại DI-ICHI luôn tận tâm, giàu kinh nghiệm và
            không ngừng đổi mới phương pháp giảng dạy để mang lại trải nghiệm
            học tập tốt nhất cho học sinh.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-yellow-400 py-16 mt-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-3xl font-black mb-6">DI-ICHI</h4>

            <p className="leading-8 font-medium">
              Trung tâm đào tạo kỹ năng sống, STEM và Robotics dành cho trẻ em.
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-black mb-6">Liên hệ</h4>

            <div className="space-y-4 font-medium">
              <p>📍 Quận Tân Bình, TP.HCM</p>
              <p>📞 0707 868 000</p>
              <p>✉️ contact@di-ichi.vn</p>
            </div>
          </div>

          <div>
            <h4 className="text-3xl font-black mb-6">Menu</h4>

            <div className="space-y-4 font-medium">
              <p>Trang chủ</p>
              <p>Giới thiệu</p>
              <p>Khóa học</p>
              <p>Tin tức</p>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500 mt-12 pt-6 text-center text-sm font-semibold">
          © 2026 DI-ICHI Education. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
