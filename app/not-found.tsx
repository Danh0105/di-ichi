// src/app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-black">404</h1>

      <p className="mt-4 text-gray-500">Trang không tồn tại</p>

      <Link
        href="/"
        className="mt-8 bg-yellow-400 px-8 py-4 rounded-full font-bold"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
