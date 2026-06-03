import Image from "next/image";

import img1 from "./statics/1.jpg";
import img2 from "./statics/2.jpg";
import img3 from "./statics/3.jpg";
import img4 from "./statics/4.jpg";
import img5 from "./statics/5.jpg";
import img6 from "./statics/6.jpg";
import img7 from "./statics/7.jpg";
const images = [img1, img2, img3, img4, img5, img6, img7];

const events = [
  "Ngày Giỗ Tổ Hùng Vương Mùng 10 Tháng 3",
  "Ngày Giải phóng miền Nam thống nhất đất nước 30/4",
  "Ngày Quốc tế Lao động 1/5",
  "Giao lưu thể thao Pickleball giữa các đơn vị",
];

const units = [
  "Ban Chỉ Huy Phòng Thủ Khu vực 3",
  "Công ty ICHI",
  "Ngân hàng MB Bank",
  "Phòng Chính trị - Sư đoàn 5",
];

export default function GiaoLuuTheThaoPickleballPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-950 via-orange-800 to-yellow-50 px-4 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative p-8 sm:p-12 lg:p-14">
              <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-black text-red-700">
                GIAO LƯU THỂ THAO
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-red-950 sm:text-5xl">
                CHÀO MỪNG 3 SỰ KIỆN
                <span className="block text-yellow-500">
                  TRỌNG ĐẠI CỦA ĐẤT NƯỚC
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Chào mừng{" "}
                <strong>Ngày Giỗ Tổ Hùng Vương Mùng 10 Tháng 3</strong>,{" "}
                <strong>
                  Ngày Giải phóng miền Nam thống nhất đất nước 30/4
                </strong>{" "}
                và <strong>Ngày Quốc tế Lao động 1/5</strong>, Ban Chỉ Huy Phòng
                Thủ Khu vực 3 đăng cai tổ chức chương trình giao lưu thể thao{" "}
                <strong>Pickleball</strong> cùng các đơn vị đồng hành.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-red-900">
                  Các dấu mốc ý nghĩa
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {events.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-700 text-lg font-black text-white">
                        {index + 1}
                      </div>
                      <p className="font-bold text-red-950">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-yellow-50 p-6">
                <h2 className="text-2xl font-black text-yellow-700">
                  Các đơn vị tham gia
                </h2>

                <div className="mt-5 space-y-3">
                  {units.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white px-5 py-4 font-bold text-slate-700 shadow-sm"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-slate-50 p-6">
                <h2 className="text-2xl font-black text-red-900">
                  Rèn luyện sức khỏe – Gắn kết tinh thần
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Đây không chỉ là dịp để cán bộ, nhân viên rèn luyện sức khỏe,
                  thể dục thể thao theo gương Bác Hồ vĩ đại, mà còn là cơ hội để
                  gắn kết, giao lưu và học hỏi giữa các đơn vị.
                </p>
              </div>

              <div className="mt-8 rounded-3xl bg-orange-50 p-6">
                <h2 className="text-2xl font-black text-orange-700">
                  Tinh thần đồng đội trên từng pha bóng
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Từng pha bóng, từng điểm số đều được cổ vũ nồng nhiệt, thể
                  hiện tinh thần đoàn kết, đồng đội và khát vọng chinh phục thử
                  thách.
                </p>
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-red-700 to-yellow-500 p-6 text-center shadow-xl">
                <p className="text-2xl font-black text-white">
                  Cùng nhìn lại những khoảnh khắc đáng nhớ này!
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "#ICHI",
                  "#Pickleball",
                  "#GiaoLuuTheThao",
                  "#DoanKet",
                  "#30Thang4",
                  "#QuocTeLaoDong",
                  "#GioToHungVuong",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-800 via-orange-700 to-yellow-400 p-5 sm:p-7">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="relative col-span-2 h-[280px] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={images[0]}
                    alt="Giao lưu thể thao Pickleball"
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
                      alt={`Khoảnh khắc giao lưu Pickleball ${index + 2}`}
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
