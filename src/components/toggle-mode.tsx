"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Icon, IconProps } from "./icon";

interface IMode {
  code: string;
  label: string;
  icon: IconProps["name"];
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const modes: IMode[] = [
    { code: "light", label: "Light", icon: "PiSun" },
    { code: "dark", label: "Dark", icon: "PiMoon" },
    { code: "system", label: "System", icon: "PiLaptop" },
  ];

  const currentMode = modes.find(mode => mode.code === theme) || modes[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Icon name={currentMode?.icon} className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {modes.map(({ code, label, icon }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setTheme(code)}
            className={theme === code ? "font-bold" : "cursor-pointer"}
          >
            <Icon name={icon} className="mr-2 h-[1rem] w-[1rem]" />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
