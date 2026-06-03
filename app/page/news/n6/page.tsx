import Image from "next/image";

import img1 from "./statics/1.jpg";
import img2 from "./statics/2.jpg";
import img3 from "./statics/3.jpg";
import img4 from "./statics/4.jpg";
import img5 from "./statics/5.jpg";
import img6 from "./statics/6.jpg";
import img7 from "./statics/7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const activities = [
  "Robot tái hiện lịch sử Việt Nam",
  "Cờ vua đồng đội",
  "Gian hàng trưng bày sản phẩm STEM",
  "Quay số may mắn với nhiều phần quà",
];

const wishes = ["Bình an", "May mắn", "Vạn sự như ý", "Tỏa sáng đam mê"];

export default function HopMatSinhVienTayNinhPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-sky-800 to-yellow-50 px-4 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* CONTENT */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-black text-sky-700">
                HỌP MẶT SINH VIÊN TÂY NINH
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-blue-950 sm:text-5xl">
                ICHI – LAN TỎA TRI THỨC,
                <span className="block text-yellow-500">
                  KẾT NỐI TƯƠNG LAI TẠI TÂY NINH
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Trong không khí tưng bừng của những ngày giáp Tết Bính Ngọ 2026,
                khi sắc xuân đang tràn ngập khắp phố phường,{" "}
                <strong>
                  ICHI rất vinh dự được đồng hành cùng Chương trình Họp mặt Sinh
                  viên tỉnh Tây Ninh
                </strong>
                .
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Đây là dịp ý nghĩa để những người con ưu tú của quê hương hội
                ngộ, cùng nhau thắp sáng ước mơ và khát vọng vươn xa.
              </p>

              <div className="mt-8 rounded-3xl bg-yellow-50 p-6">
                <h2 className="text-2xl font-black text-yellow-700">
                  Trao tặng 10 suất học bổng
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Với phương châm{" "}
                  <strong>“Vững mãi tinh thần – Phụng sự Giáo dục”</strong>,
                  ICHI tự hào trao tặng <strong>10 suất học bổng</strong> cho
                  các bạn sinh viên Tây Ninh tiêu biểu, tiếp thêm động lực cho
                  những “mầm xanh” tài năng trên con đường chinh phục tri thức.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-blue-900">
                  Không gian trải nghiệm khoa học công nghệ
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {activities.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-sky-100 bg-sky-50 p-5 shadow-sm"
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
                  Lan tỏa tinh thần STEM
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Gian hàng của ICHI đã trở thành tâm điểm thu hút đông đảo các
                  bạn trẻ và sự quan tâm sâu sắc của lãnh đạo các đơn vị thông
                  qua những mô hình Robot tái hiện lịch sử, cờ vua đồng đội, sản
                  phẩm STEM và các hoạt động giao lưu sôi nổi.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-blue-900">
                  Lời chúc năm mới
                </h2>

                <div className="mt-5 space-y-3">
                  {wishes.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-blue-50 px-5 py-4 font-bold text-blue-800"
                    >
                      ✨ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-700 to-yellow-500 p-6 text-center shadow-xl">
                <p className="text-2xl font-black text-white">
                  Cùng ICHI thắp sáng tri thức và niềm tự hào dân tộc!
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "#ICHI",
                  "#TinhDoan",
                  "#HocBongTayNinh",
                  "#RobotLichSu",
                  "#STEM",
                  "#CoVuaDongDoi",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE BOARD */}
            <div className="bg-gradient-to-br from-blue-800 via-sky-700 to-yellow-400 p-5 sm:p-7">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="relative col-span-2 h-[280px] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={images[0]}
                    alt="ICHI đồng hành cùng chương trình Họp mặt Sinh viên Tây Ninh"
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
                      alt={`ICHI tại Họp mặt Sinh viên Tây Ninh ${index + 2}`}
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
