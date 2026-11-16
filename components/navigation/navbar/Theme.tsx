"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Theme = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="background-light800_dark300 light-border text-dark500_light700 border"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="light-border background-light800_dark300 text-dark500_light700 z-50 border font-sans"
      >
        <DropdownMenuItem
          className="focus:bg-light-800 dark:focus:bg-dark-400 cursor-pointer"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="focus:bg-light-800 dark:focus:bg-dark-400 cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="focus:bg-light-800 dark:focus:bg-dark-400 cursor-pointer"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Theme;
