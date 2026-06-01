import {
  ShieldCheck,
  Lock,
  UserCheck,
  Database,
  Camera,
  BadgeCheck,
  Phone,
} from "lucide-react";

const sections = [
  {
    icon: UserCheck,
    title: "Mục đích thu thập thông tin",
    items: [
      "Hỗ trợ đăng ký và quản lý học sinh tham gia các khóa học.",
      "Liên hệ, tư vấn và gửi thông báo cần thiết đến phụ huynh.",
      "Đảm bảo quyền lợi học tập và chăm sóc học sinh trong suốt quá trình tham gia các khóa học.",
    ],
  },
  {
    icon: Database,
    title: "Thông tin được thu thập",
    items: [
      "Họ và tên học sinh.",
      "Họ tên phụ huynh hoặc người giám hộ.",
      "Số điện thoại, email, địa chỉ liên hệ.",
      "Thông tin sức khỏe cần lưu ý (nếu phụ huynh cung cấp).",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Phạm vi sử dụng thông tin",
    items: [
      "Thông tin cá nhân chỉ được sử dụng nội bộ nhằm phục vụ hoạt động giáo dục, chăm sóc và hỗ trợ học sinh.",
      "Không mua bán, trao đổi hoặc chia sẻ thông tin cá nhân cho bên thứ ba khi chưa có sự đồng ý của phụ huynh, trừ trường hợp theo quy định pháp luật.",
      "Không sử dụng thông tin vào mục đích thương mại không liên quan.",
    ],
  },
  {
    icon: Lock,
    title: "Bảo mật thông tin",
    items: [
      "Mọi thông tin cá nhân được lưu trữ và bảo mật bằng các biện pháp phù hợp.",
      "Chỉ nhân sự có nhiệm vụ liên quan mới được tiếp cận thông tin phụ huynh và học sinh.",
      "Công ty luôn nỗ lực hạn chế tối đa các rủi ro mất mát hoặc rò rỉ dữ liệu.",
    ],
  },
  {
    icon: Camera,
    title: "Hình ảnh và truyền thông",
    items: [
      "Giới thiệu chương trình giáo dục.",
      "Hoạt động truyền thông giáo dục.",
      "Báo cáo hoạt động nội bộ.",
      "Phụ huynh có quyền yêu cầu không sử dụng hình ảnh của học sinh bằng cách thông báo trước với công ty.",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Quyền của phụ huynh",
    items: [
      "Yêu cầu xem, chỉnh sửa hoặc cập nhật thông tin cá nhân.",
      "Yêu cầu ngừng sử dụng thông tin trong một số trường hợp phù hợp.",
      "Liên hệ công ty để được giải đáp các vấn đề liên quan đến bảo mật thông tin.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07142B] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
            <ShieldCheck size={50} className="text-yellow-400" />
          </div>

          <p className="mt-6 font-black uppercase tracking-[5px] text-yellow-400">
            Công ty TNHH Chuyển Đổi Số ICHI
          </p>

          <h1 className="mt-6 text-5xl lg:text-7xl font-black text-white">
            Chính sách bảo mật thông tin
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-white/80">
            Chúng tôi cam kết tôn trọng quyền riêng tư và bảo vệ mọi thông tin
            cá nhân của phụ huynh và học sinh khi tham gia các chương trình giáo
            dục của ICHI.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-[32px]
                    border border-slate-100
                    p-8
                    shadow-sm
                  "
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="
                        h-16 w-16
                        rounded-2xl
                        bg-yellow-100
                        flex items-center justify-center
                        text-yellow-600
                      "
                    >
                      <Icon size={30} />
                    </div>

                    <div>
                      <p className="text-sm font-black text-yellow-500 uppercase tracking-[3px]">
                        Mục {index + 1}
                      </p>

                      <h2 className="text-3xl font-black text-slate-900">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="
                          flex gap-4
                          rounded-2xl
                          bg-slate-50
                          p-5
                        "
                      >
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-400 shrink-0" />

                        <p className="leading-8 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="
              rounded-[36px]
              bg-[#07142B]
              text-white
              p-10 lg:p-14
            "
          >
            <div className="flex gap-5">
              <ShieldCheck size={40} className="text-yellow-400 shrink-0" />

              <div>
                <h2 className="text-4xl font-black">Cam kết của ICHI</h2>

                <p className="mt-6 text-lg leading-8 text-white/80">
                  CÔNG TY TNHH CHUYỂN ĐỔI SỐ ICHI thực hiện nghiêm túc các quy
                  định về bảo mật thông tin nhằm đảm bảo quyền lợi và sự an tâm
                  cho quý phụ huynh và học sinh khi tham gia các chương trình
                  giáo dục của công ty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div
            className="
              bg-white
              rounded-[32px]
              p-8
              shadow-sm
              border border-slate-100
              text-center
            "
          >
            <div className="flex justify-center">
              <div
                className="
                  h-16 w-16
                  rounded-2xl
                  bg-orange-100
                  flex items-center justify-center
                  text-orange-500
                "
              >
                <Phone size={30} />
              </div>
            </div>

            <h3 className="mt-5 text-3xl font-black text-slate-900">
              Liên hệ hỗ trợ
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Nếu có bất kỳ câu hỏi nào liên quan đến việc thu thập, sử dụng
              hoặc bảo mật thông tin cá nhân, vui lòng liên hệ:
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:0707868000"
                className="
                  px-6 py-4
                  rounded-2xl
                  bg-orange-500
                  text-white
                  font-black
                "
              >
                0707 868 000
              </a>

              <a
                href="tel:0789636979"
                className="
                  px-6 py-4
                  rounded-2xl
                  border border-orange-300
                  text-orange-600
                  font-black
                "
              >
                0789 636 979
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
