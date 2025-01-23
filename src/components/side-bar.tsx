"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ContactBar } from "./contact-bar";
import { Navigation } from "./navigation";
import { TitleBar } from "./title-bar";

export const SideBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Se scrollou para baixo mais de 50px
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      }
      // Se scrollou para cima mais de 50px
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <aside
      className={cn(
        "bg-transparent md:bg-background md:w-80 w-full md:h-screen fixed md:top-0 md:bottom-auto bottom-0 left-0 p-2 z-50 md:translate-y-0 transition",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <section className="rounded-xl lg:flex flex-col bg-slate-300 dark:bg-black text-black dark:text-gray-100 h-full">
        <ContactBar />
        <Navigation />
        <TitleBar />
      </section>
    </aside>
  );
};
