import type { Metadata } from "next";
import "./globals.css";

import { baloo } from "./lib/fonts";
import Header from "./component/playout/Header";
import Footer from "./component/playout/Footer";

export const metadata: Metadata = {
  title: "DI-ICHI",
  description: "DI-ICHI Education",
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
