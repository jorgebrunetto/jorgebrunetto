"use client";
import { useEffect, useState } from "react";
import AnimationIA from "./loading-1.json";

export const WaitIA = () => {
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    import("lottie-react").then((mod) => setLottie(() => mod.default));
  }, []);

  return <>{Lottie && <Lottie animationData={AnimationIA} loop={true} />}</>;
};
