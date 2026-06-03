import Image from "next/image";

import img1 from "./statics/1.jpg";
import img2 from "./statics/2.jpg";
import img3 from "./statics/3.jpg";
import img4 from "./statics/4.jpg";
import img5 from "./statics/5.jpg";
import img6 from "./statics/6.jpg";
const images = [img1, img2, img3, img4, img5, img6];

const highlights = [
  "Diễn đàn Công nghệ Giáo dục EDTECH VIETNAM 2026 quay trở lại",
  "Chủ đề: Giáo dục số trong kỷ nguyên AI",
  "ICHI là đơn vị đồng hành cùng chương trình",
  "Kết nối công nghệ tiên tiến với chuyển đổi số giáo dục",
];

const solutions = [
  "Tin học chuẩn quốc tế ICDL",
  "Lập trình STEM Robot",
  "Công dân số AI STEM",
  "Giải pháp đào tạo kỹ năng số",
];

export default function EdtechVietnam2026Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-800 to-yellow-50 px-4 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* CONTENT */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-sm font-black text-cyan-700">
                EDTECH VIETNAM 2026
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-blue-950 sm:text-5xl">
                ICHI VINH DỰ ĐỒNG HÀNH CÙNG
                <span className="block text-cyan-500">EDTECH VIETNAM 2026</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Năm 2026,{" "}
                <strong>
                  Diễn đàn Công nghệ Giáo dục – EDTECH VIETNAM 2026
                </strong>{" "}
                với chủ đề <strong>“Giáo dục số trong kỷ nguyên AI”</strong>{" "}
                chính thức quay trở lại với quy mô và chiều sâu được nâng cấp
                mạnh mẽ.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                ICHI tự hào là đơn vị đồng hành, góp phần kết nối các giải pháp
                công nghệ tiên tiến với nhu cầu chuyển đổi số trong giáo dục
                Việt Nam.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-blue-50 p-6">
                  <p className="text-sm font-black uppercase text-blue-500">
                    Thời gian
                  </p>
                  <p className="mt-2 text-2xl font-black text-blue-950">
                    10–11/04/2026
                  </p>
                </div>

                <div className="rounded-3xl bg-cyan-50 p-6">
                  <p className="text-sm font-black uppercase text-cyan-500">
                    Địa điểm
                  </p>
                  <p className="mt-2 text-xl font-black text-blue-950">
                    Trung tâm Khởi nghiệp Sáng tạo TP.HCM
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-blue-900">
                  Điểm nổi bật của diễn đàn
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {highlights.map((item, index) => (
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
                  Cơ hội để ICHI lan tỏa giá trị
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Diễn đàn quy tụ hơn <strong>1.000 đại biểu</strong> là lãnh
                  đạo, chuyên gia và cộng đồng công nghệ – giáo dục trên cả
                  nước. Đây không chỉ là cơ hội để ICHI giới thiệu các giải pháp
                  đào tạo chuẩn quốc tế, mà còn là dịp kết nối, học hỏi và cùng
                  kiến tạo tương lai giáo dục số.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-blue-900">
                  Giải pháp ICHI giới thiệu
                </h2>

                <div className="mt-5 space-y-3">
                  {solutions.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-yellow-50 px-5 py-4 font-bold text-yellow-800"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 p-6 text-center shadow-xl">
                <p className="text-2xl font-black text-white">
                  Cùng ICHI lan tỏa tri thức – đón đầu kỷ nguyên AI!
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "#ICHI",
                  "#EDTECH2026",
                  "#ChuyenDoiSo",
                  "#GiaoDucSo",
                  "#AI",
                  "#STEM",
                  "#ICDL",
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
                    alt="ICHI đồng hành cùng EDTECH VIETNAM 2026"
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
                      alt={`EDTECH VIETNAM 2026 ${index + 2}`}
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
