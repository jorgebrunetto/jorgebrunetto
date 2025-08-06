"use client";
import { useEffect, useState } from "react";
import AnimationBG from "./background-chat.json";

export const BackgroundChat = () => {
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    import("lottie-react").then((mod) => setLottie(() => mod.default));
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
      {Lottie && <Lottie animationData={AnimationBG} loop={true} />}
    </div>
  );
};
