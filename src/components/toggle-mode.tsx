"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { IconType } from "react-icons";
import {
  TbDeviceDesktopCode,
  TbMoon,
  TbSunLow,
  TbSunMoon,
} from "react-icons/tb";

interface IMode {
  code: string;
  label: string;
  icon: IconType;
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const modes: IMode[] = [
    { code: "light", label: "Light", icon: TbSunLow },
    { code: "dark", label: "Dark", icon: TbMoon },
    { code: "system", label: "System", icon: TbDeviceDesktopCode },
  ];

  const currentMode = modes.find((mode) => mode.code === theme) || modes[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <TbSunMoon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {modes.map(({ code, label, icon: Icon }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setTheme(code)}
            className={theme === code ? "font-bold bg-foreground/10" : "cursor-pointer"}
          >
            <Icon className="mr-2 h-[1rem] w-[1rem]" />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
