"use client";

import Link from "next/link";

import { sideBarContent } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";

export const Navigation = () => {
  const { t } = useLanguage();

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const initialHash = window.location.hash.replace("#", "") || "home";
    setActiveSection(initialHash);

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const getMenuItemClass = (section: string) => {
    return activeSection === section ? "bg-background" : "";
  };

  return (
    <div className="flex md:flex-col p-2 md:p-4 justify-around gap-0 md:gap-2">
      {sideBarContent.map(item => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "hover:animate-shake rounded-3xl font-semibold flex items-center justify-start p-3 md:p-6 hover:bg-background dark:hover:bg-background transition-colors gap-x-4",
            getMenuItemClass(item.name)
          )}
          onClick={() => setActiveSection(item.name)}
        >
          {item.icon} <span className="hidden md:block">{t(item.name)}</span>
        </Link>
      ))}
    </div>
  );
};
