"use client";

import { useState } from "react";
import { ContactBar } from "./contact-bar";
import { Navigation } from "./navigation";
import { TitleBar } from "./title-bar";

export const SideBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     // Se scrollou para baixo mais de 50px
  //     if (currentScrollY > lastScrollY && currentScrollY > 120) {
  //       setIsVisible(false);
  //     }
  //     // Se scrollou para cima mais de 50px
  //     else if (currentScrollY < lastScrollY) {
  //       setIsVisible(true);
  //     }

  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  return (
    <aside className="bg-transparent md:bg-background md:w-80 w-full md:h-screen fixed md:top-0 md:bottom-auto bottom-0 left-0 p-2 z-50 ">
      <section className="rounded-full sm:rounded-md lg:flex flex-col backdrop-blur-sm bg-background/10 sm:bg-foreground/10 dark:bg-background/50 sm:dark:bg-black text-black dark:text-gray-100 h-full">
        <ContactBar />
        <Navigation />
        <TitleBar />
      </section>
    </aside>
  );
};
