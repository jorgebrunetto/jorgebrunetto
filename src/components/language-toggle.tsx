"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "./language-provider";

import { Language } from "@/lib/types";
import { Icon, IconProps } from "./icon";

interface ILanguage {
  code: Language;
  label: string;
  icon: IconProps["name"];
}

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const languages: ILanguage[] = [
    { code: "pt", label: "Português", icon: "GiBrazil" },
    { code: "en", label: "English", icon: "GiEarthAmerica" },
    { code: "es", label: "Español", icon: "GiSpain" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed right-12 top-2 z-10 uppercase"
        >
          {languages.find(lang => lang.code === language)?.code || "EN"}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(({ code, label, icon }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code)}
            className={language === code ? "font-bold" : "cursor-pointer"}
          >
            <Icon name={icon} /> {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
