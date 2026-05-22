"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
type Props = {
  mobile?: boolean;
  onClickItem?: () => void;
};
const menus = [
  {
    name: "Trang chủ",
    href: "/",
  },
  {
    name: "Giới thiệu",
    href: "/page/about",
  },
  {
    name: "Khóa học",
    href: "/page/courses",
  },
  {
    name: "Hoạt động",
    href: "/page/activities",
  },
  {
    name: "Tin tức",
    href: "/page/news",
  },
  {
    name: "Công khai",
    href: "/page/contact",
  },
];

export default function HeaderMenu({ mobile = false, onClickItem }: Props) {
  return (
    <nav
      className={clsx("gap-2", mobile ? "flex flex-col" : "flex items-center")}
    >
      {menus.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClickItem}
          className={clsx(
            "transition font-medium",
            mobile
              ? "px-4 py-3 rounded-xl text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
              : "px-4 py-2 rounded-lg text-gray-700 hover:text-yellow-500",
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
