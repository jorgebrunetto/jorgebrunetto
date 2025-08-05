"use client";

import { ReactTyped } from "react-typed";

export const TitleBar = () => {
  return (
    <div className="flex-col mt-auto border-t py-10 px-5 border-background hidden md:flex">
      <p className="font-semibold text-2xl text-muted-foreground">
        <span className="underline text-3xl">F</span>
        <ReactTyped
          loop
          typeSpeed={150}
          backSpeed={60}
          strings={["rontend Developer", "rontend Engineer"]}
          smartBackspace
          shuffle={false}
          backDelay={1}
          fadeOut={false}
          fadeOutDelay={100}
          loopCount={0}
          showCursor
          cursorChar="|"
        />
      </p>
    </div>
  );
};
