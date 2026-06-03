import Image from "next/image";

import img1 from "./statics/1.jpg";
import img2 from "./statics/2.jpg";
import img3 from "./statics/3.jpg";
import img4 from "./statics/4.jpg";
import img5 from "./statics/5.jpg";

const images = [img1, img2, img3, img4, img5];

const highlights = [
  "Ứng dụng AI thúc đẩy sáng tạo và chuyển đổi số",
  "Game hóa giáo dục qua nền tảng Kahoot",
  "STEM Robotics - Lập trình robot và thực hiện nhiệm vụ",
  "Giáo dục Công dân số AI cho trường học",
];

const visions = [
  {
    title: "Tiên phong",
    desc: "Đưa công nghệ số vào chương trình đào tạo kỹ năng công dân số AI, STEM Robotics cho học sinh.",
  },
  {
    title: "Sáng tạo",
    desc: "Không ngừng cập nhật các công cụ AI mới nhất để hỗ trợ đội ngũ giáo viên.",
  },
  {
    title: "Trách nhiệm",
    desc: "Cam kết xây dựng môi trường mạng an toàn và văn minh cho trẻ em.",
  },
];

export default function TuanLeKhoaHocCongNgheTayNinh2026Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-800 to-yellow-50 px-4 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* CONTENT */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 text-sm font-black text-indigo-700">
                TÂY NINH 2026
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-blue-950 sm:text-5xl">
                ICHI ĐỒNG HÀNH CÙNG TUẦN LỄ
                <span className="block text-indigo-500">
                  KHOA HỌC CÔNG NGHỆ & CHUYỂN ĐỔI SỐ
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Hòa chung không khí sôi nổi của Tuần lễ Hội thảo khoa học{" "}
                <strong>
                  “Kết nối cung – cầu công nghệ trong lĩnh vực sản xuất – chế
                  biến và nông nghiệp công nghệ cao”
                </strong>{" "}
                diễn ra từ ngày <strong>18/03 đến 21/03/2026</strong> tại tỉnh
                Tây Ninh, Công ty ICHI tự hào là đơn vị tiên phong mang đến
                những giải pháp giáo dục hiện đại, góp phần định hình tương lai
                số cho thế hệ trẻ.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Sự kiện lần này không chỉ là nơi kết nối cung - cầu công nghệ mà
                còn là cơ hội để ICHI giới thiệu những nghiên cứu và ứng dụng
                công nghệ AI tân tiến nhất trong giáo dục.
              </p>

              <div className="mt-8 rounded-3xl bg-yellow-50 p-6">
                <h2 className="text-2xl font-black text-yellow-700">
                  Vai trò của ICHI tại sự kiện
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Tham gia sự kiện do UBND tỉnh Tây Ninh tổ chức, ICHI khẳng
                  định vai trò tiên phong trong việc đưa AI, STEM Robotics và
                  giáo dục công dân số vào môi trường học tập hiện đại.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-blue-900">
                  Những dấu ấn nổi bật của ICHI
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {highlights.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 shadow-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-700 text-lg font-black text-white">
                        {index + 1}
                      </div>
                      <p className="font-bold text-blue-950">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-blue-900">
                  Tầm nhìn chiến lược
                </h2>

                <div className="mt-5 space-y-4">
                  {visions.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl bg-slate-50 p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-black text-indigo-700">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-lg leading-8 text-slate-700">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-indigo-50 p-6">
                <h2 className="text-2xl font-black text-indigo-800">
                  Chuyển đổi số trong giáo dục
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  ICHI tin rằng, chuyển đổi số không chỉ là thay đổi công cụ, mà
                  là thay đổi cách chúng ta truyền cảm hứng cho thế hệ tương
                  lai.
                </p>
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-500 p-6 text-center shadow-xl">
                <p className="text-2xl font-black text-white">
                  ICHI – Tiên phong giáo dục số, kiến tạo tương lai!
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "#ICHI",
                  "#TayNinh2026",
                  "#KhoaHocCongNghe",
                  "#DoiMoiSangTao",
                  "#ChuyenDoiSo",
                  "#AI",
                  "#STEMRobotics",
                  "#CongDanSoAI",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE BOARD */}
            <div className="bg-gradient-to-br from-blue-800 via-indigo-700 to-yellow-400 p-5 sm:p-7">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="relative col-span-2 h-[280px] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={images[0]}
                    alt="ICHI đồng hành cùng Tuần lễ khoa học công nghệ đổi mới sáng tạo và chuyển đổi số Tây Ninh 2026"
                    fill
                    priority
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {images.slice(1).map((img, index) => (
                  <div
                    key={index}
                    className="relative h-[180px] overflow-hidden rounded-3xl shadow-xl"
                  >
                    <Image
                      src={img}
                      alt={`Tuần lễ khoa học công nghệ Tây Ninh 2026 ${index + 2}`}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
