import {
  Banknote,
  Building2,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  Phone,
  QrCode,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";

const paymentMethods = [
  {
    icon: Banknote,
    title: "Thanh toán tiền mặt",
    desc: "Phụ huynh có thể thanh toán trực tiếp bằng tiền mặt tại văn phòng hoặc trường học.",
  },
  {
    icon: CreditCard,
    title: "Chuyển khoản ngân hàng",
    desc: "Phụ huynh vui lòng liên hệ hotline để được hướng dẫn thông tin chuyển khoản.",
  },
  {
    icon: QrCode,
    title: "Mã QR / Ví điện tử",
    desc: "Hình thức thanh toán qua mã QR hoặc ví điện tử hiện đang được cập nhật.",
  },
];

const notes = [
  "Công ty chỉ xác nhận đăng ký khi phụ huynh hoàn tất thanh toán theo quy định.",
  "Phụ huynh vui lòng lưu giữ biên nhận hoặc chứng từ thanh toán để đối chiếu khi cần thiết.",
  "Mọi thắc mắc liên quan đến thanh toán sẽ được bộ phận tư vấn hỗ trợ nhanh chóng.",
];

export default function PaymentPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-[#07142B] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.22),transparent_35%)]" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
            <ReceiptText size={42} className="text-yellow-400" />
          </div>

          <p className="font-black uppercase tracking-[5px] text-yellow-400">
            Công ty TNHH Chuyển Đổi Số ICHI
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
            Chính sách thanh toán
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/80">
            Nhằm tạo điều kiện thuận lợi cho quý phụ huynh khi đăng ký các khóa
            học và chương trình trải nghiệm cho học sinh.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-10">
              <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Building2 size={28} />
                  </div>

                  <div>
                    <p className="font-black uppercase tracking-[3px] text-orange-500">
                      Mục 1
                    </p>
                    <h2 className="text-3xl font-black text-slate-900">
                      Hình thức thanh toán
                    </h2>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {paymentMethods.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50"
                      >
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-sm">
                          <Icon size={28} />
                        </div>

                        <h3 className="text-xl font-black text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-4 leading-8 text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
                    <FileCheck2 size={28} />
                  </div>

                  <div>
                    <p className="font-black uppercase tracking-[3px] text-yellow-500">
                      Mục 2
                    </p>
                    <h2 className="text-3xl font-black text-slate-900">
                      Lưu ý thanh toán
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {notes.map((note, index) => (
                    <div
                      key={index}
                      className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <CheckCircle2
                        size={26}
                        className="mt-1 shrink-0 text-emerald-500"
                      />

                      <p className="leading-8 text-slate-700">{note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[36px] bg-[#07142B] p-8 text-white shadow-xl lg:p-10">
                <div className="flex gap-5">
                  <ShieldCheck size={38} className="shrink-0 text-yellow-400" />

                  <div>
                    <h2 className="text-3xl font-black">
                      ICHI chân thành cảm ơn
                    </h2>

                    <p className="mt-4 text-lg leading-8 text-white/80">
                      Cảm ơn quý phụ huynh đã tin tưởng và đồng hành cùng các
                      chương trình giáo dục dành cho học sinh của Công ty TNHH
                      Chuyển Đổi Số ICHI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="h-fit rounded-[36px] border border-slate-200 bg-white p-7 shadow-sm lg:sticky lg:top-28">
              <div className="rounded-[28px] bg-orange-50 p-6">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <Phone size={30} />
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  Cần hỗ trợ thanh toán?
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Phụ huynh vui lòng liên hệ hotline để được hướng dẫn nhanh
                  chóng.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="tel:0707868000"
                    className="flex h-13 items-center justify-center rounded-2xl bg-[#07142B] px-5 py-4 font-black text-white transition hover:bg-slate-800"
                  >
                    0707 868 000
                  </a>

                  <a
                    href="tel:0789636979"
                    className="flex h-13 items-center justify-center rounded-2xl border border-orange-200 bg-white px-5 py-4 font-black text-orange-600 transition hover:bg-orange-100"
                  >
                    0789 636 979
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] bg-slate-50 p-6">
                <p className="font-black text-slate-900">Thông tin xác nhận</p>

                <p className="mt-3 leading-8 text-slate-600">
                  Đăng ký khóa học sẽ được xác nhận sau khi phụ huynh hoàn tất
                  thanh toán theo quy định.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
