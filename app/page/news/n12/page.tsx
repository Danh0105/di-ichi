import Image from "next/image";
import Link from "next/link";

import img1 from "./statics/1.jpg";

const images = [img1];

const participants = [
  "Học sinh đang tham gia học chương trình giáo dục ICHI",
  "Giáo viên đang tham gia giảng dạy chương trình Giáo dục ICHI",
];

const studentContents = [
  "Video ghi lại quá trình làm món quà gửi tặng Thầy/Cô",
  "Video chia sẻ câu chuyện, kỷ niệm về Thầy/Cô",
  "Video ghi lại khoảnh khắc vui tươi, bài học ý nghĩa",
  "Video thiết kế dành tặng riêng Thầy/Cô như bài hát, bài thơ",
];

const teacherContents = [
  "Video ghi lại khoảnh khắc miệt mài bên giáo án",
  "Video về kỷ niệm đẹp khi đến trường",
  "Video những giờ dạy học ý nghĩa bên học sinh",
  "Video kỷ niệm ấn tượng cùng học sinh trong và sau giờ học",
];

const requirements = [
  "Video dài tối thiểu 1 phút và tối đa 4 phút",
  "Có tiêu đề rõ ràng, kèm logo công ty ICHI",
  "Trang phục lịch sự, hình ảnh chân thật, sắc nét",
  "Phông nền phù hợp với chủ đề cuộc thi",
  "Khuyến khích ứng dụng AI để tăng tính sáng tạo",
];

const timeline = [
  {
    title: "Nhận bài dự thi",
    time: "29/10/2025 - 17h00 ngày 15/11/2025",
  },
  {
    title: "Bình chọn",
    time: "16/11/2025 - 17h00 ngày 19/11/2025",
  },
  {
    title: "Công bố kết quả",
    time: "22/11/2025",
  },
];

export default function ThayCoTrongTraiTimEmMua4Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-950 via-rose-800 to-yellow-50 px-4 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* CONTENT */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <span className="inline-flex rounded-full bg-rose-100 px-5 py-2 text-sm font-black text-rose-700">
                CUỘC THI MÙA 4
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-rose-950 sm:text-5xl">
                THẦY CÔ TRONG
                <span className="block text-yellow-500">TRÁI TIM EM</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                <strong>Thầy Cô</strong> – hai tiếng thân thương ấy chứa đựng cả
                một bầu trời tri thức, tình yêu thương và sự hy sinh thầm lặng.
                Nếu cha mẹ cho ta hình hài, thì thầy cô là những người đã ân cần
                xây đắp tâm hồn, chắp cánh cho những ước mơ và lặng lẽ gieo mầm
                nhân cách.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Dù thời gian có trôi đi, dù ta có trưởng thành và bước đến bất
                kỳ chân trời nào, công ơn <strong>“người lái đò”</strong> vẫn
                mãi khắc sâu trong tim.
              </p>

              <div className="mt-8 rounded-3xl bg-yellow-50 p-6">
                <h2 className="text-2xl font-black text-yellow-700">
                  Đừng ngần ngại, hãy gửi đi lời yêu thương!
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Hãy tham gia ngay{" "}
                  <strong>“Thầy Cô Trong Trái Tim Em - Mùa 4”</strong> do ICHI
                  tổ chức. Đây không chỉ là một cuộc thi, mà là nhịp cầu yêu
                  thương để mỗi học trò có cơ hội bày tỏ lòng biết ơn, kể lại
                  những kỷ niệm xúc động hoặc gửi đi lời chúc chân thành nhất
                  đến những người đã dành trọn đời mình cho sự nghiệp{" "}
                  <strong>“trồng người”</strong> cao quý.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-rose-900">
                  Đối tượng tham gia
                </h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {participants.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-rose-100 bg-rose-50 p-5 shadow-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-700 text-lg font-black text-white">
                        {index + 1}
                      </div>
                      <p className="font-bold text-rose-950">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-slate-50 p-6">
                <h2 className="text-2xl font-black text-rose-900">
                  Nội dung dự thi dành cho học sinh
                </h2>

                <div className="mt-5 space-y-3">
                  {studentContents.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white px-5 py-4 font-bold text-slate-700 shadow-sm"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-rose-50 p-6">
                <h2 className="text-2xl font-black text-rose-900">
                  Nội dung dự thi dành cho giáo viên
                </h2>

                <div className="mt-5 space-y-3">
                  {teacherContents.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white px-5 py-4 font-bold text-slate-700 shadow-sm"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-black text-rose-900">
                  Thể lệ và hình thức trình bày
                </h2>

                <div className="mt-5 space-y-3">
                  {requirements.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-yellow-50 px-5 py-4 font-bold text-yellow-800"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-slate-50 p-6">
                <h2 className="text-2xl font-black text-rose-900">
                  Mốc thời gian quan trọng
                </h2>

                <div className="mt-5 space-y-4">
                  {timeline.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <p className="text-sm font-black text-rose-500">
                        Mốc {index + 1}
                      </p>
                      <p className="mt-1 text-lg font-black text-rose-950">
                        {item.title}
                      </p>
                      <p className="mt-1 font-bold text-slate-600">
                        {item.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-yellow-50 p-6 text-slate-700">
                <p>
                  📞 <strong>Liên hệ/Tư vấn:</strong> 0987 811 771 - Cô Kim
                  Hương
                </p>
                <p className="mt-2">
                  💬 <strong>Zalo:</strong> 0987 811 771
                </p>
              </div>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-rose-700 to-yellow-500 p-6 text-center shadow-xl">
                <p className="text-2xl font-black text-white">
                  Hãy để những kỷ niệm đẹp về thầy cô được lan tỏa!
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "#ICHI",
                  "#ThayCoTrongTraiTimEm",
                  "#Mua4",
                  "#TriAnThayCo",
                  "#NguoiLaiDo",
                  "#GiaoDucICHI",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="tel:0987811771"
                className="mt-8 inline-flex rounded-2xl bg-rose-700 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:bg-rose-800"
              >
                Liên hệ gửi bài
              </Link>
            </div>

            {/* IMAGE BOARD */}
            <div className="bg-gradient-to-br from-rose-800 via-pink-700 to-yellow-400 p-5 sm:p-7">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="relative col-span-2 h-[340px] overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={images[0]}
                    alt="Cuộc thi Thầy Cô Trong Trái Tim Em Mùa 4"
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
                      alt={`Thầy Cô Trong Trái Tim Em Mùa 4 ${index + 2}`}
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
