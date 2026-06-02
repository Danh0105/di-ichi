import Image from "next/image";
import img1 from "./statics/1.jpg";
import img2 from "./statics/2.jpg";
import img3 from "./statics/3.jpg";
import img4 from "./statics/4.jpg";
import img5 from "./statics/5.jpg";

const images = [img1, img2, img3, img4, img5];

export default function DaiLe304Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-white px-4 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl ring-1 ring-red-100">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
            {/* CONTENT */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-red-600 via-yellow-400 to-red-600" />

              <p className="mb-4 inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-bold text-red-700">
                ICHI • Chào mừng đại lễ
              </p>

              <h1 className="text-4xl font-black leading-tight text-red-700 sm:text-5xl lg:text-6xl">
                CHÀO MỪNG ĐẠI LỄ
                <span className="block text-yellow-500">30/4 & 1/5</span>
              </h1>

              <div className="mt-8 space-y-5 text-[17px] leading-8 text-slate-700">
                <p>
                  Hòa trong không khí hân hoan của cả nước, công ty{" "}
                  <strong className="text-red-700">ICHI</strong> xin gửi lời
                  chúc mừng nồng nhiệt nhân dịp kỷ niệm Ngày Giải phóng miền Nam
                  30/4 và Ngày Quốc tế Lao động 1/5.
                </p>

                <p>
                  Đây là dịp để chúng ta cùng ôn lại truyền thống hào hùng của
                  dân tộc, đồng thời trân trọng những giá trị của hòa bình, độc
                  lập và lao động.
                </p>

                <p>
                  Kính chúc Quý đối tác, quý Phụ huynh, Thầy Cô và các em học
                  sinh sẽ có những ngày nghỉ thật ý nghĩa, an toàn và tràn đầy
                  niềm vui bên gia đình.
                </p>

                <p className="text-xl font-black text-red-700">
                  Chúc mọi người một kỳ nghỉ lễ vui vẻ – bình an – hạnh phúc!
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["#30thang4", "#1thang5", "#TuhaoVietNam", "#ICHI"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* IMAGE BOARD */}
            <div className="bg-gradient-to-br from-red-600 via-red-500 to-yellow-400 p-5 sm:p-7">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="relative col-span-2 h-[260px] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={images[0]}
                    alt="Chào mừng đại lễ 30/4 và 1/5"
                    fill
                    priority
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {images.slice(1).map((img, index) => (
                  <div
                    key={index}
                    className="relative h-[170px] overflow-hidden rounded-3xl shadow-xl"
                  >
                    <Image
                      src={img}
                      alt={`Hoạt động chào mừng đại lễ ${index + 2}`}
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
