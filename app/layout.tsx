import type { Metadata } from "next";
import "./globals.css";

import { baloo } from "./lib/fonts";
import Header from "./component/playout/Header";
import Footer from "./component/playout/Footer";

export const metadata: Metadata = {
  title: "Chuyển đổi số DI-ICHI | Đào tạo và tư vấn chuyển đổi số ",
  description: "DI-ICHI Education",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${baloo.className} min-h-screen flex flex-col bg-white text-gray-800`}
      >
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
