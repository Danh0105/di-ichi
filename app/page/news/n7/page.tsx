import Image from "next/image";

import img1 from "./statics/1.jpg";
import img2 from "./statics/2.jpg";
import img3 from "./statics/3.jpg";

const images = [img1, img2, img3];

const values = [
  "Ý chí cách mạng kiên cường",
  "Tinh thần độc lập tự chủ",
  "Lòng yêu nước, thương dân",
  "Cống hiến trọn đời vì nhân dân",
];

export default function KyNiemNgaySinhBacHoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-950 via-red-800 to-yellow-50 px-4 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* CONTENT */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-black text-red-700">
                19/5/1890 - 19/5/2026
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-red-950 sm:text-5xl">
                KỶ NIỆM 136 NĂM NGÀY SINH
                <span className="block text-yellow-500">
                  CHỦ TỊCH HỒ CHÍ MINH VĨ ĐẠI
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Tháng 5 về, cùng với cả nước, chúng ta lại bồi hồi, thành kính
                nhớ đến <strong>Bác Hồ kính yêu</strong> – Vị lãnh tụ thiên tài
                của Đảng và nhân dân ta, Anh hùng giải phóng dân tộc, Nhà văn
                hóa kiệt xuất của Việt Nam.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Cả cuộc đời Bác là một biểu tượng cao đẹp về ý chí cách mạng
                kiên cường, tinh thần độc lập tự chủ, lòng yêu nước, thương dân
                tha thiết.
              </p>

              <div className="mt-8 rounded-3xl bg-yellow-50 p-6">
                <h2 className="text-2xl font-black text-yellow-700">
                  Công lao vĩ đại của Người
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Bác đã hiến dâng trọn đời mình cho sự nghiệp giải phóng dân
                  tộc, mang lại cuộc sống ấm no, tự do, hạnh phúc cho nhân dân.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-red-900">
                  Những giá trị sáng mãi
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {values.map((item, index) => (
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

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-red-700 to-yellow-500 p-6 text-center shadow-xl">
                <p className="text-2xl font-black text-white">
                  “Chủ tịch Hồ Chí Minh vĩ đại sống mãi trong sự nghiệp của
                  chúng ta!”
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "#ICHI",
                  "#HoChiMinh",
                  "#NgaySinhBacHo",
                  "#19Thang5",
                  "#TuHaoVietNam",
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

            {/* IMAGE BOARD */}
            <div className="bg-gradient-to-br from-red-800 via-red-700 to-yellow-400 p-5 sm:p-7">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="relative col-span-2 h-[740px] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={images[0]}
                    alt="Kỷ niệm 136 năm ngày sinh Chủ tịch Hồ Chí Minh"
                    fill
                    priority
                    className="object-contain transition duration-500 hover:scale-105"
                  />
                </div>

                {images.slice(1).map((img, index) => (
                  <div
                    key={index}
                    className="relative h-[420px] overflow-hidden rounded-3xl shadow-xl"
                  >
                    <Image
                      src={img}
                      alt={`Kỷ niệm ngày sinh Bác Hồ ${index + 2}`}
                      fill
                      className="object-contain transition duration-500 hover:scale-105"
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
