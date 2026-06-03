import Image from "next/image";

import img2 from "./statics/1.jpg";
import img1 from "./statics/2.jpg";

const images = [img1, img2];

const highlights = [
  "Lãnh đạo UBND Phường Gò Dầu đến thăm và chúc Tết",
  "Nguyên Lãnh đạo UBND Huyện Gò Dầu cũ tham dự",
  "Không khí gặp gỡ vui tươi, đầm ấm, nghĩa tình",
  "Tiếp thêm động lực cho ICHI trong hành trình giáo dục",
];

const wishes = ["Sức khỏe", "Hạnh phúc", "An khang", "Thịnh vượng"];

export default function ThamVaChucTetPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-950 via-red-800 to-yellow-50 px-4 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* CONTENT */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-black text-red-700">
                ICHI CHÚC TẾT
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-red-900 sm:text-5xl">
                ICHI VINH DỰ ĐÓN TIẾP LÃNH ĐẠO
                <span className="block text-yellow-500">
                  ĐẾN THĂM VÀ CHÚC TẾT
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Hôm nay, trong không khí rộn ràng của những ngày cận Tết, Công
                ty ICHI vô cùng vinh dự được đón tiếp{" "}
                <strong>Lãnh đạo UBND Phường Gò Dầu</strong> cùng{" "}
                <strong>Nguyên Lãnh đạo UBND Huyện Gò Dầu cũ</strong>, tỉnh Tây
                Ninh đến thăm và chúc Tết công ty.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Buổi gặp gỡ diễn ra trong không khí vui tươi, đầm ấm và đầy
                nghĩa tình, thể hiện sự quan tâm, động viên quý báu của lãnh đạo
                địa phương đối với tập thể ICHI.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-red-800">
                  Những dấu ấn ý nghĩa
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {highlights.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-700 text-lg font-black text-white">
                        {index + 1}
                      </div>
                      <p className="font-bold text-red-900">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-yellow-50 p-6">
                <h2 className="text-2xl font-black text-yellow-700">
                  Lời cảm ơn từ ICHI
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Đại diện ICHI xin trân trọng cảm ơn những lời chúc tốt đẹp và
                  sự quan tâm sâu sắc của quý lãnh đạo. Đây là niềm vinh dự lớn
                  và cũng là nguồn động lực tinh thần to lớn để công ty tiếp tục
                  nỗ lực trên hành trình đồng hành cùng giáo dục kỹ năng sống,
                  STEM cho thế hệ trẻ.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-red-800">
                  Kính chúc quý lãnh đạo
                </h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {wishes.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-red-50 px-5 py-4 font-bold text-red-800"
                    >
                      ✨ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-slate-50 p-6 text-slate-700">
                <p className="text-lg leading-8">
                  <strong>ICHI cam kết</strong> sẽ không ngừng đổi mới, nâng cao
                  chất lượng hoạt động, góp phần tích cực vào sự phát triển giáo
                  dục và cộng đồng địa phương.
                </p>
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-red-700 to-yellow-500 p-6 text-center shadow-xl">
                <p className="text-2xl font-black text-white">
                  Xuân mới – Khí thế mới – Quyết tâm mới!
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "#ICHI",
                  "#ThamVaChucTet",
                  "#KetNoiGiaTri",
                  "#DongHanhCungGiaoDuc",
                  "#XuanAnKhang",
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
                <div className="relative col-span-2 h-[280px] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={images[0]}
                    alt="ICHI đón tiếp lãnh đạo thăm và chúc Tết"
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
                      alt={`ICHI chúc Tết ${index + 2}`}
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
