"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Language } from "@/lib/types";
import { IconType } from "react-icons";
import {
  GiBrazil,
  GiEarthAmerica,
  GiSpain
} from "react-icons/gi";
import { TbLanguage } from "react-icons/tb";
import { useLanguage } from "./language-provider";

interface ILanguage {
  code: Language;
  label: string;
  icon: IconType;
}

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const languages: ILanguage[] = [
    { code: "pt", label: "Português", icon: GiBrazil },
    { code: "en", label: "English", icon: GiEarthAmerica },
    { code: "es", label: "Español", icon: GiSpain },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="uppercase">
          <TbLanguage />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(({ code, label, icon: Icon }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code)}
            className={language === code ? "font-bold bg-foreground/10" : "cursor-pointer"}
          >
            <Icon /> {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
