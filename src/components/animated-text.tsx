"use client";

import { ReactTyped } from "react-typed";

import { animatedTexts } from "@/data/animated";

export const AnimatedText = () => {
  return (
    <ReactTyped
      loop
      className="font-bold text-4xl text-gray-900 dark:text-white"
      typeSpeed={150}
      backSpeed={60}
      strings={animatedTexts}
      smartBackspace
      shuffle={false}
      backDelay={1}
      fadeOut={false}
      fadeOutDelay={100}
      loopCount={0}
      showCursor
      cursorChar="|"
    />
  );
};
