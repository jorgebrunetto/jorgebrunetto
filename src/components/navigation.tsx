"use client";

import Link from "next/link";

import { sideBarContent } from "@/data/navigation";
import { useLanguage } from "./language-provider";

export const Navigation = () => {
  const { t } = useLanguage();

  return (
    <div className="flex md:flex-col p-2 md:p-4 justify-around">
      {sideBarContent.map(item => (
        <Link
          key={item.name}
          href={item.href}
          className="hover:animate-shake rounded-3xl font-semibold flex items-center justify-start p-3 md:p-6 hover:bg-background dark:hover:bg-background transition-colors gap-x-4"
        >
          {item.icon} <span className="hidden md:block">{t(item.name)}</span>
        </Link>
      ))}
    </div>
  );
};
