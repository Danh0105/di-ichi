import Image from "next/image";
import Link from "next/link";

import img1 from "./statics/1.jpg";
import img2 from "./statics/2.jpg";
import img3 from "./statics/3.jpg";
import img4 from "./statics/4.jpg";
import img5 from "./statics/5.jpg";

const images = [img1, img2, img3, img4, img5];

const dailyLessons = [
  "Rửa bát sau bữa ăn",
  "Giặt đồ cá nhân",
  "Dọn dẹp phòng ở",
  "Gần gũi với thiên nhiên",
];

const values = ["Độc lập", "Kỷ luật", "Trưởng thành"];

export default function TruongThanhMoiNgayPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-950 via-emerald-900 to-yellow-50 px-4 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* CONTENT */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-black text-green-700">
                HỌC KỲ TRONG QUÂN NGŨ 2026
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-green-900 sm:text-5xl">
                TRƯỞNG THÀNH HƠN
                <span className="block text-yellow-500">
                  TỪ NHỮNG ĐIỀU GIẢN DỊ MỖI NGÀY
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                <strong>Học kỳ trong Quân Ngũ</strong> không chỉ là nơi các em
                trải nghiệm môi trường kỷ luật, mà còn là hành trình học cách
                sống tự lập từ những thói quen nhỏ.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Những việc quen thuộc nhưng đôi khi chưa từng tự tay làm ở nhà
                như rửa bát, giặt đồ, dọn dẹp phòng ở… lại trở thành những bài
                học mỗi ngày, giúp các chiến sĩ nhí dần hình thành tinh thần
                trách nhiệm và sự chủ động trong sinh hoạt.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-green-800">
                  Những bài học giản dị mỗi ngày
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {dailyLessons.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-green-100 bg-green-50 p-5 shadow-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-lg font-black text-white">
                        {index + 1}
                      </div>
                      <p className="font-bold text-green-900">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-yellow-50 p-6">
                <h2 className="text-2xl font-black text-yellow-700">
                  Trải nghiệm để biết trân trọng lao động
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Thông qua các hoạt động sinh hoạt thực tế, các em có cơ hội
                  gần gũi hơn với thiên nhiên, hiểu và trân trọng giá trị của
                  lao động một cách chân thực.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-green-800">
                  Giá trị con nhận được
                </h2>

                <div className="mt-5 space-y-3">
                  {values.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-green-50 px-5 py-4 font-bold text-green-800"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-slate-50 p-6 text-slate-700">
                <p>
                  📞 <strong>Hỗ trợ:</strong> 0987 811 771 - Cô Kim Hương
                </p>
                <p className="mt-2">
                  📍 <strong>ICHI</strong> – Đồng hành cùng sự trưởng thành của
                  con.
                </p>
              </div>

              <Link
                href="https://forms.gle/3R97ojwo8pRQLy2PA"
                target="_blank"
                className="mt-8 inline-flex rounded-2xl bg-green-700 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:bg-green-800"
              >
                Đăng ký ngay
              </Link>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-green-700 to-yellow-500 p-6 text-center shadow-xl">
                <p className="text-2xl font-black text-white">
                  Một mùa hè ý nghĩa đang chờ đón các chiến sĩ nhí!
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["#ICHI", "#ChienSiNhi", "#HocKyQuanDoi"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE BOARD */}
            <div className="bg-gradient-to-br from-green-800 via-green-700 to-yellow-400 p-5 sm:p-7">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="relative col-span-2 h-[280px] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={images[0]}
                    alt="Học kỳ trong Quân Ngũ 2026"
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
                      alt={`Chiến sĩ nhí trưởng thành ${index + 2}`}
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
