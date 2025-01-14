"use client";

import Link from "next/link";

import { sideBarContent } from "@/data/navigation";
import { useLanguage } from "./language-provider";

export const Navigation = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col p-4">
      {sideBarContent.map(item => (
        <Link
          key={item.name}
          href={item.href}
          className="hover:animate-shake rounded-3xl font-semibold flex items-center justify-start p-6 hover:bg-background dark:hover:bg-background transition-colors gap-x-4"
        >
          {item.icon} {t(item.name)}
        </Link>
      ))}
    </div>
  );
};
