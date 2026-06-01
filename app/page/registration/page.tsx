"use client";

import {
  CalendarDays,
  CheckCircle2,
  Mail,
  Phone,
  School,
  Send,
  User,
} from "lucide-react";

const grades = [
  "Lớp 1",
  "Lớp 2",
  "Lớp 3",
  "Lớp 4",
  "Lớp 5",
  "Lớp 6",
  "Lớp 7",
  "Lớp 8",
  "Lớp 9",
  "Khác",
];

const programs = [
  "Kỹ năng sống: TH - THCS",
  "STEM: TH - THCS",
  "Công dân số",
  "AI: TH - THCS",
  "Tiếng Anh: TH - THCS",
  "Tin học ICDL",
];

export default function RegistrationFormPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));

    alert("Đăng ký thành công! ICHI sẽ liên hệ phụ huynh sớm nhất.");
    e.currentTarget.reset();
  };

  return (
    <main className="bg-slate-50 py-20">
      <section className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl border border-slate-100">
          <div className="bg-[#07142B] px-8 py-10 text-center text-white">
            <p className="text-yellow-400 font-black uppercase tracking-[4px]">
              DI-ICHI Education
            </p>

            <h1 className="mt-4 text-4xl lg:text-5xl font-black">
              Phiếu đăng ký học
            </h1>

            <p className="mt-4 text-white/70">
              Quý phụ huynh vui lòng điền đầy đủ thông tin bên dưới
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 lg:p-10 space-y-10">
            {/* THÔNG TIN HỌC VIÊN */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                1. Thông tin học viên
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  icon={<User size={20} />}
                  label="Họ tên học viên đăng ký học"
                  name="studentName"
                  placeholder="Nhập họ tên học viên"
                />

                <Field
                  icon={<CalendarDays size={20} />}
                  label="Ngày, tháng, năm sinh"
                  name="birthday"
                  type="date"
                />

                <div className="md:col-span-2">
                  <label className="mb-3 block font-bold text-slate-800">
                    Lớp học hiện tại
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {grades.map((grade) => (
                      <label
                        key={grade}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 cursor-pointer hover:border-yellow-400 transition"
                      >
                        <input
                          type="radio"
                          name="grade"
                          value={grade}
                          required
                          className="accent-yellow-400"
                        />
                        <span className="font-semibold text-slate-800">
                          {grade}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <Field
                  icon={<School size={20} />}
                  label="Trường đang học"
                  name="school"
                  placeholder="Nhập tên trường"
                  className="md:col-span-2"
                />
              </div>
            </div>

            {/* THÔNG TIN PHỤ HUYNH */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                2. Thông tin phụ huynh
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  icon={<User size={20} />}
                  label="Họ và tên phụ huynh"
                  name="parentName"
                  placeholder="Nhập họ tên phụ huynh"
                />

                <Field
                  icon={<Phone size={20} />}
                  label="Số điện thoại liên lạc"
                  name="phone"
                  placeholder="Nhập số điện thoại"
                />

                <Field
                  icon={<Mail size={20} />}
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Nhập email"
                  className="md:col-span-2"
                />
              </div>
            </div>

            {/* CHƯƠNG TRÌNH ĐĂNG KÝ */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                3. Đăng ký chương trình
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {programs.map((program) => (
                  <label
                    key={program}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 cursor-pointer hover:border-yellow-400 hover:bg-yellow-50 transition"
                  >
                    <input
                      type="checkbox"
                      name="programs"
                      value={program}
                      className="h-5 w-5 accent-yellow-400"
                    />

                    <span className="font-bold text-slate-900">{program}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* XÁC NHẬN */}
            <div className="rounded-[28px] bg-slate-50 border border-slate-200 p-6">
              <h2 className="text-2xl font-black text-slate-900 mb-5">
                4. Xác nhận đăng ký
              </h2>

              <div className="space-y-4">
                <label className="flex gap-3 text-slate-700 leading-7">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-5 w-5 accent-yellow-400"
                  />
                  <span>
                    Tôi xác nhận các thông tin trên là hoàn toàn chính xác.
                  </span>
                </label>

                <label className="flex gap-3 text-slate-700 leading-7">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-5 w-5 accent-yellow-400"
                  />
                  <span>
                    Tôi đồng ý nhận thông tin khóa học và lịch khai giảng.
                  </span>
                </label>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#07142B] p-6 text-white">
              <div className="flex gap-4">
                <CheckCircle2 className="shrink-0 text-yellow-400" size={28} />
                <p className="leading-8 text-white/85">
                  ICHI chân thành cảm ơn quý khách hàng. Rất hân hạnh được đồng
                  hành cùng các em học sinh và quý phụ huynh.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 text-slate-900 font-black text-lg hover:bg-yellow-300 transition"
            >
              <Send size={22} />
              Gửi phiếu đăng ký
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  icon,
  className = "",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-3 block font-bold text-slate-800">{label}</label>

      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 focus-within:border-yellow-400 focus-within:ring-4 focus-within:ring-yellow-100 transition">
        <div className="text-yellow-500">{icon}</div>

        <input
          name={name}
          type={type}
          required={name !== "email"}
          placeholder={placeholder}
          className="h-14 w-full bg-transparent text-slate-900 placeholder:text-slate-400 outline-none"
        />
      </div>
    </div>
  );
}
