"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Brain,
  ChevronDown,
  Cpu,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Laptop,
  LifeBuoy,
  Mail,
  Phone,
  Send,
  User,
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
  description: string;
  color: string;
  faqs: FAQItem[];
};

const faqCategories: FAQCategory[] = [
  {
    id: "cong-dan-so",
    title: "Kỹ năng Công dân số",
    shortTitle: "Công dân số",
    icon: Globe2,
    color: "from-cyan-500 to-blue-600",
    description:
      "Giúp học sinh sử dụng công nghệ an toàn, văn minh và hiệu quả.",
    faqs: [
      {
        question: "Học công dân số sẽ được học những nội dung nào?",
        answer:
          "Học sinh được trang bị kiến thức và kỹ năng sử dụng công nghệ an toàn, văn minh và hiệu quả như: bảo vệ thông tin cá nhân, nhận diện tin giả, ứng xử trên mạng xã hội, an toàn Internet, tư duy số và kỹ năng sử dụng các công cụ số trong học tập.",
      },
      {
        question: "Chương trình có giúp con sử dụng internet an toàn không?",
        answer:
          "Có. Đây là một trong những nội dung trọng tâm của chương trình. Học sinh sẽ được hướng dẫn cách bảo mật tài khoản, phòng tránh lừa đảo trực tuyến, nhận biết các nguy cơ trên Internet và xây dựng thói quen sử dụng mạng xã hội an toàn.",
      },
      {
        question: "Sau khóa học con sẽ đạt được những kỹ năng gì?",
        answer:
          "Sau khóa học, học sinh có thể sử dụng Internet an toàn và có trách nhiệm, bảo vệ dữ liệu cá nhân, nhận biết và xử lý các tình huống rủi ro trên môi trường số, giao tiếp văn minh trên không gian mạng và sử dụng công nghệ phục vụ học tập hiệu quả.",
      },
      {
        question: "Chương trình có cấp chứng nhận không?",
        answer:
          "Có. Học sinh hoàn thành chương trình và đạt yêu cầu sẽ được cấp giấy chứng nhận hoàn thành khóa học.",
      },
    ],
  },
  {
    id: "stem",
    title: "Chương trình STEM/STEAM",
    shortTitle: "STEM",
    icon: Cpu,
    color: "from-orange-400 to-yellow-500",
    description: "Khơi dậy tư duy khoa học, công nghệ, kỹ thuật và sáng tạo.",
    faqs: [
      {
        question: "STEM khác gì với các môn học trên trường?",
        answer:
          "STEM là chương trình học tích hợp giữa Khoa học, Công nghệ, Kỹ thuật và Toán học. Thay vì học lý thuyết riêng lẻ, học sinh được giải quyết các vấn đề thực tế thông qua các dự án và sản phẩm sáng tạo.",
      },
      {
        question: "Chương trình STEM có nhiều thực hành không?",
        answer:
          "Có. Khoảng 70% thời lượng học tập trung vào trải nghiệm và thực hành. Học sinh được tự tay thiết kế, chế tạo mô hình, thực hiện thí nghiệm và hoàn thành các dự án STEM.",
      },
      {
        question: "STEM giúp phát triển kỹ năng gì cho học sinh?",
        answer:
          "Chương trình giúp học sinh phát triển tư duy sáng tạo, kỹ năng giải quyết vấn đề, tư duy logic, làm việc nhóm, giao tiếp, thuyết trình và khả năng nghiên cứu, khám phá khoa học.",
      },
      {
        question: "Có sử dụng robot hoặc thiết bị công nghệ không?",
        answer:
          "Có. Tùy từng độ tuổi và chương trình học, học sinh sẽ được làm quen với robot giáo dục, cảm biến, bộ lắp ráp STEM, thiết bị lập trình và các công cụ công nghệ hiện đại.",
      },
    ],
  },
  {
    id: "ky-nang-song",
    title: "Chương trình Kỹ năng sống",
    shortTitle: "Kỹ năng sống",
    icon: HeartHandshake,
    color: "from-pink-500 to-rose-600",
    description:
      "Rèn luyện sự tự tin, giao tiếp, tự lập và kỹ năng ứng xử thực tế.",
    faqs: [
      {
        question: "Chương trình kỹ năng sống giúp con có những kỹ năng gì?",
        answer:
          "Học sinh được rèn luyện các kỹ năng quan trọng như giao tiếp tự tin, làm việc nhóm, quản lý cảm xúc, giải quyết vấn đề, tự lập, tự phục vụ, thuyết trình trước đám đông và ứng phó với các tình huống thực tế.",
      },
      {
        question: "Con nhút nhát thiếu tự tin có tham gia được không?",
        answer:
          "Hoàn toàn được. Chương trình được thiết kế phù hợp cho mọi đối tượng học sinh. Giáo viên sẽ tạo môi trường thân thiện, khuyến khích các em tham gia học tập, thực hành trải nghiệm và từng bước xây dựng sự tự tin.",
      },
      {
        question: "Chương trình dạy những kỹ năng gì?",
        answer:
          "Tùy theo độ tuổi, học sinh sẽ được học các chủ đề như giao tiếp và ứng xử, quản lý cảm xúc, làm việc nhóm, quản lý tài chính, tư duy tích cực, quản lý thời gian, phòng chống xâm hại, bạo lực học đường và kỹ năng tự bảo vệ bản thân.",
      },
      {
        question: "Có nội dung về phòng chống bạo lực học đường không?",
        answer:
          "Có. Học sinh được hướng dẫn nhận biết các hành vi bạo lực học đường, cách ứng xử phù hợp, kỹ năng tìm kiếm sự hỗ trợ và xây dựng mối quan hệ tích cực với bạn bè.",
      },
      {
        question: "Một lớp học có bao nhiêu học sinh?",
        answer:
          "Thông thường mỗi lớp từ 15–25 học sinh tại trung tâm và 30–50 học sinh tại lớp học, để giáo viên có thể quan tâm, hỗ trợ và tạo nhiều cơ hội cho học sinh tham gia hoạt động thực hành.",
      },
    ],
  },
  {
    id: "tieng-anh",
    title: "Tiếng Anh DI-ICHI",
    shortTitle: "Tiếng Anh",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-600",
    description:
      "Phát triển nghe, nói, đọc, viết và khả năng giao tiếp quốc tế.",
    faqs: [
      {
        question: "Bé chưa có nền tảng tiếng Anh có học được không?",
        answer:
          "Hoàn toàn được. Chương trình có lộ trình từ cơ bản đến nâng cao, phù hợp với cả những học sinh mới bắt đầu làm quen với tiếng Anh.",
      },
      {
        question: "Có kiểm tra chất lượng đầu vào không?",
        answer:
          "Có. Học sinh sẽ được kiểm tra hoặc đánh giá trình độ ban đầu để xếp lớp phù hợp, giúp việc học đạt hiệu quả cao nhất.",
      },
      {
        question: "Học xong thì sẽ đạt trình độ nào?",
        answer:
          "Kết quả phụ thuộc vào trình độ đầu vào và thời lượng học tập. Tuy nhiên, học sinh sẽ được nâng cao rõ rệt về từ vựng, ngữ pháp, phát âm và kỹ năng giao tiếp theo chuẩn đầu ra của từng khóa học.",
      },
      {
        question: "Sau khóa học con có giao tiếp được không?",
        answer:
          "Có. Chương trình chú trọng phát triển kỹ năng giao tiếp thực tế thông qua các hoạt động tương tác, thảo luận, trò chơi ngôn ngữ và luyện phản xạ giao tiếp hàng tuần.",
      },
      {
        question: "Có bài kiểm tra định kỳ không?",
        answer:
          "Có. Học sinh được đánh giá thường xuyên thông qua các bài kiểm tra định kỳ, bài tập thực hành và báo cáo kết quả học tập gửi đến phụ huynh.",
      },
      {
        question: "Học sinh được luyện nghe, nói, đọc, viết nhiều không?",
        answer:
          "Có. Chương trình phát triển đồng đều cả 4 kỹ năng Nghe – Nói – Đọc – Viết, đặc biệt chú trọng kỹ năng nghe hiểu và giao tiếp thực tế.",
      },
    ],
  },
  {
    id: "ai",
    title: "Chương trình Trí tuệ nhân tạo AI",
    shortTitle: "AI",
    icon: Brain,
    color: "from-violet-500 to-indigo-600",
    description:
      "Giúp học sinh làm chủ công nghệ, sử dụng AI đúng cách và sáng tạo.",
    faqs: [
      {
        question: "Học AI sớm có lợi ích gì cho trẻ?",
        answer:
          "AI đang là xu hướng toàn cầu và ảnh hưởng lớn đến học tập, nghề nghiệp trong tương lai. Học AI sớm giúp học sinh có tư duy công nghệ tốt hơn, chủ động trong học tập, tăng khả năng sáng tạo, biết sử dụng AI đúng cách và phát triển kỹ năng giải quyết vấn đề.",
      },
      {
        question: "Học AI có làm trẻ nghiện máy tính không?",
        answer:
          "Không. Chương trình không khuyến khích trẻ dùng thiết bị giải trí quá nhiều mà hướng dẫn sử dụng công nghệ đúng mục đích, quản lý thời gian, an toàn Internet, bảo mật thông tin và sử dụng AI có trách nhiệm.",
      },
      {
        question: "Học AI có phải học lập trình khó không?",
        answer:
          "Ở giai đoạn đầu, học sinh sẽ làm quen công nghệ, học tư duy AI, sử dụng công cụ AI hỗ trợ học tập, thiết kế hình ảnh, video, bài thuyết trình. Sau đó mới tiếp cận lập trình AI từ cơ bản đến nâng cao theo độ tuổi.",
      },
      {
        question: "Con tôi còn nhỏ, có học được AI không?",
        answer:
          "Hoàn toàn được. Chương trình được thiết kế theo từng độ tuổi. Học sinh tiểu học có thể học thông qua hình thức trực quan, thực hành nhiều, học qua trò chơi và dự án nhỏ.",
      },
    ],
  },
  {
    id: "icdl",
    title: "Tin học ICDL",
    shortTitle: "ICDL",
    icon: Laptop,
    color: "from-blue-500 to-sky-600",
    description:
      "Chuẩn kỹ năng số quốc tế, ứng dụng lâu dài trong học tập và nghề nghiệp.",
    faqs: [
      {
        question: "Chương trình ICDL khác gì với tin học ở trường?",
        answer:
          "Tin học ở trường chủ yếu học kiến thức nền tảng theo chương trình chung. ICDL tập trung thực hành nhiều hơn, ứng dụng công nghệ thực tế, kỹ năng số hiện đại, tiếp cận chuẩn quốc tế và có lộ trình thi chứng chỉ quốc tế.",
      },
      {
        question: "Chương trình có phù hợp với học sinh tiểu học không?",
        answer:
          "Có. Nội dung được thiết kế riêng cho từng cấp học. Tiểu học làm quen công nghệ, tư duy AI, kỹ năng số cơ bản. THCS ứng dụng AI trong học tập và sáng tạo. THPT học kỹ năng công nghệ nâng cao và định hướng nghề nghiệp.",
      },
      {
        question: "Chứng chỉ có giá trị như thế nào?",
        answer:
          "Chứng chỉ ICDL có giá trị quốc tế và thời hạn vĩnh viễn. Học sinh có thể sử dụng lâu dài trong hồ sơ học tập và nghề nghiệp.",
      },
      {
        question: "Sau khóa học học sinh sẽ làm được những gì?",
        answer:
          "Sau khóa học, học sinh có thể sử dụng thành thạo Word, PowerPoint, Excel, ứng dụng công nghệ để tạo sản phẩm số, rèn luyện kỹ năng thuyết trình, làm việc bằng công nghệ số và tự tin hơn trong môi trường học tập hiện đại.",
      },
    ],
  },
];

