"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "./language-provider";

export const TitlePage = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  const { t } = useLanguage();

  return (
    <h3 className={cn("text-5xl font-bold text-center", className)}>
      {t(title)}
    </h3>
  );
};
