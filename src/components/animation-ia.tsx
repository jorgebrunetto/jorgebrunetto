"use client";

import { useLottie } from "lottie-react";
import * as animationData from "./animation-ia.json";
export const AnimationIa = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <div className="">
      <div className="w-full">{View}</div>
    </div>
  );
};
