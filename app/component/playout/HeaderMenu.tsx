"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { menus } from "./menu.config";
type Props = {
  mobile?: boolean;
  onClickItem?: () => void;
};

export default function HeaderMenu({ mobile, onClickItem }: Props) {
  const pathname = usePathname();

  if (mobile) {
    return (
      <nav className="flex flex-col gap-2">
        {menus.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClickItem}
              className={`rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-200 ${
                active
                  ? "bg-orange-500 text-white shadow"
                  : "text-gray-700 hover:bg-white hover:text-orange-500"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-1">
      {menus.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 ${
              active
                ? "bg-orange-500 text-white shadow-sm"
                : "text-gray-700 hover:text-orange-500 hover:bg-white"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
