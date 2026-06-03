import Image from "next/image";

import img1 from "./statics/1.jpg";
import img2 from "./statics/2.jpg";
import img3 from "./statics/3.jpg";
import img4 from "./statics/4.jpg";
import img5 from "./statics/5.jpg";

const images = [img1, img2, img3, img4, img5];

const experiences = [
  "Căn tin thông minh - Smart Canteen",
  "Thanh toán số không tiền mặt",
  "Không gian STEM & Trí tuệ nhân tạo AI",
  "Robot, mô hình giải phẫu và giáo cụ trực quan",
];

const values = [
  "Công dân số",
  "Tư duy công nghệ",
  "Giáo dục STEM",
  "Chuyển đổi số giáo dục",
];

export default function ChuyenDongSoGiaoDucTanHoaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-800 to-yellow-50 px-4 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* CONTENT */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-black text-cyan-700">
                PHƯỜNG TÂN HÒA 2026
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-blue-950 sm:text-5xl">
                ICHI TẠI NGÀY HỘI
                <span className="block text-cyan-500">
                  “CHUYỂN ĐỘNG SỐ GIÁO DỤC”
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Vừa qua <strong>(16/05/2026)</strong>, đội ngũ ICHI vô cùng tự
                hào khi được đồng hành cùng <strong>UBND Phường Tân Hòa</strong>{" "}
                tổ chức thành công{" "}
                <strong>
                  “Ngày hội Vận hành Công nghệ - Chuyển động số Giáo dục năm
                  2026”
                </strong>
                .
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Sự kiện đã thu hút đông đảo sự quan tâm của các cấp lãnh đạo,
                quý thầy cô, phụ huynh và đặc biệt là các em học sinh trên địa
                bàn.
              </p>

              <div className="mt-8 rounded-3xl bg-yellow-50 p-6">
                <h2 className="text-2xl font-black text-yellow-700">
                  Mang công nghệ đến gần hơn với học sinh
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Đến với ngày hội năm nay, ICHI không chỉ mang đến những giải
                  pháp giáo dục tiên tiến mà còn tạo ra những trải nghiệm thực
                  tế cực kỳ sống động, giúp các em học sinh được trực tiếp chạm
                  tay vào công nghệ.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-blue-900">
                  Trải nghiệm nổi bật tại ngày hội
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {experiences.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5 shadow-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-lg font-black text-white">
                        {index + 1}
                      </div>
                      <p className="font-bold text-blue-950">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-slate-50 p-6">
                <h2 className="text-2xl font-black text-blue-900">
                  Smart Canteen - Căn tin thông minh
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Với màn hình cảm ứng tương tác hiện đại, các em được trực tiếp
                  thao tác chọn món, trải nghiệm thanh toán số không tiền mặt và
                  bước đầu hình thành thói quen của những{" "}
                  <strong>“công dân số”</strong> thực thụ ngay từ trên ghế nhà
                  trường.
                </p>
              </div>

              <div className="mt-8 rounded-3xl bg-cyan-50 p-6">
                <h2 className="text-2xl font-black text-cyan-800">
                  Không gian STEM & Trí tuệ nhân tạo AI
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Không gian STEM và AI đã khơi dậy niềm đam mê khoa học thông
                  qua các mô hình giải phẫu, robot và bộ giáo cụ trực quan. Đội
                  ngũ ICHI luôn sẵn sàng hỗ trợ, mang công nghệ đến gần hơn với
                  các em học sinh.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-blue-900">
                  Giá trị cộng đồng lan tỏa
                </h2>

                <div className="mt-5 space-y-3">
                  {values.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-blue-50 px-5 py-4 font-bold text-blue-800"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-yellow-50 p-6">
                <h2 className="text-2xl font-black text-yellow-700">
                  Lan tỏa giá trị cộng đồng
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  ICHI vinh dự được nhận thư cảm ơn từ ban tổ chức và tự hào góp
                  phần trao tặng các suất kinh phí hỗ trợ, giúp các em học sinh
                  tiêu biểu có thêm cơ hội tiếp cận với công nghệ hiện đại.
                </p>
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 p-6 text-center shadow-xl">
                <p className="text-2xl font-black text-white">
                  Kiến tạo thế hệ Công dân số toàn diện!
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "#ICHI",
                  "#CongDanSo",
                  "#GiaoDucSTEM",
                  "#TriTueNhanTao",
                  "#AI",
                  "#ChuyenDoiSoGiaoDuc",
                  "#SmartCanteen",
                  "#CanTinThongMinh",
                  "#NgayHoiCongNghe",
                  "#PhuongTanHoa",
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
            <div className="bg-gradient-to-br from-blue-800 via-cyan-700 to-yellow-400 p-5 sm:p-7">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="relative col-span-2 h-[280px] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={images[0]}
                    alt="ICHI tại ngày hội Chuyển động số Giáo dục Phường Tân Hòa 2026"
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
                      alt={`Ngày hội Chuyển động số Giáo dục ${index + 2}`}
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
