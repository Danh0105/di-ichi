// app/public/page.tsx

import { FileText, Download } from "lucide-react";
const pdfFiles = [
  {
    name: "Tài liệu số 1",
    file: "/pdf/1.pdf",
  },
  {
    name: "Tài liệu số 2",
    file: "/pdf/2.pdf",
  },
  {
    name: "Tài liệu số 3",
    file: "/pdf/3.pdf",
  },
  {
    name: "Tài liệu số 4",
    file: "/pdf/4.pdf",
  },
  {
    name: "Tài liệu số 5",
    file: "/pdf/5.pdf",
  },
];

export default function PublicPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold tracking-[4px] uppercase text-sm">
            Public Documents
          </p>

          <h1 className="text-5xl font-black text-slate-900 mt-3">
            Tài Liệu Công Khai
          </h1>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
            Danh sách tài liệu PDF dành cho học viên và phụ huynh tham khảo.
          </p>
        </div>

        {/* PDF LIST */}
        <div className="space-y-10">
          {pdfFiles.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* TOP */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 p-7 border-b border-slate-100">
                {/* LEFT */}
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-100">
                    <FileText className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-slate-800">
                      {item.name}
                    </h2>

                    <p className="text-slate-500 mt-2">
                      Xem trực tiếp tài liệu PDF bên dưới hoặc tải xuống.
                    </p>
                  </div>
                </div>

                {/* ACTION */}
                <a
                  href={item.file}
                  download
                  className="h-12 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold flex items-center justify-center gap-2 transition"
                >
                  <Download className="w-5 h-5" />
                  Tải xuống
                </a>
              </div>

              {/* PDF PREVIEW */}
              <div className="bg-slate-100">
                <iframe
                  src={`${item.file}#toolbar=0`}
                  title={item.name}
                  className="w-full h-[900px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