export default function TuVanPage() {
  const [activeTab, setActiveTab] = useState(faqCategories[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeCategory = useMemo(
    () =>
      faqCategories.find((item) => item.id === activeTab) || faqCategories[0],
    [activeTab],
  );

  const ActiveIcon = activeCategory.icon;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      course: formData.get("course"),
      question: formData.get("question"),
    };

    console.log("Câu hỏi phụ huynh:", data);

    alert("Cảm ơn phụ huynh đã gửi câu hỏi. DI-ICHI sẽ phản hồi sớm nhất!");
    form.reset();
  };

  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden bg-[#07142B] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_35%)]" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-yellow-300 backdrop-blur">
              <LifeBuoy size={42} />
            </div>

            <p className="font-black uppercase tracking-[5px] text-yellow-400">
              Trung tâm hỗ trợ phụ huynh
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-7xl">
              Tư vấn chương trình học
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/80">
              Phụ huynh có thể chọn từng chương trình học để xem nhanh các câu
              hỏi thường gặp, hoặc gửi câu hỏi riêng để đội ngũ DI-ICHI hỗ trợ.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
            <motion.aside
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-fit rounded-[32px] border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-28"
            >
              <div className="p-4">
                <p className="text-sm font-black uppercase tracking-[3px] text-yellow-500">
                  Danh mục tư vấn
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-900">
                  Chọn chương trình
                </h2>
              </div>

              <div className="space-y-3">
                {faqCategories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeTab === category.id;

                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveTab(category.id);
                        setOpenIndex(0);
                      }}
                      className={[
                        "flex w-full items-center gap-4 rounded-2xl p-4 text-left transition",
                        isActive
                          ? "bg-slate-900 text-white shadow-xl"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white",
                          category.color,
                        ].join(" ")}
                      >
                        <Icon size={24} />
                      </div>

                      <div>
                        <p className="font-black">{category.shortTitle}</p>
                        <p
                          className={[
                            "mt-1 text-sm leading-5",
                            isActive ? "text-white/70" : "text-slate-500",
                          ].join(" ")}
                        >
                          {category.faqs.length} câu hỏi thường gặp
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.aside>

            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              <div
                className={[
                  "overflow-hidden rounded-[36px] bg-gradient-to-br p-8 text-white shadow-xl",
                  activeCategory.color,
                ].join(" ")}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-black uppercase tracking-[4px] text-white/70">
                      Đang xem
                    </p>
                    <h2 className="mt-3 text-4xl font-black">
                      {activeCategory.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
                      {activeCategory.description}
                    </p>
                  </div>

                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[28px] bg-white/20 backdrop-blur">
                    <ActiveIcon size={52} />
                  </div>
                </div>
              </div>

              <div className="rounded-[36px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="space-y-4">
                  {activeCategory.faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={index}
                        className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="flex w-full items-center justify-between gap-5 p-6 text-left"
                        >
                          <span className="text-lg font-black text-slate-900">
                            {faq.question}
                          </span>

                          <span
                            className={[
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition",
                              isOpen ? "rotate-180" : "",
                            ].join(" ")}
                          >
                            <ChevronDown size={22} />
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <div className="border-t border-slate-100 px-6 pb-6 pt-5 text-base leading-8 text-slate-600">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid overflow-hidden rounded-[40px] bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden bg-[#07142B] p-8 text-white lg:p-12">
              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative">
                <p className="font-black uppercase tracking-[4px] text-yellow-400">
                  Gửi câu hỏi
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight lg:text-5xl">
                  Chưa tìm thấy câu trả lời?
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/75">
                  Phụ huynh vui lòng để lại thông tin và nội dung cần tư vấn. Bộ
                  phận quản lý website sẽ tiếp nhận và phản hồi trong thời gian
                  sớm nhất.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                    <Phone className="text-yellow-300" />
                    <div>
                      <p className="font-bold">Hỗ trợ tư vấn</p>
                      <p className="text-white/70">
                        Liên hệ sau khi nhận câu hỏi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                    <Mail className="text-yellow-300" />
                    <div>
                      <p className="font-bold">Phản hồi rõ ràng</p>
                      <p className="text-white/70">
                        Giải đáp theo từng chương trình học
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-8 lg:p-12">
              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Họ và tên phụ huynh
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4">
                  <User size={20} className="text-slate-400" />
                  <input
                    name="fullName"
                    required
                    placeholder="Nhập họ và tên"
                    className="
    h-14 w-full
    bg-transparent
    text-slate-900
    placeholder:text-slate-400
    outline-none
  "
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Số điện thoại
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4">
                  <Phone size={20} className="text-slate-400" />
                  <input
                    name="phone"
                    required
                    placeholder="Nhập số điện thoại"
                    className="
    h-14 w-full
    bg-transparent
    text-slate-900
    placeholder:text-slate-400
    outline-none
  "
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Email nếu có
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4">
                  <Mail size={20} className="text-slate-400" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Nhập email"
                    className="
    h-14 w-full
    bg-transparent
    text-slate-900
    placeholder:text-slate-400
    outline-none
  "
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 font-bold text-slate-800">
                  <BookOpen size={18} className="text-orange-500" />
                  Chương trình cần tư vấn
                </label>

                <div className="relative group">
                  <div
                    className="
        absolute left-4 top-1/2
        -translate-y-1/2
        text-orange-500
      "
                  >
                    <BookOpen size={20} />
                  </div>

                  <select
                    name="course"
                    defaultValue={activeCategory.shortTitle}
                    className="
        w-full h-16
        pl-12 pr-14
        rounded-2xl
        border border-slate-200
        bg-white
        text-slate-900 font-semibold
        shadow-sm
        appearance-none
        transition-all duration-300
        hover:border-orange-300
        focus:border-orange-500
        focus:ring-4
        focus:ring-orange-100
        outline-none
      "
                  >
                    {faqCategories.map((category) => (
                      <option key={category.id} value={category.shortTitle}>
                        {category.shortTitle}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={20}
                    className="
        absolute right-5 top-1/2
        -translate-y-1/2
        text-slate-400
        pointer-events-none
        group-hover:text-orange-500
        transition
      "
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-bold text-slate-700">
                  Nội dung câu hỏi
                </label>
                <textarea
                  name="question"
                  required
                  rows={5}
                  placeholder="Phụ huynh nhập câu hỏi tại đây..."
                  className="
    w-full resize-none
    rounded-2xl
    border border-slate-200
    bg-slate-50
    p-4
    leading-7
    text-slate-900
    placeholder:text-slate-400
    outline-none
  "
                />
              </div>

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 font-black text-slate-900 transition hover:bg-yellow-300"
              >
                <Send size={20} />
                Gửi câu hỏi tư vấn
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
