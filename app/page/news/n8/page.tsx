import Image from "next/image";

import img1 from "./statics/1.jpg";
import img2 from "./statics/2.jpg";
import img3 from "./statics/3.jpg";
import img4 from "./statics/4.jpg";
import img5 from "./statics/5.jpg";
import img6 from "./statics/6.jpg";
import img7 from "./statics/7.jpg";
import img8 from "./statics/8.jpg";
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const skills = [
  "Phòng, chống tai nạn thương tích",
  "Phòng tránh xâm hại trẻ em",
  "Kỹ năng phòng tránh đuối nước",
  "Tự bảo vệ bản thân trong cuộc sống",
];

const values = ["Ý thức", "Trách nhiệm", "An toàn", "Hạnh phúc"];

export default function BaoVeTreEmTruongTieuHocBauDonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-950 via-sky-800 to-yellow-50 px-4 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* CONTENT */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-black text-cyan-700">
                BẢO VỆ TRẺ EM
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-cyan-950 sm:text-5xl">
                LAN TỎA GIÁ TRỊ
                <span className="block text-yellow-500">
                  CHUNG TAY BẢO VỆ TRẺ EM
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Hôm nay, <strong>Công ty Kỹ năng sống & STEM ICHI</strong> vinh
                dự phối hợp cùng{" "}
                <strong>Ban Thường vụ Đoàn Thanh niên xã Truông Mít</strong> và{" "}
                <strong>Hội Liên hiệp Phụ nữ</strong> tổ chức thành công chuyên
                đề:
              </p>

              <div className="mt-6 rounded-3xl bg-yellow-50 p-6">
                <p className="text-xl font-black leading-8 text-yellow-700">
                  “Phòng, chống tai nạn thương tích, xâm hại, đuối nước trẻ em”
                </p>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  Dành cho các em học sinh Trường Tiểu học Bàu Đồn, năm học 2025
                  – 2026.
                </p>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Chương trình đã mang đến nhiều kiến thức thiết thực, kỹ năng
                quan trọng giúp các em học sinh nâng cao nhận thức, biết cách tự
                bảo vệ bản thân trước những nguy cơ trong cuộc sống hàng ngày.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-cyan-900">
                  Nội dung kỹ năng trọng tâm
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {skills.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5 shadow-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-700 text-lg font-black text-white">
                        {index + 1}
                      </div>
                      <p className="font-bold text-cyan-950">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-slate-50 p-6">
                <h2 className="text-2xl font-black text-cyan-900">
                  Gieo mầm an toàn cho thế hệ tương lai
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Không chỉ là một buổi học, đây còn là hành trình gieo mầm ý
                  thức, trách nhiệm và sự an toàn cho thế hệ tương lai, góp phần
                  xây dựng môi trường học đường an toàn, hạnh phúc và phát triển
                  toàn diện.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-cyan-900">
                  Giá trị chương trình lan tỏa
                </h2>

                <div className="mt-5 space-y-3">
                  {values.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-cyan-50 px-5 py-4 font-bold text-cyan-800"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-yellow-50 p-6">
                <h2 className="text-2xl font-black text-yellow-700">
                  Lời cảm ơn từ ICHI
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  ICHI xin chân thành cảm ơn sự phối hợp chặt chẽ từ Ban Thường
                  vụ Đoàn Thanh niên xã Truông Mít, Hội Liên hiệp Phụ nữ cùng
                  quý thầy cô nhà trường đã tạo điều kiện để chương trình diễn
                  ra thành công tốt đẹp.
                </p>
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-cyan-700 to-yellow-500 p-6 text-center shadow-xl">
                <p className="text-2xl font-black text-white">
                  ICHI tiếp tục lan tỏa những giá trị giáo dục ý nghĩa đến cộng
                  đồng!
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "#ICHI",
                  "#KyNangSong",
                  "#BaoVeTreEm",
                  "#TruongHocAnToan",
                  "#GiaoDucThucTien",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE BOARD */}
            <div className="bg-gradient-to-br from-cyan-800 via-sky-700 to-yellow-400 p-5 sm:p-7">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="relative col-span-2 h-[740px] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={images[0]}
                    alt="ICHI chung tay bảo vệ trẻ em"
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
                      alt={`Chuyên đề bảo vệ trẻ em ${index + 2}`}
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
