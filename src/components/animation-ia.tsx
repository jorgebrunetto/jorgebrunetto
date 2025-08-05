"use client";
import { useEffect, useState } from "react";
import AnimationIA from "./animation-ia.json";

export const LoaderIA = () => {
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    import("lottie-react").then((mod) => setLottie(() => mod.default));
  }, []);

  return <>{Lottie && <Lottie animationData={AnimationIA} loop={true} />}</>;
};
